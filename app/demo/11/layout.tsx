import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo 11 | Repfolio',
};

export default function Demo11Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
