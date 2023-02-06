import MainLayout from "@/components/MainLayout";
import Link from "next/link";
import React from "react";

function Index() {
  return (
    <MainLayout>
      <h1>Index projects</h1>
      <Link href={"/projects/afstore"}>Afstore Project</Link>
    </MainLayout>
  );
}

export default Index;
