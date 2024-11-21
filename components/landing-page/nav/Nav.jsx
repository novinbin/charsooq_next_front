"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "@/public/img/logo.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { useUser } from "@/hooks/use-user";
import { routes } from "@/routes/routes";

function Nav() {
  const userHook = useUser();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const pannelLink = () => {
    if (userHook.userData.role === "manager") {
      return routes.manager.dashboard;
    } else if (userHook.userData.role === "author") {
      return routes.author.dashboard;
    } else if (userHook.userData.role === "employee") {
      return routes.employee.dashboard;
    } else if (userHook.userData.role === "user") {
      return routes.user.dashboard;
    } else if (userHook.userData.role === "organ") {
      return routes.organ.dashboard;
    } else {
      return routes.auth.signIn;
    }
  };

  return (
    <div>
      <div className="max-lg:hidden lg:visible">
        <div className="flex h-32 items-center px-16">
          <div className="grid w-full grid-cols-3 items-center justify-between gap-9">
            <div className="flex items-center gap-6">
              <Link href={pannelLink()}>
                <Button
                  variant="outline"
                  className="bg-orange !shadow-2xl max-md:text-sm"
                >
                  {userHook.userData ? "پنل کاربری" : " ورود یا ثبت نام"}
                </Button>
              </Link>
              {/* <Button
                variant="outline"
                className="!hover:text-white !rounded-none !rounded-bl-2xl !rounded-br-2xl !rounded-tl-2xl !border !border-orange bg-white text-black !shadow-2xl max-md:text-sm"
              >
                <span className="mx-2 rounded-md bg-orange px-2 text-white">
                  4
                </span>
                سبد خرید
              </Button> */}
            </div>
            <div className="flex items-center justify-around gap-7">
              <Link href={routes.landing.root}>
                <p className="text-lg font-semibold text-orange whitespace-nowrap">خانه</p>
              </Link>
              <Link href="/">
                <p className="text-lg font-semibold whitespace-nowrap">محصولات</p>
              </Link>
              <Link href="/about">
                <p className="text-lg font-semibold whitespace-nowrap">درباره ما</p>
              </Link>
              <Link href="/">
                <p className="text-lg font-semibold whitespace-nowrap">تماس با ما</p>
              </Link>
              <Link href={routes.landing.blogs.root}>
                <p className="text-lg font-semibold whitespace-nowrap">مقالات</p>
              </Link>
            </div>
            <div className="flex items-center justify-end">
              <Image
                src={logo}
                alt="logo 4soogh"
                width={360}
                height={240}
                className="w-36"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-lg:visible lg:hidden">
        <div className="flex h-32 items-center justify-between px-6 md:px-28">
          <div className="lg:hidden">
            <button onClick={toggleMenu}>
              <MenuIcon />
            </button>
          </div>
          <div className="flex-grow text-center">
            <Image
              src={logo}
              alt="logo 4soogh"
              width={360}
              height={240}
              className="mx-auto w-36"
            />
          </div>
          <div className="flex items-center gap-6">
            <Link href={pannelLink()}>
              <Button
                variant="outline"
                className="bg-orange !shadow-2xl max-md:text-sm"
              >
                {userHook.userData ? "پنل کاربری" : " ورود یا ثبت نام"}
              </Button>
            </Link>
            {/* <Button
              variant="outline"
              className="!hover:text-white !rounded-none !rounded-bl-2xl !rounded-br-2xl !rounded-tl-2xl !border !border-orange bg-white text-black !shadow-2xl max-lg:hidden max-md:text-sm"
            >
              <span className="mx-2 rounded-md bg-orange px-2 text-white">
                4
              </span>
              سبد خرید
            </Button> */}
          </div>
        </div>
        {isMenuOpen && (
          <div className="px-6 lg:hidden">
            <Link href={routes.landing.root}>
              <p className="text-lg font-semibold text-orange">خانه</p>
            </Link>
            <Link href="/">
              <p className="text-lg font-semibold">محصولات</p>
            </Link>
            <Link href="/about">
              <p className="text-lg font-semibold">درباره ما</p>
            </Link>
            <Link href="/">
              <p className="text-lg font-semibold">تماس با ما</p>
            </Link>
            <Link href={routes.landing.blogs.root}>
              <p className="text-lg font-semibold">مقالات</p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;
