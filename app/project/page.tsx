'use client';

import Navbar from '@/app/component/navbar';
import Footer from '@/app/component/footer';
import ProjectCard from '@/app/component/projectCard';

type Project = {
  title: string;
  description: string;
  image: string;
  github: string;
  live: string;
};

export default function Projects() {
  const projectList: Project[] = [
    {
      title: 'Travel Planner App',
      description: 'A web app that helps users plan trips, track destinations, and manage itineraries using Next.js and Tailwind CSS.',
      image: '/travel planner.jpeg',
      github: 'https://github.com/iabhii1607/travel-planner',
      live: '',
    },
    {
      title: 'E-Commerce Site',
      description: 'A responsive shopping site built with React, allowing users to browse, add to cart, and checkout.',
      image: '/ecom.jpeg',
      github: 'https://github.com/iabhii1607/ecommerce-site',
      live: '',
    },
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio to showcase my skills, resume, and projects using Next.js and Framer Motion.',
      image: '/port.jpeg',
      github: 'https://github.com/iabhii1607/portfolio',
      live: '',
    },
    {
      title: 'finance Tracker',
      description: 'A web app that helps users Track expeses, track expenditure, and manage itineraries using React and Tailwind CSS.',
      image: '/finance.jpeg',
      github: 'https://github.com/iabhii1607/finance-tracker',
      live: '',
    },
  ];

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-10 pt-28">
        <h1 className="text-4xl font-bold mb-10">My Projects</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectList.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
