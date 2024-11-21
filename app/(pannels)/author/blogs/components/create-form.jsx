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
import { blogSchema } from "@/lib/validation/author/blog";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { Upload } from "lucide-react";
import Dropzone from "react-dropzone";
import { useCallback } from "react";
import { defaultBlog } from "@/constants/images";
import Editor from "./editor";
import FormData from "form-data";

const CreateForm = () => {
  const mount = useMount();

  const form = useForm({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: "",
      slug: "",
      description: "",
      key_words: "",
      body: "",
      photo: null,
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
    //ADD ALT TO IMAGES
    let body_with_alt = values.body.includes("<img")
      ? values.body.replaceAll("<img", `<img alt="${values.key_words}"`)
      : values.body;

    values.body = body_with_alt;

    const formData = new FormData();

    for (var propName in values) {
      if (values[propName] === null || values[propName] === undefined) {
        delete values[propName];
      }
    }

    for (var propName in values) {
      if (propName === "photo") {
        formData.append("photo", values["photo"].file);
      } else {
        formData.append(propName, values[propName]);
      }
    }

    await axios
      .post("/api/author/blog", formData)
      .then((response) => {
        if (response.status === 201) {
          toast.success(
            <ToastSuccess text={"مقاله جدید با موفقیت اضافه شد"} />,
          );
          reset();
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
          "photo",
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
    [getValues("photo")],
  );

  if (!mount) {
    return null;
  }

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className="grid grid-cols-1 gap-2">
            <FormField
              control={control}
              name="photo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>تصویر مقاله</FormLabel>
                  <FormControl>
                    <Dropzone
                      maxSize={1024 * 1024 * 2}
                      maxFiles={1}
                      onDrop={onDrop}
                    >
                      {({ getRootProps, getInputProps }) => (
                        <div className="grid grid-cols-1 gap-3 px-4 md:grid-cols-2 md:px-10">
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

                          <div className="flex flex-wrap items-center justify-center gap-3">
                            <Image
                              src={
                                getValues("photo")
                                  ? URL.createObjectURL(getValues("photo").file)
                                  : defaultBlog
                              }
                              className="aspect-video w-full rounded-lg"
                              width={240}
                              height={160}
                              alt="product"
                            />
                          </div>
                        </div>
                      )}
                    </Dropzone>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
              <FormField
                control={control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>عنوان</FormLabel>
                    <FormControl>
                      <Input
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
                name="slug"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>اسلاگ</FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        placeholder="حداقل ۲ کاراکتر"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>توضیحات</FormLabel>
                  <FormControl>
                    <Textarea placeholder="توضیحات" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="key_words"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>کلمات کلیدی</FormLabel>
                  <FormControl>
                    <Textarea placeholder="کلمات کلیدی" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="body"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>جزئیات مقاله</FormLabel>
                  <FormControl>
                    <Editor value={field.value} onChange={field.onChange} />
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
