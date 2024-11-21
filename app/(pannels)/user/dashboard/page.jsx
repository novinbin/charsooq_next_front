"use client";
import LoadingPage from "@/components/loading-page";
import { useConfig } from "@/hooks/use-config";
import { useUser } from "@/hooks/use-user";
import { axios } from "@/lib/axios";
import { farsiNumber } from "@/lib/farsi-number";
import { routes } from "@/routes/routes";
import { CircleUserRound, Mail, MapPin, PhoneCall, User } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import idCode from "@/public/icons/id.png";
import Image from "next/image";
import { persianPriceFormat } from "@/lib/persian-price-format";

const DashboardPage = () => {
  const configHook = useConfig();
  const searchParams = useSearchParams();
  const userData = useUser((state) => state.userData);

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  console.log("userData", userData);

  useEffect(() => {
    fetchCities();
  }, [searchParams, configHook.refreshFlag]);

  const fetchCities = async () => {
    setIsLoading(true);
    await axios
      .get(`/api/user/dashboard`)
      .then((response) => {
        console.log("response-user-info-dashboard", response.data);
        setData(response.data);
      })
      .catch((err) => {})
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="h-full">
      <p>داشبورد مشتری</p>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div className="mx-auto mt-9 w-11/12">
          <div className="grid items-center justify-center gap-9 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="flex h-64 flex-col gap-6 rounded-lg border border-orange px-7 py-9">
              <div className="flex items-center justify-between">
                <p>اعتبار باقی مانده :</p>
                <p>{persianPriceFormat(+userData.balance)}</p>
              </div>
              <div className="flex items-center justify-between">
                {/* <p>امتیاز باشگاه :</p>
              <p></p> */}
              </div>
              <div className="flex items-center justify-between">
                <p>کیف پول :</p>
                <p>
                  {persianPriceFormat(+userData?.wallet)} <span>تومان</span>
                </p>
              </div>
            </div>
            <div className="flex h-64 flex-col gap-6 rounded-lg border border-orange px-7 py-9">
              <div className="flex items-center justify-between">
                <p>تعداد کل چک های ضمانت :</p>
                <p>{farsiNumber(data?.all_checks)}</p>
              </div>
              <div className="flex items-center justify-between">
                <p>چک های در انتظار تایید :</p>
                <p>{farsiNumber(data?.pending_checks)}</p>
              </div>
              <div className="flex items-center justify-between">
                <p>چک های تایید شده :</p>
                <p>{farsiNumber(data?.accepted_checks)}</p>
              </div>
              <div className="flex items-center justify-between">
                <p>چک های رد شده :</p>
                <p>{farsiNumber(data?.rejected_checks)}</p>
              </div>
            </div>
            <div className="flex h-64 flex-col justify-between gap-6 rounded-lg border border-orange px-7 py-9">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <p>تعداد فاکتورها :</p>
                  <p>{farsiNumber(data?.all_factors)}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>مبلغ کل خرید :</p>
                  <p>
                    {persianPriceFormat(+data?.total_shopping)}{" "}
                    <span>تومان</span>
                  </p>
                </div>
              </div>

              <Link
                href={routes.user.factors.root}
                className="rounded-2xl bg-orange px-4 py-2 text-center text-white"
              >
                مشاهده همه
              </Link>
            </div>
            <div className="flex h-64 flex-col gap-6 rounded-lg border border-orange px-7 py-9">
              <div className="flex items-center justify-between">
                <p>تعداد کل اقساط :</p>
                <p>{farsiNumber(data?.all_installments)}</p>
              </div>
              <div className="flex items-center justify-between">
                <p>اقساط در انتظار پرداخت :</p>
                <p>{farsiNumber(data?.pending_installments)}</p>
              </div>
              <div className="flex items-center justify-between">
                <p>اقساط عقب افتاده :</p>
                <p>{farsiNumber(data?.delayed_installments)}</p>
              </div>
              <div className="flex items-center justify-between">
                <p>اقساط پرداخت شده</p>
                <p>{farsiNumber(data?.paid_installments)}</p>
              </div>
            </div>
          </div>

          <div className="mt-14 rounded-lg border border-orange p-9">
            <div className="mb-7 flex items-center justify-between">
              <p>مشخصات :</p>
              <Link
                href={routes.user.profile["update-info"]}
                className="rounded-lg bg-orange px-5 py-1 text-white"
              >
                ویرایش
              </Link>
            </div>

            <div className="grid grid-cols-3 items-center justify-center gap-7">
              <div className="col-span-1 max-lg:col-span-full">
                <div className="flex items-center justify-center gap-4">
                  <CircleUserRound className="size-24" stroke="#b6b6b6" />
                  <div className="flex flex-col gap-4">
                    <div>
                      <p className="text-xl font-bold">
                        {userData?.gender === "male"
                          ? "  آقا " 
                          : userData?.gender === "female"
                            ? "  خانم "
                            : " "}
                        <span className="px-2 ">
                          {userData.name}
                        </span>
                      </p>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center justify-center gap-3">
                        <User />
                        <p>
                          {userData?.gender === "male"
                            ? "آقا"
                            : userData?.gender === "female"
                              ? "خانم"
                              : "تعریف نشده"}
                        </p>
                      </div>
                      <div className="flex items-center justify-center gap-3">
                        <MapPin />
                        <p>{userData.city}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-2 max-lg:col-span-full">
                <div className="grid grid-cols-2 items-center justify-center gap-4">
                  <div className="col-span-2 flex gap-4 rounded-lg border border-orange px-3 py-2 max-lg:col-span-full">
                    <MapPin />
                    <span>{userData.address}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4 rounded-lg border border-orange px-3 py-2 max-lg:col-span-full">
                    <span>کد معرف</span>
                    <span>{farsiNumber(userData.code)}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4 rounded-lg border border-orange px-3 py-2 max-lg:col-span-full">
                    <span>
                      <PhoneCall />
                    </span>
                    <span>{farsiNumber(userData.phone)}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4 rounded-lg border border-orange px-3 py-2 max-lg:col-span-full">
                    <span>
                      <Mail />
                    </span>
                    <span>{userData.email}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4 rounded-lg border border-orange px-3 py-2 max-lg:col-span-full">
                    <span>
                      <Image
                        src={idCode}
                        alt="id"
                        width={100}
                        height={100}
                        className="h-5 w-6"
                      />
                    </span>
                    <span>{farsiNumber(userData.national_code)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
