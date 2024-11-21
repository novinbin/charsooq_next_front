import { z } from "zod";

export const categorySchema = z.object({
  name: z.string().min(2, "عنوان حداقل ۲ حرف میباشد"),
});
