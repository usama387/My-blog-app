import Link from "next/link";
import React from "react";

// defining the types of the props
interface Props {
  title?: string;
  className?: string;
}

// taking title and children as props accessing from Logo tag in Navbar
const Logo = ({ className, title }: Props) => {
  return (
    <Link href={"/"}>
      <h1 className={`text-3xl font-extrabold uppercase ${className}`}>
        {title || "USAMAKEEPSCODE"}
      </h1>
    </Link>
  );
};

export default Logo;
