/* eslint-disable @next/next/no-img-element */
import { iconResolver } from '@/utils/iconResolver';
import Link from 'next/link';
import React from 'react';

function ProjectCard({ project }) {
  const { slug, title, shortDescription, technologies, images, category } =
    project;
  return (
    <div className='w-full'>
      <div className='c-card block overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl'>
        <div className='relative overflow-hidden pb-60'>
          <a href={`/projects/${slug}`}>
            <img
              className='absolute inset-0 h-full w-full object-cover'
              src={images.cover.src}
              alt={`Go to ${title} poject page`}
            />
          </a>
        </div>
        <div className='p-4 '>
          <span className='inline-block rounded-full bg-secondary p-2 text-xs font-semibold uppercase leading-none tracking-wide text-white'>
            {category}
          </span>
          <h2 className='text-xl mt-2 mb-2 font-bold'>{title}</h2>
          <div className='my-3 flex gap-1 '>
            {technologies.map((tech) => (
              <div key={tech.id}>{iconResolver(tech.id, 60, tech.name)}</div>
            ))}
          </div>
          <p className='text-sm'>{shortDescription.en}</p>
        </div>
        <div className='border-t border-b p-4 text-xs text-gray-700 '>
          <Link href={`/projects/${slug}`} className='flex gap-1 items-center'>
            <p>Visit project </p>
            {iconResolver('redirect', 15, 'redirect')}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
