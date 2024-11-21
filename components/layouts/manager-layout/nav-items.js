import { routes } from "@/routes/routes";
import {
  Home,
  LayoutDashboard,
  UsersRound,
  UserPlus,
  Users,
  Wallet,
  PlusCircle,
  CircleEllipsis,
  AlertCircle,
  BadgePercent,
  List,
  CircleChevronLeft,
  LibraryBig,
  Cog,
  LogIn,
  User2,
  User,
  Lock,
  FilePlus,
  ArrowRightLeft,
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
    href: routes.manager.dashboard,
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
        href: routes.manager.profile.details,
        icon: (size, strokeWidth) => (
          <User2 size={size || 18} strokeWidth={strokeWidth || 1.5} />
        ),
      },
      {
        title: "ویرایش مشخصات کاربری",
        href: routes.manager.profile["update-info"],
        icon: (size, strokeWidth) => (
          <User2 size={size || 18} strokeWidth={strokeWidth || 1.5} />
        ),
      },
      {
        title: "ویرایش رمز عبور",
        href: routes.manager.profile["update-password"],
        icon: (size, strokeWidth) => (
          <Lock size={size || 18} strokeWidth={strokeWidth || 1.5} />
        ),
      },
    ],
  },

  {
    title: "کاربران",
    type: "text",
  },
  {
    title: "ثبت فاکتور",
    type: "link",
    href: routes.manager["factor-registration"].root,
    icon: (size, strokeWidth) => (
      <FilePlus size={size || 18} strokeWidth={strokeWidth || 1.5} />
    ),
    subMenu: [],
  },

  {
    title: "تنظیمات دشت",
    type: "subMenu",
    icon: (size, strokeWidth) => (
      <Cog size={size || 18} strokeWidth={strokeWidth || 1.5} />
    ),
    subMenu: [
      {
        title: "ورود",
        href: routes.manager.dasht.login,
        icon: (size, strokeWidth) => (
          <LogIn size={size || 18} strokeWidth={strokeWidth || 1.5} />
        ),
      },
    ],
  },

  {
    title: "مدیریت کاربران",
    type: "subMenu",
    icon: (size, strokeWidth) => (
      <Users size={size || 18} strokeWidth={strokeWidth || 1.5} />
    ),
    subMenu: [
      {
        title: "همه کاربران",
        href: routes.manager.users.root,
        icon: (size, strokeWidth) => (
          <UsersRound size={size || 18} strokeWidth={strokeWidth || 1.5} />
        ),
      },
      {
        title: "افزودن کاربر",
        href: routes.manager.users.create,
        icon: (size, strokeWidth) => (
          <UserPlus size={size || 18} strokeWidth={strokeWidth || 1.5} />
        ),
      },
    ],
  },
  {
    title: "تراکنش ها",
    type: "subMenu",
    icon: (size, strokeWidth) => (
      <ArrowRightLeft size={size || 18} strokeWidth={strokeWidth || 1.5} />
    ),
    subMenu: [
      {
        title: "تراکنش های امروز",
        href: routes.manager.transaction.daily,
        icon: (size, strokeWidth) => (
          <ArrowRightLeft size={size || 18} strokeWidth={strokeWidth || 1.5} />
        ),
      },
      {
        title: "تراکنش های هفته",
        href: routes.manager.transaction.weekly,
        icon: (size, strokeWidth) => (
          <ArrowRightLeft size={size || 18} strokeWidth={strokeWidth || 1.5} />
        ),
      },
      {
        title: "تراکنش های ماه",
        href: routes.manager.transaction.monthly,
        icon: (size, strokeWidth) => (
          <ArrowRightLeft size={size || 18} strokeWidth={strokeWidth || 1.5} />
        ),
      },
      {
        title: "تراکنش های همه",
        href: routes.manager.transaction.all,
        icon: (size, strokeWidth) => (
          <ArrowRightLeft size={size || 18} strokeWidth={strokeWidth || 1.5} />
        ),
      },
      {
        title: "تراکنش های هر کاربر",
        href: routes.manager.transaction.users.root,
        icon: (size, strokeWidth) => (
          <UsersRound size={size || 18} strokeWidth={strokeWidth || 1.5} />
        ),
      },
    ],
  },

  {
    title: "مدیریت ارگان ها",
    type: "subMenu",
    icon: (size, strokeWidth) => (
      <LibraryBig size={size || 18} strokeWidth={strokeWidth || 1.5} />
    ),
    subMenu: [
      {
        title: "همه ارگان ها",
        href: routes.manager.organs.root,
        icon: (size, strokeWidth) => (
          <LibraryBig size={size || 18} strokeWidth={strokeWidth || 1.5} />
        ),
      },
      {
        title: "افزودن ارگان",
        href: routes.manager.organs.create,
        icon: (size, strokeWidth) => (
          <PlusCircle size={size || 18} strokeWidth={strokeWidth || 1.5} />
        ),
      },
    ],
  },

  {
    title: "دسته بندی مشتریان",
    type: "subMenu",
    icon: (size, strokeWidth) => (
      <LibraryBig size={size || 18} strokeWidth={strokeWidth || 1.5} />
    ),
    subMenu: [
      {
        title: "همه دسته بندی ها",
        href: routes.manager["user-categories"].root,
        icon: (size, strokeWidth) => (
          <LibraryBig size={size || 18} strokeWidth={strokeWidth || 1.5} />
        ),
      },
      {
        title: "افزودن دسته بندی",
        href: routes.manager["user-categories"].create,
        icon: (size, strokeWidth) => (
          <PlusCircle size={size || 18} strokeWidth={strokeWidth || 1.5} />
        ),
      },
    ],
  },

  {
    title: "مدیریت افزایش مبالغ اعتبار",
    type: "subMenu",
    icon: (size, strokeWidth) => (
      <Wallet size={size || 18} strokeWidth={strokeWidth || 1.5} />
    ),
    subMenu: [
      {
        title: "افزایش مبلغ اعتبار مشتریان",
        href: routes.manager["balance-increases"].root,
        icon: (size, strokeWidth) => (
          <PlusCircle size={size || 18} strokeWidth={strokeWidth || 1.5} />
        ),
      },
      {
        title: "درخواست های در انتظار تایید",
        href: routes.manager["balance-increases"].pending.root,
        icon: (size, strokeWidth) => (
          <CircleEllipsis size={size || 18} strokeWidth={strokeWidth || 1.5} />
        ),
      },
    ],
  },

  {
    title: "امکانات اصلی",
    type: "text",
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
        href: routes.manager.installment["delay-all"],
        icon: (size, strokeWidth) => (
          <CircleChevronLeft
            size={size || 18}
            strokeWidth={strokeWidth || 1.5}
          />
        ),
      },
      {
        title: "اقساط عقب افتاده جاری",
        href: routes.manager.installment.delay,
        icon: (size, strokeWidth) => (
          <CircleChevronLeft
            size={size || 18}
            strokeWidth={strokeWidth || 1.5}
          />
        ),
      },
      {
        title: "مشتریان خوش حساب",
        href: routes.manager.installment["no-Delay"],
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
    title: "کد تخفیف",
    type: "subMenu",
    icon: (size, strokeWidth) => (
      <BadgePercent size={size || 18} strokeWidth={strokeWidth || 1.5} />
    ),
    subMenu: [
      {
        title: "تعریف کد تخفیف",
        href: routes.manager["discount-codes"].create,
        icon: (size, strokeWidth) => (
          <CircleChevronLeft
            size={size || 18}
            strokeWidth={strokeWidth || 1.5}
          />
        ),
      },
      {
        title: "همه کد های تخفیف",
        href: routes.manager["discount-codes"].all,
        icon: (size, strokeWidth) => (
          <CircleChevronLeft
            size={size || 18}
            strokeWidth={strokeWidth || 1.5}
          />
        ),
      },
      {
        title: "کد های تخفیف اختصاصی مشتریان",
        href: routes.manager["discount-codes"].customers,
        icon: (size, strokeWidth) => (
          <CircleChevronLeft
            size={size || 18}
            strokeWidth={strokeWidth || 1.5}
          />
        ),
      },
      {
        title: "کد های تخفیف کالا ها",
        href: routes.manager["discount-codes"].products,
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
    title: "بنر ها",
    type: "subMenu",
    icon: (size, strokeWidth) => (
      <AlertCircle size={size || 18} strokeWidth={strokeWidth || 1.5} />
    ),
    subMenu: [
      {
        title: "صفحه اصلی",
        href: routes.manager.banners["main-page"],
        icon: (size, strokeWidth) => (
          <CircleChevronLeft
            size={size || 18}
            strokeWidth={strokeWidth || 1.5}
          />
        ),
      },
    ],
  },
];
