import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo 21 | Repfolio',
};

export default function Demo21Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
