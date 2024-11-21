"use client";

import EditorContent from "@/components/editor-content";
import useMount from "@/hooks/use-mount";
import Image from "next/image";

const Details = ({ data }) => {
  const mount = useMount();

  if (!mount) {
    return null;
  }

  return (
    <>
      <div className="m-9 mx-auto w-11/12 rounded-lg p-20 shadow-md">
        <div className="flex w-full flex-col gap-3">
          <h1 className="text-2xl font-semibold">{data.title}</h1>
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
  );
};

export default Details;
