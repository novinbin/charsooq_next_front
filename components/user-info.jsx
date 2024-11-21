"use client";

import { useUser } from "@/hooks/use-user";
import { farsiNumber } from "@/lib/farsi-number";
import { persianPriceFormat } from "@/lib/persian-price-format";
import { cn } from "@/lib/utils";

const UserInfo = ({ className }) => {
  const userHook = useUser();

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="rounded-md border px-1.5 py-2 text-xs md:px-4">
        <span>اعتبار : </span>
        <span className="text-green-500">
          {persianPriceFormat(+userHook?.userData?.balance)} تومان
        </span>
      </div>
      {/* <div className="rounded-md border px-1.5 py-2 text-xs md:px-4">
        <span>امتیاز : </span>
        <span className="text-yellow-500">
          {farsiNumber(userHook?.userData?.points)}
        </span>
      </div> */}
      <div className="rounded-md border px-1.5 py-2 text-xs md:px-4">
        <span>کیف پول : </span>
        <span className="text-blue-500">
          {persianPriceFormat(+userHook?.userData?.wallet)} تومان
        </span>
      </div>
    </div>
  );
};

export default UserInfo;
