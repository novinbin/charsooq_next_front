"use client";

import { DataTable } from "@/components/ui/data-table";
import { columns } from "./components/columns";
import { useEffect, useState } from "react";
import LoadingPage from "@/components/loading-page";
import { axios } from "@/lib/axios";
import DataTableHeader from "@/components/data-table-header";
import PaginationComponent from "@/components/pagination";
import { useConfig } from "@/hooks/use-config";
import { useSearchParams } from "next/navigation";
import ToastError from "@/components/toast/toast-error";
import { toast } from "sonner";

const NoDelay = () => {
  const configHook = useConfig();
  const searchParams = useSearchParams();

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCities();
  }, [searchParams, configHook.refreshFlag]);

  const fetchCities = async () => {
    await axios
      .get(
        `/api/employee/delay/users/no-delay?page=${searchParams.get("page") || 1}&name=${searchParams.get("name") || ""}&phone=${searchParams.get("phone") || ""}&per_page=${searchParams.get("per_page") || 10}`,
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        toast.error(<ToastError text={err?.response?.data?.message} />);
      })      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="px-0 lg:px-10">
      <DataTableHeader title="کاربران خوش حساب (بدون تعویق)" perPage={true} />

      {isLoading ? (
        <LoadingPage />
      ) : (
        <>
          {data ? <DataTable columns={columns} data={data.data} /> : <></>}
          <PaginationComponent
            total={data?.total || 0}
            page={data?.current_page || 1}
            perPage={data?.per_page || 10}
          />
        </>
      )}
    </div>
  );
};

export default NoDelay;
