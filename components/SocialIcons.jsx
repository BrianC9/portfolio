import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
function SocialIcons({ size }) {
  return (
    <div className='flex items-center gap-3 h-10 md:h-20'>
      <a
        href='https://www.linkedin.com/in/bryan-cusme/'
        className='h-full'
        rel='noreferrer'
        title='Go to linkedin profle'
        target='_blank'
      >
        <FaGithubSquare
          color={'#21243D'}
          className='hover:fill-secondary cursor-pointer'
          size={size}
        />
      </a>
      <a
        href='https://www.linkedin.com/in/bryan-cusme/'
        title='Go to gihtub profle'
        rel='noreferrer'
        target='_blank'
        className='h-full'
      >
        <FaLinkedin
          color={'#21243D'}
          size={size}
          className='hover:fill-secondary cursor-pointer'
        />
      </a>
    </div>
  );
}

export default SocialIcons;
