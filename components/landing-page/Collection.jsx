import React from "react";
import circle from "@/public/img/collection/circle.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import a from "@/public/img/heroSection/section-1.png";
import sale from "@/public/img/collection/sale.svg";
import Link from "next/link";

// carousel
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Collection() {
  return (
    <div className="">
      <div className="lg:p-12 max-lg:py-9 max-lg:px-9  ">
       
        <div className="bg-blue rounded-3xl lg:p-9 max-lg:p-6 max-md:p-4">
          <div className="flex flex-wrap justify-center items-center max-lg:flex-col ">
            <div className="w-2/6 lg:relative max-lg:w-full">
              <div className="p-7">
                <div className="flex flex-col justify-center items-center gap-6 z-20 ">
                  <p className="text-2xl text-center">
                    بهترین کالکشن لباس های زنانه
                  </p>
                  <Button className="bg-orange !shadow-2xl max-md:text-sm">
                    همه محصولات
                  </Button>
                </div>

                <Image
                  src={circle}
                  alt="alt"
                  width={100}
                  height={100}
                  className="w-28 h-28 absolute -bottom-44 -left-24 max-lg:hidden"
                />
                <Image
                  src={circle}
                  alt="alt"
                  width={100}
                  height={100}
                  className="w-20 h-20 absolute top-4 right-24 max-lg:hidden"
                />
                <Image
                  src={circle}
                  alt="alt"
                  width={100}
                  height={100}
                  className="w-12 h-12 absolute -top-20 left-9 max-lg:hidden"
                />
              </div>
            </div>
            <div className="w-4/6 max-lg:w-full">
              <div className="p-7">
                <Carousel dir="ltr">
                  <CarouselContent>
                    <CarouselItem className="basis-1/3 relative">
                      <div className="bg-white shadow-inner rounded-xl flex flex-col gap-5">
                        <Image
                          src={a}
                          width={540}
                          height={480}
                          alt="alt"
                          className="h-72"
                        />

                        <Image
                          src={sale}
                          width={540}
                          height={480}
                          alt="alt"
                          className="w-14 h-14 absolute top-0 left-[10px] "
                        />
                        <span className="absolute top-3 left-[22px] text-white">
                          30%
                        </span>
                        <div className="flex flex-col justify-center items-center gap-4 pb-7">
                          <p className=" text-xl line-clamp-1">لباس زنانه</p>
                          <p className=" text-xl">
                            492,000
                            <span className="text-[#6FB2CF] font-bold pr-2">
                              تومان
                            </span>
                          </p>
                        </div>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3 relative">
                      <div className="bg-white shadow-inner rounded-xl flex flex-col gap-5">
                        <Image
                          src={a}
                          width={540}
                          height={480}
                          alt="alt"
                          className="h-72"
                        />

                        <Image
                          src={sale}
                          width={540}
                          height={480}
                          alt="alt"
                          className="w-14 h-14 absolute top-0 left-[10px] "
                        />
                        <span className="absolute top-3 left-[22px] text-white">
                          30%
                        </span>
                        <div className="flex flex-col justify-center items-center gap-4 pb-7">
                          <p className=" text-xl line-clamp-1">لباس زنانه</p>
                          <p className=" text-xl">
                            492,000
                            <span className="text-[#6FB2CF] font-bold pr-2">
                              تومان
                            </span>
                          </p>
                        </div>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3 relative">
                      <div className="bg-white shadow-inner rounded-xl flex flex-col gap-5">
                        <Image
                          src={a}
                          width={540}
                          height={480}
                          alt="alt"
                          className="h-72"
                        />

                        <Image
                          src={sale}
                          width={540}
                          height={480}
                          alt="alt"
                          className="w-14 h-14 absolute top-0 left-[10px] "
                        />
                        <span className="absolute top-3 left-[22px] text-white">
                          30%
                        </span>
                        <div className="flex flex-col justify-center items-center gap-4 pb-7">
                          <p className=" text-xl line-clamp-1">لباس زنانه</p>
                          <p className=" text-xl">
                            492,000
                            <span className="text-[#6FB2CF] font-bold pr-2">
                              تومان
                            </span>
                          </p>
                        </div>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3 relative">
                      <div className="bg-white shadow-inner rounded-xl flex flex-col gap-5">
                        <Image
                          src={a}
                          width={540}
                          height={480}
                          alt="alt"
                          className="lg:h-72 max-md:h-32"
                        />

                        <Image
                          src={sale}
                          width={540}
                          height={480}
                          alt="alt"
                          className="w-14 h-14 absolute top-0 left-[10px] "
                        />
                        <span className="absolute top-3 left-[22px] text-white">
                          30%
                        </span>
                        <div className="flex flex-col justify-center items-center gap-4 pb-7">
                          <p className=" text-xl">لباس زنانه</p>
                          <p className=" text-xl">
                            492,000
                            <span className="text-[#6FB2CF] font-bold pr-2">
                              تومان
                            </span>
                          </p>
                        </div>
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
