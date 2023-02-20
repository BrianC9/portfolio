import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import MainLayout from "@/components/MainLayout";
import { iconResolver } from "@/utils/iconResolver";
import Slider from "@/components/Slider";
import Link from "next/link";
import projects from "@/public/assets/json/projects.json";

function Project() {
  const router = useRouter();
  const { projectId } = router.query;
  const project = projects.find((el) => el.slug === projectId);

  const { title, category, longDescription, technologies, images, links } =
    project;
  return (
    <MainLayout page={title}>
      <main className="px-5 sm:px-10 md:px-15 lg:px-20 xl:px-30 max-w-[85ch] mx-auto">
        <section
          id="heading"
          className="grid gap-4 grid-cols-1 place-content-center place-items-center  mx-auto"
        >
          <h1 className="text-2xl md:text-4xl uppercase text-center">
            {title}
          </h1>
          <Image
            src={"/assets/images/undraw-project.svg"}
            alt="A person launching a rocket"
            width={700}
            height={700}
            className="w-1/4"
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
          <div className=" gap-6 flex flex-col sm:flex-row">
            {category !== "backend" && (
              <a
                href={links.preview}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2"
              >
                <h2 className="text-2xl ">
                  View <span className="text-secondary">project</span>
                </h2>
                <div className="block">
                  {iconResolver("redirect", 22, "View project")}
                </div>
              </a>
            )}
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2"
            >
              <h2 className="text-2xl inline-block ">
                Review{" "}
                <span className="text-secondary hover:underline underline-offset-4 transition-all duration-500 ease-in-out">
                  code
                </span>
              </h2>
              {iconResolver("github", 22, "Review code")}
            </a>
          </div>
          {category === "backend" ? (
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              title="Go to the github repository"
            >
              <p className="mt-5">{project.note.en}</p>
            </a>
          ) : (
            <Slider slides={images.collection} />
          )}
        </section>
        <section className="py-10">
          <Link href={"/projects"}>
            <h3 className=" ">
              <span className="">Go back </span>
              <span className="hover:underline underline-offset-4 text-secondary transition-all duration-500 ease-in-out">
                to projects
              </span>
            </h3>
          </Link>
        </section>
      </main>
    </MainLayout>
  );
}

export default Project;
