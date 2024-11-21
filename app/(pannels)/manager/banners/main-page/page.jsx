"use client";

import { DataTable } from "@/components/ui/data-table";
import { columns } from "./components/columns";
import { useEffect, useState } from "react";
import LoadingPage from "@/components/loading-page";
import { axios } from "@/lib/axios";
import DataTableHeader from "@/components/data-table-header";
import { useConfig } from "@/hooks/use-config";
import { MainPagebannersKeys } from "@/lib/banners";

const UsersPage = ({ searchParams: { page, phone } }) => {
  const configHook = useConfig();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCities();
  }, [page, phone, configHook.refreshFlag]);

  const fetchCities = async () => {
    setIsLoading(true);
    await axios
      .get(`/api/manager/banners/${MainPagebannersKeys}`)
      .then((response) => {
        const values = response.data;
        let newArray = [];

        for (var propName in values) {
          newArray.push(values[propName]);
        }
        setData(newArray);
      })
      .catch(() => {})
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="px-0 lg:px-10">
      <DataTableHeader title="بنرها" />

      {isLoading ? (
        <LoadingPage />
      ) : (
        <>
          <DataTable columns={columns} data={data} />
        </>
      )}
    </div>
  );
};

export default UsersPage;
