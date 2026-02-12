import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo 17 | Repfolio',
};

export default function Demo17Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
