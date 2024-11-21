import { z } from "zod";

export const profitPercentSchema = z.object({
  profit_percent: z.coerce
    .number()
    .min(0, "درصد تغییر نرخ بین ۰ تا ۱۰۰ میباشد")
    .max(100, "درصد تغییر نرخ بین ۰ تا ۱۰۰ میباشد"),
});
