import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import a from "@/public/img/heroSection/section-1.png";
import b from "@/public/img/heroSection/section-2.png";
import c from "@/public/img/heroSection/section-3.png";
import d from "@/public/img/heroSection/section-4.png";
import e from "@/public/img/heroSection/4soogh.png";

function HeroSection({ banners }) {


  return (
    <div className="lg:h-screen">
      <div className="flex justify-center max-lg:px-9 max-md:px-4 lg:px-20">
        <div className="grid grid-cols-3 items-center justify-center max-lg:grid-cols-1 lg:gap-7">
          <div>
            <Image
              src={banners ? banners?.hero_right?.photo : b}
              alt="a man sit on chair"
              className="rounded-lg object-cover max-lg:hidden lg:h-screen"
              width={540}
              height={480}
            />
          </div>
          <div className="flex items-center justify-between lg:h-screen">
            <div className="flex flex-col justify-between lg:h-full">
              <div className="h-1/4">
                <Image
                  src={banners ? banners?.hero_top?.photo : c}
                  alt="man shirt"
                  className="h-full rounded-lg object-cover"
                  width={540}
                  height={480}
                />
              </div>

              <div className="flex h-1/2 flex-col items-center justify-around overflow-hidden py-1">
                <h3 className="text-4xl font-semibold text-[#484848] max-lg:text-lg max-md:text-base">
                  فروشگاه
                </h3>
                <Image
                  src={e}
                  alt="4soogh"
                  className="w-full"
                  width={540}
                  height={480}
                />
                <p className="text-xl text-[#484848] max-md:text-sm">
                  برای استایل هر روز شما
                </p>
                <Button className="bg-orange !shadow-2xl max-md:text-sm">
                  همه محصولات
                </Button>
              </div>

              <div className="h-1/4">
                <Image
                  src={banners ? banners?.hero_bottom?.photo : d}
                  alt="a woman with bag in shop to buy shirt"
                  className="h-full rounded-lg object-cover"
                  width={540}
                  height={480}
                />
              </div>
            </div>
          </div>
          <div>
            <Image
              src={banners ? banners.hero_left.photo : a}
              alt="a man sit on chair"
              className="rounded-lg object-cover max-lg:hidden lg:h-screen"
              width={540}
              height={480}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
