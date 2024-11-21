"use client";

import PayAInstallment from "./pay-a-installment";

const CellAction = ({ data }) => {
  return (
    <div className="flex items-center justify-center gap-1">
      <PayAInstallment id={data.id} />
    </div>
  );
};

export default CellAction;
