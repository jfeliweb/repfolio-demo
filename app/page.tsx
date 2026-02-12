import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-mocha-50 flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-charcoal-900 mb-4">
          Repfolio Demo
        </h1>
        <p className="text-charcoal-700 mb-6">
          Enter the password to access the demo pages.
        </p>
        <Link
          href="/login"
          className="inline-block bg-fern-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-fern-700"
        >
          Go to Login
        </Link>
      </div>
    </div>
  );
}
