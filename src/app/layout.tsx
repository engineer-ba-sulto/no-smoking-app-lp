import { getBaseUrl } from "@/lib/url-utils";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | No Smoking App",
    default: "No Smoking App",
  },
  metadataBase: new URL(await getBaseUrl()),
  description: "No Smoking App",
  keywords: [],
  openGraph: {
    title: "No Smoking App",
    description: "No Smoking App",
    type: "website",
    locale: "ja_JP",
    images: ["/opengraph-image.png", "/opengraph-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "No Smoking App",
    description: "No Smoking App",
    images: ["/opengraph-image.png", "/opengraph-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`${notoSansJP.className} antialiased`}>
        {children}
        <Toaster />
      </body>
      <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID || ""} />
    </html>
  );
}
