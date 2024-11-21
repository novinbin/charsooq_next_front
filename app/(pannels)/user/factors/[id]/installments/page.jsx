"use client";

import { DataTable } from "@/components/ui/data-table";
import { columns } from "./components/columns";
import { useEffect, useState } from "react";
import LoadingPage from "@/components/loading-page";
import { axios } from "@/lib/axios";
import DataTableHeader from "@/components/data-table-header";
import PayAll from "./components/pay-all";
import DiscountAlert from "./components/discount-alert";
import BasicFactorDetails from "@/components/factor-details/factor-details";
import ToastError from "@/components/toast/toast-error";
import { Separator } from "@/components/ui/separator";

const UsersPage = ({ params: { id } }) => {
  const [installments, setInstallments] = useState([]);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchDefaultData();
    fetchCities();
  }, []);

  const fetchDefaultData = async () => {
    setIsLoading(true);
    await axios
      .get(`/api/user/factors/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        toast.error(
          <ToastError
            text={
              error?.response?.data?.message ||
              defaultMessages.errors.internalError
            }
          />,
        );
      })
  };

  const fetchCities = async () => {
    setIsLoading(true);
    await axios
      .get(`/api/user/factors/${id}/installments`)
      .then((response) => {
        setInstallments(response.data);
      })
      .catch((err) => {})
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div className="px-0 lg:px-10">
      <DataTableHeader title="فاکتور" />

      {isLoading ? (
        <LoadingPage />
      ) : (
        <>
          <BasicFactorDetails data={data?.data} />
          <DataTableHeader title="اقساط فاکتور" />

          <PayAll id={id} />
          <DiscountAlert />
          <DataTable columns={columns} data={installments?.data} />
        </>
      )}
    </div>
  );
};

export default UsersPage;
