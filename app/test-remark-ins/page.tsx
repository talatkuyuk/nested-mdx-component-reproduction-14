import React, { Suspense } from "react";
import TestComponent from "@/components/TestComponent";

export default async function Home() {
  return (
    <Suspense fallback={<>...waiting</>}>
      <TestComponent />
    </Suspense>
  );
}
