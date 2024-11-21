import Image from "next/image";
import React from "react";
import banner from "@/public/img/banner.png";
import bannerText from "@/public/img/bannerText.png";

function Banner({ banners }) {
  return (
    <div>
      <Image
        src={banners ? banners.primary_banner.photo : bannerText}
        width={1080}
        height={720}
        alt="banner"
        className="w-full lg:h-screen"
      />
    </div>
  );
}

export default Banner;
