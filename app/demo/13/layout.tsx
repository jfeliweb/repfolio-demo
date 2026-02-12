import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo 13 | Repfolio',
};

export default function Demo13Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
