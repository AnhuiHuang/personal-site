"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Source_Serif_4 } from "next/font/google";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    pathname === path
      ? "text-[#FEFBE3]"
      : "text-[#C9B9A4] hover:text-[#EAD7BF]";

  return (
    <html lang="en">
      <body
        className={`${sourceSerif.className} bg-[#6B7D6B] text-[#E3DBC8]`}
      >
        <header className="max-w-[1000px] mx-auto px-8 pt-20">

          {/* Name */}
          <h1 className="text-center text-[#FEFBE3] text-5xl font-normal">
            Anhui Huang
          </h1>

          {/* Navigation */}
          <nav className="flex justify-center gap-20 mt-10 pb-5 text-base font-normal">
            <Link href="/" className={linkClass("/")}>
              Home
            </Link>

            <Link href="/research" className={linkClass("/research")}>
              Research
            </Link>

            <Link href="/teaching" className={linkClass("/teaching")}>
              Teaching
            </Link>
          </nav>

        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}