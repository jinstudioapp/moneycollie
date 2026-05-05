import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // VercelのURLまたは独自ドメインが確定したらここを書き換えてください
  metadataBase: new URL('https://moneycollie.vercel.app'), 

  title: {
    default: 'MoneyCollie | 30年先を予測する、安心の完全ローカル保存型家計簿',
    template: '%s | MoneyCollie',
  },

  description: '家計データはあなたの端末内のみに保存。プライバシーを最優先した「MoneyCollie」は、シンプルな家計簿・資産管理と、30年先までの資産予測であなたの将来を守ります。若者から50代まで、全世代のためのライフプランニング・ツール。',

  keywords: [
    "家計簿アプリ 安全",
    "資産管理 30年予測",
    "オフライン家計簿",
    "MoneyCollie",
    "プライバシー重視 家計簿",
    "ライフプラン シミュレーション",
    "資産予測 アプリ",
    "マネーコリー"
  ],

  openGraph: {
    title: 'MoneyCollie - 資産を導く、牧羊犬の家計簿',
    description: 'データ送信なしの安心感。30年後の資産が見える、次世代の家計簿アプリ。',
    url: 'https://moneycollie.vercel.app',
    siteName: 'MoneyCollie',
    locale: 'ja_JP',
    type: 'website',
  },

  twitter: {
    card: "summary_large_image",
    title: "MoneyCollie",
    description: "端末内保存で安心。30年先を予測する家計簿アプリ",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}