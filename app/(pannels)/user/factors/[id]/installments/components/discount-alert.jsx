import { AlertCircle } from "lucide-react";

const DiscountAlert = () => {
  return (
    <div className="mb-4 mt-2 rounded-lg border border-green-500 px-4 py-2 text-xs text-green-500">
      <div className="flex items-center gap-2">
        <AlertCircle size={16} />
        <span>
          کاربر گرامی، در صورتی که اقساط خود را 20 روز زود تر از موعد مقرر
          پرداخت کنید امتیاز باشگاه مشتریان به شما تعلق میگیرد.
        </span>
      </div>
    </div>
  );
};

export default DiscountAlert;
