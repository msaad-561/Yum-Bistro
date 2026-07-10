'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="text-center max-w-md">
        <h2 className="text-2xl font-bold font-heading mb-4 text-red-600">Something went wrong</h2>
        <p className="text-gray-600 mb-8 font-sans">
          We apologize for the inconvenience. Our team has been notified.
        </p>
        <button
          className="bg-black hover:bg-gray-800 text-white font-sans font-bold py-3 px-6 rounded-md transition-colors"
          onClick={() => reset()}
        >
          Try again
        </button>
      </div>
    </div>
  );
}
