import BlogContent from "@/components/BlogContent";
import Hero from "@/components/Hero";
import { client } from "@/lib/createClient";
import { groq } from "next-sanity";


// This validation will help edit and reflect change in single Post from sanity
export const revalidate = 30;

// fetching with the query instance using groq package of next-sanity the type is equal to post and passing all the sub schemas includes author and categories 
const postsQuery = groq`*[_type == 'post']{
  ...,
  author->,
    categories->[]->
} | order(_createdAt asc)`

// Making it an async function to await response in it
export default async function Home() {

  const posts = await client.fetch(postsQuery);
  return (
    <>
      <main className="bg-[#533FD7]">
        <Hero />
        {/* note that the posts are coming from the query and async function and being passed as prop into BlogContent component which shows the posts */}
        <BlogContent posts={posts}/>
      </main>
    </>
  );
}
