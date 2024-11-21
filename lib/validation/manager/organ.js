import { z } from "zod";

export const organSchema = z.object({
  name: z.string().min(2, "عنوان ارگان حداقل ۲ حرف میباشد"),
});
