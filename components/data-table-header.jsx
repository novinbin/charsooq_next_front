"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { routes } from "@/routes/routes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, LoaderIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import qs from "query-string";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const DataTableHeader = ({ title, description, btnText, href, perPage }) => {
  const [role, setRole] = useState("10");
  const searchParams = useSearchParams();
  const router = useRouter();
  const accessTypes = [
    {
      title: "10",
    },
    {
      title: "25",
    },

    {
      title: "50",
    },
    {
      title: "75",
    },
    {
      title: "100",
    },
  ];
  useEffect(() => {
    setRole(searchParams.get("per_page") ? searchParams.get("per_page") : "10");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function onChange(values) {
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      ["page"]: 1,
      ["per_page"]: values || null,
    };

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true },
    );

    router.push(url);
  }
  return (
    <div className="w-full">
      <div className="bg-gray-background flex w-full items-center justify-between rounded-lg p-2 px-3">
        <div className="flex flex-col gap-2">
          <span className="text-lg text-muted-foreground">{title}</span>
        </div>
        {btnText && (
          <div>
            <Link href={href}>
              <Button className="border-red-primary min-w-36 rounded-3xl border-2 bg-white hover:bg-white/60">
                {btnText}
              </Button>
            </Link>
          </div>
        )}
        {perPage && (
          <div className="space-y-2">
            <p className="text-center text-xs text-muted-foreground">
              تعداد هر آیتم <br />
              در صفحه
            </p>

            <DropdownMenu dir="rtl">
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex h-7 gap-1 rounded-xl border-2 border-primary px-4 text-xs"
                >
                  <>
                    {role}
                    <ChevronDown
                      size={15}
                      className="text-primary"
                      strokeWidth={1.5}
                    />
                  </>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="flex flex-col gap-1">
                {accessTypes.map((item, index) => (
                  <DropdownMenuItem
                    onClick={() => {
                      setRole(item.title), onChange(item.title);
                    }}
                    key={item.title}
                    className={cn(
                      "cursor-pointer rounded-3xl",
                      role === item.title && "bg-primary/70",
                    )}
                  >
                    {item.title}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </div>
      <Separator className="mb-4 mt-2 h-[1px] bg-gray-400" />
    </div>
  );
};

export default DataTableHeader;
