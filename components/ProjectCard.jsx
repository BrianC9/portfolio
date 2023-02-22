/* eslint-disable @next/next/no-img-element */
import { iconResolver } from "@/utils/iconResolver";
import Link from "next/link";
import { useRef } from "react";
import Image from "next/image";
import { useDraggable } from "react-use-draggable-scroll";
function ProjectCard({ project }) {
  const ref = useRef();
  const { events } = useDraggable(ref);
  const { slug, title, shortDescription, technologies, images, category } =
    project;
  return (
    <div className="w-full">
      <div className="c-card block overflow-hidden rounded-lg bg-light/50 shadow-md hover:shadow-xl dark">
        <div className="relative overflow-hidden pb-60">
          <Link href={`/projects/${slug}`}>
            <Image
              className="absolute inset-0 h-full w-full object-cover"
              width={400}
              height={400}
              src={images.cover.src}
              alt={images.cover.alt.en}
            />
          </Link>
        </div>
        <div className="p-4 ">
          <span className="inline-block rounded-full bg-secondary p-2 text-xs font-semibold uppercase leading-none  text-white tracking-wider">
            {category}
          </span>
          <h2 className="text-xl mt-2 mb-2 font-bold">{title}</h2>
          <div
            className="my-3 flex gap-4 overflow-x-scroll scrollbar-hide "
            {...events}
            ref={ref}
          >
            {technologies.map((tech) => (
              <div key={tech.id + slug}>
                {iconResolver(tech.id, 40, tech.name)}
              </div>
            ))}
          </div>
          <p className="text-clamp">{shortDescription.en}</p>
        </div>
        <div className="border-t border-b p-4 text-xs text-gray-700 ">
          <Link href={`/projects/${slug}`} className="flex gap-1 items-center">
            <p>Visit project </p>
            {iconResolver("redirect", 15, "redirect")}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
