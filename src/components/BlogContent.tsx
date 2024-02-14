import React from "react";
// data type
import { Post } from "../../types";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
// helper function
import { urlFor } from "@/lib/createClient";

// importing the data types created in types.ts file instead of using any
interface Props {
  posts: Post[];
}

const BlogContent = ({ posts }: Props) => {
  return (
    <Container className="py-20 px-10 flex flex-col gap-10 bg-[#533FD7]">
      {/* In this component i am gonna have all my posts */}
      {posts.map((post) => (
        <Link
          href={{
            pathname: `/post/${post?.slug?.current}`,
            query: { slug: post?.slug.current },
          }}
          key={post?._id}
        >
          <div className="flex flex-col md:flex-row gap-10 rounded-md rounded-tr-md rounded-br-md hover:shadow-md duration-200 ">
            {/* LEFT DIV OF POST CONTAINER */}
            <div className="w-full md:w-3/5 group overflow-hidden rounded-t-md rounded-bl-md relative">
              {/* here i used a helper function to reference source of img and it returns url whenever there is an image */}
              <Image
                src={urlFor(post?.mainImage).url()}
                width={500}
                height={500}
                alt="blog-post-image"
                className="w-full max-hh-[500px] object-cover group-hover:scale-105 duration-500 rounded-tl-md rounded-bl-md"
              />
              {/* this self closing div has only styles invoked on image hover */}
              <div className="absolute top-0 left-0 bg-black/10 w-full h-full group-hover:hidden duration-200" />
              <div className="absolute hidden group-hover:inline-flex bottom-0 left-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg to-white p-5 justify-center duration-200">
                <p className="text-lg font-semibold ">click to read</p>
              </div>
            </div>

            {/* RIGHT DIV OF POST CONTAINER */}
            <div className="w-full md:w-2/5 flex flex-col justify-between py-10 px-4">
              <div className="flex flex-col gap-5 ">
                <div className="flex items-center gap-2">
                  {post?.categories?.map((item) => (
                    <p
                      key={item?._id}
                      className="text-xs uppercase font-semibold text-[#54F3A6]"
                    >
                      {item?.title}
                    </p>
                  ))}
                </div>
                {/* Title of Post */}
                <h2 className="text-2xl font-semibold text-[#54F3A6] duration-200 cursor-pointer">
                  {post?.title}
                </h2>
                {/* Description of Post */}
                <p className="text-[#54F3A6] ">{post?.description}</p>
              </div>
              {/* Date of the Post */}
              <div className="flex items-center justify-between">
                <p className="text-[#54F3A6] text-sm font-semibold">
                  {new Date(post?._createdAt).toLocaleDateString("en-Us", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
                {/* Image & Name of the Author */}
                <div className="flex items-center gap-2">
                  <Image
                    src={urlFor(post?.author?.image).url()}
                    width={200}
                    height={200}
                    alt="author image"
                    className="rounded-full object-cover w-14 h-14"
                  />
                  <p className="text-[#54F3A6] text-sm font-medium uppercase">
                    {post?.author?.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </Container>
  );
};

export default BlogContent;
