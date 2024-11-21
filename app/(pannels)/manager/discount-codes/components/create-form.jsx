"use client";

import { Input } from "@/components/ui/input";
import useMount from "@/hooks/use-mount";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SubmitButton from "@/components/submit-button";
import { toast } from "sonner";
import { axios } from "@/lib/axios";
import querystring from "querystring";
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
import SearchableSelect from "@/components/ui/searchable-select";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { discountCodeSchema } from "@/lib/validation/manager/discount-code";
import { DateForm } from "@/lib/date-form";
import { removeChar, separatePrice } from "@/lib/persian-price-format";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CreateForm = () => {
  const mount = useMount();

  const form = useForm({
    resolver: zodResolver(discountCodeSchema),
    defaultValues: {
      user_id: "all",
      discount_rate: "",
      max_discount: "",
      expiration: null,
      amount: "",
      type: "",
    },
    mode: "onSubmit",
  });

  const {
    handleSubmit,
    control,
    reset,
    getValues,
    setValue,
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (values) => {
 

    if (
      values.type === "cash" &&
      (values.amount === undefined || values.amount === "")
    ) {
      return toast.error(<ToastError text={"مبلغ تخفیف الزامی میباشد"} />, {
        position: "top-center",
      });
    }

    if (
      values.type === "percent" &&
      (values.discount_rate === undefined ||
        values.discount_rate === "" ||
        values.discount_rate === 0)
    ) {
      return toast.error(<ToastError text={"مبلغ تخفیف الزامی میباشد"} />, {
        position: "top-center",
      });
    }

    const { user_id, discount_rate, max_discount, expiration, type, amount } =
      values;

    const encodedFormData = querystring.stringify({
      user_id: user_id === "all" ? null : user_id,
      discount_rate: discount_rate ? discount_rate : 0,
      max_discount: removeChar(",", max_discount),
      expiration: expiration ? DateForm(expiration) : null,
      amount: amount ? removeChar(",", amount) : 0,
      type,
    });


    await axios
      .post("/api/manager/discount-code", encodedFormData)
      .then((response) => {
    
        if (response.status === 201) {
          toast.success(<ToastSuccess text={"کد تخفیف با موفقیت ایجاد شد"} />);
          reset();
          setValue("discount_rate", "");
          setValue("amount", "");
          setValue("type", values.type);
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

  if (!mount) {
    return null;
  }

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="col-span-3 lg:col-span-1">
                  <FormLabel>نوع تخفیف</FormLabel>
                  <Select
                    onValueChange={(e) => {
                      setValue("type", e, { shouldValidate: true });
                      if (e === "cash") {
                        setValue("discount_rate", undefined);
                      } else {
                        setValue("amount", undefined);
                      }
                    }}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="نوع تخفیف" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="percent">درصدی</SelectItem>
                      <SelectItem value="cash">نقدی</SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="discount_rate"
              render={({ field }) => (
                <FormItem className="col-span-3 lg:col-span-1">
                  <FormLabel>مبلغ تخفیف</FormLabel>
                  <FormControl>
                    <Input
                      disabled={getValues("type") === "cash"}
                      type="number"
                      autoComplete="off"
                      placeholder="بین ۰ تا ۱۰۰"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="amount"
              render={({ field }) => (
                <FormItem className="col-span-3 lg:col-span-1">
                  <FormLabel>مبلغ تخفیف (تومان)</FormLabel>
                  <FormControl>
                    <Input
                      disabled={getValues("type") === "percent"}
                      autoComplete="off"
                      placeholder="قیمت"
                      {...field}
                      onChange={(e) => {
                        const newEvent = removeChar(",", e.target.value);
                        if (!isNaN(newEvent)) {
                          setValue("amount", separatePrice(e.target.value), {
                            shouldValidate: true,
                          });
                        }
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="user_id"
              render={({ field }) => (
                <FormItem className="col-span-3 text-right lg:col-span-1">
                  <FormLabel>مشتری</FormLabel>
                  <FormControl>
                    <SearchableSelect
                      changeValue={(value) => {
                        field.onChange(value);
                      }}
                      defaultValue={getValues("user_id")}
                      api={"/api/manager/users"}
                      query="name"
                      placeholder={"نام و نام خانوادگی"}
                      keyValue="id"
                      showId={true}
                      searchable={true}
                      nullable={true}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="max_discount"
              render={({ field }) => (
                <FormItem className="col-span-3 lg:col-span-1">
                  <FormLabel>حداکثر مبلغ تخفیف (تومان)</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="off"
                      placeholder="قیمت"
                      {...field}
                      onChange={(e) => {
                        const newEvent = removeChar(",", e.target.value);
                        if (!isNaN(newEvent)) {
                          setValue(
                            "max_discount",
                            separatePrice(e.target.value),
                            {
                              shouldValidate: true,
                            },
                          );
                        }
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="expiration"
              render={({ field }) => (
                <FormItem className="col-span-3 mt-1.5 flex flex-col gap-1 text-right lg:col-span-1">
                  <FormLabel>تاریخ انقضا</FormLabel>
                  <FormControl>
                    <DatePicker
                      value={getValues("expiration")}
                      onChange={(date) => {
                        date?.isValid
                          ? setValue("expiration", new Date(date))
                          : "";
                      }}
                      format={false ? "MM/DD/YYYY" : "YYYY/MM/DD"}
                      calendar={persian}
                      locale={persian_fa}
                      calendarPosition="bottom-right"
                      minDate={new Date(new Date())}
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
