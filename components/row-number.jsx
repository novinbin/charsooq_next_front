"use client";

import { farsiNumber } from "@/lib/farsi-number";
import { useSearchParams } from "next/navigation";

const RowNumber = ({ number }) => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || 1;
  const perPage = searchParams.get("per_page") || 10;
  return (
    <span className="text-muted-foreground">
      {farsiNumber(number + (page - 1) * perPage)}
    </span>
  );
};

export default RowNumber;
