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

const editImageSchema = z
  .custom()
  .refine(
    (file) => !file || (file && file.type.startsWith("image/")),
    "فایل انتخابی حتما باید تصویر باشد",
  )
  .refine((file) => {
    return !file || file.size < 1024 * 1024 * 2;
  }, "فایل انتخابی حداکثر باید ۲ مگابایت باشد");

export const blogSchema = z.object({
  title: z.string().min(2, "عنوان مقاله حداقل ۲ حرف میباشد"),
  slug: z.string().min(2, "اسلاگ حداقل ۲ حرف میباشد"),
  description: z.string().min(10, "توضیحات مقاله حداقل ۱۰ حرف میباشد"),
  key_words: z.string().min(2, "کلمات کلیدی حداقل ۲ حرف میباشند"),
  body: z.string().min(17, "جزئیات مقاله الزامی و حداقل ۱۰ حرف میباشد"),
  photo: imageSchema,
});

export const editBlogSchema = z.object({
  title: z.string().min(2, "عنوان مقاله حداقل ۲ حرف میباشد"),
  slug: z.string().min(2, "اسلاگ حداقل ۲ حرف میباشد"),
  description: z.string().min(10, "توضیحات مقاله حداقل ۱۰ حرف میباشد"),
  key_words: z.string().min(2, "کلمات کلیدی حداقل ۲ حرف میباشند"),
  body: z.string().min(17, "جزئیات مقاله الزامی و حداقل ۱۰ حرف میباشد"),
  photo: editImageSchema,
});
