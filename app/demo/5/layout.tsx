import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo 5 | Repfolio',
};

export default function Demo5Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
