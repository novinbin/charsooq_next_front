"use client";

import { DataTable } from "@/components/ui/data-table";
import { columns } from "./components/columns";
import { useEffect, useState } from "react";
import LoadingPage from "@/components/loading-page";
import { axios } from "@/lib/axios";
import DataTableHeader from "@/components/data-table-header";
import PaginationComponent from "@/components/pagination";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PlusCircle } from "lucide-react";
import { routes } from "@/routes/routes";
import { useConfig } from "@/hooks/use-config";

const UsersPage = ({ searchParams: { page }, params: { id } }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const configHook = useConfig();

  useEffect(() => {
    fetchCities();
  }, [page, configHook.refreshFlag]);

  const fetchCities = async () => {
    setIsLoading(true);
    await axios
      .get(`/api/manager/user/${id}/balance-increase`)
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
      <DataTableHeader title="افزایش مبلغ اعتبار" />

      <Link href={routes.manager["balance-increases"].requests.create(id)}>
        <Button
          variant="outline"
          className="mb-3 flex cursor-pointer items-center gap-1 text-xs font-normal"
        >
          <PlusCircle size={18} strokeWidth={1.5} className="text-primary" />
          <span>افزایش مبلغ اعتبار</span>
        </Button>
      </Link>

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
