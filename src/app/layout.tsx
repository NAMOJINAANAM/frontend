import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Namojinaanam | Entertainment Hub",
    template: "%s | Namojinaanam",
  },
  description:
    "Namojinaanam is your ultimate entertainment destination featuring a vibrant gaming zone, delicious food, celebration spaces, gallery, and more. Book now for unforgettable experiences.",
  keywords: [
    "Namojinaanam",
    "Gaming Zone",
    "Food Zone",
    "Celebrations",
    "Family Entertainment",
    "Arcade Games",
    "Party Venue",
    "Events",
    "Gallery",
    "Contact Namojinaanam",
  ],
  authors: [{ name: "Namojinaanam Team" }],
  creator: "Namojinaanam",
  publisher: "Namojinaanam",
  metadataBase: new URL("https://www.Namojinaanam.com"), // ✅ Replace with your real domain
  openGraph: {
    title: "Namojinaanam | Entertainment Hub",
    description:
      "Unwind and celebrate at Namojinaanam – the ultimate hub for gaming, food, and fun-filled events.",
    url: "https://www.Namojinaanam.com",
    siteName: "Namojinaanam",
    images: [
      {
        url: "/og-image.jpg", // ✅ Add your Open Graph image in public folder
        width: 1200,
        height: 630,
        alt: "Namojinaanam Entertainment Hub",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Namojinaanam | Entertainment Hub",
    description:
      "Discover the best in gaming, food, and celebrations at Namojinaanam. Book now for unforgettable moments!",
    creator: "@Namojinaanam", // ✅ Replace with your handle
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/apple-touch-icon.png",
  },
  category: "entertainment",
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
