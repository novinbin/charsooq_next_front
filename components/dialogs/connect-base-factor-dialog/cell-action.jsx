"use client";

import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useFactor } from "@/hooks/use-factor";
import ToastSuccess from "@/components/toast/toast-success";
import ToastError from "@/components/toast/toast-error";
import { axios } from "@/lib/axios";
import querystring from "querystring";
import { toast } from "sonner";
import { defaultMessages } from "@/lib/default-messages";
import { useState } from "react";
import SubmitButton from "@/components/submit-button";

const CellAction = ({ data }) => {

  const factorHook = useFactor();
  const [loading, setLoading] = useState(false);

  const handleAdd = async () => {
    setLoading(true);

    const encodedFormData = querystring.stringify({
      dasht_invoice_id: data?.SaleInvoiceID,
    });


    await axios
      .post("/api/employee/foreign-customer/factor", encodedFormData)
      .then((response) => {
    
        if (response.status === 201) {
          toast.success(<ToastSuccess text={"فاکتور با موفقیت اضافه شد"} />);
          factorHook.setFlag(!factorHook.flag);
        }
      })
      .catch((error) => {
       
        toast.error(
          <ToastError
            text={
              error?.response?.data?.message ||
              defaultMessages.errors.internalError
            }
          />,
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex items-center justify-center gap-1">
      <div className="flex flex-col gap-1">
        <SubmitButton
          loading={loading}
          variant="outline"
          className="flex items-center gap-1 text-xs font-normal"
          onClick={handleAdd}
        >
          <PlusCircle size={16} strokeWidth={1.5} className="text-primary" />
          <span>انتخاب</span>
        </SubmitButton>
      </div>
    </div>
  );
};

export default CellAction;
