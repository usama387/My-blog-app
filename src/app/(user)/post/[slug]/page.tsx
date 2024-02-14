// Import necessary modules and dependencies
import { groq } from "next-sanity";
import React from "react";
import { Post } from "../../../../../types";
import { client, urlFor } from "@/lib/createClient";
import Image from "next/image";
import Container from "@/components/Container";
import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import Link from "next/link";

import { PortableText } from "@portabletext/react";
import { RichText } from "@/components/RichText";

// Define the Props interface slug coming through params
interface Props {
  params: {
    slug: string;
  };
}

// This validation will help edit and reflect change in single Post from sanity
export const revalidate = 30;

//Fetching single current slug through generateStaticParams through server side rendering which is very efficient and loads the post instantly
export const getStaticParams = async () => {
  const query = groq`*[_type == 'post']{
    slug
  }`;

  // the slugs contain post data array with type definition POST[] defined in types.ts file
  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug?.slug?.current);
  return slugRoutes?.map((slug) => ({
    slug,
  }));
};

// Define the SlugPage component
const SlugPage = async ({ params: { slug } }: Props) => {
  const query = groq`*[_type == 'post' && slug.current == $slug][0]{
    ...,
    body,
    author->
  }`;

  const post: Post = await client.fetch(query, { slug });

  return (
    <div className="bg-[#54F3A6]">
      <Container className="mb-10 bg-[#54F3A6]">
        <div className="flex items-center mb-10">
          <div className="w-full md:w-2/3">
            {/* Image of the Post */}
            <Image
              src={urlFor(post?.mainImage).url()}
              alt="post image"
              height={500}
              width={500}
              className="object-cover w-full"
            />
          </div>
          <div className="w-1/3 hidden md:inline-flex flex-col items-center gap-5 px-4">
            {/* Image of the Author */}
            <Image
              src={urlFor(post?.author?.image).url()}
              alt="author image"
              height={200}
              width={200}
              className="h-32 w-32 rounded-full object-cover"
            />
            {/* Author name and description */}
            <p className="text-3xl text-[#221577] font-bold">
              {post?.author?.name}
            </p>
            <p className="text-[#221577] tracking-wide  text-1xl text-bold">
              {post?.description}
            </p>
            <p className="text-[#221577] text-1xl tracking-wide text-bold">
              {post?.author?.description}
            </p>
            <div className="flex items-center gap-3">
              <Link
                href={
                  "https://www.youtube.com/channel/UCRSTPtiqomZtdv7jd8MebGA"
                }
                target="blank"
                className="w-10 h-10 bg-red-600 text-white text-xl rounded-full flex items-center justify-center hover:bg-[#5442ae] duration-200"
              >
                <FaYoutube />
              </Link>
              <Link
                href={"https://github.com/usama387/"}
                target="blank"
                className="w-10 h-10 bg-gray-500 text-white text-xl rounded-full flex items-center justify-center hover:bg-[#5442ae] duration-200"
              >
                <FaGithub />
              </Link>

              <Link
                href={
                  "https://www.youtube.com/channel/UChkOsij0dhgft0GhHRauOAA"
                }
                target="blank"
                className="w-10 h-10 bg-[#bc1888] text-white text-xl rounded-full flex items-center justify-center hover:bg-[#5442ae] duration-200"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
        <PortableText value={post?.body} components={RichText} />
      </Container>
    </div>
  );
};

// Export the SlugPage component as default
export default SlugPage;
