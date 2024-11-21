import { routes } from "@/routes/routes";
import {
  Home,
  Lock,
  User,
  User2,
  LayoutDashboard,
  List,
  Wallet,
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
    href: routes.user.dashboard,
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
        href: routes.user.profile.details,
        icon: (size, strokeWidth) => (
          <User2 size={size || 18} strokeWidth={strokeWidth || 1.5} />
        ),
      },
      {
        title: "ویرایش مشخصات کاربری",
        href: routes.user.profile["update-info"],
        icon: (size, strokeWidth) => (
          <User2 size={size || 18} strokeWidth={strokeWidth || 1.5} />
        ),
      },
      {
        title: "ویرایش رمز عبور",
        href: routes.user.profile["update-password"],
        icon: (size, strokeWidth) => (
          <Lock size={size || 18} strokeWidth={strokeWidth || 1.5} />
        ),
      },
    ],
  },

  {
    title: "فاکتور ها",
    type: "link",
    href: routes.user.factors.root,
    icon: (size, strokeWidth) => (
      <List size={size || 18} strokeWidth={strokeWidth || 1.5} />
    ),
    subMenu: [],
  },

  {
    title: "درخواست های افزایش اعتبار",
    type: "link",
    href: routes.user["balance-increases"].root,
    icon: (size, strokeWidth) => (
      <Wallet size={size || 18} strokeWidth={strokeWidth || 1.5} />
    ),
    subMenu: [],
  },
];
