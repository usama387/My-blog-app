import Container from "@/components/Container";
import Image from "next/image";
import React from "react";
import author from "@/images/author.jpg";

const AboutPage = () => {
  return (
    <div className="bg-[#533FD7]">
      <Container className="py-20 px-32 flex flex-col gap-10 bg-[#533FD7]">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left div */}
          <div className="p-10 flex-shrink-0 md:w-1/2">
            <h1 className="text-3xl font-extrabold text-[#54F3A6]">
              USAMA RAZAAQ
            </h1>
            <p className="text-[#54F3A6] text-2xl font-semibold mt-2">
              I am a web developer developing single page applications with NEXT
              JS and other React libraries. This web app is built using NextJS
              and Sanity an efficient CMS with seamless integration i used groq
              query for data fetching and realtime updation through sanity and
              groq. This is a simple blog app contains main image of he blog and
              its description with author details.
            </p>
          </div>

          {/* Right div */}
          <div className="w-1/2 md:w-auto flex-shrink-0">
            <Image
              src={author}
              height={500}
              width={500}
              alt="developer image"
              className="w-full max-h-[500px] object-cover group-hover:scale-105 duration-500 rounded-tl-md rounded-bl-md"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;
