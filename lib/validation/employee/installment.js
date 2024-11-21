import { z } from "zod";

export const installmentSchema = z.object({
  factorId: z.coerce.number().min(1, "انتخاب فاکتور الزامی میباشد"),
  months_count: z.coerce
    .number()
    .min(1, "تعداد اقساط بین ۱ تا ۹ میباشد")
    .max(9, "تعداد اقساط بین ۱ تا ۹ میباشد"),
  profit_percent: z.coerce
    .number()
    .min(0, "درصد سود بین ۰ تا ۱۰۰ میباشد")
    .max(100, "درصد سود بین ۰ تا ۱۰۰ میباشد"),
  starting_date: z.date({ required_error: "انتخاب تاریخ الزامی میباشد" }),
});
