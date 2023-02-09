/* eslint-disable @next/next/no-img-element */
import { iconResolver } from "@/utils/iconResolver";
import React from "react";

function ProjectCard({ project }) {
  const { slug, title, shortDescription, technologies, images, category } =
    project;
  return (
    <div className="w-full">
      <div className="c-card block overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl">
        <div className="relative overflow-hidden pb-60">
          <a href={`/projects/${slug}`}>
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src={images.cover}
              alt={`Go to ${title} poject page`}
            />
          </a>
        </div>
        <div className="p-4 ">
          <span className="inline-block rounded-full bg-sky-600 p-3 text-xs font-semibold uppercase leading-none tracking-wide text-white">
            {category}
          </span>
          <h2 className="mt-2 mb-2 font-bold">{title}</h2>
          <div className="my-3 flex gap-1 ">
            {technologies.map((tech) => (
              <div key={tech.id}>
                {iconResolver(tech.id, 80, tech.name)}
                <p className="text-center font-semibold">{tech.name}</p>
              </div>
            ))}
          </div>
          <p className="text-sm">{shortDescription.en}</p>
        </div>
        <div className="border-t border-b p-4 text-xs text-gray-700 ">
          <a href={`/projects/${slug}`} className="flex gap-1">
            <p>Visit project </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
            >
              <path
                d="M10.5 2.49976V3.99976H13.1925L5.82 11.3723L6.8775 12.4298L14.25 5.05726V7.74976H15.75V2.49976M14.25 14.4998H3.75V3.99976H9V2.49976H3.75C3.35218 2.49976 2.97064 2.65779 2.68934 2.9391C2.40804 3.2204 2.25 3.60193 2.25 3.99976V14.4998C2.25 14.8976 2.40804 15.2791 2.68934 15.5604C2.97064 15.8417 3.35218 15.9998 3.75 15.9998H14.25C14.6478 15.9998 15.0294 15.8417 15.3107 15.5604C15.592 15.2791 15.75 14.8976 15.75 14.4998V9.24976H14.25V14.4998Z"
                fill="#21243D"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
