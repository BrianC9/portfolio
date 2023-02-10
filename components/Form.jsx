import React from 'react';

function Form() {
  return (
    <div className='relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 rounded-lg sm:rounded-xl sm:px-10'>
      <div className='w-full'>
        <form action=''>
          <div className='relative mt-6'>
            <input
              type='text'
              name='username'
              id='username'
              required
              placeholder='Username'
              className='peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-primary focus:outline-none'
            />
            <label
              htmlFor='username'
              className='text-red pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800'
            >
              Username
            </label>
          </div>
          <div className='relative mt-6'>
            <input
              type='email'
              name='email'
              id='email'
              required
              placeholder='Email Address'
              className='peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none'
            />
            <label
              htmlFor='email'
              className='text-red pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800'
            >
              Email
            </label>
          </div>
          <div className='relative mt-6'>
            <textarea
              name='message'
              id='message'
              rows={3}
              required
              placeholder='Message...'
              className=' peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-primary focus:outline-none'
            ></textarea>
            <label
              htmlFor='message'
              className='pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm  opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800'
            >
              Message
            </label>
          </div>
          <div className='my-6'>
            <button
              type='submit'
              className='w-full rounded-md bg-secondary px-3 py-4 text-white hover:bg-sky-600 focus:bg-primart focus:outline-none'
            >
              Send it
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
