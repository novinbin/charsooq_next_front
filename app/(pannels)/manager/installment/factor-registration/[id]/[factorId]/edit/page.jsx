"use client";

import { useEffect, useState } from "react";
import ToastError from "@/components/toast/toast-error";
import LoadingPage from "@/components/loading-page";
import { axios } from "@/lib/axios";
import { toast } from "sonner";
import EditForm from "../../components/edit-form";
import { defaultMessages } from "@/lib/default-messages";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./components/columns";
import { useConfig } from "@/hooks/use-config";
import CreateForm from "./components/create-form";

const EditCityPage = ({ params }) => {
  const configHook = useConfig();

  const [data, setData] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchDefaultData();
  }, [configHook.refreshFlag]);

  const fetchDefaultData = async () => {
    setIsLoading(true);
    await axios
      .get(`/api/manager/factor/${params.factorId}`)
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

  return (
    <div>
      {isLoading ? (
        <LoadingPage />
      ) : (
        data.data && (
          <div className="space-y-5">
            <EditForm data={data.data} params={params} />
            {isLoading ? (
              <LoadingPage />
            ) : (
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h3>محصولات فاکتور</h3>
                  <CreateForm params={params} />
                </div>
                <DataTable columns={columns} data={data.data.products} />
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default EditCityPage;
