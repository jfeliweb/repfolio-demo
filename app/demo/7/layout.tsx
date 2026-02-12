import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo 7 | Repfolio',
};

export default function Demo7Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
