"use client";

import { Input } from "@/components/ui/input";
import useMount from "@/hooks/use-mount";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SubmitButton from "@/components/submit-button";
import { toast } from "sonner";
import { axios } from "@/lib/axios";
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
import { balanceIncreasesSchema } from "@/lib/validation/employee/balance-increases";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { Upload } from "lucide-react";
import Dropzone from "react-dropzone";
import { useCallback, useEffect, useState } from "react";
import FormData from "form-data";
import { useRouter } from "next/navigation";
import { routes } from "@/routes/routes";
import { useUser } from "@/hooks/use-user";
import LoadingPage from "@/components/loading-page";

const EditForm = ({ data, params: { balanceId, id } }) => {
  const mount = useMount();
  const userData = useUser((state) => state.userData);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const form = useForm({
    resolver: zodResolver(balanceIncreasesSchema),
    defaultValues: {
      userId: data.user?.id,
      description: data.description,
      amount: data.amount,
      check_photo: null,
      userName: "",
    },
    mode: "onSubmit",
  });

  const {
    handleSubmit,
    control,
    getValues,
    setValue,
    reset,
    formState: { isSubmitting },
  } = form;

  const fetchData = async () => {
    await axios
      .get(`/api/employee/user/${id}`)
      .then((response) => {
        reset({
          userId: data.user?.id,
          description: data.description,
          amount: data.amount,
          check_photo: null,
          userName: response?.data?.name,
        });
      })
      .catch((error) => {})
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onSubmit = async (values) => {
    const formData = new FormData();

    formData.append("description", values.description);
    formData.append("amount", removeChar(",", values.amount));
    if (values.check_photo) {
      formData.append("check_photo", values.check_photo.file);
    }

    await axios
      .post(`/api/employee/balance-increase/${balanceId}`, formData)
      .then((response) => {
        if (response.status === 200) {
          toast.success(<ToastSuccess text={"درخواست با موفقیت ویرایش شد"} />);
          router.push(
            routes.employee["balance-increases"].requests.all(data.user?.id),
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

  const onDrop = useCallback(
    (files) =>
      files.map((file) => {
        setValue(
          "check_photo",
          {
            file: file,
            size: String(file.size),
            name: file.name,
            type: file.type,
          },
          {
            shouldValidate: true,
          },
        );
      }),
    [getValues("check_photo")],
  );

  if (!mount) {
    return null;
  }

  return isLoading ? (
    <LoadingPage />
  ) : (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
            <FormField
              control={control}
              name="userName"
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
              name="amount"
              render={({ field }) => (
                <FormItem className="col-span-3 lg:col-span-1">
                  <FormLabel>مبلغ (تومان)</FormLabel>
                  <FormControl>
                    <Input
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

            <FormField
              control={control}
              name="check_photo"
              render={({ field }) => (
                <FormItem className="col-span-3">
                  <FormLabel>تصویر</FormLabel>
                  <FormControl>
                    <Dropzone
                      maxSize={1024 * 1024 * 2}
                      maxFiles={1}
                      onDrop={onDrop}
                    >
                      {({ getRootProps, getInputProps }) => (
                        <section className="grid grid-cols-2 gap-5">
                          <div
                            {...getRootProps()}
                            className="mx-auto flex w-full cursor-pointer items-center justify-center rounded-xl border-[3px] border-dashed border-primary p-4"
                          >
                            <input {...getInputProps()} />
                            <div className="flex flex-col items-center text-muted-foreground">
                              <span>آپلود تصویر</span>
                              <span className="mt-2 text-xs">
                                برای انتخاب تصویر کلیک کنید و یا تصویر خود را
                                داخل کادر بکشید (حداکثر با حجم ۲ مگابایت)
                              </span>
                              <Upload size={60} className="mt-2 text-primary" />
                            </div>
                          </div>
                          {getValues("check_photo") ? (
                            <div className="flex flex-wrap items-center justify-center gap-3">
                              <Image
                                src={URL.createObjectURL(
                                  getValues("check_photo").file,
                                )}
                                className="aspect-video w-full rounded-lg"
                                width={240}
                                height={160}
                                alt="product"
                              />
                            </div>
                          ) : (
                            <div></div>
                          )}

                          <div className="flex flex-wrap items-center justify-center gap-3">
                            <span>تصویر فعلی</span>
                            <Image
                              src={data.check_photo}
                              className="aspect-video w-full rounded-lg"
                              width={240}
                              height={160}
                              alt="product"
                            />
                          </div>
                        </section>
                      )}
                    </Dropzone>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <SubmitButton className="mt-3" loading={isSubmitting}>
            ویرایش
          </SubmitButton>
        </form>
      </Form>
    </div>
  );
};

export default EditForm;
