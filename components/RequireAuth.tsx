'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function RequireAuth({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isAuth = localStorage.getItem('demo-auth');
      if (!isAuth) {
        router.push('/login');
      }
    }
  }, [router]);

  return <>{children}</>;
}
