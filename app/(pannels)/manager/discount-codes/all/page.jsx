"use client";

import { DataTable } from "@/components/ui/data-table";
import { columns } from "./components/columns";
import { useEffect, useState } from "react";
import LoadingPage from "@/components/loading-page";
import { axios } from "@/lib/axios";
import DataTableHeader from "@/components/data-table-header";
import PaginationComponent from "@/components/pagination";
import { useConfig } from "@/hooks/use-config";

const UsersPage = ({ searchParams: { page } }) => {
  const configHook = useConfig();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCities();
  }, [page, configHook.refreshFlag]);

  const fetchCities = async () => {
    setIsLoading(true);
    await axios
      .get(`/api/manager/discount-codes?page=${page || 1}`)
      .then((response) => {
     
        setData(response.data);
      })
      .catch((err) => {
    
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div className="px-0 lg:px-10">
      <DataTableHeader title="همه کد های تخفیف" />

      {isLoading ? (
        <LoadingPage />
      ) : (
        <>
          <DataTable columns={columns} data={data.data} />
          <PaginationComponent
            total={data.total || 0}
            page={data.current_page || 1}
            perPage={data.per_page || 10}
          />
        </>
      )}
    </div>
  );
};

export default UsersPage;