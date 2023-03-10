// TODO: bg-color of the tag which is selected to filter the projects
import MainLayout from "@/components/MainLayout";
import Image from "next/image";
import React from "react";
import projectsJSON from "@/public/assets/json/projects.json";
import ProjectCard from "@/components/ProjectCard";
import { useState } from "react";
import Categories from "@/components/Categories";
function Index({ projects }) {
  const [category, setCategory] = useState("all");
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  return (
    <MainLayout page={"Projects"}>
      <main className="px-5 sm:px-10 md:px-15 lg:px-20 xl:px-30">
        <section
          id="heading"
          className="grid gap-4 grid-cols-1 place-content-center place-items-center w-2/4 mx-auto"
        >
          <h1 className="text-3xl md:text-4xl uppercase">Projects</h1>
          <Image
            src={"/assets/images/undraw-building.svg"}
            alt="Myself portrait"
            width={400}
            height={400}
            className=" w-full md:w-2/5"
            priority={true}
            blurDataURL={"/assets/images/undraw-building.svg"}
            placeholder="blur"
          />
        </section>
        <section id="heading" className=" my-6 max-w-[85ch] mx-auto">
          <h2 className="text-2xl ">
            Choose a <span className="text-secondary">category:</span>
          </h2>
          <Categories category={category} handleCategory={handleCategory} />
        </section>
        <section className="my-6 max-w-[85ch] mx-auto">
          <div className="grid grid-cols-1  md:grid-cols-2 gap-5">
            {category === "all"
              ? projects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))
              : projects
                  .filter((project) => project.category === category)
                  .map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                  ))}
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
export async function getStaticProps() {
  return { props: { projects: projectsJSON } };
}
export default Index;
