export default function FrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="flex-grow h-full w-full px-16 bg-gray-100">{children}</main>;
}
