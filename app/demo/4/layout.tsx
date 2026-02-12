import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo 4 | Repfolio',
};

export default function Demo4Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
