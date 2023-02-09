import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import MainLayout from "@/components/MainLayout";
import { iconResolver } from "@/utils/iconResolver";
import Slider from "@/components/Slider";
const project = {
  slug: "afstore",
  title: "AF Store",
  category: "fullstack",
  shortDescription: {
    en: "A Fullstack ecommerce app developed with Remix and Strapi",
    es: "Aplicación fullstack desarrollada con Remix y Strapi",
  },
  longDescription: {
    en: "Sneakers ecommerce inspired in the Nike Air Force sneaker collection. The Frontend of this project has been made with Remix and the Backend with Strapi, a headless CMS.",
    es: "Sneakers ecommerce inspired in the Nike Air Force sneaker collection. The Frontend of this project has been made with Remix and the Backend with Strapi, a headless CMS.",
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
        src: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
        alt: {
          en: "Homepage from AF Store",
          es: "Página de incio de AF Store",
        },
      },
      {
        src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
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
  const { title, longDescription, technologies, images } = project;
  return (
    <MainLayout page={title}>
      <main className="px-5 sm:px-10 md:px-15 lg:px-20 xl:px-30 max-w-[85ch] mx-auto">
        <section
          id="heading"
          className="grid gap-4 grid-cols-1 place-content-center place-items-center w-2/4 mx-auto"
        >
          <h1 className="text-2xl md:text-4xl uppercase">{title}</h1>
          <Image
            src={"/assets/images/undraw-project.svg"}
            alt="A person launching a rocket"
            width={400}
            height={400}
            className=" w-full md:w-2/4"
            priority={true}
            blurDataURL={"/assets/images/undraw-project.svg"}
            placeholder="blur"
          />
        </section>
        <section className="grid gap-5 my-6 max-w-[85ch] mx-auto text-justify">
          <h2 className="text-2xl  ">
            Project <span className="text-secondary">details</span>
          </h2>
          <h3 className="text-xl">Description</h3>
          <p>{longDescription.en}</p>

          <h3 className="text-xl">Tech stack</h3>
          <div className="my-3 flex gap-4 ">
            {technologies.map((tech) => (
              <div
                key={tech.id}
                className="flex flex-col items-center content-center justify-center"
              >
                <span>{iconResolver(tech.id, 35, tech.name)}</span>
                <p className="font-semibold">{tech.name}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="my-6 max-w-[85ch] mx-auto">
          <div>
            <h2 className="text-2xl  ">View Project</h2>
            <h2 className="text-2xl  ">Review Code</h2>
          </div>
          <Slider slides={images.collection} />
        </section>
      </main>
    </MainLayout>
  );
}

export default Project;
