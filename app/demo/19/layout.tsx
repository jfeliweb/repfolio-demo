import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo 19 | Repfolio',
};

export default function Demo19Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
