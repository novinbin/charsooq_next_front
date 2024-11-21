import { routes } from "@/routes/routes";
import {
  Home,
  LayoutDashboard,
  SquarePen,
  FilePlus,
  List,
  User2,
  Lock,
  User,
} from "lucide-react";

export const navItems = [
  {
    title: "صفحه اصلی",
    type: "link",
    href: routes.landing.root,
    icon: (size, strokeWidth) => (
      <Home size={size || 18} strokeWidth={strokeWidth || 1.5} />
    ),
    subMenu: [],
  },

  {
    title: "داشبورد و اطلاعات مشتری",
    type: "text",
  },

  {
    title: "داشبورد",
    type: "link",
    href: routes.author.dashboard,
    icon: (size, strokeWidth) => (
      <LayoutDashboard size={size || 18} strokeWidth={strokeWidth || 1.5} />
    ),
    subMenu: [],
  },

  {
    title: "مشخصات کاربری",
    type: "subMenu",
    icon: (size, strokeWidth) => (
      <User size={size || 18} strokeWidth={strokeWidth || 1.5} />
    ),
    subMenu: [
      {
        title: "مشاهده مشخصات کاربری",
        href: routes.author.profile.details,
        icon: (size, strokeWidth) => (
          <User2 size={size || 18} strokeWidth={strokeWidth || 1.5} />
        ),
      },
      {
        title: "ویرایش مشخصات کاربری",
        href: routes.author.profile["update-info"],
        icon: (size, strokeWidth) => (
          <User2 size={size || 18} strokeWidth={strokeWidth || 1.5} />
        ),
      },
      {
        title: "ویرایش رمز عبور",
        href: routes.author.profile["update-password"],
        icon: (size, strokeWidth) => (
          <Lock size={size || 18} strokeWidth={strokeWidth || 1.5} />
        ),
      },
    ],
  },

  {
    title: "مقالات",
    type: "subMenu",
    icon: (size, strokeWidth) => (
      <SquarePen size={size || 18} strokeWidth={strokeWidth || 1.5} />
    ),
    subMenu: [
      {
        title: "لیست مقالات",
        href: routes.author.blogs.root,
        icon: (size, strokeWidth) => (
          <List size={size || 18} strokeWidth={strokeWidth || 1.5} />
        ),
      },
      {
        title: "افزودن مقاله",
        href: routes.author.blogs.create,
        icon: (size, strokeWidth) => (
          <FilePlus size={size || 18} strokeWidth={strokeWidth || 1.5} />
        ),
      },
    ],
  },
];
