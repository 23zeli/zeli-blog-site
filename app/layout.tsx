import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Blog",
  description: "A minimal blog app built with Next.js App router",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className= "h-full antialiased"   >
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-full`}>
        <div className="min-h-dvh bg-zinc-200 text-zinc-950">
          <div className="mx-auto flex min-h-dvh w-full max-w-[1100px] flex-col border-x border-zinc-300 bg-white">
            <header className="flex h-14 items-center justify-between border-b border-zinc-200 px-4 sm:px-6">
              <Link href="/" className="flex items-center gap-3 font-semibold">
                <Image src="/next.svg" alt="" width={89} height={18} priority/>
              </Link>
              <nav className="flex items-center gap-4 text-sm font-medium text-zinc-600">
              <Link href="/post" className="hover:text-zinc-950">
                  Home
                </Link>
                <Link href="/post" className="hover:text-zinc-950">
                  Posts
                </Link>
              </nav>
            </header>
            <main className="flex-1 px-4 py-8 sm:px-6 sm:py-10">
              {children}
            </main>

            <footer className="flex h-14 items-center border-t bg-white px-4 text-sm text-zinc-500 sm:px-6">
              2026 Next Blog
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
