export const metadata = {
  metadataBase: new URL('https://example.com'), // 後で本番ドメインに変更

  title: {
    default: 'アプリ名 | 家計簿を簡単に管理',
    template: '%s | アプリ名',
  },

  description: '無料で使えるシンプルな家計簿アプリ。自動連携・分析機能で支出管理を効率化。',

  openGraph: {
    title: 'アプリ名',
    description: '無料で使える家計簿アプリ',
    url: 'https://example.com',
    siteName: 'アプリ名',
    locale: 'ja_JP',
    type: 'website',
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
      <body>{children}</body>
    </html>
  );
}