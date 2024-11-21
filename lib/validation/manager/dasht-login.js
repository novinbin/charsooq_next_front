import { z } from "zod";

export const dashtLoginSchema = z.object({
  guid: z.string().min(2, "کلید اتصال الزامی میباشد"),
});
