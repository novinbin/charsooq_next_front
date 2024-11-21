"use client";

import { Separator } from "@/components/ui/separator";
import { farsiNumber } from "@/lib/farsi-number";
import { persianPriceFormat } from "@/lib/persian-price-format";
import { columnsProducts } from "./columns-products";
import Image from "next/image";
import { authLogo } from "@/constants/images";
import { jaliliDate } from "@/lib/jalali-date";
import { DataTableBasic } from "@/components/ui/data-table-basic";

const BasicFactorDetails = ({ data }) => {
  return (
    <div className="mx-auto w-full rounded-lg border px-2 py-3 md:w-5/6 md:px-6 lg:w-4/5">
      <div>
        <h3 className="text-center text-lg font-bold">فروشگاه چارسوق</h3>
      </div>

      <div className="mt-1 flex items-center justify-between">
        <div className="flex flex-col gap-1 text-sm">
          <div className="flex gap-1.5">
            <span>شماره فاکتور :</span>
            <span className="font-light">
              {farsiNumber(data?.dasht_info?.SaleInvoiceID)}
            </span>
          </div>
          <div className="flex gap-1.5">
            <span>تاریخ فاکتور :</span>
            <span className="font-light">
              {farsiNumber(jaliliDate(data?.date))}
            </span>
          </div>
        </div>
        <div>
          <Image
            src={authLogo}
            width={180}
            height={120}
            alt=""
            className="aspect-video w-44"
          />
        </div>
      </div>

      <div>
        <h3 className="text-center text-base font-normal">فاکتور فروش</h3>
      </div>

      <Separator className="my-1.5" />

      <div className="mt-2 flex justify-between">
        <div className="flex flex-col gap-1.5 text-sm">
          <div className="flex gap-1">
            <span>نام و نام خانوادگی :</span>
            <span className="font-light">{farsiNumber(data?.user?.name)}</span>
          </div>
          <div className="flex gap-1">
            <span>شماره تلفن :</span>
            <span className="font-light">{farsiNumber(data?.user?.phone)}</span>
          </div>
          <div className="flex gap-1">
            <span>پست الکترونیکی :</span>
            <span className="font-light">{farsiNumber(data?.user?.email)}</span>
          </div>
          <div className="flex gap-1">
            <span>آدرس :</span>
            <span className="font-light">
              {farsiNumber(data?.user?.address)}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-1.5 text-sm">
          <div className="flex gap-1">
            <span>کد پستی :</span>
            <span className="font-light">
              {farsiNumber(data?.user?.postal_code)}
            </span>
          </div>
          <div className="flex gap-1">
            <span>استان :</span>
            <span className="font-light">{farsiNumber(data?.user?.state)}</span>
          </div>
          <div className="flex gap-1">
            <span>شهر :</span>
            <span className="font-light">{farsiNumber(data?.user?.city)}</span>
          </div>
        </div>
      </div>

      <div className="mt-3 flex flex-col gap-2 border">
        <div className="pb-0.5 pt-1.5">
          <h3 className="text-center text-base font-normal">لیست محصولات</h3>
        </div>
        <div>
          <DataTableBasic
            columns={columnsProducts}
            data={data?.products || []}
          />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-3">
        <div className="text-xs md:col-span-2">
          <span>توضیحات فاکتور :</span>
          <span>{data?.description}</span>
        </div>
        <div className="md:col-span-1">
          <div className="flex flex-col gap-1.5 border p-3 text-xs">
            <div className="flex gap-1">
              <span>مجموع قیمت فاکتور :</span>
              <span className="font-light">
                {persianPriceFormat(+data?.total_price)} تومان
              </span>
            </div>
            {Number(data?.discount) == 0 ? null : (
              <div className="flex gap-1">
                <span>میزان تخفیف :</span>
                <span className="font-light">
                  {persianPriceFormat(+data?.discount)} تومان
                </span>
              </div>
            )}
            <div className="flex gap-1">
              <span>قیمت نهایی فاکتور :</span>
              <span className="font-light">
                {persianPriceFormat(+data?.final_price)} تومان
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicFactorDetails;
