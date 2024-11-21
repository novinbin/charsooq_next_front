"use client";

import { Wallet } from "lucide-react";
import SubmitButton from "@/components/submit-button";
import { useState } from "react";
import { axios, baseBackUrl } from "@/lib/axios";
import { useRouter } from "next/navigation";
import PayInstallment from "@/components/dialogs/pay-installment";

const PayAInstallment = ({ id }) => {
  const router = useRouter();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handlePayModal = async () => {
    setLoading(true);
    await axios
      .get(`/api/user/installment/${id}/calculate-price`)
      .then((response) => {
       
        setData(response.data);
        setOpen(true);
      })
      .catch((error) => {
  
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onPay = async () => {
    router.push(`${baseBackUrl}/payment/installment/${id}`);
  };

  return (
    <div className="gap-1">
      <PayInstallment
        isOpen={open}
        loading={loading}
        onClose={() => setOpen(false)}
        onConfirm={onPay}
        data={data}
        title="پرداخت قسط"
      />

      <SubmitButton
        onClick={handlePayModal}
        loading={loading}
        variant="outline"
        className="flex items-center gap-1 text-xs font-normal"
      >
        <Wallet size={16} strokeWidth={1.5} className="text-primary" />
        <span>پرداخت قسط</span>
      </SubmitButton>
    </div>
  );
};

export default PayAInstallment;
