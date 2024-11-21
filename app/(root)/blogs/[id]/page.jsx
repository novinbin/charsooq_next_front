"use client";

import ToastError from "@/components/toast/toast-error";
import LoadingPage from "@/components/loading-page";
import { useEffect, useState } from "react";
import { axios } from "@/lib/axios";
import { toast } from "sonner";
import useMount from "@/hooks/use-mount";
import EditorContent from "@/components/editor-content";
import Image from "next/image";
import Head from "next/head";

const EditCityPage = ({ params }) => {
  const [data, setData] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchDefaultData();
  }, []);

  const fetchDefaultData = async () => {
    setIsLoading(true);
    await axios
      .get(`/api/blog/${params.id}`)
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

  const mount = useMount();

  if (!mount) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta
          name="description"
          key={data.description}
          content={data.description}
        />
        <meta name="keywords" key={data.key_words} content={data.key_words} />
      </Head>
      <div>
        {isLoading ? (
          <LoadingPage />
        ) : (
          <>
            <Head>
              <title>{data.title}</title>
              <meta
                name="description"
                key={data.description}
                content={data.description}
              />
              <meta
                name="keywords"
                key={data.key_words}
                content={data.key_words}
              />
            </Head>
            <div className="m-9 mx-auto w-11/12 rounded-lg md:p-20 p-8 shadow-md">
              <div className="flex w-full flex-col gap-8">
                <h1 className="w-full text-center lg:text-3xl text-2xl font-semibold">
                  {data.title}
                </h1>
                <div>
                  <Image
                    src={data?.photo}
                    width={720}
                    height={480}
                    alt={data.title}
                    className="mx-auto w-full rounded-lg md:w-3/4"
                  />
                </div>
                <div className="flex flex-col gap-2">
                
                  {/* <p className="text-muted-foreground">{data.description}</p> */}
                  <EditorContent data={data.body} />
                  <div className="mt-9 text-muted-foreground">
                    <span>کلمات کلیدی :</span>
                    <span>{data.key_words}</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default EditCityPage;
