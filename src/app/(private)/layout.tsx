import { Sidebar } from "./_components/sidebar";

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full min-h-screen flex">
      <Sidebar />
      {children}
    </div>
  );
}
