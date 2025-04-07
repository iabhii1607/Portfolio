'use client';

import Navbar from '@/app/component/navbar';
import Footer from '@/app/component/footer';

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto px-4 py-10 pt-28"> {/* <- Added pt-28 for top spacing */}
        <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
        <p className="text-lg text-gray-700 mb-4">
          I&apos;m always open to connect! Feel free to reach out via email or through my social links.
        </p>
        <div className="space-y-4">
          <p><strong>Email:</strong> iabhii1607@gmail.com </p>
          <p>
            <strong>LinkedIn:</strong>{' '}
            <a
              href="https://linkedin.com/in/abhishek-sharma-782a00224"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/abhishek-sharma-782a00224
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{' '}
            <a
              href="https://github.com/iabhii1607"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/iabhii1607
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
