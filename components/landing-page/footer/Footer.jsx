import React from "react";
import bg from "@/public/img/bgFooter.svg";
import Image from "next/image";
import insta from "@/public/img/SNSIcon/insta.svg";
import telegram from "@/public/img/SNSIcon/telegram.svg";
import whatsapp from "@/public/img/SNSIcon/whatsapp.svg";
import logo from "@/public/img/logo.svg";
import { MoveLeftIcon } from "lucide-react";
import Link from "next/link";
import { farsiNumber } from "@/lib/farsi-number";

function Footer() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bg.src})`,
          width: "100%",
          height: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          //   backgroundAttachment: "fixed",
        }}
      >
        <div className="mx-auto w-4/5 py-12 pt-20">
          <div className="grid grid-cols-2 items-center justify-center gap-9 max-md:grid-cols-1">
            <div>
              <h2 className="text-center text-5xl text-orange max-lg:text-xl">
                با ما به روز باشید
              </h2>
            </div>
            <div className="w-2/3 rounded-bl-[50px] rounded-tr-[50px] bg-[#D1DFE5] p-9 max-md:w-full">
              <p className="mb-7 text-xl font-semibold max-lg:text-base max-md:text-sm">
                ما را در شبکه های اجتماعی دنبال کنید
              </p>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-7">
                  <Link href="https://www.instagram.com/@charsoogh_">
                    <Image
                      src={insta}
                      width={100}
                      height={100}
                      alt="alt"
                      className="h-9 w-9"
                    />
                  </Link>
                  <Link href="/">
                    <Image
                      src={telegram}
                      width={100}
                      height={100}
                      alt="alt"
                      className="h-9 w-9"
                    />
                  </Link>
                  <Link href="/">
                    <Image
                      src={whatsapp}
                      width={100}
                      height={100}
                      alt="alt"
                      className="h-9 w-9"
                    />
                  </Link>
                </div>
                <div>
                  <MoveLeftIcon className="size-9" />
                </div>
              </div>
              <div className="mt-3 border border-black"></div>
            </div>
          </div>
          <div className="mt-9 grid grid-cols-4 justify-between gap-9 max-lg:grid-cols-2 max-lg:gap-16 max-md:grid-cols-1 max-md:gap-24">
            <div className="flex flex-col items-center  gap-9">
              <h2 className="text-center text-2xl font-bold">اطلاعات تماس</h2>
              <div className="flex flex-col gap-4">
                <Link href="/">
                  <div className="flex  justify-between gap-5">
                    <p className="text-xl text-black">آدرس</p>
                    <p className="text-base text-[#6E7578] text-center">
                      کرمان خیابان شهید بهشتی حدفاصل چهارراه طهماسب آباد و
                      باغملی مجمتع پوشاک خانواده چارسوق
                    </p>
                  </div>
                </Link>
                <Link href="tel:034-32233700">
                  <div className="flex items-center justify-between gap-5">
                    <p className="whitespace-nowrap text-xl text-black">
                      شماره تماس
                    </p>
                    <p className="whitespace-nowrap text-base text-[#6E7578]">
                      {farsiNumber("034-32233700")}
                    </p>
                  </div>
                </Link>
                <Link href="tel:09370383634">
                  <div className="flex items-center justify-between gap-5">
                    <p className="whitespace-nowrap text-xl text-black">
                      شماره پشتیبان
                    </p>
                    <p className="whitespace-nowrap text-base text-[#6E7578]">
                      {farsiNumber("09370383634")}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center  gap-9">
              <h2 className="text-center text-2xl font-bold">محصولات</h2>
              <div className="flex flex-col gap-4">
                <Link href="/">
                  <p className="text-xl text-[#6E7578]">زنانه</p>
                </Link>
                <Link href="/">
                  <p className="text-xl text-[#6E7578]">مردانه</p>
                </Link>
                <Link href="/">
                  <p className="text-xl text-[#6E7578]">بچگانه</p>
                </Link>
                <Link href="/">
                  <p className="text-xl text-[#6E7578]">کفش</p>
                </Link>
                <Link href="/">
                  <p className="text-xl text-[#6E7578]">اکسسوری</p>
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center  gap-9">
              <h2 className="text-center text-2xl font-bold">صفحات</h2>
              <div className="flex flex-col gap-4">
                <Link href="/">
                  <p className="text-xl text-[#6E7578]">مقالات</p>
                </Link>
                <Link href="/">
                  <p className="text-xl text-[#6E7578]">تماس با ما</p>
                </Link>
                <Link href="/about">
                  <p className="text-xl text-[#6E7578]">درباره ما</p>
                </Link>
                <Link href="/">
                  <p className="text-xl text-[#6E7578]">خانه</p>
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center  gap-9">
              <h2 className="text-center text-2xl font-bold">
                مرکز خرید چارسوق
              </h2>
              <Image
                src={logo}
                width={100}
                height={100}
                alt="logo"
                className="h-44 w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-600">
        <div className="container mx-auto flex items-center justify-center gap-4 px-5 py-4 max-md:flex-col">
          <p className="text-lg capitalize text-white xl:text-center">
            طراحی شده توسط{" "}
            <a
              href="https://novinbin.com/"
              className="mr-1 text-xl text-orange"
            >
              مهندسی نوآوران نوین بین
            </a>
          </p>
          <p className="text-lg capitalize text-white xl:text-center">
            تمامی حقوق سایت برای چهارسوق محفوظ است.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
