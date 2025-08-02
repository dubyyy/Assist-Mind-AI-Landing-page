import Header from '@/app/component/header'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" bg-[#ffffff] overflow-x-hidden">
        <Header />
        {children}
      </body>
    </html>
  );
}
