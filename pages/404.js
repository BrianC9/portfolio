/* eslint-disable @next/next/no-img-element */
import MainLayout from '@/components/MainLayout';
import Link from 'next/link';
const NotFoundPage = () => {
  return (
    <MainLayout>
      <main className='px-5 sm:px-10 md:px-15 lg:px-20 xl:px-30 max-w[85ch] flex justify-center flex-col items-center h-full text-center'>
        <h1>There is nothing to see here </h1>
        <img
          src='https://http.cat/404'
          alt='http satus code represented by a cat'
        />
        <Link href={'/'}>
          <h2 className='text-3xl'>
            Get back{' '}
            <span className='text-secondary hover:underline underline-offset-4'>
              to homepage
            </span>
          </h2>
        </Link>
      </main>
    </MainLayout>
  );
};
export default NotFoundPage;
