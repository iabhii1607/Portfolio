import Navbar from '@/app/component/navbar';
import Footer from '@/app/component/footer';

export default function About() {
  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-10 pt-28">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <p className="text-lg text-gray-700 mb-4">
          Hi, I&apos;m a passionate full-stack web developer with a strong focus on building clean, scalable, and user-friendly applications. I specialize in technologies like <strong>React</strong>, <strong>Next.js</strong>, <strong>JavaScript</strong>, <strong>TypeScript</strong>, <strong>Tailwind CSS</strong>, <strong>Firebase</strong>, and <strong>MongoDB</strong>.
        </p>
        <p className="text-lg text-gray-700 mb-4">
  I recently completed my internship at <strong>Auribesis</strong> as a Full Stack Developer, where I gained hands-on experience in building robust web applications from scratch. I&apos;m now actively exploring opportunities in both web development and cybersecurity.
</p>

        <p className="text-lg text-gray-700 mb-4">
          I completed my 10th and 12th from <strong>Kendriya Vidyalaya No.1, RCF Hussainpur, Kapurthala, Punjab</strong>. Currently, I&apos;m in the final year of my graduation, pursuing a degree in <strong>Computer Science & Engineering</strong> from <strong>Guru Nanak Dev Engineering College, Ludhiana</strong>.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          I love learning new technologies, exploring open-source projects, and solving real-world problems through code. My goal is to continue growing as a full-stack developer and work on impactful products that make a difference.
        </p>
        <p className="text-lg text-gray-700">
          When I&apos;m not coding, you&apos;ll find me reading tech blogs, diving into new tools, gaming, or experimenting with new features on GitHub.
        </p>
      </div>
      <Footer />
    </>
  );
}
