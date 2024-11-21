"use client";

import { DataTable } from "@/components/ui/data-table";
import { columns } from "./components/columns";
import { useEffect, useState } from "react";
import LoadingPage from "@/components/loading-page";
import { axios } from "@/lib/axios";
import DataTableHeader from "@/components/data-table-header";
import PaginationComponent from "@/components/pagination";
import { useSearchParams } from "next/navigation";

const UsersPage = ({ searchParams: { page, name, phone } }) => {
  const searchParams = useSearchParams();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCities();
  }, [searchParams]);

  const fetchCities = async () => {
    setIsLoading(true);
    await axios
      .get(
        `/api/employee/users?page=${searchParams.get("page") || 1}&name=${searchParams.get("name") || ""}&phone=${searchParams.get("phone") || ""}&per_page=${searchParams.get("per_page") || 10}`,
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
      <DataTableHeader title="مشتریان" perPage={true} />

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
