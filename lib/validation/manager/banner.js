import { z } from "zod";

const imageSchema = z
  .custom()
  .refine((file) => file, "انتخاب تصویر الزامی میباشد")
  .refine(
    (file) => !file || (file && file.type.startsWith("image/")),
    "فایل انتخابی حتما باید تصویر باشد",
  )
  .refine((file) => {
    return !file || file.size < 1024 * 1024 * 2;
  }, "فایل انتخابی حداکثر باید ۲ مگابایت باشد");

export const bannerSchema = z.object({
  key: z.string().min(1),

  link: z
    .union([
      z.string().length(0, "لینک معتبر نمیباشد"),
      z
        .string()
        .max(200, "لینک حداکثر ۲۰۰ حرف میباشد")
        .url("لینک معتبر نمیباشد"),
    ])
    .optional()
    .transform((e) => (e === "" ? undefined : e)),

  photo: imageSchema,
});
