"use client";

import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import SubmitButton from "@/components/submit-button";
import { useRouter } from "next/navigation";
import { authLogo } from "@/constants/images";
import { axios } from "@/lib/axios";
import querystring from "querystring";
import ToastSuccess from "@/components/toast/toast-success";
import { defaultMessages } from "@/lib/default-messages";
import ToastError from "@/components/toast/toast-error";
import { routes } from "@/routes/routes";
import { useUser } from "@/hooks/use-user";
import { signUpSchema } from "@/lib/validation/auth/sign-up";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LoginPage = () => {
  const userHook = useUser();

  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      gender: "",
      phone: "",
      password: "",
      password_confirmation: "",
    },
  });

  const {
    handleSubmit,
    control,
    getValues,
    formState: { isSubmitting, errors },
  } = form;

  function just_persian(str) {}

  const onSubmit = async (values) => {
    const {
      first_name,
      last_name,
      gender,
      phone,
      password,
      password_confirmation,
    } = values;

    let p = /^[\u0600-\u06FF\s]+$/;

    if (!p.test(first_name)) {
      return toast.error(
        <ToastError
          text="لطفا نام و نام خانوادگی
        ی خود را فارسی وارد کنید"
        />,
      );
    }

    if (!p.test(last_name)) {
      return toast.error(
        <ToastError
          text="لطفا نام و نام خانوادگی
        ی خود را فارسی وارد کنید"
        />,
      );
    }
    if (password !== password_confirmation) {
      return toast.error(<ToastError text="تکرار رمز ورود صحیح نمیباشد" />);
    }

    const encodedFormData = querystring.stringify({
      first_name,
      last_name,
      gender,
      phone,
      password,
      password_confirmation,
    });

    await axios
      .post("/register", encodedFormData)
      .then(async (response) => {
        if (response.status === 204) {
          await axios.get("/api/self").then((res) => {
            userHook.setUserData(res?.data);

            res.data.role === "manager" &&
              router.push(routes.manager.dashboard);
            res.data.role === "author" && router.push(routes.author.dashboard);
            res.data.role === "employee" &&
              router.push(routes.employee.dashboard);
            res.data.role === "organ" && router.push(routes.organ.dashboard);
            res.data.role === "user" && router.push(routes.user.dashboard);

            toast.success(
              <ToastSuccess text={defaultMessages.register.default} />,
            );
          });
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

  return (
    <section className="h-screen w-screen bg-card">
      <div className="md:p0 flex h-full w-full items-center justify-center p-5">
        <div className="md:min-h-5/6 flex h-full w-full rounded-xl shadow-lg md:w-5/6 lg:w-2/3">
          <div className="hidden h-full w-1/2 flex-col items-center justify-center gap-2 bg-gradient-to-bl from-[#FFA600] to-[#FF6361] p-3 text-white md:flex ltr:rounded-l-xl rtl:rounded-r-xl">
            <h1 className="text-2xl font-bold">صفحه ورود</h1>
            <p className="max-w-64 text-justify text-sm leading-8">
              لطفا برای استفاده از امکانات سایت اطلاعات مشتری خود را وارد نمایید
            </p>
          </div>

          <div className="flex h-full w-full items-center justify-center rounded-l-xl rounded-r-xl border bg-card p-3 md:w-2/3 ltr:md:rounded-l-none rtl:md:rounded-r-none">
            <div className="flex w-full flex-col items-center">
              <Image
                src={authLogo}
                alt="logo"
                width={160}
                height={80}
                className="h-36 w-72"
              />
              <h1 className="mt-2 text-2xl font-bold text-muted-foreground">
                ثبت نام
              </h1>
              <div className="mt-4 flex flex-col items-center gap-2">
                <span className="text-xs">
                  لطفا برای استفاده از امکانات سایت اطلاعات مشتری خود را وارد
                  نمایید
                </span>

                <Form {...form}>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mt-3 grid w-full grid-cols-2 gap-x-3 gap-y-2"
                  >
                    <FormField
                      control={control}
                      name="first_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>نام</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="حداقل ۲ کاراکتر"
                              className="focus-visible:ring-primary"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-primary" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={control}
                      name="last_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>نام خانوادگی</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="حداقل ۲ کاراکتر"
                              className="focus-visible:ring-primary"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-primary" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={control}
                      name="gender"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>جنسیت</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            value={getValues("gender")}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="جنسیت خود را انتخاب کنید" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="male">آقا</SelectItem>
                              <SelectItem value="female">خانم</SelectItem>
                            </SelectContent>
                          </Select>

                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>شماره تماس</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="09"
                              className="focus-visible:ring-primary"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-primary" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>رمز ورود</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="رمز ورود"
                              className="focus-visible:ring-primary"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-primary" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={control}
                      name="password_confirmation"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>تایید رمز ورود</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder={"تایید رمز ورود"}
                              className="focus-visible:ring-primary"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-primary" />
                        </FormItem>
                      )}
                    />
                    <SubmitButton
                      className="col-span-2 !mt-5 w-full bg-gradient-to-r from-[#FFA600] to-[#FF6361]"
                      loading={isSubmitting}
                    >
                      ثبت نام
                    </SubmitButton>
                  </form>
                </Form>
                <span className="text-sm font-normal">
                  در صورت داشتن حساب مشتری به سایت{" "}
                  <Link
                    href={routes.auth.signIn}
                    className="font-semibold text-primary hover:underline"
                  >
                    وارد
                  </Link>{" "}
                  شوید
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
