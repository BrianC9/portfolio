import React from "react";
import { useRouter } from "next/router";
import MainLayout from "@/components/MainLayout";

function Project() {
  const router = useRouter();
  const { projectId } = router.query;
  return <MainLayout>{projectId}</MainLayout>;
}

export default Project;
