import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo 2 | Repfolio',
};

export default function Demo2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
