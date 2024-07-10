export default function RootLayout({
  children,
  aside,
}: Readonly<{
  children: React.ReactNode;
  aside: React.ReactNode;
}>) {
  return (
    <main className="h-screen d-flex flex-row">
      <section className="h-screen w-60 fixed  bg-cyan-600 shadow-lg ">
        {aside}
      </section>
      <section className="!ml-60 ms-2 flex-1">{children}</section>
    </main>
  );
}
