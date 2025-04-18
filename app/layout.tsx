import type { Metadata } from "next";
import { Poppins} from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'VibeQuest',
  description: 'Find Your Vibe',
  icons: {
    icon: '/assets/images/logo.jpg'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl={'/'}>
      <html lang="en">
        <body className={`${poppins.variable} ${poppins.variable} antialiased`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
