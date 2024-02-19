"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const ContactPage = () => {
  // Text that will be displayed on page
  const text = "Write me an email and let's connect!";

  // useState to manage success of message
  const [success, setSuccess] = useState(false);

  // useState to manage error of message
  const [error, setError] = useState(false);

  // Configuration for email/js
  const form = useRef<HTMLFormElement>(null); // Fixing type and initialization

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    // Check if form.current is defined before accessing it
    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID!,
          process.env.NEXT_PUBLIC_TEMPLATE_ID!,
          form.current,
          {
            publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          }
        )
        .then(
          () => {
            setSuccess(true);
            form.current!.reset();
          },
          (_error) => {
            setError(true);
          }
        );
    }
  };

  return (
    // Adding framer motion to the most parent div for smooth opening of page
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* Text Container */}
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 mt-8">
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {/* Use motion.span for animation */}
            {text.split("").map((letter, index) => (
              <motion.span
               className="text-[#533FD7]"
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>
        {/* Form Container */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-1/2 lg:h-full lg:w-1/2 rounded-xl text-xl flex flex-col gap-8 justify-center p-24 bg-slate-300"
        >
          {/* Contents of form*/}
          <span className="text-[#533FD7]">Dear Usama,</span>
          <textarea
            rows={6}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
            name="user_message"
          />
          <span className="text-[#533FD7]">My email address is:</span>
          <input
            name="user_email"
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
          />
          <span className="text-[#533FD7]">Regards</span>
          <button className="bg-[#533FD7] text-[#54F3A6] rounded font-semibold p-4">
            Send
          </button>
          {/* Display success or error message */}
          {success && (
            <span className="text-green-800 font-semibold">
              Message sent successfully
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
