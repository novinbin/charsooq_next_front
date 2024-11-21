import { z } from "zod";

export const discountCodeSchema = z.object({
  user_id: z
    .union([
      z.string().length(0, "نام و نام خانوادگی در صورت نیاز حداقل ۰ میباشد"),
      z.string().min(0, "نام و نام خانوادگی حداقل ۰ میباشد"),
      z.null(),
    ])
    .optional()
    .nullable()
    .transform((e) => (e === "" || e === null ? undefined : e)),
  expiration: z
    .union([z.date()])
    .nullable()
    .optional()
    .transform((e) => (e === "" ? undefined : e)),
  max_discount: z
    .union([
      z.string().length(0, "مبلغ در صورت نیاز حداقل ۰ میباشد"),
      z.string().min(0, "مبلغ حداقل ۰ میباشد"),
      z.null(),
    ])
    .optional()
    .nullable()
    .transform((e) => (e === "" || e === null ? undefined : e)),
  discount_rate: z.coerce
    .number()
    .nullable()
    .optional()
    .transform((e) => (e === "" || e === null ? undefined : e)),

  type: z.string().min(2, "نوع تخفیف الزامی میباشد"),
  amount: z
    .union([
      z.string().length(0, "مبلغ در صورت نیاز حداقل ۰ میباشد"),
      z.string().min(0, "مبلغ حداقل ۰ میباشد"),
      z.null(),
    ])
    .optional()
    .nullable()
    .transform((e) => (e === "" || e === null ? undefined : e)),
});
