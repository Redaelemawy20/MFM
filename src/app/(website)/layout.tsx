"use client";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import Nav from "@/components/Nav/Nav";
import AOS from "aos";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  /**Header Links**/
  const links = [
    {
      name: "Home",
      go: "/",
    },
    {
      name: "About",
      go: "/about",
    },
    {
      name: "Services",
      go: "/services",
    },
    {
      name: "Departments",
      go: "/departments",
    },
    {
      name: "Doctors",
      go: "/doctors",
    },
    {
      name: "Drop down",
      dropdown: true,
      go: "#",
    },
    {
      name: "Contact",
      go: "/contact",
    },
  ];
  return (
    <html lang="en">
      <body  suppressHydrationWarning={true}>
        <Nav data={links} />

        <main>{children}</main>
      </body>
    </html>
  );
}
