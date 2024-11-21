"use client";

import { PlusCircle } from "lucide-react";
// import { routes } from "@/routes/routes";
import { Button } from "@/components/ui/button";

const CellAction = ({ data }) => {
  return (
    <div className="flex items-center justify-center gap-1">
      <Button
        variant="outline"
        className="flex cursor-pointer items-center gap-1 text-xs font-normal"
      >
        <PlusCircle size={18} strokeWidth={1.5} className="text-primary" />
        <span>افزودن</span>
      </Button>
    </div>
  );
};

export default CellAction;
