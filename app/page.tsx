'use client';

import Navbar from '@/app/component/navbar';
import Footer from '@/app/component/footer';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleInteraction = () => setShowContent(true);
    window.addEventListener('mousemove', handleInteraction);
    window.addEventListener('scroll', handleInteraction);
    return () => {
      window.removeEventListener('mousemove', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
    };
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white"
      >
        <Navbar />

        {showContent ? (
          <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Cover Photo */}
            <div className="relative w-full h-48 md:h-64">
              <Image
                src="/cover.jpg"
                alt="Cover"
                layout="fill"
                objectFit="cover"
                className="rounded-b-lg opacity-90"
              />
            </div>

            {/* Spotlight Wrapper */}
            <div className="relative z-0">
              {/* Spotlight Glow Behind */}
              <div className="absolute inset-0 flex justify-center">
                <div className="w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-30 -z-10 mt-8" />
              </div>

              {/* Profile Section */}
              <div className="relative flex flex-col items-center text-center -mt-16 px-4 z-10">
                <Image
                  src="/IMG_1627.jpg"
                  alt="Abhishek"
                  width={130}
                  height={130}
                  className="rounded-full border-4 border-white shadow-md"
                />
                <h1 className="text-3xl font-bold text-white mt-4">
                  Hi, I&apos;m Abhishek 👋
                </h1>
                <p className="text-gray-300 mt-2 max-w-xl">
                  A passionate Frontend Developer skilled in React, Next.js, Tailwind CSS, TypeScript, Firebase & MongoDB.
                  Currently a Full Stack Intern at Auribesis.
                </p>

                {/* Buttons */}
                <div className="mt-6 flex flex-wrap justify-center gap-4">
                  <Link href="/project">
                    <button className="bg-gradient-to-r from-gray-700 to-gray-900 text-white px-6 py-2 rounded shadow hover:brightness-110">
                      View Projects
                    </button>
                  </Link>
                  <Link href="/contact">
                    <button className="bg-transparent border border-blue-500 text-blue-400 px-6 py-2 rounded hover:bg-blue-900/20">
                      Contact Me
                    </button>
                  </Link>
                  <Link href="/experience">
                    <button className="bg-transparent border border-blue-500 text-blue-400 px-6 py-2 rounded hover:bg-blue-900/20">
                      Experience
                    </button>
                  </Link>
                </div>

                {/* Resume Download */}
                <a
                  href="/abhi resume.pdf"
                  download
                  className="mt-6 inline-block text-blue-400 underline hover:text-blue-300"
                >
                  Download Resume
                </a>
              </div>

              {/* Tech Stack Carousel */}
              <div className="mt-16 w-full flex flex-col items-center px-4">
                <h2 className="text-2xl font-semibold text-center mb-6">Tech Stack</h2>
                <TechCarousel />
              </div>
            </div>
          </motion.main>
        ) : (
          <div className="pt-40 text-center text-gray-500">Waiting for interaction...</div>
        )}

        <Footer />
      </motion.div>
    </>
  );
}

// 👇 TechCarousel component
function TechCarousel() {
  const techStack = [
    { name: 'React', image: '/react.png' },
    { name: 'Next.js', image: '/nextjs.jpeg' },
    { name: 'Tailwind', image: '/tailwind.png' },
    { name: 'TypeScript', image: '/typescript.png' },
    { name: 'Firebase', image: '/firebase.png' },
    { name: 'MongoDB', image: '/mongodb.png' },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % techStack.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const visibleTechs = [
    techStack[index],
    techStack[(index + 1) % techStack.length],
    techStack[(index + 2) % techStack.length],
  ];

  return (
    <div className="flex gap-6 transition-all duration-500">
      {visibleTechs.map((tech, idx) => (
        <div
          key={idx}
          className="min-w-[120px] bg-white/10 text-white p-4 rounded-xl shadow-md text-center backdrop-blur hover:scale-105 transition-transform duration-300"
        >
          <Image
            src={tech.image}
            alt={tech.name}
            width={40}
            height={40}
            className="mx-auto mb-2"
          />
          <p className="text-sm font-semibold">{tech.name}</p>
        </div>
      ))}
    </div>
  );
}