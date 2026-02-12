import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo 18 | Repfolio',
};

export default function Demo18Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
