import Image from "next/image";
import React from "react";
import like from "@/public/img/like.svg";
import a from "@/public/img/heroSection/section-1.png";
import sale from "@/public/img/collection/sale.svg";

// carousel
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Newest() {
  return (
    <div>
      <div className="px-20 ">
        <div className="flex justify-between items-center gap-4">
          <Image src={like} width={100} height={100} className="w-9 h-9" />
          <h2 className="whitespace-nowrap text-orange text-2xl">
            جدیدترین ها
          </h2>
          <div className=" border w-full border-black mx-2 mt-4"></div>
        </div>
        <div className="my-32 w-4/5 mx-auto">
          <Carousel dir="ltr">
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/5 relative">
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
              <CarouselItem className="md:basis-1/2 lg:basis-1/5 relative">
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
              <CarouselItem className="md:basis-1/2 lg:basis-1/5 relative">
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
              <CarouselItem className="md:basis-1/2 lg:basis-1/5 relative">
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
              <CarouselItem className="md:basis-1/2 lg:basis-1/5 relative">
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
              <CarouselItem className="md:basis-1/2 lg:basis-1/5 relative">
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
  );
}

export default Newest;
