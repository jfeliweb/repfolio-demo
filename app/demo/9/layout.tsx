import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo 9 | Repfolio',
};

export default function Demo9Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
