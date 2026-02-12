import { RepfolioLogo } from '@/components/RepfolioLogo';
import { demoPages } from '@/lib/navigation';

export function generateStaticParams() {
  return demoPages.map((page) => ({ id: String(page.id) }));
}

export default function DemoPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  return (
    <div className="min-h-screen bg-mocha-50 p-8">
      <header className="mb-8">
        <RepfolioLogo width={150} height={40} />
      </header>
      <main>
        <h1 className="text-2xl font-bold text-charcoal-900 mb-2">
          Demo Page {id}
        </h1>
        <p className="text-charcoal-700">
          This is a placeholder for demo page {id}. Convert each HTML demo
          page to this route as needed.
        </p>
      </main>
    </div>
  );
}
