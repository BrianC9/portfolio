import Head from "next/head";
import Image from "next/image";
import SocialIcons from "./SocialIcons";
function Homepage() {
  return (
    <main className="grid grid-cols-1 gap-8 place-items-center place-content-center w-full  md:grid-cols-2 h-5/6">
      <Image
        src={"/assets/images/foto-perfil.jpg"}
        alt="Myself portrait"
        width={400}
        height={400}
        className="rounded-full sm:w-2/4 md:w-[75%]"
        priority={true}
        blurDataURL={"/assets/images/foto-perfil.jpg"}
        placeholder="blur"
      />
      <div className="flex flex-col items-center  gap-2 md:text-left md:items-start  ">
        <div className="self-start pl-4 sm:pl-6 md:pl-0 text-3xl md:text-4xl  ">
          <h1 className="typewritter-animation">
            Hi I`m <span className="text-secondary">Bryan</span>
          </h1>
          <span className="animate-waving-hand absolute ml-1 sm:ml-3">👋🏼</span>
          <span className="animate-waving-hand  ml-[2.5rem] md:ml-14 absolute">
            👋🏼
          </span>
        </div>
        <h2 className="font-medium text-xl text-center md:text-left">
          Software developer in continuos learning
        </h2>
        <SocialIcons />
      </div>
    </main>
  );
}

export default Homepage;
