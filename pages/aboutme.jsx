// TODO:
import MainLayout from '@/components/MainLayout';
import Image from 'next/image';
import jobs from '../public/assets/json/jobs.json';
import personalInfo from '../public/assets/json/aboutme.json';

import { iconResolver } from '@/utils/iconResolver.js';
import Timeline from '@/components/Timeline';
function Aboutme() {
  console.log(jobs);

  return (
    <MainLayout page={'About me'}>
      <main className='px-5 sm:px-10 md:px-15 lg:px-20 xl:px-30'>
        <section
          id='heading'
          className='grid gap-4 grid-cols-1 place-content-center place-items-center w-2/4 mx-auto'
        >
          <h1 className='text-2xl md:text-4xl uppercase'>About me</h1>
          <Image
            src={'/assets/images/foto-perfil.jpg'}
            alt='Myself portrait'
            width={400}
            height={400}
            className='rounded-full w-full md:w-2/5'
            priority={true}
            blurDataURL={'/assets/images/foto-perfil.jpg'}
            placeholder='blur'
          />
        </section>
        <section
          id='introduction'
          className='grid gap-8 my-6 max-w-[85ch] mx-auto text-justify'
        >
          <h2 className='text-2xl'>
            Who am <span className='text-secondary'>I?</span>
          </h2>
          <p>
            I am <strong>highly passionate about technology</strong> with
            training in application development,{' '}
            <strong>based in Madrid, Spain.</strong> I have a strong{' '}
            <strong>interest in clean code</strong> development such as TDD and
            SOLID practices.
          </p>
          <p>
            Additionally,{' '}
            <strong>
              I excel in working within teams and adapting to changing work
              environments.
            </strong>{' '}
            I am constantly seeking new opportunities to apply my skills and
            knowledge, and to continue growing as a professional in this
            industry.
          </p>
          <p>
            I am{' '}
            <strong>
              eager to join a company that values and fosters growth,
              innovation, and teamwork
            </strong>
            , where I can make a meaningful contribution.
          </p>
        </section>
        <section
          id='work-experience'
          className='grid gap-8 my-10 max-w-[85ch] mx-auto '
        >
          <h2 className='text-2xl'>
            Work <span className='text-secondary'>experience</span>
          </h2>
          {jobs.map((job) => (
            <div
              id='job'
              key={job.id}
              className='bg-white rounded-lg p-5 flex flex-col gap-2'
            >
              <h3 className='text-xl'>{job.role}</h3>
              <p className='font-semibold'>{job.company}:</p>
              <p className='text-semibold text-sm'>
                {job.current
                  ? `${job.startMonth.en}' ${job.startYear} - Present`
                  : `${job.startMonth.en}' ${job.startYear} - ${job.endMonth.en}' ${job.endYear}`}
              </p>
              <ul className='list-disc pl-5 '>
                {job.duties.en.map((duty, idx) => (
                  <li key={idx}>{duty}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
        <section id='skills' className='grid gap-8 my-6 max-w-[85ch] mx-auto '>
          <h2 className='text-2xl text-secondary'>Skills</h2>
          <h3 className='text-xl'>Technologies I have worked with:</h3>
          <div className='grid grid-cols-3 gap-5 place-items-center '>
            {personalInfo.skills.technologies.map((tech) => (
              <div key={tech.id}>
                {iconResolver(tech.id, 80, tech.name)}
                <p className='text-center font-semibold'>{tech.name}</p>
              </div>
            ))}
          </div>
        </section>
        <section
          id='education'
          className='grid gap-8 my-6 max-w-[85ch] mx-auto '
        >
          <h2 className='text-2xl text-secondary'>Education</h2>

          <Timeline />
        </section>
      </main>
    </MainLayout>
  );
}

export default Aboutme;
