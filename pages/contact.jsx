import MainLayout from "@/components/MainLayout";
import React from "react";
import Form from "@/components/Form";
import Image from "next/image";
import SocialIcons from "@/components/SocialIcons";

function Contact() {
  return (
    <MainLayout page={"Contact me"}>
      <main className="px-5 sm:px-10 md:px-15 lg:px-20 xl:px-30 max-w-[85ch] mx-auto">
        <section
          id="heading"
          className="grid gap-4 grid-cols-1 place-content-center place-items-center w-2/4 mx-auto"
        >
          <h1 className="text-2xl md:text-4xl uppercase">Contact</h1>
          <Image
            src={"/assets/images/undraw-contact.svg"}
            alt="A person launching a rocket"
            width={700}
            height={700}
            className="w-1/4"
            priority={true}
            blurDataURL={"/assets/images/undraw-contact.svg"}
            placeholder="blur"
          />
        </section>
        <section className="grid gap-5 my-6 max-w-[85ch] mx-auto ">
          <h2 className="text-xl md:text-2xl uppercase">
            Send me a <span className="text-secondary">message</span>
          </h2>

          <Form />
        </section>
        <section className="grid gap-5 my-16 max-w-[85ch] mx-auto ">
          <h2 className="text-xl md:text-2xl uppercase">
            Find me in my <span className="text-secondary">socials</span>
          </h2>
          <SocialIcons size={50} />
        </section>
      </main>
    </MainLayout>
  );
}

export default Contact;
