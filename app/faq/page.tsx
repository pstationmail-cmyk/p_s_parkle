import type { Metadata } from "next";
import { CtaPanel } from "@/app/components/CtaPanel";
import { SiteFooter } from "@/app/components/SiteFooter";
import { SiteHeader } from "@/app/components/SiteHeader";
import { faqs } from "@/app/lib/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: "よくある質問｜料金・会場・子どもの受講について",
  description:
    "守口市P.S.parkleのよくある質問。初心者、子どもの年齢、保護者同席、会場費、Zoom、対応時間、無料体験、入会金などにお答えします。",
};

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <SiteHeader />
      <main>
        <section className="simple-hero">
          <div className="container narrow centered-copy">
            <p className="breadcrumb">ホーム <span>／</span> よくある質問</p>
            <p className="eyebrow">FAQ</p>
            <h1>よくある質問</h1>
            <p>初めての方からよくいただくご質問をまとめました。</p>
          </div>
        </section>
        <section className="section faq-page-section">
          <div className="container narrow">
            <div className="faq-list faq-list-large">
              {faqs.map((item) => (
                <details key={item.question}>
                  <summary><span>Q</span>{item.question}<i aria-hidden="true">＋</i></summary>
                  <div className="faq-answer"><span>A</span><p>{item.answer}</p></div>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section className="section guide-link-section">
          <div className="container narrow centered-copy">
            <p className="eyebrow">FIRST STEP</p>
            <h2>ボイトレが初めての方へ</h2>
            <p>レッスン内容や会場、料金について、始める前に知っておきたいことをまとめています。</p>
            <Link href="/guide" className="text-link">初心者ガイドを読む <span aria-hidden="true">→</span></Link>
          </div>
        </section>
        <section className="section final-cta"><div className="container"><CtaPanel location="faq_final" title="ほかに気になることは、LINEでお聞かせください" description="会場、お子さまの受講、夜の時間帯など、入会前の相談だけでも大丈夫です。" /></div></section>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </>
  );
}
