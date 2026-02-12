'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { RepfolioLogo } from '@/components/RepfolioLogo';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === process.env.NEXT_PUBLIC_DEMO_PASSWORD) {
      localStorage.setItem('demo-auth', 'true');
      document.cookie = 'demo-auth=true; path=/; max-age=86400'; // 1 day, for middleware
      router.push('/demo/1');
    } else {
      setError('Incorrect password');
    }
  };

  return (
    <div className="min-h-screen bg-[rgb(244,241,241)] flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <RepfolioLogo className="text-3xl mb-6 text-center" />
        <h1 className="text-2xl font-bold text-[rgb(21,26,30)] mb-2">
          Demo Access
        </h1>
        <p className="text-[rgb(63,77,90)] mb-6">
          Enter password to view the demo site
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-3 border border-[rgb(209,199,200)] rounded-lg mb-4"
          />
          {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-[rgb(70,134,87)] text-white py-3 rounded-lg font-semibold hover:bg-[rgb(53,100,65)]"
          >
            Access Demo
          </button>
        </form>
      </div>
    </div>
  );
}
