"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    "https://t4.ftcdn.net/jpg/05/64/31/67/360_F_564316725_zE8llusnCk3Sfr9rdfKya6fV7BQbjfyV.jpg",
    "/images/firstpageimg.jpg",
    "https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
          Hey there, I&apos;m Ole Dybedokken – a passionate developer, data scientist, and entrepreneur. Welcome to my corner of the digital world!
        </Paragraph>
        <Paragraph className=" mt-4">
          My fascination with business started at 16, when I discovered the world of gaming marketplaces. I found joy in buying low and selling high, leading me to work for a company selling electricity subscriptions. It was here I realized that real success didn&apos;t lie in direct sales, but in building systems that work for you – websites that operate without constant oversight.
        </Paragraph>

        <Paragraph className=" mt-4">
        After experimenting with ecommerce stores during high school, I learned that the true winners were those offering services like Shopify. This realization pulled me into the world of SaaS and coding, which led me to pursue a master&apos;s degree in data science.
        </Paragraph>
        <Paragraph className=" mt-4">
        While finishing my studies, I launched my first profitable venture, Norskins.no. Initially, it thrived, but competitors quickly emerged. I had to master SEO and make sure my brand was top-of-mind for customers. Drawing on my experience with chatbots during my master&apos;s, I built an automated system for Norskins, achieving the dream of a business that runs itself.
        </Paragraph>
        <Paragraph className=" mt-4">
        Through years of trial and error, I&apos;ve learned that the features you believe will be huge often flop, while unexpected ones succeed. This is why I advocate for a detached, data-driven approach: launch a Minimal Viable Product (MVP), test the waters, and scale what works.
        </Paragraph>
        <Paragraph className=" mt-4">
        Now, with my skills in AI, automation, and SEO, I help businesses grow and optimize. From gaming companies to enterprises looking to streamline operations, I&apos;m here to help others succeed, just as I&apos;ve done with Norskins.
        </Paragraph>
      </div>
    </div>
  );
}
