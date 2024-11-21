"use client";

import { Button } from "@/components/ui/button";
import useMount from "@/hooks/use-mount";
import { farsiNumber } from "@/lib/farsi-number";
import { persianPriceFormat } from "@/lib/persian-price-format";
import { routes } from "@/routes/routes";
import { List } from "lucide-react";
import Link from "next/link";

const Details = ({ data }) => {
  const mount = useMount();

  if (!mount) {
    return null;
  }

  return (
    <div className="flex w-full flex-col gap-3">
      <Link href={routes.employee["factor-registration"].factors.all(data.id)}>
        <Button
          variant="outline"
          className="flex cursor-pointer items-center gap-1 text-xs font-normal"
        >
          <List
            size={18}
            strokeWidth={1.5}
            className="rotate-180 text-primary"
          />
          <span>مشاهده فاکتور ها</span>
        </Button>
      </Link>
      <div className="flex gap-2">
        <span>نام و نام خانوادگی :</span>
        <span className="text-primary">{data?.name}</span>
      </div>
      <div className="flex gap-2">
        <span>شماره تماس :</span>
        <span className="text-primary">{farsiNumber(data?.phone)}</span>
      </div>
      <div className="flex gap-2">
        <span>ایمیل :</span>
        <span className="text-primary">{data?.email}</span>
      </div>
      <div className="flex gap-2">
        <span>کد ملی :</span>
        <span className="text-primary">{farsiNumber(data?.national_code)}</span>
      </div>
      <div className="flex gap-2">
        <span>جنسیت :</span>
        <span className="text-primary">
          {data?.gender === "male" && "آقا"}
          {data?.gender === "female" && "خانم"}
        </span>
      </div>
      <div className="flex gap-2">
        <span>کد پستی :</span>
        <span className="text-primary">{farsiNumber(data?.postal_code)}</span>
      </div>
      <div className="flex gap-2">
        <span>استان :</span>
        <span className="text-primary">{data?.state}</span>
      </div>
      <div className="flex gap-2">
        <span>شهرستان :</span>
        <span className="text-primary">{data?.city}</span>
      </div>
      <div className="flex gap-2">
        <span>آدرس :</span>
        <span className="text-primary">{data?.address}</span>
      </div>
      <div className="flex gap-2">
        <span>سطح دسترسی :</span>
        {data.role === "employee" && (
          <span className="text-primary">پرسنل</span>
        )}
        {data.role === "organ" && <span className="text-primary">ارگان</span>}
        {data.role === "user" && <span className="text-primary">کاربر</span>}
        {data.role === "manager" && <span className="text-primary">ادمین</span>}
        {data.role === "author" && (
          <span className="text-primary">نویسنده</span>
        )}
      </div>
      <div className="flex gap-2">
        <span>کد معرف :</span>
        <span className="text-primary">{farsiNumber(data?.code)}</span>
      </div>
      <div className="flex gap-2">
        <span>اعتبار :</span>
        <span className="text-primary">
          {persianPriceFormat(+data?.balance)} تومان
        </span>
      </div>
      <div className="flex gap-2">
        <span>کیف پول :</span>
        <span className="text-primary">
          {persianPriceFormat(+data?.wallet)} تومان
        </span>
      </div>
      <div className="flex gap-2">
        <span>امتیاز :</span>
        <span className="text-primary">{farsiNumber(data?.points)}</span>
      </div>
    </div>
  );
};

export default Details;
