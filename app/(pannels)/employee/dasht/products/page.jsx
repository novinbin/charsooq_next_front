"use client";

import { DataTable } from "@/components/ui/data-table";
import { columns } from "./components/columns";
import { useEffect, useState } from "react";
import LoadingPage from "@/components/loading-page";
import { axios } from "@/lib/axios";
import DataTableHeader from "@/components/data-table-header";
import SearchForm from "./components/search-form";
import { useSearchParams } from "next/navigation";

const UsersPage = () => {
  const searchParams = useSearchParams();

  const [data, setData] = useState({
    Result: [],
    Total: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  
    fetchData();
  }, [searchParams]);

  const fetchData = async () => {

    setIsLoading(true);
    await axios
      .get(
        // `/api/employee/dasht/products?limit=${10}&offset=${10 * ((page || 1) - 1)}&orderBy=Title}`,
        `/api/employee/dasht/products?limit=${searchParams.get("limit") || 10}&offset=${searchParams.get("offset") || 0}&orderBy=${searchParams.get("orderBy") || "Title"}`,
      )
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
      <DataTableHeader title="محصولات دشت" />

      <SearchForm
        limit={searchParams.get("limit")}
        offset={searchParams.get("offset")}
        orderBy={searchParams.get("orderBy")}
      />

      {isLoading ? (
        <LoadingPage />
      ) : (
        <>
          <DataTable columns={columns} data={data.Result} />
          {/* <PaginationComponent
            total={data.Total || 0}
            page={page || 1}
            perPage={10}
          /> */}
        </>
      )}
    </div>
  );
};

export default UsersPage;
