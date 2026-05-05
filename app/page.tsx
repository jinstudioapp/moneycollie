import Script from 'next/script';

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "MoneyCollie (マネーコリー)",
    "operatingSystem": "iOS, Android",
    "applicationCategory": "FinanceApplication",
    "description": "30年先までの資産予測とライフプラン設計に特化した、完全ローカル保存型の安心家計簿アプリ。",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "JPY"
    },
    "featureList": [
      "端末内保存による究極のプライバシー保護",
      "生活防衛資金を考慮したポートフォリオシミュレーション",
      "ライフイベント（教育費・退職金）の自動算出と資産予測",
      "預貯金と運用資産（利回り）を分けた高度な計算",
      "通知・ポップアップなしのストレスフリーな操作感"
    ]
  };

  return (
    <main className="min-h-screen bg-white text-slate-800 font-sans">
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ヒーローセクション */}
      <section className="px-6 py-20 text-center bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1 mb-6 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
            完全無料で全ての機能を開放
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-slate-900 tracking-tight">
            あなたの資産を導く、<br />
            一番賢いパートナー。
          </h1>
          <p className="text-xl mb-10 text-slate-600 leading-relaxed max-w-2xl mx-auto">
            MoneyCollieは、データの外部送信なし。 
            「今」の家計管理から「30年後」の資産予測まで、
            ボーダーコリーがあなたの将来をスマートにガードします。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://apps.apple.com/jp/app/moneycollie/id6764232757" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-slate-900 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition shadow-lg text-center cursor-pointer"
            >
              App Store
            </a>
            <a 
              href="https://share.google/3AcIlgV1fDPRpbGta"
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-slate-900 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition shadow-lg text-center"
            >
              Google Play
            </a>
          </div>
        </div>
      </section>

      {/* 5つのコア・ベネフィット */}
      <section className="max-w-6xl mx-auto py-24 px-6">
        <h2 className="text-3xl font-bold text-center mb-16">なぜ MoneyCollie が選ばれるのか</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          <div className="space-y-4">
            <div className="text-3xl">🛡️</div>
            <h3 className="text-xl font-bold">究極のプライバシー</h3>
            <p className="text-slate-600 leading-relaxed">
              家計データはクラウドではなく、あなたの端末内(Hive)のみに高速保存。
              個人情報の流出リスクを根本から排除した、もっとも安心できる設計です。
            </p>
          </div>

          <div className="space-y-4">
            <div className="text-3xl">📈</div>
            <h3 className="text-xl font-bold">30年先を精密に予測</h3>
            <p className="text-slate-600 leading-relaxed">
              預貯金と、利回りのつく運用資産を分けてシミュレート。
              積立額や比率に加え、「生活防衛資金」を軸にした高度なポートフォリオ設定も可能です。
            </p>
          </div>

          <div className="space-y-4">
            <div className="text-3xl">🎓</div>
            <h3 className="text-xl font-bold">ライフプランを自動計算</h3>
            <p className="text-slate-600 leading-relaxed">
              子供の入学金や学費、定年退職などのイベントを登録するだけで、将来の支出を自動反映。
              個別のライフイベントも細かくカスタマイズ可能です。
            </p>
          </div>

          <div className="space-y-4">
            <div className="text-3xl">🚀</div>
            <h3 className="text-xl font-bold">ノイズレスな操作感</h3>
            <p className="text-slate-600 leading-relaxed">
              アプリを開いて即記録。煩わしい通知、ポップアップ、強制的な広告は一切ありません。
              「家計簿をつける」という習慣を邪魔しないUXを追求。
            </p>
          </div>

          <div className="space-y-4">
            <div className="text-3xl">🎨</div>
            <h3 className="text-xl font-bold">あなただけの家計簿</h3>
            <p className="text-slate-600 leading-relaxed">
              カテゴリーごとのアイコン・色・名前は自由自在。
              背景色も変更可能で、可愛いボーダーコリーと共に楽しく資産管理を続けられます。
            </p>
          </div>

          <div className="space-y-4">
            <div className="text-3xl">📱</div>
            <h3 className="text-xl font-bold">安心のバックアップ</h3>
            <p className="text-slate-600 leading-relaxed">
              データ収集(Firebase)はいつでもオフに設定可能。
              機種変更時もバックアップ機能でしっかりデータを引き継げます。
            </p>
          </div>

        </div>
      </section>

      {/* ストーリーセクション */}
      <section className="bg-slate-50 py-24 px-6 border-y border-slate-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">資産を「守り、導く」存在として</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            ボーダーコリーは、賢さと深い忠誠心で群れを正しい方向へ導く牧羊犬です。
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            「MoneyCollie」もまた、複雑なお金の動きを整理し、
            将来の不安という霧の中から、あなたを安心できる未来へと導くために生まれました。
            データはあなたの手元に。信頼は私たちの設計に。
          </p>
        </div>
      </section>

      <footer className="py-12 text-center text-slate-500 text-sm">
        <p className="mb-2">© 2026 MoneyCollie. All rights reserved.</p>
        <div className="flex justify-center gap-6">
          <a 
            href="https://sites.google.com/view/moneycollie-privacy/%E3%83%9B%E3%83%BC%E3%83%A0" // 実際のポリシーURLに書き換え
            target="_blank" 
            rel="noopener noreferrer"
            className="cursor-pointer hover:text-slate-800 underline underline-offset-4"
          >
            プライバシーポリシー
          </a>
        </div>
      </footer>
    </main>
  );
}