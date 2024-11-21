import { z } from "zod";

const balanceIncreasesImageSchema = z
  .custom()
  // .refine((file) => file, "انتخاب تصویر دسته بندی الزامی میباشد")
  .refine(
    (file) => !file || (file && file.type.startsWith("image/")),
    "فایل انتخابی حتما باید تصویر باشد",
  )
  .refine((file) => {
    return !file || file.size < 1024 * 1024 * 2;
  }, "فایل انتخابی حداکثر باید ۲ مگابایت باشد");

export const balanceIncreasesSchema = z.object({
  userId: z.coerce.number().min(1, "انتخاب مشتری الزامی میباشد"),
  description: z
    .union([
      z.string().length(0, "توضیحات در صورت نیاز حداقل ۴ حرف میباشد"),
      z.string().min(4, "توضیحات حداقل ۴ حرف میباشد"),
      z.null(),
    ])
    .optional()
    .nullable()
    .transform((e) => (e === "" || e === null ? undefined : e)),
  amount: z
    .string({ required_error: "مبلغ افزایش اعتبار الزامی میباشد" })
    .min(1, "مبلغ افزایش اعتبار الزامی میباشد"),
  check_photo: balanceIncreasesImageSchema,
});
