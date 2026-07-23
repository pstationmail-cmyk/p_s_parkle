import type { Metadata } from "next";
import { CtaPanel } from "@/app/components/CtaPanel";
import { SiteFooter } from "@/app/components/SiteFooter";
import { SiteHeader } from "@/app/components/SiteHeader";

export const metadata: Metadata = {
  title: "守口市でボイトレを始める前に知っておきたいこと",
  description:
    "守口市でボイトレを始めたい初心者の方向けに、レッスン内容、会場、料金、体験レッスンで確認できることをP.S.parkleが分かりやすく解説します。",
  alternates: { canonical: "/guide/" },
};

export default function GuidePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="simple-hero">
          <div className="container narrow centered-copy">
            <p className="breadcrumb">ホーム <span>／</span> 初心者ガイド</p>
            <p className="eyebrow">BEGINNER GUIDE</p>
            <h1>守口市でボイトレを始める前に知っておきたいこと</h1>
            <p>初めての方が不安に感じやすいポイントを、P.S.parkleのレッスン内容に沿ってご案内します。</p>
          </div>
        </section>

        <section className="section guide-section">
          <div className="container narrow">
            <article className="guide-article">
              <p>
                ボイトレに興味があっても、「初心者でも大丈夫？」「どこで受けるの？」「何を準備すればいい？」と迷う方は少なくありません。守口市のP.S.parkleでは、現在の悩みを伺い、実際の歌声を確認してから一人ひとりに合う練習を組み立てます。
              </p>

              <h2>初心者でもボイトレを受けられますか？</h2>
              <p>
                もちろん受けられます。高い声、音程、声量、カラオケの採点など、悩みは人によって異なります。最初から難しい発声練習を押しつけるのではなく、今の声を確認して、無理なく続けられる方法から始めます。
              </p>

              <h2>守口市のどこでレッスンをしますか？</h2>
              <p>
                固定スタジオではなく、守口市内の近隣カラオケ店や音楽練習室などを利用します。ご希望のエリアや日時を伺い、通いやすい会場と集合方法を公式LINEで事前にご案内します。会場利用料はレッスン料金に含まれます。
              </p>

              <h2>体験レッスンでは何をしますか？</h2>
              <ol>
                <li>歌に関する悩みや目標をヒアリング</li>
                <li>実際に歌って、現在の声を確認</li>
                <li>声に合う練習方法を説明</li>
                <li>発声と歌唱を実践</li>
                <li>レッスン前後の歌声を比較してフィードバック</li>
              </ol>
              <p>体験も通常レッスンと同じ60分です。体験後に入会を決める必要はありません。</p>

              <h2>料金と受講方法</h2>
              <p>
                月1回6,500円、月2回12,000円、月4回20,000円です。入会金はなく、対面レッスンの会場費も含まれます。守口市まで通うことが難しい場合は、Zoomでスマートフォンから受講することもできます。
              </p>

              <div className="guide-summary">
                <strong>迷っている方へ</strong>
                <p>「自分に合うか聞いてみたい」という相談だけでも大丈夫です。希望エリア・悩み・体験についてLINEでご案内します。</p>
              </div>
            </article>
          </div>
        </section>

        <section className="section final-cta">
          <div className="container">
            <CtaPanel
              location="guide_final"
              title="守口市でボイトレを始めたい方へ"
              description="初心者の方も大歓迎です。悩みや希望の場所をLINEでお聞かせください。"
            />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
