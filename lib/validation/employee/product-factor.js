import { z } from "zod";

export const productFactorSchema = z.object({
  title: z.string().min(1, "عنوان الزامی میباشد"),
  code: z.string().min(1, "کد کالا الزامی میباشد"),
  price: z
    .string({ required_error: "قیمت کالا الزامی میباشد" })
    .min(1, "قیمت کالا الزامی میباشد"),
  count: z.coerce.number().min(1, "تعداد الزامی و حداقل ۱ میباشد"),
});
