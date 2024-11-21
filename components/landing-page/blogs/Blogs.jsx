"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { axios } from "@/lib/axios";
import { Button } from "@/components/ui/button";
import { SquarePen } from "lucide-react";
import { routes } from "@/routes/routes";
import PaginationComponent from "@/components/pagination";
import Image from "next/image";

function Blogs() {
  const [data, setData] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get(`/api/blogs`)
      .then((response) => {
   
        setArticles(response.data.data);
      })
      .catch((err) => {
     
      })
      .finally(() => {});
  };

  return (
    <div>
      <div>
        <div className="relative my-20 w-full">
          <div className="mx-auto w-11/12">
            <div className="grid items-center justify-between gap-7 max-lg:grid-cols-2 max-md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4">
              {articles.map((article) => (
                <div
                  key={article.id}
                  className="shadow-article rounded-3xl bg-[#fefefe]"
                >
                  <Image
                    src={article.photo}
                    width={480}
                    height={360}
                    alt={article.title}
                    className="h-60 rounded-t-3xl"
                  />

                  <div className="mx-auto my-4 flex w-11/12 flex-col gap-2">
                    <h2 className="line-clamp-1 text-xl">{article.title}</h2>
                    <p className="line-clamp-1 text-justify">
                      {article.description.slice(0, 13)}
                    </p>
                    <div className="flex w-full items-center justify-center gap-4">
                      <div className="flex items-center gap-1">
                        <SquarePen stroke="#AFB7B6" className="size-4" />
                        <p className="mt-1 text-right text-xs text-[#AFB7B6]">
                          {article.author.name}
                        </p>
                      </div>
                      <div className="flex gap-4" dir="rtl">
                        <Link href={routes.landing.blogs.details(article.slug)}>
                          <Button className="">مشاهده مقاله</Button>
                        </Link>
                      </div>
                    </div>{" "}
                  </div>
                </div>
              ))}
            </div>
            <PaginationComponent
              total={data.total || 0}
              page={data.current_page || 1}
              perPage={data.per_page || 10}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
