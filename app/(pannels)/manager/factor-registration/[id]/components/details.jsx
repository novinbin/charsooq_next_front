"use client";

import { Separator } from "@/components/ui/separator";
import AddInstallment from "./add-installment";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./installment-columns";
import Deleteinstallments from "./delete-installments";
import BasicFactorDetails from "@/components/factor-details/factor-details";

const Details = ({
  data,
  installments,
  currentConfigHook,
  params: { id, factorId },
}) => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-2">
        <h3>جزئیات فاکتور</h3>
        {installments && installments.length === 0 && (
          <AddInstallment data={data} params={{ id, factorId }} />
        )}
      </div>
      <Separator className="my-2" />

      <BasicFactorDetails data={data} />

      <div className="mt-7">
        <div className="flex items-center gap-2">
          <h3>اقساط فاکتور</h3>
          {installments && installments.length > 0 && (
            <Deleteinstallments currentConfigHook={currentConfigHook} />
          )}
        </div>
        <Separator className="mb-5 mt-2" />
      </div>

      <DataTable columns={columns} data={installments} />
    </div>
  );
};

export default Details;
