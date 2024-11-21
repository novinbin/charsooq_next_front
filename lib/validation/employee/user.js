import { z } from "zod";

export const userSchema = z.object({
  first_name: z.string().min(2, "نام حداقل ۲ حرف میباشد"),
  last_name: z.string().min(2, "نام خانوادگی حداقل ۲ حرف میباشد"),
  gender: z.string().min(2, "جنسیت الزامی میباشد"),

  phone: z
    .string()
    .startsWith("09", "شماره تماس صحیح نمیباشد")
    .min(11, "شماره تماس باید ۱۱ رقم باشد")
    .max(11, "شماره تماس باید ۱۱ رقم باشد"),
  email: z
    .union([
      z.string().length(0, "فرمت ایمیل صحیح نمیباشد"),
      z
        .string()
        .max(100, "ایمیل حداکثر ۱۰۰ حرف میباشد")
        .email("فرمت ایمیل صحیح نمیباشد"),
    ])
    .optional()
    .transform((e) => (e === "" ? undefined : e)),
  state: z
    .union([
      z.string().length(0, "نام استان در صورت نیاز حداقل ۲ حرف میباشد"),
      z.string().min(2, "نام استان حداقل ۲ حرف میباشد"),
    ])
    .optional()
    .transform((e) => (e === "" ? undefined : e)),
  city: z
    .union([
      z.string().length(0, "نام شهرستان در صورت نیاز حداقل ۲ حرف میباشد"),
      z.string().min(2, "نام شهرستان حداقل ۲ حرف میباشد"),
    ])
    .optional()
    .transform((e) => (e === "" ? undefined : e)),
  address: z
    .union([
      z.string().length(0, "آدرس در صورت نیاز حداقل ۲ حرف میباشد"),
      z.string().min(2, "آدرس حداقل ۲ حرف میباشد"),
    ])
    .optional()
    .transform((e) => (e === "" ? undefined : e)),
  postal_code: z
    .union([
      z.string().length(0, "کد پستی در صورت نیاز ۱۰ رقم میباشد"),
      z
        .string()
        .min(10, "کد پستی باید ۱۰ رقم باشد")
        .max(10, "کد پستی باید ۱۰ رقم باشد"),
    ])
    .nullable()
    .optional()
    .transform((e) => (e === "" ? undefined : e)),

  national_code: z
    .union([
      z.string().length(0, "کد ملی در صورت نیاز ۱۰ رقم میباشد"),
      z
        .string()
        .min(10, "کد ملی باید ۱۰ رقم باشد")
        .max(10, "کد ملی باید ۱۰ رقم باشد"),
    ])
    .nullable()
    .optional()
    .transform((e) => (e === "" ? undefined : e)),

  // national_code: z
  //   .string()
  //   .min(10, "کد ملی باید ۱۰ رقم باشد")
  //   .max(10, "کد ملی باید ۱۰ رقم باشد"),
  password: z.string().min(8, "رمز ورود حداقل ۸ حرف میباشد"),
  password_confirmation: z.string().min(8, "تکرار رمز ورود حداقل ۸ حرف میباشد"),

  organ_id: z
    .string()
    .nullable()
    .optional()
    .transform((e) => (e === "" ? undefined : e)),
  user_category_id: z
    .string()
    .nullable()
    .optional()
    .transform((e) => (e === "" ? undefined : e)),
});

export const editUserSchema = z.object({
  first_name: z.string().min(2, "نام حداقل ۲ حرف میباشد"),
  last_name: z.string().min(2, "نام خانوادگی حداقل ۲ حرف میباشد"),
  gender: z.string().min(2, "جنسیت الزامی میباشد"),

  phone: z
    .string()
    .startsWith("09", "شماره تماس صحیح نمیباشد")
    .min(11, "شماره تماس باید ۱۱ رقم باشد")
    .max(11, "شماره تماس باید ۱۱ رقم باشد"),
  email: z
    .union([
      z.string().length(0, "فرمت ایمیل صحیح نمیباشد"),
      z
        .string()
        .max(100, "ایمیل حداکثر ۱۰۰ حرف میباشد")
        .email("فرمت ایمیل صحیح نمیباشد"),
    ])
    .nullable()
    .optional()
    .transform((e) => (e === "" ? undefined : e)),
  state: z
    .union([
      z.string().length(0, "نام استان در صورت نیاز حداقل ۲ حرف میباشد"),
      z.string().min(2, "نام استان حداقل ۲ حرف میباشد"),
    ])
    .nullable()
    .optional()
    .transform((e) => (e === "" ? undefined : e)),
  city: z
    .union([
      z.string().length(0, "نام شهرستان در صورت نیاز حداقل ۲ حرف میباشد"),
      z.string().min(2, "نام شهرستان حداقل ۲ حرف میباشد"),
    ])
    .nullable()
    .optional()
    .transform((e) => (e === "" ? undefined : e)),
  address: z
    .union([
      z.string().length(0, "آدرس در صورت نیاز حداقل ۲ حرف میباشد"),
      z.string().min(2, "آدرس حداقل ۲ حرف میباشد"),
    ])
    .nullable()
    .optional()
    .transform((e) => (e === "" ? undefined : e)),
  postal_code: z
    .union([
      z.string().length(0, "کد پستی در صورت نیاز ۱۰ رقم میباشد"),
      z
        .string()
        .min(10, "کد پستی باید ۱۰ رقم باشد")
        .max(10, "کد پستی باید ۱۰ رقم باشد"),
    ])
    .nullable()
    .optional()
    .transform((e) => (e === "" ? undefined : e)),

  national_code: z
    .union([
      z.string().length(0, "کد ملی در صورت نیاز ۱۰ رقم میباشد"),
      z
        .string()
        .min(10, "کد ملی باید ۱۰ رقم باشد")
        .max(10, "کد ملی باید ۱۰ رقم باشد"),
    ])
    .nullable()
    .optional()
    .transform((e) => (e === "" ? undefined : e)),

  password: z
    .union([
      z.string().length(0, "رمز ورود حداقل ۸ حرف میباشد"),
      z.string().min(8, "رمز ورود حداقل ۸ حرف میباشد"),
    ])
    .optional()
    .transform((e) => (e === "" ? undefined : e)),
  password_confirmation: z
    .union([
      z.string().length(0, "تکرار رمز ورود حداقل ۸ حرف میباشد"),
      z.string().min(8, "تکرار رمز ورود حداقل ۸ حرف میباشد"),
    ])
    .optional()
    .transform((e) => (e === "" ? undefined : e)),

  organ_id: z
    .string()
    .nullable()
    .optional()
    .transform((e) => (e === "" ? undefined : e)),
  user_category_id: z
    .string()
    .nullable()
    .optional()
    .transform((e) => (e === "" ? undefined : e)),
});
