"use client";

import { Wallet } from "lucide-react";
import SubmitButton from "@/components/submit-button";
import { useState } from "react";
import PayAllInstallment from "@/components/dialogs/pay-all-installment";
import { axios, baseBackUrl } from "@/lib/axios";
import { useRouter } from "next/navigation";

const PayAll = ({ id }) => {
  const router = useRouter();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handlePayModal = async () => {
    setLoading(true);
    await axios
      .get(`/api/user/factors/${id}/calculate-remaining`)
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
    router.push(`${baseBackUrl}/payment/factor/${id}/installments`);
  };

  return (
    <div className="my-2 gap-1">
      <PayAllInstallment
        isOpen={open}
        loading={loading}
        onClose={() => setOpen(false)}
        onConfirm={onPay}
        data={data}
        title="پرداخت همه اقساط"
      />

      <SubmitButton
        onClick={handlePayModal}
        loading={loading}
        variant="outline"
        className="flex items-center gap-1 text-xs font-normal"
      >
        <Wallet size={16} strokeWidth={1.5} className="text-primary" />
        <span>پرداخت همه اقساط</span>
      </SubmitButton>
    </div>
  );
};

export default PayAll;
