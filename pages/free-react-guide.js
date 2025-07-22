import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LayoutFullWidth, {
  GradientBackground,
} from '../components/LayoutFullWidth';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function FreeInterviewGuide({ globalData }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      // Replace '/api/lead' with your actual API endpoint
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error('Failed to submit');
      setSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <LayoutFullWidth>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name="Free React Guide" />
      <main className="mx-5">
        <h1 className="text-2xl font-bold mb-4">
          Download Your Free React Guide
        </h1>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <label htmlFor="email" className="block mb-2 font-medium">
              Enter your email to get the guide:
            </label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded px-3 py-2 w-full mb-4"
              placeholder="you@example.com"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Get the Guide
            </button>
            {error && <p className="text-red-600 mt-2">{error}</p>}
          </form>
        ) : (
          <div className="text-center">
            <p className="mb-4 text-green-700 font-semibold">
              Thank you! Your download is ready:
            </p>
            <a
              href="/downloads/react-guide.pdf"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              download
            >
              Download React Guide
            </a>
          </div>
        )}
      </main>

      <GradientBackground
        variant="large"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </LayoutFullWidth>
  );
}

export function getStaticProps() {
  const globalData = getGlobalData();
  return { props: { globalData } };
}
