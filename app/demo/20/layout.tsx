import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo 20 | Repfolio',
};

export default function Demo20Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
