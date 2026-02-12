import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo 1 | Repfolio',
};

export default function Demo1Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
