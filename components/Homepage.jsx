import Image from "next/image";
import SocialIcons from "./SocialIcons";
function Homepage() {
  return (
    <main className="max-w-[85ch] mx-auto flex flex-col md:flex md:flex-row items-center  justify-center gap-14  px-5 sm:px-10 md:px-15 lg:px-20 xl:px-30 md:grid-cols-2 ">
      <Image
        src={"/assets/images/foto-perfil.jpg"}
        alt="Myself portrait"
        width={350}
        height={350}
        className="rounded-full "
        priority={true}
        blurDataURL={"/assets/images/foto-perfil.jpg"}
        placeholder="blur"
      />
      <section className="flex flex-col items-center  gap-2 md:text-left md:items-start  ">
        <div className=" self-start pl-4 sm:pl-6 md:pl-0 text-3xl md:text-4xl  ">
          <h1 className="typewritter-animation">
            Hi I`m <span className="text-secondary">Bryan</span>
          </h1>
          <span className="animate-waving-hand absolute ml-1 sm:ml-3 md:ml-0">
            👋🏼
          </span>
          <span className="animate-waving-hand  ml-[2.5rem] sm:ml-14 md:ml-10 absolute">
            👋🏼
          </span>
        </div>
        <h2 className="font-medium text-xl text-center md:text-left">
          Software developer in continuos learning
        </h2>
        <SocialIcons size={40} />
      </section>
    </main>
  );
}

export default Homepage;
