import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo 16 | Repfolio',
};

export default function Demo16Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
