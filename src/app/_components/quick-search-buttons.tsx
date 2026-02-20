import Link from 'next/link';
import { PageSectionScroller } from './ui/page';

const QuickSearchButtons = () => {
  return (
    <PageSectionScroller>
      <Link
        href="/barbershops?search=cabelo"
        className="border-border bg-card-background flex shrink-0 items-center justify-center gap-3 rounded-3xl border px-4 py-2"
      >
        <span className="text-card-foreground text-sm font-medium">Trança</span>
      </Link>

      <Link
        href="/barbershops?search=cabelo"
        className="border-border bg-card-background flex shrink-0 items-center justify-center gap-3 rounded-3xl border px-4 py-2"
      >
        <span className="text-card-foreground text-sm font-medium">Fibra</span>
      </Link>

      <Link
        href="/barbershops?search=cabelo"
        className="border-border bg-card-background flex shrink-0 items-center justify-center gap-3 rounded-3xl border px-4 py-2"
      >
        <span className="text-card-foreground text-sm font-medium">
          Hidratação
        </span>
      </Link>

      <Link
        href="/barbershops?search=cabelo"
        className="border-border bg-card-background flex shrink-0 items-center justify-center gap-3 rounded-3xl border px-4 py-2"
      >
        <span className="text-card-foreground text-sm font-medium">
          Sobrancelha
        </span>
      </Link>

      <Link
        href="/barbershops?search=cabelo"
        className="border-border bg-card-background flex shrink-0 items-center justify-center gap-3 rounded-3xl border px-4 py-2"
      >
        <span className="text-card-foreground text-sm font-medium">
          Massagem
        </span>
      </Link>

      <Link
        href="/barbershops?search=cabelo"
        className="border-border bg-card-background flex shrink-0 items-center justify-center gap-3 rounded-3xl border px-4 py-2"
      >
        <span className="text-card-foreground text-sm font-medium">
          Finalização
        </span>
      </Link>
    </PageSectionScroller>
  );
};

export default QuickSearchButtons;
