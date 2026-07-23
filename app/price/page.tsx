import type { Metadata } from "next";
import { CtaPanel } from "@/app/components/CtaPanel";
import { SiteFooter } from "@/app/components/SiteFooter";
import { SiteHeader } from "@/app/components/SiteHeader";

export const metadata: Metadata = {
  title: "料金・無料体験｜入会金なし・月1回6,500円から",
  description:
    "守口市P.S.parkleのボイトレ料金。60分×月1回6,500円、月2回12,000円、月4回20,000円。入会金なし・対面会場費込み。無料体験受付中。",
  alternates: { canonical: "/price/" },
};

export default function PricePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="simple-hero">
          <div className="container narrow centered-copy">
            <p className="breadcrumb">ホーム <span>／</span> 料金・無料体験</p>
            <p className="eyebrow">PRICE & TRIAL</p>
            <h1>料金・無料体験</h1>
            <p>入会金なし。会場費込み。月1回から、自分のペースで始められます。</p>
          </div>
        </section>

        <section className="section trial-detail">
          <div className="container trial-grid">
            <div className="trial-badge-card">
              <p>初回体験</p>
              <strong>60<small>分</small></strong>
              <span>無料</span>
              <small>通常レッスンと同じ内容</small>
            </div>
            <div className="trial-copy">
              <p className="eyebrow">FULL 60-MINUTE EXPERIENCE</p>
              <h2>相談だけで終わらない、<br />丸ごと60分の体験です。</h2>
              <p>現在の悩みや目標を伺い、実際の歌声を確認。あなたに合った練習を行い、最後にもう一度歌って変化を比べます。</p>
              <p>「自分にもできそうか」「相談しやすい先生か」を、入会前にしっかり確かめてください。</p>
            </div>
          </div>
        </section>

        <section className="section pricing price-page-section">
          <div className="container">
            <div className="section-heading centered">
              <p className="eyebrow">MONTHLY PLANS</p>
              <h2>月額料金</h2>
              <p>すべてマンツーマン・1回60分・税込価格です。</p>
            </div>
            <div className="price-table-wrap">
              <table className="price-table">
                <thead><tr><th>コース</th><th>レッスン回数</th><th>月額</th><th>1回あたり</th></tr></thead>
                <tbody>
                  <tr><th>月1回</th><td>60分×1回</td><td><strong>6,500円</strong></td><td>6,500円</td></tr>
                  <tr className="recommended-row"><th><span>おすすめ</span>月2回</th><td>60分×2回</td><td><strong>12,000円</strong></td><td>6,000円</td></tr>
                  <tr><th>月4回</th><td>60分×4回</td><td><strong>20,000円</strong></td><td>5,000円</td></tr>
                </tbody>
              </table>
            </div>
            <div className="included-panel">
              <h3>表示料金に含まれるもの</h3>
              <div>
                <span>✓ 60分のマンツーマンレッスン</span>
                <span>✓ レッスン前後の歌声確認</span>
                <span>✓ 個別の練習アドバイス</span>
                <span>✓ 対面会場の利用料</span>
                <span>✓ オンライン時のZoom利用</span>
                <span>✓ 入会金</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section rules-section">
          <div className="container narrow">
            <div className="section-heading centered"><p className="eyebrow">RULES</p><h2>受講に関するご案内</h2></div>
            <dl className="rule-list">
              <div><dt>入会金</dt><dd>ありません。</dd></div>
              <div><dt>対面会場費</dt><dd>カラオケ店・音楽練習室の利用料は、レッスン料金に含まれます。</dd></div>
              <div><dt>オンライン</dt><dd>Zoomを使用し、対面と同額です。スマートフォンからも受講できます。</dd></div>
              <div><dt>対応時間</dt><dd>原則毎日10:00〜20:00。18:00〜20:00は入会前にご相談ください。</dd></div>
              <div><dt>解約</dt><dd>解約を希望される場合は、月末までにお申し出ください。</dd></div>
              <div><dt>体験後</dt><dd>無理な入会勧誘は行いません。ご自身のペースでご検討ください。</dd></div>
            </dl>
          </div>
        </section>

        <section className="section final-cta"><div className="container"><CtaPanel location="price_final" /></div></section>
      </main>
      <SiteFooter />
    </>
  );
}
