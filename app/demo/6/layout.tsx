import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo 6 | Repfolio',
};

export default function Demo6Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
