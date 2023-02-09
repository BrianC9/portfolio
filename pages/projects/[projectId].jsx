import React from "react";
import { useRouter } from "next/router";
import MainLayout from "@/components/MainLayout";
const project = {
  slug: "afstore",
  title: "AF Store",
  category: "fullstack",
  description: {
    en: "A Fullstack ecommerce app developed with Remix and Strapi",
    es: "Aplicación fullstack desarrollada con Remix y Strapi",
  },

  technologies: [
    {
      id: "react",
      name: "React JS",
    },

    {
      id: "tailwind",
      name: "Tailwind CSS",
    },
    {
      id: "nextjs",
      name: "Next",
    },
    { id: "java", name: "Java" },
  ],
  images: {
    cover: "https://picsum.photos/1280/720",
    collection: [
      {
        src: "https://picsum.photos/1280/720",
        alt: {
          en: "Homepage from AF Store",
          es: "Página de incio de AF Store",
        },
      },
      {
        src: "https://picsum.photos/1280/720",
        alt: {
          en: "Homepage from AF Store",
          es: "Página de incio de AF Store",
        },
      },
      {
        src: "https://picsum.photos/1280/720",
        alt: {
          en: "Homepage from AF Store",
          es: "Página de incio de AF Store",
        },
      },
    ],
  },
};

function Project() {
  // const router = useRouter();
  // const { projectId } = router.query;

  return <MainLayout page={project.title}>{projectId}</MainLayout>;
}

export default Project;
