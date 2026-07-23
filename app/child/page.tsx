import type { Metadata } from "next";
import Image from "next/image";
import { CtaPanel } from "@/app/components/CtaPanel";
import { SiteFooter } from "@/app/components/SiteFooter";
import { SiteHeader } from "@/app/components/SiteHeader";

export const metadata: Metadata = {
  title: "守口市の子ども向けボイトレ｜小学3年生から",
  description:
    "守口市のP.S.parkleは小学3年生以上のお子さまを歓迎する個別ボイトレです。保護者1名同席可能。好きな歌を楽しみながら発声・音程・自信を育てます。無料体験受付中。",
};

export default function ChildPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="sub-hero child-sub-hero">
          <div className="container sub-hero-grid">
            <div className="sub-hero-copy">
              <p className="breadcrumb">ホーム <span>／</span> 子ども向けボイトレ</p>
              <p className="eyebrow">VOICE LESSON FOR CHILDREN</p>
              <span className="child-label">小学3年生以上を歓迎</span>
              <h1>好きな歌から、<br /><span>自分の声に</span><br />自信をつける。</h1>
              <p>守口市で、お子さま一人ひとりのペースに合わせて学べる60分の個別ボイトレ。保護者の方も大人1名まで同席できます。</p>
              <div className="sub-hero-points">
                <span>保護者同席OK</span>
                <span>好きな曲で練習</span>
                <span>入会金なし</span>
              </div>
            </div>
            <div className="sub-hero-image">
              <Image src="/karaoke-lesson.webp" alt="保護者同席で受けられる守口市の子ども向けボイトレ" width={1448} height={1086} priority />
              <div className="image-caption">保護者の方も一緒に見守れます</div>
            </div>
          </div>
        </section>

        <section className="section child-message">
          <div className="container narrow reading-copy centered-copy">
            <p className="eyebrow">A SAFE FIRST STEP</p>
            <h2>上手に歌うことより、<br />安心して声を出せることから。</h2>
            <p>
              歌が好き、カラオケが好き、人前でも歌えるようになりたい。そんな気持ちを大切にしながら、発声や音程、歌い方をその子のペースで練習します。
            </p>
            <p>
              できないところを責めるのではなく、「今できたこと」を一緒に見つけるレッスンです。
            </p>
          </div>
        </section>

        <section className="section child-benefits">
          <div className="container">
            <div className="section-heading centered">
              <p className="eyebrow">WHY CHILDREN ENJOY IT</p>
              <h2>楽しく続けやすい、5つの理由</h2>
            </div>
            <div className="benefit-grid">
              {[
                ["01", "好きな曲で練習", "興味のある曲を題材にするので、楽しみながら声の使い方を学べます。"],
                ["02", "一人ひとりのペース", "人見知りや緊張があっても大丈夫。無理に急がず、その日の様子に合わせます。"],
                ["03", "変化を一緒に確認", "レッスンの最初と最後に歌い、できるようになった部分を本人にも分かる形で伝えます。"],
                ["04", "保護者が同席できる", "大人1名まで同席可能。レッスン内容やお子さまの様子をそばで確認できます。"],
                ["05", "投稿を強制しない", "顔出しやSNS投稿、作品公開を強制することはありません。通常のボイトレとして安心して通えます。"],
              ].map(([number, title, text]) => (
                <article className="benefit-card" key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section child-result-section">
          <div className="container child-result-grid">
            <div className="child-score-card">
              <span className="result-tag">小学4年生の実績</span>
              <p>カラオケ採点</p>
              <div className="score-change"><span>86<small>点</small></span><i>→</i><strong>92<small>点</small></strong></div>
              <div className="result-meter"><span /></div>
              <small>※実際の変化の一例であり、成果を保証するものではありません。</small>
            </div>
            <div className="child-result-copy">
              <p className="eyebrow">GROWING CONFIDENCE</p>
              <h2>点数だけではない、<br />大切な成長があります。</h2>
              <div className="quote-stack">
                <blockquote>「歌うことが楽しくなった」</blockquote>
                <blockquote>「自分の声に自信が持てた」</blockquote>
                <blockquote>「周りから上手になったと言われた」</blockquote>
              </div>
            </div>
          </div>
        </section>

        <section className="section parent-safety">
          <div className="container">
            <div className="section-heading centered">
              <p className="eyebrow">FOR PARENTS</p>
              <h2>保護者の方へ</h2>
              <p>受講前に知っておいていただきたいことを、明確にしています。</p>
            </div>
            <div className="safety-grid">
              <article><span aria-hidden="true">✓</span><h3>保護者の同意のもとで受講</h3><p>お子さまをお預かりするサービスではありません。保護者の方の同意をいただいて受講します。</p></article>
              <article><span aria-hidden="true">✓</span><h3>大人1名まで同席可能</h3><p>初めての場所や先生が不安な場合も、そばでレッスンを見守っていただけます。</p></article>
              <article><span aria-hidden="true">✓</span><h3>会場と集合方法を事前案内</h3><p>守口市内のカラオケ店・音楽練習室から、日時に合う会場を決めてLINEでご案内します。</p></article>
            </div>
          </div>
        </section>

        <section className="section child-plan">
          <div className="container child-plan-panel">
            <div>
              <p className="eyebrow">LESSON INFORMATION</p>
              <h2>子ども向けレッスンのご案内</h2>
            </div>
            <dl className="info-list child-info-list">
              <div><dt>対象</dt><dd>小学3年生以上</dd></div>
              <div><dt>時間</dt><dd>1回60分</dd></div>
              <div><dt>料金</dt><dd>月1回6,500円から</dd></div>
              <div><dt>入会金</dt><dd>なし</dd></div>
              <div><dt>会場費</dt><dd>レッスン料に含む</dd></div>
              <div><dt>保護者同席</dt><dd>大人1名まで可能</dd></div>
            </dl>
          </div>
        </section>

        <section className="section final-cta">
          <div className="container">
            <CtaPanel
              location="child_final"
              title="お子さまに合うか、まずは無料体験で確かめてください"
              description="年齢や好きな曲、歌についてのお悩みをLINEで伺います。保護者の方からの相談だけでも大丈夫です。"
            />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
