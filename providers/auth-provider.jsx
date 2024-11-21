"use client";

import LoadingPage from "@/components/loading-page-auth";
import { useConfig } from "@/hooks/use-config";
import { useUser } from "@/hooks/use-user";
import { axios } from "@/lib/axios";
import { MainPagebannersKeys } from "@/lib/banners";
import { routes } from "@/routes/routes";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading2, setIsLoading2] = useState(false);

  const userHook = useUser();
  const configHook = useConfig();

  const router = useRouter();

  const pathname = usePathname();

  const userInfo = async () => {
    await axios
      .get("/api/self")
      .then((response) => {
        if (response.status === 200) {
          userHook.setUserData(response?.data);

          if (
            pathname.endsWith(routes.auth.signIn) ||
            pathname.endsWith(routes.auth.signUp)
          ) {
            response.data.role === "manager" &&
              router.push(routes.manager.dashboard);
            response.data.role === "author" &&
              router.push(routes.author.dashboard);
            response.data.role === "employee" && router.push();
            response.data.role === "user" && router.push(routes.user.dashboard);
          }
        }
      })
      .catch((err) => {
        userHook.setUserData(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // const mainPageData = async () => {
  //   await axios
  //     .get(`/api/manager/banners/${MainPagebannersKeys}`)
  //     .then((response) => {
  //       configHook.setMainPageData(response.data);
  //     })
  //     .catch(() => {})
  //     .finally(() => {
  //       setIsLoading2(false);
  //     });
  // };

  useEffect(() => {
    userInfo();
    // mainPageData();
  }, []);

  return isLoading || isLoading2 ? <LoadingPage /> : <main>{children}</main>;
};

export default AuthProvider;
