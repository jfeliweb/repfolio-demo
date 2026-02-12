import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo 10 | Repfolio',
};

export default function Demo10Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
