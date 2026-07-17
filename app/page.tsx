import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CtaPanel } from "@/app/components/CtaPanel";
import { SiteFooter } from "@/app/components/SiteFooter";
import { SiteHeader } from "@/app/components/SiteHeader";
import { TrackedLink } from "@/app/components/TrackedLink";
import { CALENDAR_URL, faqs, LINE_URL } from "@/app/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "守口市のボイトレならP.S.parkle｜初心者・子ども・カラオケ対応",
  },
  description:
    "守口市駅を中心に、初心者・お子さま・カラオケ上達を目指す方へ60分の個別ボイトレを提供。入会金なし・会場費込み。対面・Zoom対応、無料体験受付中。",
};

const lessonSteps = [
  ["01", "悩み・目標をヒアリング", "高音、音程、声量、採点など、今気になっていることを伺います。"],
  ["02", "レッスン前の歌声を確認", "実際に好きな曲を歌っていただき、今の声と歌い方を確認します。"],
  ["03", "課題と練習方法を説明", "難しい言葉に頼らず、今の声に合う練習方法を分かりやすくお伝えします。"],
  ["04", "発声・歌唱を実践", "声の出し方を整えながら、実際の曲で歌いやすさを確かめます。"],
  ["05", "もう一度歌って比較", "最初と最後の歌声を比べ、変わった部分を一緒に確認します。"],
  ["06", "フィードバック", "レッスンの振り返りと、自宅で続けられる練習方法をご案内します。"],
];

const pricing = [
  { name: "月1回", price: "6,500", per: "気軽に続けたい方へ", featured: false },
  { name: "月2回", price: "12,000", per: "無理なく上達したい方へ", featured: true },
  { name: "月4回", price: "20,000", per: "しっかり変化を目指す方へ", featured: false },
];

