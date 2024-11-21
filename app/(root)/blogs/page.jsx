import Blogs from "@/components/landing-page/blogs/Blogs";
import { Suspense } from "react";

function page() {
  return (
    <Suspense>
      <Blogs />
    </Suspense>
  );
}

export default page;
