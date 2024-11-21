import Image from "next/image";
import React from "react";
import like from "@/public/img/like.svg";
import article from "@/public/img/article.png";
import calendar from "@/public/img/calendar.svg";
import a from "@/public/img/feature/feature-1.svg";
import b from "@/public/img/feature/feature-2.svg";
import c from "@/public/img/feature/feature-3.svg";
import d from "@/public/img/feature/feature-4.svg";

function Article() {
  return (
    <div>
      <div className="px-20">
        <div className="flex justify-between items-center gap-4">
          <Image src={like} width={100} height={100} className="w-9 h-9" />
          <h2 className="whitespace-nowrap text-orange text-2xl">مقالات</h2>
          <div className=" border w-full border-black mx-2 mt-4"></div>
        </div>
        <div className="mt-20 w-4/5 mx-auto ">
          <div className="grid grid-cols-2 justify-between max-lg:grid-cols-1 max-lg:gap-20  gap-4 mb-20">
            <div>
              <div className="flex flex-col justify-between gap-4">
                <Image
                  src={article}
                  alt="alt"
                  width={480}
                  height={360}
                  className="border border-dashed rounded-xl border-[#D76700] h-[444px] w-full"
                />
                <p className="text-xl font-semibold max-lg:text-base">
                  رونمایی شرکت Panton از ۱۵ رنگ برای پاییز و زمستان ۲۰۲۲
                </p>
                <div className="w-full flex justify-end">
                  <div className="flex items-center gap-4">
                    <Image
                      src={calendar}
                      alt="alt"
                      width={44}
                      height={44}
                      className="w-4 h-4"
                    />
                    <p> آذر ۱۴۰۱/۱۲/۵</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col justify-between items-center gap-9">
                <div className="flex justify-between items-center gap-4">
                  <Image
                    src={article}
                    alt="alt"
                    width={480}
                    height={360}
                    className="border border-dashed rounded-xl border-[#D76700] h-32 w-32"
                  />
                  <div className="flex flex-col gap-4">
                    <p className="text-2xl max-lg:text-base">
                      بهترین عینک‌ها تابستانی ۲۰۲۲
                    </p>
                    <div className="flex justify-end items-center gap-4">
                      <Image
                        src={calendar}
                        alt="alt"
                        width={44}
                        height={44}
                        className="w-4 h-4"
                      />
                      <p> آذر ۱۴۰۱/۱۲/۵</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center gap-4">
                  <Image
                    src={article}
                    alt="alt"
                    width={480}
                    height={360}
                    className="border border-dashed rounded-xl border-[#D76700] h-32 w-32"
                  />
                  <div className="flex flex-col gap-4">
                    <p className="text-2xl max-lg:text-base">
                      بهترین عینک‌ها تابستانی ۲۰۲۲
                    </p>
                    <div className="flex justify-end items-center gap-4">
                      <Image
                        src={calendar}
                        alt="alt"
                        width={44}
                        height={44}
                        className="w-4 h-4"
                      />
                      <p> آذر ۱۴۰۱/۱۲/۵</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center gap-4">
                  <Image
                    src={article}
                    alt="alt"
                    width={480}
                    height={360}
                    className="border border-dashed rounded-xl border-[#D76700] h-32 w-32"
                  />
                  <div className="flex flex-col gap-4">
                    <p className="text-2xl max-lg:text-base">
                      بهترین عینک‌ها تابستانی ۲۰۲۲
                    </p>
                    <div className="flex justify-end items-center gap-4">
                      <Image
                        src={calendar}
                        alt="alt"
                        width={44}
                        height={44}
                        className="w-4 h-4"
                      />
                      <p> آذر ۱۴۰۱/۱۲/۵</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 max-lg:grid-cols-2  justify-center items-center gap-24 mb-20">
          <div className="flex flex-col gap-4 items-center justify-center">
            <Image
              src={d}
              alt="alt"
              width={100}
              height={100}
              className="max-md:w-12 max-lg:w-20 max-lg:h-20 max-md:h-12"
            />
            <p className="text-[#817D7C]">ضمانت اصالت کالا</p>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center">
            <Image
              src={c}
              alt="alt"
              width={100}
              height={100}
              className="max-md:w-12 max-lg:w-20 max-lg:h-20 max-md:h-12"
            />
            <p className="text-[#817D7C]">امکان پرداخت در محل</p>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center">
            <Image
              src={b}
              alt="alt"
              width={100}
              height={100}
              className="max-md:w-12 max-lg:w-20 max-lg:h-20 max-md:h-12"
            />
            <p className="text-[#817D7C]">ارسال پیک پیشتاز</p>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center">
            <Image
              src={a}
              alt="alt"
              width={100}
              height={100}
              className="max-md:w-12 max-lg:w-20 max-lg:h-20 max-md:h-12"
            />
            <p className="text-[#817D7C]">امکان مرجوعی کالا</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
