import { z } from "zod";

export const signUpSchema = z.object({
  first_name: z.string().min(2, "نام حداقل ۲ حرف میباشد"),
  last_name: z.string().min(2, "نام خانوادگی حداقل ۲ حرف میباشد"),
  gender: z.string().min(2, "جنسیت الزامی میباشد"),
  phone: z
    .string()
    .startsWith("09", "شماره تماس صحیح نمیباشد")
    .min(11, "شماره تماس باید ۱۱ رقم باشد")
    .max(11, "شماره تماس باید ۱۱ رقم باشد"),
  password: z.string().min(8, "رمز ورود حداقل ۸ حرف میباشد"),
  password_confirmation: z.string().min(8, "تکرار رمز ورود حداقل ۸ حرف میباشد"),
});
