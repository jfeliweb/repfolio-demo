import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo 3 | Repfolio',
};

export default function Demo3Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
