export default function FrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="flex-grow z-50 h-full relative">{children}</main>;
}
