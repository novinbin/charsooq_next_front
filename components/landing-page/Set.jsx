import React from "react";
import men from "@/public/img/set/menSet.jpg";
import woman from "@/public/img/set/womanSet.jpg";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MoveLeft, MoveRight } from "lucide-react";

function Set({ banners }) {
  return (
    <div>
      <div className="mb-20 px-20">
        <div className="grid grid-cols-2 items-center gap-9 max-md:grid-cols-1">
          <Link href="/" className="relative">
            <Image
              src={banners ? banners.women_set.photo : woman}
              alt="woman set"
              width={720}
              height={540}
              className="w-full rounded-lg"
            />
            <Button
              variant="outline"
              className="absolute bottom-4 right-4 px-4 py-7 text-lg"
            >
              ست زنانه
              <span className="mr-4">
                <MoveRight />
              </span>
            </Button>
          </Link>
          <Link href="/" className="relative">
            <Image
              src={banners ? banners.men_set.photo : men}
              alt="men set"
              width={720}
              height={540}
              className="w-full rounded-lg"
            />

            <Button
              variant="outline"
              className="absolute bottom-4 left-4 px-4 py-7 text-lg"
            >
              ست مردانه
              <span className="mr-4">
                <MoveLeft />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Set;
