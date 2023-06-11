"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col pt-32 sm:pt-20 md:pt-0 text-center h-screen md:text-left md:flex-row max-w-7xl mx-auto px-10 justify-evenly items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.div
        className="mt-10 flex-1 grid place-items-center"
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <Image
          className="-mb-20 md:mb-0 flex-shrink-0 h-36 w-36 sm:w-56 sm:h-56 rounded-full md:w-64 md:rounded-none xl:w-[400px] xl:h-[400px]"
          width={400}
          height={400}
          alt="Profile Photo"
          src="https://pbs.twimg.com/profile_images/1610829274470318080/rHKyyxoI_400x400.jpg"
        />
      </motion.div>

      <div className="space-y-5 sm:space-y-10 px-0 mt-20 md:px-10 flex-1">
        <h4 className="text-2xl md:text-4xl font-semibold">
          Know more about{" "}
          <span className="underline decoration-[#f7ab0a]/50">Me!</span>
        </h4>
        <p className="text-base">
          I am a web developer with experience in MERN stack, Flutter, and
          ThreeJS. With proficiency in both Javascript and Dart, I am adaptable
          to various situations and a quick learner. My focus on creating
          user-friendly and scalable solutions is at the core of everything I
          do. I am passionate about using technology to create meaningful change
          and am committed to delivering solutions that not only meet client
          needs, but exceed their expectations.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
