import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo 12 | Repfolio',
};

export default function Demo12Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