export default function Home() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "P.S.parkle ボイストレーニング",
    areaServed: { "@type": "City", name: "守口市" },
    provider: {
      "@type": "Person",
      name: "谷口剛気",
      jobTitle: "ボイストレーナー",
    },
    audience: [
      { "@type": "Audience", audienceType: "ボイトレ初心者" },
      { "@type": "Audience", audienceType: "小学3年生以上のお子さま" },
      { "@type": "Audience", audienceType: "カラオケ上達を目指す方" },
    ],
    serviceType: "ボイストレーニング",
    offers: [
      { "@type": "Offer", price: "6500", priceCurrency: "JPY", name: "月1回コース" },
      { "@type": "Offer", price: "12000", priceCurrency: "JPY", name: "月2回コース" },
      { "@type": "Offer", price: "20000", priceCurrency: "JPY", name: "月4回コース" },
    ],
  };

  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-orb hero-orb-one" aria-hidden="true" />
          <div className="hero-orb hero-orb-two" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="hero-location"><span aria-hidden="true">●</span> 京阪・守口市駅を中心に対応</div>
              <p className="hero-lead">初心者でも、歌が苦手でも大丈夫。</p>
              <h1 id="hero-title">
                守口市で、<br />
                <span>歌声の変化</span>を<br />
                実感できる<br className="mobile-only-break" />ボイトレ
              </h1>
              <p className="hero-description">
                今の悩みを丁寧に伺い、実際の歌声を確認。あなたに合った練習を行い、レッスン前後の変化を一緒に確かめます。
              </p>
              <div className="hero-audience" aria-label="対象">
                <span>初心者</span>
                <span>お子さま</span>
                <span>カラオケ上達</span>
              </div>
              <div className="hero-actions">
                <TrackedLink
                  href={LINE_URL}
                  eventName="line_click"
                  location="hero"
                  className="button button-line button-hero"
                >
                  <span className="button-kicker">初回60分・受付中</span>
                  LINEで無料体験を相談する
                  <span aria-hidden="true">→</span>
                </TrackedLink>
                <TrackedLink
                  href={CALENDAR_URL}
                  eventName="calendar_click"
                  location="hero"
                  className="calendar-link"
                >
                  空き日時だけ確認する <span aria-hidden="true">↗</span>
                </TrackedLink>
              </div>
              <p className="hero-note">無理な勧誘はありません。相談だけでも大丈夫です。</p>
            </div>

            <div className="hero-visual">
              <div className="hero-image-frame">
                <Image
                  src="/karaoke-lesson.webp"
                  alt="守口市のカラオケ店で子どもと保護者にボイトレを行う谷口剛気"
                  width={1448}
                  height={1086}
                  priority
                />
                <div className="hero-image-label">
                  <span>VOICE TRAINER</span>
                  <strong>谷口 剛気</strong>
                </div>
              </div>
              <div className="score-float">
                <span className="score-float-label">小学4年生の実績</span>
                <div><b>86</b><small>点</small><i>→</i><b>92</b><small>点</small></div>
                <p>カラオケ採点の変化例</p>
              </div>
              <div className="sparkle sparkle-one" aria-hidden="true">✦</div>
              <div className="sparkle sparkle-two" aria-hidden="true">✦</div>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="サービス概要">
          <div className="container trust-grid">
            <div><span className="trust-icon">60</span><p><strong>1回60分</strong><small>通常も体験も同じ流れ</small></p></div>
            <div><span className="trust-icon">¥0</span><p><strong>入会金なし</strong><small>会場利用料も込み</small></p></div>
            <div><span className="trust-icon">1×</span><p><strong>月1回から</strong><small>自分のペースで継続</small></p></div>
            <div><span className="trust-icon">PC</span><p><strong>対面・Zoom</strong><small>スマホでも受講可能</small></p></div>
          </div>
        </section>

        <section className="section worries" id="about">
          <div className="container narrow">
            <div className="section-heading centered">
              <p className="eyebrow">YOUR VOICE, YOUR PACE</p>
              <h2>歌いたい気持ちはあるのに、<br className="mobile-break" />思うように歌えない方へ</h2>
              <p>一つでも当てはまれば、今の声に合う練習から始めてみませんか？</p>
            </div>
            <div className="worry-grid">
              {[
                ["♪", "カラオケの音程が安定しない"],
                ["↗", "高い声を無理なく出したい"],
                ["○", "声が小さい・すぐに疲れる"],
                ["♬", "人前でも自信を持って歌いたい"],
                ["★", "カラオケの点数を上げたい"],
                ["☺", "子どもに楽しく歌を習わせたい"],
              ].map(([icon, text]) => (
                <div className="worry-card" key={text}>
                  <span aria-hidden="true">{icon}</span>
                  <p>{text}</p>
                </div>
              ))}
            </div>
            <p className="center-note">
              P.S.parkleは、最初から難しい練習を押しつけません。<br />
              まず「今どう感じているか」を聞くことから始めます。
            </p>
          </div>
        </section>

        <section className="section features" id="features">
          <div className="container">
            <div className="section-heading centered">
              <p className="eyebrow">WHY P.S.PARKLE?</p>
              <h2>変化を実感するための、3つのこだわり</h2>
              <p>「何となく歌って終わり」にしない、あなただけの60分です。</p>
            </div>
            <div className="feature-grid">
              <article className="feature-card">
                <div className="feature-number">01</div>
                <div className="feature-visual visual-talk" aria-hidden="true">
                  <span>悩み</span><i>＋</i><span>目標</span>
                </div>
                <h3>悩みを聞いてから始める<br />個別レッスン</h3>
                <p>高音、音程、声量など、悩みは一人ひとり違います。その日の状態と目標に合わせて内容を組み立てます。</p>
              </article>
              <article className="feature-card feature-card-accent">
                <div className="feature-number">02</div>
                <div className="feature-visual visual-mic" aria-hidden="true">
                  <span>♪</span><i>実際の曲で</i><span>♫</span>
                </div>
                <h3>実際に歌う環境で<br />すぐに試せる</h3>
                <p>守口市内のカラオケ店や音楽練習室で実践。マイクを使った歌い方や、カラオケでの歌いやすさも確認します。</p>
              </article>
              <article className="feature-card">
                <div className="feature-number">03</div>
                <div className="feature-visual visual-compare" aria-hidden="true">
                  <span>BEFORE</span><i>→</i><span>AFTER</span>
                </div>
                <h3>レッスン前後の変化を<br />一緒に確認</h3>
                <p>最後にもう一度歌い、最初の歌声と比較。声の出しやすさや音程など、変わった部分を言葉にしてお伝えします。</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section results" id="results">
          <div className="container results-grid">
            <div className="results-copy">
              <p className="eyebrow eyebrow-light">REAL CHANGES</p>
              <h2>「歌えた」が、<br />自信に変わる。</h2>
              <p className="results-lead">数字だけではなく、声を出す楽しさや気持ちの変化も大切にしています。</p>
              <div className="testimonial-list">
                <blockquote>「声が変わった」</blockquote>
                <blockquote>「歌うことが楽しくなった」</blockquote>
                <blockquote>「自分の声に自信が持てるようになった」</blockquote>
                <blockquote>「周りから歌が上手になったと言われた」</blockquote>
              </div>
            </div>
            <div className="result-cards">
              <article className="result-card">
                <span className="result-tag">小学4年生</span>
                <p>カラオケ採点</p>
                <div className="score-change"><span>86<small>点</small></span><i>→</i><strong>92<small>点</small></strong></div>
                <div className="result-meter"><span /></div>
              </article>
              <article className="result-card result-card-secondary">
                <span className="result-tag">受講実績</span>
                <p>カラオケ採点</p>
                <div className="score-change"><span>70<small>点程度</small></span><i>→</i><strong>88<small>点</small></strong></div>
                <div className="result-meter"><span /></div>
              </article>
              <p className="result-disclaimer">※掲載している内容は実際の変化の一例です。点数アップや特定の成果を保証するものではありません。</p>
            </div>
          </div>
        </section>

        <section className="section lesson-flow" id="lesson">
          <div className="container">
            <div className="section-heading centered">
              <p className="eyebrow">60 MINUTES LESSON</p>
              <h2>今の声を知り、変化を確かめる60分</h2>
              <p>体験レッスンも、通常レッスンと同じ流れで行います。</p>
            </div>
            <div className="step-grid">
              {lessonSteps.map(([number, title, description]) => (
                <article className="step-card" key={number}>
                  <span className="step-number">{number}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
            <div className="flow-summary">
              <span>相談する</span><i>→</i><span>歌ってみる</span><i>→</i><strong>変化が分かる</strong>
            </div>
          </div>
        </section>

        <section className="section pricing" id="price">
          <div className="container">
            <div className="section-heading centered">
              <p className="eyebrow">SIMPLE PRICING</p>
              <h2>月1回から始められる、分かりやすい料金</h2>
              <p>すべてマンツーマン・1回60分。入会金も会場費もかかりません。</p>
            </div>
            <div className="price-grid">
              {pricing.map((plan) => (
                <article className={`price-card${plan.featured ? " price-card-featured" : ""}`} key={plan.name}>
                  {plan.featured && <span className="popular-badge">おすすめ</span>}
                  <h3>{plan.name}<span>コース</span></h3>
                  <p className="price-purpose">{plan.per}</p>
                  <div className="price"><small>月額</small><strong>{plan.price}</strong><span>円</span></div>
                  <p className="price-tax">税込／1回60分</p>
                </article>
              ))}
            </div>
            <div className="price-includes">
              <span>✓ 入会金 0円</span>
              <span>✓ 対面会場費込み</span>
              <span>✓ Zoomも同料金</span>
              <span>✓ 月末までの申請で解約</span>
            </div>
            <div className="section-link-row">
              <Link href="/price" className="text-link">料金・無料体験について詳しく見る <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </section>

        <section className="section location" id="access">
          <div className="container location-grid">
            <div className="location-map" aria-hidden="true">
              <div className="map-lines" />
              <span className="map-pin map-pin-main"><i>●</i>守口市駅</span>
              <span className="map-pin map-pin-sub">ご希望の会場</span>
              <div className="map-caption">守口市内全域に対応</div>
            </div>
            <div className="location-copy">
              <p className="eyebrow">MORIGUCHI & ONLINE</p>
              <h2>通いやすい場所を、<br />一緒に決められます。</h2>
              <p>
                固定スタジオではなく、守口市内の近隣カラオケ店や音楽練習室などを利用します。ご希望を伺い、日時に合う会場と集合方法をご案内します。
              </p>
              <dl className="info-list">
                <div><dt>最寄り駅</dt><dd>京阪・守口市駅</dd></div>
                <div><dt>対応エリア</dt><dd>守口市内全域</dd></div>
                <div><dt>対応日</dt><dd>原則毎日</dd></div>
                <div><dt>基本時間</dt><dd>10:00〜17:00</dd></div>
                <div><dt>夜の時間</dt><dd>18:00〜20:00は事前相談</dd></div>
                <div><dt>オンライン</dt><dd>Zoom／スマホ受講可能</dd></div>
              </dl>
              <Link href="/access" className="text-link">会場と受講方法を詳しく見る <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </section>

        <section className="section child-teaser">
          <div className="container child-panel">
            <div className="child-image">
              <Image src="/karaoke-lesson.webp" alt="保護者同席で子ども向けボイトレを受ける様子" width={1448} height={1086} />
            </div>
            <div className="child-copy">
              <p className="eyebrow">FOR CHILDREN</p>
              <span className="child-label">小学3年生以上を歓迎</span>
              <h2>好きな歌から、<br />「できた」と自信を育てる。</h2>
              <p>お子さまのペースを大切にしながら、発声・音程・歌い方を楽しく練習します。保護者の方は大人1名まで同席できます。</p>
              <ul className="check-list">
                <li>好きな曲を題材に練習</li>
                <li>保護者同席可能</li>
                <li>顔出しやSNS投稿の強制なし</li>
              </ul>
              <Link href="/child" className="button button-coral">子ども向けボイトレを見る <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </section>

        <section className="section teacher" id="teacher">
          <div className="container teacher-grid">
            <div className="teacher-photo-wrap">
              <div className="teacher-photo-bg" aria-hidden="true" />
              <Image src="/teacher-profile.webp" alt="P.S.parkle講師・ボイストレーナー谷口剛気" width={1078} height={1459} />
              <div className="teacher-sign">VOICE TRAINER<br /><strong>谷口 剛気</strong></div>
            </div>
            <div className="teacher-copy">
              <p className="eyebrow">MESSAGE FROM TRAINER</p>
              <h2>安心して声を出せることから、<br />始めましょう。</h2>
              <p>
                はじめまして。P.S.parkleの谷口剛気です。レッスンでは、いきなり歌い方を一方的に教えるのではなく、まず今のお悩みや目標を伺います。
              </p>
              <p>
                初心者の方も、お子さまも、最初から上手に歌う必要はありません。「前より歌いやすい」「声を出すのが楽しい」と感じられる変化を、一緒に見つけていきましょう。
              </p>
              <div className="teacher-credentials">
                <span>ボイストレーナー</span>
                <span>楽曲制作者</span>
                <span>TV番組への楽曲提供</span>
                <span>子ども向け指導経験</span>
              </div>
              <Link href="/teacher" className="text-link">講師プロフィールを詳しく見る <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </section>

        <section className="section faq-preview" id="faq">
          <div className="container narrow">
            <div className="section-heading centered">
              <p className="eyebrow">FAQ</p>
              <h2>体験前のよくあるご質問</h2>
              <p>料金、会場、お子さまの受講など、気になることをまとめました。</p>
            </div>
            <div className="faq-list">
              {faqs.slice(0, 6).map((item) => (
                <details key={item.question}>
                  <summary><span>Q</span>{item.question}<i aria-hidden="true">＋</i></summary>
                  <div className="faq-answer"><span>A</span><p>{item.answer}</p></div>
                </details>
              ))}
            </div>
            <div className="section-link-row">
              <Link href="/faq" className="text-link">よくある質問をすべて見る <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </section>

        <section className="section final-cta">
          <div className="container">
            <CtaPanel location="home_final" />
          </div>
        </section>
      </main>
      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
    </>
  );
}
