import { z } from "zod";

export const factorSchema = z.object({
  // userId: z.coerce.number().min(1, "انتخاب مشتری الزامی میباشد"),
  userId: z.string().min(1, "انتخاب مشتری الزامی میباشد"),
  description: z
    .union([
      z.string().length(0, "توضیحات در صورت نیاز حداقل ۴ حرف میباشد"),
      z.string().min(4, "توضیحات حداقل ۴ حرف میباشد"),
      z.null(),
    ])
    .optional()
    .nullable()
    .transform((e) => (e === "" || e === null ? undefined : e)),
  // total_price: z
  //   .string({ required_error: "مبلغ افزایش اعتبار الزامی میباشد" })
  //   .min(1, "مبلغ افزایش اعتبار الزامی میباشد"),
  discount: z.coerce.number(),
  date: z.date({ required_error: "انتخاب تاریخ الزامی میباشد" }),
});
