import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo 15 | Repfolio',
};

export default function Demo15Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
