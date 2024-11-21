"use client";

import { FolderSync } from "lucide-react";
import { useEffect, useState } from "react";
import ConnectFactorDialog from "@/components/dialogs/connect-factor-dialog/connect-factor-dialog-manager";
import { Button } from "@/components/ui/button";
import { useFactor } from "@/hooks/use-factor";

const ConnectFactor = ({ onSelect }) => {
  const factorHook = useFactor();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    factorHook?.selectedFactor && onSelect();
  }, [factorHook.flag]);

  return (
    <div className="my-2 gap-1">
      <ConnectFactorDialog
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={() => {}}
        title="اتصال فاکتور"
      />
      <Button
        onClick={() => {
          setOpen(true);
        }}
        type="button"
        variant="outline"
        className="flex items-center gap-1 text-xs font-normal"
      >
        <FolderSync size={16} strokeWidth={1.5} className="text-primary" />
        <span>اتصال فاکتور</span>
      </Button>
    </div>
  );
};

export default ConnectFactor;
