import { SiteShell } from '@/app/components/SiteShell';

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteShell>{children}</SiteShell>;
}
