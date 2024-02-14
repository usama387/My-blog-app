import { createClient } from "next-sanity";
// next-sanity is a npm package needs to be installed
// this is module being imported from sanityCli;
import ImageUrlBuilder from "@sanity/image-url";



// It has access to all my environment variable keys
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!;

// this instance creates a client from next-sanity to get access all env variables
export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn:false,
});


// a helper builder function accessing client being passed to be connected with sanity
const builder = ImageUrlBuilder(client)

// to get access to image
export const urlFor = (source:any)=>{
    return builder.image(source)
}


// Sanity query fetcher
// *[_type == 'post']{
//     ...,
//     author->,
//       categories[]->   
//   } | order(_createdAt asc)