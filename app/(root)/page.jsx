"use client";

import All from "@/components/landing-page/All";
import Article from "@/components/landing-page/Article";
import Banner from "@/components/landing-page/Banner";
import Collection from "@/components/landing-page/Collection";
import HeroSection from "@/components/landing-page/HeroSection";
import Newest from "@/components/landing-page/Newest";
import Sale from "@/components/landing-page/Sale";
import Set from "@/components/landing-page/Set";
import { useConfig } from "@/hooks/use-config";

export default function Home() {
  const configHook = useConfig();

  return (
    <div>
      <HeroSection banners={configHook.mainPageData} />
      <All className="max-lg:hidden" banners={configHook.mainPageData} />
      <Collection banners={configHook.mainPageData} />
      <Banner banners={configHook.mainPageData} />
      <Sale banners={configHook.mainPageData} />
      <Set banners={configHook.mainPageData} />
      <Newest banners={configHook.mainPageData} />
      <Article banners={configHook.mainPageData} />
    </div>
  );
}
