import React, { Suspense } from "react";
import MDXPage from "@/components/MDXPage";

export default async function Home() {
  return (
    <main>
      <div>Blog</div>
      <Suspense fallback={<>...waiting</>}>
        <MDXPage />
      </Suspense>
    </main>
  );
}
