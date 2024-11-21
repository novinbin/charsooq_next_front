import React from "react";
import filter from "@/public/img/allProductIcon/Filter.svg";
import filterBox from "@/public/img/allProductIcon/Lock.svg";
import category from "@/public/img/allProductIcon/category.svg";
import price from "@/public/img/allProductIcon/price.svg";
import access from "@/public/img/allProductIcon/access.svg";
import product from "@/public/img/article.png";
import more from "@/public/img/allProductIcon/moreProduct.svg";
import Image from "next/image";
import { X } from "lucide-react";
import { MoveUpRightIcon } from "lucide-react";

function AllProduct() {
  return (
    <div>
      <div className="lg:h-screen">
        <div className="bg-[#F0F0F0]  px-20 py-4 flex flex-wrap  justify-between items-center gap-4">
          <div className=" flex items-center gap-5">
            <Image
              src={filter}
              alt="filter icon"
              width={100}
              height={100}
              className="w-7 h-7"
            />
            <div className="bg-[#BFBFBF] rounded-xl flex items-center gap-3 p-2 px-4 ">
              <X className="size-6 cursor-pointer" />
              <p className="w-auto whitespace-nowrap">گران ترین</p>
            </div>
            <div className="bg-[#BFBFBF] rounded-xl flex items-center gap-3 p-2 px-4 ">
              <X className="size-6 cursor-pointer" />
              <p className="w-auto whitespace-nowrap">زنانه</p>
            </div>
          </div>
          <div>
            <p className="font-bold">149 محصول</p>
          </div>
        </div>
        <div className="w-4/5 mx-auto flex flex-wrap justify-between  mt-32">
          <div className="w-1/4 border border-[#BFBFBF] rounded-xl  py-6">
            <div className="flex items-center gap-4 px-6">
              <Image
                src={filterBox}
                alt="filter icon"
                width={100}
                height={100}
                className="w-9 h-9"
              />
              <p className="text-[#B95962] text-xl">فیلترها</p>
            </div>
            <div className="border border-[#B95962] w-full my-4"></div>
            <div className="flex flex-col gap-9">
              <div className="flex items-center gap-4 px-6">
                <Image
                  src={category}
                  alt="filter icon"
                  width={100}
                  height={100}
                  className="w-7 h-7"
                />
                <p className=" text-xl">دسته بندی</p>
              </div>
              <div className="flex items-center gap-4 px-6">
                <Image
                  src={price}
                  alt="filter icon"
                  width={100}
                  height={100}
                  className="w-7 h-7"
                />
                <p className=" text-xl">قیمت</p>
              </div>
              <div className="flex items-center gap-4 px-6">
                <Image
                  src={access}
                  alt="filter icon"
                  width={100}
                  height={100}
                  className="w-7 h-7"
                />
                <p className=" text-xl">فقط کالاهای موجود</p>
              </div>
            </div>
          </div>
          <div className="w-3/4 max-lg:w-1/2">
            <div className="mx-20">
              <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 justify-between items-center gap-9">
                <div className="shadow-2xl rounded-xl">
                  <Image
                    src={product}
                    alt="product image"
                    width={540}
                    height={480}
                    className="w-full h-64 rounded-t-lg"
                  />
                  <div className="bg-[#979899] mx-6 rounded-xl relative cursor-pointer">
                    <p className="text-right text-white px-4 py-2 line-clamp-1 text-xl">
                      پیراهن مشکی EN SHEسسRT
                    </p>
                    <div className="flex justify-between items-center">
                      <Image
                        src={more}
                        alt="more background"
                        width={100}
                        height={100}
                        className="w-14 h-14 rounded-br-xl "
                      />
                      <MoveUpRightIcon
                        stroke="#fff"
                        className="absolute bottom-2 right-2"
                      />{" "}
                      <p className="text-left text-white px-4 py-2 text-xl">۱۹۹,۰۰۰</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllProduct;
