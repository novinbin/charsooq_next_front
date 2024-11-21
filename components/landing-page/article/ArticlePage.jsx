import Image from "next/image";
import React from "react";
import article from "@/public/img/article.png";

function ArticlePage() {
  return (
    <div>
      <div>
        <div className="relative">
          <Image
            src={article}
            width={540}
            height={480}
            className="h-[444px] w-full"
          />
          <p className="absolute bottom-3 left-4 rounded-xl bg-white px-5 py-3 opacity-90 backdrop-blur-xl">
            تاریخ انتشار
          </p>
        </div>
        <div className="mx-auto mb-20 w-4/5">
          <h2 className="my-9 text-xl font-bold max-md:text-lg">
            بهترین شستشو برای کت و شلوار
          </h2>
          <p className="rounded-xl bg-[#FFEFD9] p-7 text-justify leading-9 max-md:text-sm">
            ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
            از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
            سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
            مشتریدهای متنوع با هدف بهبود ابزارهای مشتریدی می باشد، کتابهای زیادی
            در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را
            می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
            شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
            دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا
            مورد استفاده قرار گیرد.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ArticlePage;
