import React from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBagIcon } from "lucide-react";
import Image from "next/image";
import a from "@/public/img/heroSection/section-1.png";
import sale from "@/public/img/collection/sale.svg";

// accordian
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// carousel
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// tabs
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function View() {
  return (
    <div>
      <div className="px-20">
        <div className="grid grid-cols-2 items-center justify-between gap-7 max-lg:grid-cols-1">
          <div className="flex flex-col gap-12 max-lg:order-2">
            <h2 className="py-9 text-lg font-bold">مانتو کوتاه مشکی</h2>
            <div className="flex w-full items-center justify-center gap-4">
              <div className="rounded-md border border-black p-2">
                <p>راهنمای سایز</p>
              </div>
              <div className="rounded-md border border-black p-2">
                <p>xl</p>
              </div>
              <div className="rounded-md border border-black p-2">
                <p>lg</p>
              </div>
              <div className="rounded-md border border-black p-2">
                <p>md</p>
              </div>
              <div className="rounded-md border border-black p-2">
                <p>sm</p>
              </div>
            </div>
            <div className="flex w-full items-center justify-center gap-4">
              <div className="rounded-md bg-rose-500 p-2">
                <p>قرمز</p>
              </div>
              <div className="rounded-md bg-lime-500 p-2">
                <p>سبز</p>
              </div>
              <div className="rounded-md bg-green-500 p-2">
                <p>سبز</p>
              </div>
              <div className="rounded-md bg-emerald-500 p-2">
                <p>سبز</p>
              </div>
              <div className="rounded-md bg-cyan-500 p-2">
                <p>آبی</p>
              </div>
              <div className="rounded-md bg-sky-500 p-2">
                <p>آبی</p>
              </div>
            </div>
            <div className="flex w-full items-center justify-between gap-4">
              <p className="text-xl font-bold">GUCCI</p>
              <p className="text-xl font-bold">1,794,324</p>
            </div>
            {/* <div className="w-full">
              <Button className="flex w-full items-center gap-4 !shadow-2xl max-md:text-sm">
                <p className="text-white">افزودن به سبد خرید</p>
                <ShoppingBagIcon stroke="#fff" />
              </Button>
            </div> */}
            <div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>توضیحات</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>جزئیات و مراقبت</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>اندازه و تناسب</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>تحویل و مرجوعی</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="max-lg:order-1">
            <Image
              src={a}
              alt="dress"
              width={540}
              height={480}
              className="mb-14 h-96 w-full"
            />
            <Carousel dir="ltr">
              <CarouselContent>
                <CarouselItem className="basis-1/4">
                  <div className="flex flex-col gap-5 rounded-xl bg-white shadow-inner">
                    <Image
                      src={a}
                      width={540}
                      height={480}
                      alt="alt"
                      className="h-44 w-full"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/4">
                  <div className="flex flex-col gap-5 rounded-xl bg-white shadow-inner">
                    <Image
                      src={a}
                      width={540}
                      height={480}
                      alt="alt"
                      className="h-44 w-full"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/4">
                  <div className="flex flex-col gap-5 rounded-xl bg-white shadow-inner">
                    <Image
                      src={a}
                      width={540}
                      height={480}
                      alt="alt"
                      className="h-44 w-full"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/4">
                  <div className="flex flex-col gap-5 rounded-xl bg-white shadow-inner">
                    <Image
                      src={a}
                      width={540}
                      height={480}
                      alt="alt"
                      className="h-44 w-full"
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </div>
        <div className="my-20">
          <Tabs defaultValue="description" className="bg-inherit" dir="rtl">
            <TabsList className="bg-inherit">
              <TabsTrigger value="description">توضیحات</TabsTrigger>
              <TabsTrigger value="specifications">مشخصات</TabsTrigger>
              <TabsTrigger value="comment">دیدگاه مشتریان</TabsTrigger>
            </TabsList>
            <TabsContent value="description">
              Make changes to your account here.
            </TabsContent>
            <TabsContent value="specifications">
              Change your password here.
            </TabsContent>
            <TabsContent value="comment">
              Change your password here.
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default View;
