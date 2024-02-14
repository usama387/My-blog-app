import React from 'react'
import type { Metadata } from "next";
import type { Viewport } from "next";
import { metadata as studioMetadata } from "next-sanity/studio/metadata";
import { viewport as studioViewport } from "next-sanity/studio/viewport";
import Studio from './Studio';

//initial status on load
export const metadata:Metadata={
    ...studioMetadata,
    title:"Loading Studio..."
}

// For View Port
export const viewport: Viewport = {
    ...studioViewport,
    interactiveWidget: "resizes-content",
  };
  

const StudioPage = () => {
  return (
    <Studio/>
  )
}

export default StudioPage