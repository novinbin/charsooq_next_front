"use client";

import EditForm from "./edit-form";

const CellAction = ({ data }) => {
  return (
    <div className="flex items-center justify-center gap-1">
      <EditForm data={data} />
    </div>
  );
};

export default CellAction;
