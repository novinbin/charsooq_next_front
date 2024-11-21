"use client";

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
import { signInSchema } from "@/lib/validation/auth/sign-in";
import SubmitButton from "@/components/submit-button";
import { useRouter } from "next/navigation";
import { axios } from "@/lib/axios";
import querystring from "querystring";
import ToastSuccess from "@/components/toast/toast-success";
import { defaultMessages } from "@/lib/default-messages";
import ToastError from "@/components/toast/toast-error";
import { routes } from "@/routes/routes";
import { useUser } from "@/hooks/use-user";

const UserPass = () => {
  const userHook = useUser();

  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      phoneNumber: "",
      password: "",
    },
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (values) => {
    const { password, phoneNumber } = values;


    const encodedFormData = querystring.stringify({
      phone: phoneNumber,
      password,
    });

    await axios
      .post("/login", encodedFormData)
      .then(async (response) => {
        if (response.status === 204 || response.status === 200) {
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
              <ToastSuccess text={defaultMessages.login.default} />,
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
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-3 w-full space-y-3">
        <FormField
          control={control}
          name="phoneNumber"
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
        <SubmitButton
          className="!mt-5 w-full bg-gradient-to-r from-[#FFA600] to-[#FF6361]"
          loading={isSubmitting}
        >
          ورود
        </SubmitButton>
      </form>
    </Form>
  );
};

export default UserPass;
