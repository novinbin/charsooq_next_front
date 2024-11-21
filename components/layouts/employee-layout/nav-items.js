import { routes } from "@/routes/routes";
import {
  Home,
  LayoutDashboard,
  LibraryBig,
  UsersRound,
  UserPlus,
  Wallet,
  FilePlus,
  Users,
  Cog,
  List,
  User2,
  Lock,
  User,
  CircleChevronLeft,
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
    href: routes.employee.dashboard,
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
        href: routes.employee.profile.details,
        icon: (size, strokeWidth) => (
          <User2 size={size || 18} strokeWidth={strokeWidth || 1.5} />
        ),
      },
      {
        title: "ویرایش مشخصات کاربری",
        href: routes.employee.profile["update-info"],
        icon: (size, strokeWidth) => (
          <User2 size={size || 18} strokeWidth={strokeWidth || 1.5} />
        ),
      },
      {
        title: "ویرایش رمز عبور",
        href: routes.employee.profile["update-password"],
        icon: (size, strokeWidth) => (
          <Lock size={size || 18} strokeWidth={strokeWidth || 1.5} />
        ),
      },
    ],
  },

  {
    title: "مشتریان",
    type: "text",
  },

  {
    title: "مشتریان",
    type: "subMenu",
    icon: (size, strokeWidth) => (
      <Users size={size || 18} strokeWidth={strokeWidth || 1.5} />
    ),
    subMenu: [
      {
        title: "همه مشتریان",
        href: routes.employee.users.root,
        icon: (size, strokeWidth) => (
          <UsersRound
            LibraryBig
            size={size || 18}
            strokeWidth={strokeWidth || 1.5}
          />
        ),
      },
      {
        title: "افزودن مشتری",
        href: routes.employee.users.create,
        icon: (size, strokeWidth) => (
          <UserPlus size={size || 18} strokeWidth={strokeWidth || 1.5} />
        ),
      },
    ],
  },

  {
    title: "افزایش مبلغ اعتبار مشتریان",
    type: "link",
    href: routes.employee["balance-increases"].root,
    icon: (size, strokeWidth) => (
      <Wallet size={size || 18} strokeWidth={strokeWidth || 1.5} />
    ),
    subMenu: [],
  },

  {
    title: "ثبت فاکتور",
    type: "link",
    href: routes.employee["factor-registration"].root,
    icon: (size, strokeWidth) => (
      <FilePlus size={size || 18} strokeWidth={strokeWidth || 1.5} />
    ),
    subMenu: [],
  },

  {
    title: "دسته بندی مشتریان",
    type: "link",
    href: routes.employee["user-categories"].root,
    icon: (size, strokeWidth) => (
      <LibraryBig size={size || 18} strokeWidth={strokeWidth || 1.5} />
    ),
    subMenu: [],
  },

  {
    title: "مدیریت اقساط",
    type: "subMenu",
    icon: (size, strokeWidth) => (
      <List size={size || 18} strokeWidth={strokeWidth || 1.5} />
    ),
    subMenu: [
      {
        title: "همه ی اقساط عقب افتاد",
        href: routes.employee.installment["delay-all"],
        icon: (size, strokeWidth) => (
          <CircleChevronLeft
            size={size || 18}
            strokeWidth={strokeWidth || 1.5}
          />
        ),
      },
      {
        title: "اقساط عقب افتاده جاری",
        href: routes.employee.installment.delay,
        icon: (size, strokeWidth) => (
          <CircleChevronLeft
            size={size || 18}
            strokeWidth={strokeWidth || 1.5}
          />
        ),
      },
      {
        title: "مشتریان خوش حساب",
        href: routes.employee.installment["no-Delay"],
        icon: (size, strokeWidth) => (
          <CircleChevronLeft
            size={size || 18}
            strokeWidth={strokeWidth || 1.5}
          />
        ),
      },
    ],
  },

  {
    title: "ارگان ها",
    type: "link",
    href: routes.employee.organs.root,
    icon: (size, strokeWidth) => (
      <LibraryBig size={size || 18} strokeWidth={strokeWidth || 1.5} />
    ),
    subMenu: [],
  },

  {
    title: "مدیریت محصولات",
    type: "text",
  },

  {
    title: "نرم افزار دشت",
    type: "subMenu",
    icon: (size, strokeWidth) => (
      <Cog size={size || 18} strokeWidth={strokeWidth || 1.5} />
    ),
    subMenu: [
      {
        title: "محصولات",
        href: routes.employee.dasht.products,
        icon: (size, strokeWidth) => (
          <List size={size || 18} strokeWidth={strokeWidth || 1.5} />
        ),
      },
    ],
  },

  {
    title: "دسته بندی محصولات",
    type: "link",
    href: routes.employee.categories.root,
    icon: (size, strokeWidth) => (
      <LibraryBig size={size || 18} strokeWidth={strokeWidth || 1.5} />
    ),
    subMenu: [],
  },
];
