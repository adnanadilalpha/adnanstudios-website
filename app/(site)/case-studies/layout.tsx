export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Pass-through: individual studies use their own chrome; the index wraps SiteShell itself.
  return children
}
