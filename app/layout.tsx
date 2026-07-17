import type { Metadata } from "next";
import { Analytics } from "@/app/components/Analytics";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://psparkle.com"),
  title: {
    default: "守口市のボイトレならP.S.parkle｜初心者・子ども・カラオケ対応",
    template: "%s｜P.S.parkle",
  },
  description:
    "守口市駅を中心に、初心者・お子さま・カラオケ上達を目指す方へ60分の個別ボイトレを提供。対面・Zoom対応、月1回から、入会金なし。",
  keywords: [
    "守口市 ボイトレ",
    "守口市 ボーカル教室",
    "守口市駅 ボイトレ",
    "守口市 子ども ボイトレ",
    "守口市 カラオケ ボイトレ",
  ],
  authors: [{ name: "P.S.parkle" }],
  creator: "P.S.parkle",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "P.S.parkle",
    title: "守口市のボイトレならP.S.parkle",
    description:
      "初心者・子ども・カラオケ上達に。レッスン前後の変化を一緒に確認する60分の個別ボイトレ。",
    url: "https://psparkle.com/",
    images: [
      {
        url: "/karaoke-lesson.webp",
        width: 1448,
        height: 1086,
        alt: "守口市のボイトレ P.S.parkle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "守口市のボイトレならP.S.parkle",
    description: "初心者・子ども・カラオケ上達に。無料体験受付中。",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
