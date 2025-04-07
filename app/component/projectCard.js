import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectCard({ title, description, image, github, live }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Image src={image} alt={title} width={600} height={400} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl text-black font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex space-x-4">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black">
              <FaGithub size={24} />
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black">
              <FaExternalLinkAlt size={24} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
