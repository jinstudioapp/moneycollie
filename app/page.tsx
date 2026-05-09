import Script from 'next/script';

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "MoneyCollie (マネーコリー)",
    "operatingSystem": "iOS, Android",
    "applicationCategory": "FinanceApplication",
    "softwareVersion": "1.4.7", // pubspec.yamlのバージョンを反映
    "description": "30年先までの資産予測とライフプラン設計に特化した家計簿アプリ。完全ローカル保存(Hive)でプライバシーを保護。",
    "author": {
      "@type": "Organization",
      "name": "MoneyCollie Project"
    },
    "screenshot": [
      "https://moneycollie.vercel.app/store1.002.png",
      "https://moneycollie.vercel.app/store1.004.png"
    ],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "JPY"
    },
    "featureList": [
      "端末内保存による究極のプライバシー保護",
      "生活防衛資金を考慮したポートフォリオシミュレーション",
      "ライフイベント（教育費・退職金）の自動算出と資産予測",
      "インフレによる物価上昇を考慮した資産予測",
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
            完全無料で全ての機能を使い放題
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-slate-900 tracking-tight">
            あなたの資産を予測するパートナー
          </h1>
          <p className="text-xl mb-10 text-slate-600 leading-relaxed max-w-2xl mx-auto">
            MoneyCollieは、データの外部送信なし。 <br />
            「今」の家計簿から「30年後」の資産予測まで、<br />
            あなたの将来を考えるシミュレーション。
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

      {/* 5つのコア・ベネフィット（6つに整理） */}
      <section className="max-w-6xl mx-auto py-24 px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">
          MoneyCollie が選ばれる 6 つの理由
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* 1. プライバシー */}
          <div className="space-y-4">
            <div className="text-3xl">🛡️</div>
            <h3 className="text-xl font-bold text-slate-900">究極のプライバシー保護</h3>
            <p className="text-slate-600 leading-relaxed">
              家計データはクラウドに送信せず、端末内(Hive)のみに暗号化保存。
              個人情報の流出リスクを根本から排除した、もっとも安心できる設計です。
            </p>
          </div>

          {/* 2. 資産予測 */}
          <div className="space-y-4">
            <div className="text-3xl">📈</div>
            <h3 className="text-xl font-bold text-slate-900">30年先を精密にシミュレート</h3>
            <p className="text-slate-600 leading-relaxed">
              「fl_chart」による美しいグラフで、30年先までの資産推移を可視化。
              預貯金と運用資産の利回りを分けた、高度な将来予測が可能です。
            </p>
          </div>

          {/* 3. ライフプラン */}
          <div className="space-y-4">
            <div className="text-3xl">🎓</div>
            <h3 className="text-xl font-bold text-slate-900">ライフプラン自動算出</h3>
            <p className="text-slate-600 leading-relaxed">
              お子様の入学金や学費、退職金などを自動設定。
              複雑なライフイベントも、簡単な登録だけで将来の支出に反映されます。
            </p>
          </div>

          {/* 4. ポートフォリオ */}
          <div className="space-y-4">
            <div className="text-3xl">📊</div>
            <h3 className="text-xl font-bold text-slate-900">戦略的な資産形成をサポート</h3>
            <p className="text-slate-600 leading-relaxed">
              生活防衛資金を軸にしたポートフォリオ管理。
              理想の資産比率や積立額をシミュレーションし、迷いのない資産形成を。
            </p>
          </div>

          {/* 5. UI/UX */}
          <div className="space-y-4">
            <div className="text-3xl">🚀</div>
            <h3 className="text-xl font-bold text-slate-900">ノイズレスな操作体験</h3>
            <p className="text-slate-600 leading-relaxed">
              広告や通知、ポップアップを一切排除。
              開いて即記録できる軽快さと、自由にカスタムできるアイコン・背景色で、管理が楽しくなります。
            </p>
          </div>

          {/* 6. 信頼性 */}
          <div className="space-y-4">
            <div className="text-3xl">✨</div>
            <h3 className="text-xl font-bold text-slate-900">安心のバックアップと進化</h3>
            <p className="text-slate-600 leading-relaxed">
              Firebase通信のオフ設定や手動バックアップに対応。
              定期的なアップデート(v1.4.7)で、常に最新の家計管理を提供します。
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
            将来の不安という霧の中から、あなたを安心できる未来へと導くために生まれました。<br />
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