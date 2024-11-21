"use client";

import { DataTable } from "@/components/ui/data-table";
import { columns } from "./components/columns";
import { useEffect, useState } from "react";
import LoadingPage from "@/components/loading-page";
import { axios } from "@/lib/axios";
import DataTableHeader from "@/components/data-table-header";
import PaginationComponent from "@/components/pagination";
import ConnectFactor from "./components/connect-factor";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import { routes } from "@/routes/routes";
import { useSearchParams } from "next/navigation";

const UsersPage = ({ searchParams: { page, phone, name } }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = useSearchParams();
  useEffect(() => {
    fetchCities();
  }, [searchParams]);

  const fetchCities = async () => {
    setIsLoading(true);
    await axios
      .get(
        `/api/manager/users?page=${searchParams.get("page") || 1}&name=${searchParams.get("name") || ""}&phone=${searchParams.get("phone") || ""}&per_page=${searchParams.get("per_page") || 10}`,
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {})
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div className="px-0 lg:px-10">
      <DataTableHeader title="فاکتور ها" perPage={true}/>
      <div className="my-2 flex items-center gap-2">
        <ConnectFactor />
        <Link href={routes.manager.users.create}>
          <Button
            type="button"
            variant="outline"
            className="flex items-center gap-1 text-xs font-normal"
          >
            <PlusCircle size={16} strokeWidth={1.5} className="text-primary" />
            <span>افزودن مشتری</span>
          </Button>
        </Link>
      </div>

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
