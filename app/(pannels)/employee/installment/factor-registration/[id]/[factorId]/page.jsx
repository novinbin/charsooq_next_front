"use client";

import { useEffect, useState } from "react";
import ToastError from "@/components/toast/toast-error";
import LoadingPage from "@/components/loading-page";
import { axios } from "@/lib/axios";
import { toast } from "sonner";
import { defaultMessages } from "@/lib/default-messages";
import Details from "../components/details";
import { useConfig } from "@/hooks/use-config";

const DetailsPage = ({ params }) => {
  const [data, setData] = useState({});
  const [installments, setInstallments] = useState({});

  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);

  const configHook = useConfig();

  useEffect(() => {
    fetchDefaultData();
    fetchInstallments();
  }, [configHook.refreshFlag]);

  const fetchDefaultData = async () => {
    setIsLoading(true);
    await axios
      .get(`/api/employee/factor/${params.factorId}`)
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
      .finally(() => {
        setIsLoading(false);
      });
  };

  const fetchInstallments = async () => {
    setIsLoading2(true);
    await axios
      .get(`/api/employee/factor/${params.factorId}/installments`)
      .then((response) => {
      
        setInstallments(response.data.data);
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
      .finally(() => {
        setIsLoading2(false);
      });
  };

  return (
    <div>
      {isLoading || isLoading2 ? (
        <LoadingPage />
      ) : (
        data.data && (
          <Details
            data={data.data}
            installments={installments}
            params={params}
          />
        )
      )}
    </div>
  );
};

export default DetailsPage;
