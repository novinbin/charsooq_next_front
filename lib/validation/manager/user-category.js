import { z } from "zod";

export const userCategorySchema = z.object({
  name: z.string().min(2, "عنوان دسته بندی حداقل ۲ حرف میباشد"),
});
