// src/components/Contact.jsx
import { useState } from 'react';
import { FaEnvelope, FaPhone, FaGithub, FaTwitter, FaFigma } from 'react-icons/fa';
import { FiClipboard } from 'react-icons/fi';

const Contact = () => {
  const [copied, setCopied] = useState({ email: false, phone: false });

  const handleCopy = (type: 'email' | 'phone', text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(prev => ({ ...prev, [type]: true }));
      setTimeout(() => setCopied(prev => ({ ...prev, [type]: false })), 1500);
    });
  };

  const email = 'firanakamura@gmail.com';
  const phone = '+62 21345935033';

  return (
    <section id="contact" className="py-16 px-4 bg-white text-center">
      <div className="max-w-2xl mx-auto">
        <span className="bg-gray-100 text-gray-700 px-4 py-1 rounded-full text-sm">
          Get in touch
        </span>
        <h2 className="text-2xl font-semibold mt-4 mb-6">
          What’s next? Feel free to reach out to me if you’re looking for a developer, have a query, or simply want to connect.
        </h2>

        {/* Email */}
        <div className="flex items-center justify-center space-x-2 mb-2">
          <FaEnvelope className="text-lg text-gray-800" />
          <a href={`mailto:${email}`} className="text-lg text-gray-800 hover:underline">
            {email}
          </a>
          <button
            onClick={() => handleCopy('email', email)}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Copy email"
          >
            <FiClipboard />
          </button>
        </div>
        {copied.email && (
          <div className="text-sm text-green-600 mb-4">Email copied!</div>
        )}

        <div className="flex items-center justify-center space-x-2 mb-2">
          <FaPhone className="text-lg text-gray-800" />
          <a href={`tel:${phone}`} className="text-lg text-gray-800 hover:underline">
            {phone}
          </a>
          <button
            onClick={() => handleCopy('phone', phone)}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Copy phone"
          >
            <FiClipboard />
          </button>
        </div>
        {copied.phone && (
          <div className="text-sm text-green-600 mb-4">Phone number copied!</div>
        )}

        <div className="mt-8 flex justify-center space-x-6 text-2xl text-gray-600">
          <a href="#"><FaFigma /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaGithub /></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
