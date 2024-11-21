"use client";

import { useEffect, useState } from "react";
import ToastError from "@/components/toast/toast-error";
import LoadingPage from "@/components/loading-page";
import { axios } from "@/lib/axios";
import { toast } from "sonner";
import EditForm from "../../components/edit-form";
import { defaultMessages } from "@/lib/default-messages";

const EditCityPage = ({ params }) => {
  const [data, setData] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchDefaultData();
  }, []);

  const fetchDefaultData = async () => {
    setIsLoading(true);
    await axios
      .get(`/api/employee/balance-increase/${params.balanceId}`)
      .then((response) => {
     
        setData(response.data.data);
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

  return (
    <div>
      {isLoading ? <LoadingPage /> : <EditForm data={data} params={params} />}
    </div>
  );
};

export default EditCityPage;
