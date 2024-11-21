import Image from "next/image";
import Link from "next/link";
import React from "react";
import a from "@/public/img/dressBanner.svg";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronsLeftIcon } from "lucide-react";

function All() {
  return (
    <div className="max-lg:hidden">
      <div className="my-12 flex w-full items-center justify-center gap-9">
        <Link href="">
          <p className="pb-2 text-xl font-semibold">مردانه</p>
        </Link>
        <Link href="">
          <p className="border-b-2 border-black pb-2 text-xl font-semibold">
            زنانه
          </p>
        </Link>
        <Link href="">
          <p className="pb-2 text-xl font-semibold">بچگانه</p>
        </Link>
      </div>
      <div className="relative">
        <div className="w-full px-28 lg:my-9">
          <Image
            src={a}
            alt="alt"
            width={540}
            height={480}
            className="!w-full"
          />
          <Link href="/">
            <div className="absolute bottom-9 right-36 flex items-center justify-between gap-4 !rounded-xl bg-white px-4 py-2 opacity-80 backdrop-blur-sm max-lg:bottom-0 max-lg:right-32">
              <p className="text-2xl font-bold text-orange max-lg:text-base">
                لباس زنانه
              </p>
              <Button className="bg-orange">
                <ChevronLeft className="h-5 w-5 text-white" />
              </Button>
            </div>
          </Link>
          <Link href="/">
            <div className="absolute left-36 top-9 flex items-center justify-between gap-4 !rounded-xl bg-white px-4 py-2 opacity-80 backdrop-blur-sm max-lg:left-32 max-lg:top-0">
              <p className="text-2xl font-bold text-orange max-lg:text-base">
                لباس مردانه
              </p>
              <Button className="bg-orange">
                <ChevronLeft className="h-5 w-5 text-white" />
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default All;
