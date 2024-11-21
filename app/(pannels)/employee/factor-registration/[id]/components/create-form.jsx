"use client";

import { Input } from "@/components/ui/input";
import useMount from "@/hooks/use-mount";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SubmitButton from "@/components/submit-button";
import { toast } from "sonner";
import {  axios } from "@/lib/axios";
import ToastError from "@/components/toast/toast-error";
import { defaultMessages } from "@/lib/default-messages";
import ToastSuccess from "@/components/toast/toast-success";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { removeChar, separatePrice } from "@/lib/persian-price-format";
import { Textarea } from "@/components/ui/textarea";
import querystring from "querystring";
import { useRouter } from "next/navigation";
import { routes } from "@/routes/routes";
import { factorSchema } from "@/lib/validation/employee/factor";
import ConnectFactor from "./connect-factor";
import { useFactor } from "@/hooks/use-factor";
import { Trash2 } from "lucide-react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { DateForm } from "@/lib/date-form";

const CreateForm = ({ params: { id }, data }) => {
  const factorHook = useFactor();

  const mount = useMount();

  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(factorSchema),
    defaultValues: {
      userId: data?.name,
      description: "",
      total_price: factorHook.selectedFactor?.SaleInvoiceID
        ? factorHook.selectedFactor?.TotalPrice
        : "",
      discount: 0,
      products: [],
      date: new Date(),
    },
    mode: "onSubmit",
  });

  const {
    handleSubmit,
    control,
    setValue,
    getValues,
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (values) => {
 

   

    const { userId, description, total_price, products, discount, date } =
      values;

    const encodedFormData =
      factorHook.selectedFactor && factorHook.selectedFactor?.SaleInvoiceID
        ? querystring.stringify({
            description,
            total_price: removeChar(",", total_price),
            products: JSON.stringify(products),
            discount,
            dasht_invoice_id: factorHook.selectedFactor
              ? factorHook.selectedFactor?.SaleInvoiceID || null
              : null,
            date: DateForm(date),
          })
        : querystring.stringify({
            description,
            total_price: removeChar(",", total_price),
            products: JSON.stringify(products),
            discount,
            date: DateForm(date),
          });



    await axios
      .post(`/api/employee/user/${data?.id}/factor`, encodedFormData)
      .then((response) => {
 
        if (response.status === 201) {
          factorHook.setSelectedFactor(null);
          toast.success(<ToastSuccess text={"فاکتور با موفقیت ثبت شد"} />);
          router.push(
            routes.employee["factor-registration"].factors.edit(
              id,
              response.data.id,
            ),
          );
       
        }
      })
      .catch((error) => {
   
        toast.error(
          <ToastError
            text={
              error?.response?.data?.message ||
              defaultMessages.errors.internalError
            }
          />,
        );
      });
  };

  const onSelect = () => {

    setValue(
      "total_price",
      separatePrice(factorHook?.selectedFactor?.TotalPrice),
    );
  };

  if (!mount) {
    return null;
  }

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <ConnectFactor onSelect={onSelect} />
          {factorHook.selectedFactor && (
            <div className="my-2 flex w-fit gap-2 rounded-lg p-1.5">
              <span onClick={() => factorHook.setSelectedFactor(null)}>
                <Trash2
                  size={20}
                  strokeWidth={1.5}
                  className="cursor-pointer text-primary"
                />
              </span>
              <span>فاکتور انتخابی : </span>
              <span>
                فاکتور شماره {factorHook.selectedFactor?.SaleInvoiceID}
              </span>
            </div>
          )}
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
            <FormField
              control={control}
              name="userId"
              render={({ field }) => (
                <FormItem className="col-span-3 lg:col-span-1">
                  <FormLabel>مشتری</FormLabel>
                  <FormControl>
                    <Input
                      disabled
                      autoComplete="off"
                      placeholder="حداقل ۲ کاراکتر"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

          

            <FormField
              control={control}
              name="date"
              render={({ field }) => (
                <FormItem className="col-span-3 mt-1.5 flex flex-col gap-1 text-right lg:col-span-1">
                  <FormLabel>تاریخ</FormLabel>
                  <FormControl>
                    <DatePicker
                      value={getValues("date")}
                      onChange={(date) => {
                        date?.isValid ? setValue("date", new Date(date)) : "";
                      }}
                      format={false ? "MM/DD/YYYY" : "YYYY/MM/DD"}
                      calendar={persian}
                      locale={persian_fa}
                      calendarPosition="bottom-right"
                      style={{
                        width: "100%",
                        paddingTop: "19px",
                        paddingBottom: "19px",
                        borderColor: "rgb(226 232 240)",
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="discount"
              render={({ field }) => (
                <FormItem className="col-span-3 lg:col-span-1">
                  <FormLabel>مبلغ تخفیف</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      autoComplete="off"
                      placeholder="مبلغ تخفیف"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="description"
              render={({ field }) => (
                <FormItem className="col-span-3">
                  <FormLabel>توضیحات</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="توضیحات"
                      className="focus-visible:ring-primary"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <SubmitButton className="mt-3" loading={isSubmitting}>
            ارسال
          </SubmitButton>
        </form>
      </Form>
    </div>
  );
};

export default CreateForm;
