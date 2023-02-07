import MainLayout from "@/components/MainLayout";
import Image from "next/image";
import React from "react";
import jobs from "../public/assets/json/jobs.json";

function Aboutme() {
  //Handle the loading state
  console.log(jobs);
  return (
    <MainLayout page={"About me"}>
      <main className="max-w[85ch]">
        <section
          id="heading"
          className="grid gap-8 grid-cols-1 place-content-center place-items-center w-2/4 mx-auto"
        >
          <h1 className="text-3xl md:text-4xl uppercase">About me</h1>
          <Image
            src={"/assets/images/foto-perfil.jpg"}
            alt="Myself portrait"
            width={400}
            height={400}
            className="rounded-full w-full md:w-2/5"
            priority={true}
            blurDataURL={"/assets/images/foto-perfil.jpg"}
            placeholder="blur"
          />
        </section>
        <section
          id="introduction"
          className="grid gap-8 my-6 max-w-[85ch] mx-auto text-justify"
        >
          <h2 className="text-3xl">
            Who am <span className="text-secondary">I?</span>{" "}
          </h2>
          <p>
            I am <strong>highly passionate about technology</strong> with
            training in application development,{" "}
            <strong>based in Madrid, Spain.</strong> I have a strong{" "}
            <strong>interest in clean code</strong> development such as TDD and
            SOLID practices.
          </p>
          <p>
            Additionally,{" "}
            <strong>
              I excel in working within teams and adapting to changing work
              environments.
            </strong>{" "}
            I am constantly seeking new opportunities to apply my skills and
            knowledge, and to continue growing as a professional in this
            industry.
          </p>
          <p>
            I am{" "}
            <strong>
              eager to join a company that values and fosters growth,
              innovation, and teamwork
            </strong>
            , where I can make a meaningful contribution.
          </p>
        </section>
        <section id="skills" className="grid gap-8 my-10 max-w-[85ch] mx-auto ">
          <h2 className="text-3xl">
            Work <span className="text-secondary">experience</span>
          </h2>
          {jobs.map((job) => (
            <div
              id="job"
              key={job.id}
              className="bg-white rounded-lg p-5 flex flex-col gap-2"
            >
              <h3 className="text-xl">{job.role}</h3>
              <p className="font-semibold">
                {job.company}:{" "}
                <span className="text-semibold">
                  {job.current
                    ? `${job.startMonth.en}' ${job.startYear} - Present`
                    : `${job.startMonth.en}' ${job.startYear} - ${job.endMonth.en}' ${job.endYear}`}
                </span>
              </p>
              <ul className="list-disc pl-5 ">
                {job.duties.en.map((duty, idx) => (
                  <li key={idx}>{duty}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
        <section id="work-experience"></section>
        <section id="education"></section>
      </main>
    </MainLayout>
  );
}

export default Aboutme;
