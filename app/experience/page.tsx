
import Navbar from '@/app/component/navbar';
import Footer from '@/app/component/footer';

export default function Experience() {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-10 pt-28">
        <h1 className="text-4xl font-bold mb-6">Experience</h1>
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold">Full Stack Developer Intern</h2>
            <p className="text-gray-600">Auribesis, Ludhiana | Jan 2025 – Present</p>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Worked on real-time applications using React, Next.js, Firebase, and MongoDB.</li>
              <li>Implemented authentication, CRUD APIs, and responsive UI components.</li>
              <li>Collaborated in a team to build scalable SaaS features and dashboards.</li>
            </ul>
          </div>
          {/* Add more experiences here */}
        </div>
      </div>
      <Footer />
    </>
  );
}
