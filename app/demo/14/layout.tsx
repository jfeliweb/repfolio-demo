import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo 14 | Repfolio',
};

export default function Demo14Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
