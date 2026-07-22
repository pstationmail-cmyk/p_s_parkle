import type { Metadata } from "next";
import { CtaPanel } from "@/app/components/CtaPanel";
import { SiteFooter } from "@/app/components/SiteFooter";
import { SiteHeader } from "@/app/components/SiteHeader";

export const metadata: Metadata = {
  title: "会場・対応エリア｜守口市駅周辺・オンライン対応",
  description:
    "P.S.parkleは守口市駅を中心に、守口市内の近隣カラオケ店や音楽練習室でボイトレを行います。会場費込み。Zoom・スマートフォン受講にも対応。",
};

export default function AccessPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="simple-hero">
          <div className="container narrow centered-copy">
            <p className="breadcrumb">ホーム <span>／</span> 会場・対応時間</p>
            <p className="eyebrow">ACCESS & HOURS</p>
            <h1>会場・対応時間</h1>
            <p>守口市内の通いやすい場所、またはZoomで受講できます。</p>
          </div>
        </section>

        <section className="section access-detail">
          <div className="container access-page-grid">
            <div className="location-map large-map">
              <iframe
                title="京阪・守口市駅周辺のGoogleマップ"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6557.370239197822!2d135.5559443618857!3d34.73833059931661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e19d6e62fec5%3A0x4da3524deb3dc7a2!2z5a6I5Y-j6aeF!5e0!3m2!1sja!2sjp!4v1784707795114!5m2!1sja!2sjp"
                width="600"
                height="450"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className="reading-copy">
              <p className="eyebrow">FACE-TO-FACE LESSON</p>
              <h2>対面レッスン</h2>
              <p>固定スタジオではなく、守口市内の近隣カラオケ店や市が運営する音楽練習室などを利用します。</p>
              <p>ご自身が通いやすい場所を伺い、日時と空き状況に合わせて会場を選定します。確定した会場名・集合方法は、公式LINEで事前にご案内します。</p>
              <div className="notice-box"><strong>追加の会場費はありません</strong><p>カラオケ店・音楽練習室の利用料は、レッスン料金に含まれています。</p></div>
            </div>
          </div>
        </section>

        <section className="section access-facts">
          <div className="container">
            <div className="access-card-grid">
              <article><span>最寄り</span><h3>京阪・守口市駅</h3><p>守口市駅周辺を中心に、ご希望に合う会場をご案内します。</p></article>
              <article><span>対応範囲</span><h3>守口市内全域</h3><p>守口市内であれば、特定の対応エリアは設けていません。</p></article>
              <article><span>対応時間</span><h3>10:00〜20:00</h3><p>原則毎日対応。18:00〜20:00は埋まりやすいため事前相談となります。</p></article>
            </div>
          </div>
        </section>

        <section className="section online-section">
          <div className="container online-panel">
            <div className="online-icon" aria-hidden="true">ZOOM</div>
            <div>
              <p className="eyebrow">ONLINE LESSON</p>
              <h2>自宅から受けられるZoomレッスン</h2>
              <p>守口市外の方や、移動が難しい日にはオンライン受講も可能です。パソコンだけでなく、スマートフォンからも参加できます。</p>
              <div className="sub-hero-points"><span>対面と同料金</span><span>スマホOK</span><span>会場への移動なし</span></div>
            </div>
          </div>
        </section>

        <section className="section final-cta"><div className="container"><CtaPanel location="access_final" title="希望する場所・時間をLINEでご相談ください" description="通いやすいエリアや希望時間を伺い、体験可能な会場と日時をご案内します。" /></div></section>
      </main>
      <SiteFooter />
    </>
  );
}
