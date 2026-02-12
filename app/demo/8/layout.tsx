import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo 8 | Repfolio',
};

export default function Demo8Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
