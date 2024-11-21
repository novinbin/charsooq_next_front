import Link from "next/link";
import React from "react";
import circle from "@/public/img/sale/circle.png";
import ring from "@/public/img/ring.png";
import Image from "next/image";

// carousel
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Sale() {
  return (
    <div>
      <div className="my-44 lg:relative">
        <div className="bg-[#E2E0DC] w-3/5 mx-auto h-[444px] rounded-2xl !z-10 max-lg:hidden"></div>
        <Image
          src={circle}
          alt="alt"
          width={100}
          height={100}
          className="w-12 h-12 absolute -top-24 right-[444px] max-lg:hidden"
        />
        <Image
          src={circle}
          alt="alt"
          width={100}
          height={100}
          className="w-44 h-44 absolute -top-16 left-[400px] -z-10 max-lg:hidden"
        />
        <Image
          src={circle}
          alt="alt"
          width={100}
          height={100}
          className="w-52 h-52  absolute right-72 -bottom-14 -z-10 max-lg:hidden"
        />
        <Carousel className="px-32 lg:absolute top-20 !z-20 " dir="ltr">
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 xl:basis-1/6 lg:basis-1/4 shadow-lg ">
              <div className="bg-white max-lg:bg-[#E2E0DC]  rounded-xl flex flex-col gap-5  ">
                <Image
                  src={ring}
                  width={540}
                  height={480}
                  alt="alt"
                  className="h-44"
                />
                <div className="flex flex-col justify-center items-center gap-4 pb-7">
                  <p className=" text-xl line-clamp-1">لباس زنانه</p>
                  <p className=" text-xl">
                    492,000
                    <span className="text-[#6FB2CF] font-bold pr-2">تومان</span>
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 xl:basis-1/6 lg:basis-1/4 shadow-lg ">
              <div className="bg-white  rounded-xl flex flex-col gap-5  ">
                <Image
                  src={ring}
                  width={540}
                  height={480}
                  alt="alt"
                  className="h-44"
                />
                <div className="flex flex-col justify-center items-center gap-4 pb-7">
                  <p className=" text-xl line-clamp-1">لباس زنانه</p>
                  <p className=" text-xl">
                    492,000
                    <span className="text-[#6FB2CF] font-bold pr-2">تومان</span>
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 xl:basis-1/6 lg:basis-1/4 shadow-lg ">
              <div className="bg-white  rounded-xl flex flex-col gap-5  ">
                <Image
                  src={ring}
                  width={540}
                  height={480}
                  alt="alt"
                  className="h-44"
                />
                <div className="flex flex-col justify-center items-center gap-4 pb-7">
                  <p className=" text-xl line-clamp-1">لباس زنانه</p>
                  <p className=" text-xl">
                    492,000
                    <span className="text-[#6FB2CF] font-bold pr-2">تومان</span>
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 xl:basis-1/6 lg:basis-1/4 shadow-lg ">
              <div className="bg-white  rounded-xl flex flex-col gap-5  ">
                <Image
                  src={ring}
                  width={540}
                  height={480}
                  alt="alt"
                  className="h-44"
                />
                <div className="flex flex-col justify-center items-center gap-4 pb-7">
                  <p className=" text-xl line-clamp-1">لباس زنانه</p>
                  <p className=" text-xl">
                    492,000
                    <span className="text-[#6FB2CF] font-bold pr-2">تومان</span>
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 xl:basis-1/6 lg:basis-1/4 shadow-lg ">
              <div className="bg-white  rounded-xl flex flex-col gap-5  ">
                <Image
                  src={ring}
                  width={540}
                  height={480}
                  alt="alt"
                  className="h-44"
                />
                <div className="flex flex-col justify-center items-center gap-4 pb-7">
                  <p className=" text-xl line-clamp-1">لباس زنانه</p>
                  <p className=" text-xl">
                    492,000
                    <span className="text-[#6FB2CF] font-bold pr-2">تومان</span>
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 xl:basis-1/6 lg:basis-1/4 shadow-lg ">
              <div className="bg-white  rounded-xl flex flex-col gap-5  ">
                <Image
                  src={ring}
                  width={540}
                  height={480}
                  alt="alt"
                  className="h-44"
                />
                <div className="flex flex-col justify-center items-center gap-4 pb-7">
                  <p className=" text-xl line-clamp-1">لباس زنانه</p>
                  <p className=" text-xl">
                    492,000
                    <span className="text-[#6FB2CF] font-bold pr-2">تومان</span>
                  </p>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}

export default Sale;
