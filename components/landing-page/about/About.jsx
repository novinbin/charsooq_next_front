import Image from "next/image";
import React from "react";
import about from "@/public/img/about/info.png";
import aboutMobile from "@/public/img/about/about-man.png";

function About() {
  return (
    <div>
      <div className="lg:p-20">
        <div className="max-lg:relative max-lg:hidden">
          <Image
            src={about}
            alt="about us"
            width={1080}
            height={720}
            className="w-full"
          />
          <p className="absolute left-96 top-96 text-3xl font-bold text-orange">
            با بیش از 4 سال سابقه
          </p>
          <p className="absolute -bottom-40 w-1/2 px-20 pl-32 text-justify text-lg leading-9">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و مشتریدهای متنوع با هدف بهبود ابزارهای مشتریدی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>
        </div>
        <div className="max-lg:visible lg:hidden">
          <div>
            <div className="relative">
              <Image
                src={aboutMobile}
                alt="a man with fashion style sit on the street"
                width={540}
                height={480}
                className="w-full rounded-3xl"
              />
              <p className="absolute top-7 w-1/3 px-9 text-lg font-semibold text-white max-md:w-1/2">
                با اعتماد به ما بالاترین کیفیت را تجربه کنید.
              </p>
              <div className="w-full">
                <div className="absolute bottom-0 left-1/2 mx-auto w-2/3 -translate-x-1/2 rounded-3xl bg-white px-7 py-4 font-bold">
                  <p className="text-center text-lg leading-9 max-md:text-base">
                    چهارسوق مجموعه ای معتبر برای معرفی و فروش و توزیع محصولات با
                    اقتصادی ترین قیمت
                  </p>
                </div>
              </div>
            </div>

            <div className="my-20">
              <p className="px-9 text-justify leading-9">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و مشتریدهای متنوع با هدف بهبود ابزارهای مشتریدی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
            </div>
            <div>
              <div className="flex flex-col gap-9">
                <div className="mr-auto w-1/2 border border-black"></div>
                <p className="text-center text-lg font-bold text-orange">
                  بیش از 12 سال تجربه
                </p>
                <div className="ml-auto w-1/2 border border-black"></div>
              </div>
              <div className="my-20">
                <p className="px-9 text-justify leading-9">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و مشتریدهای متنوع با هدف بهبود ابزارهای
                  مشتریدی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                  صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                  راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                  حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای
                  موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
