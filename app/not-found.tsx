import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 p-4">
      <div className="text-center max-w-md">
        <h2 className="text-4xl font-black font-heading mb-4 text-red-600 tracking-widest uppercase">404 - Not Found</h2>
        <p className="text-gray-600 mb-8 font-sans">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link 
          href="/"
          className="inline-block bg-black hover:bg-gray-800 text-white font-sans font-bold uppercase tracking-wider py-3 px-8 rounded-full transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
