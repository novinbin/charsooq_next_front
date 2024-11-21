"use client";

import Image from "next/image";
import { routes } from "@/routes/routes";
import Link from "next/link";
import UserPass from "./components/user-pass";
import { authLogo } from "@/constants/images";

const LoginPage = () => {
  return (
    <section className="h-screen w-screen bg-card">
      <div className="md:p0 flex h-full w-full items-center justify-center py-5">
        <div className="md:min-h-5/6 flex h-full w-full rounded-xl shadow-lg md:w-5/6 lg:w-2/3">
          <div className="hidden h-full w-1/2 flex-col items-center justify-center gap-2 bg-gradient-to-bl from-[#FFA600] to-[#FF6361] p-3 text-white md:flex ltr:rounded-l-xl rtl:rounded-r-xl">
            <h1 className="text-2xl font-bold">چارسوق</h1>
            <p className="max-w-64 text-justify text-sm leading-8">
              لطفا برای استفاده از امکانات سایت اطلاعات مشتری خود را وارد نمایید
            </p>
          </div>

          <div className="flex h-full w-full items-center justify-center rounded-l-xl rounded-r-xl border bg-card p-3 md:w-2/3 ltr:md:rounded-l-none rtl:md:rounded-r-none">
            <div className="flex w-full flex-col items-center">
              <Image
                src={authLogo}
                alt="logo"
                width={160}
                height={80}
                className="h-36 w-72"
              />
              <h1 className="mt-2 text-2xl font-bold text-muted-foreground">
                ورود
              </h1>
              <div className="mt-4 flex flex-col items-center gap-2">
                <span className="text-xs">
                  لطفا برای استفاده از امکانات سایت اطلاعات مشتری خود را وارد
                  نمایید
                </span>

                <UserPass />

                <span className="text-sm font-normal">
                  در صورت نداشتن حساب مشتری در سایت{" "}
                  <Link
                    href={routes.auth.signUp}
                    className="font-semibold text-primary hover:underline"
                  >
                    ثبت نام
                  </Link>{" "}
                  کنید
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
