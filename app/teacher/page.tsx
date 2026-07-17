import type { Metadata } from "next";
import Image from "next/image";
import { CtaPanel } from "@/app/components/CtaPanel";
import { SiteFooter } from "@/app/components/SiteFooter";
import { SiteHeader } from "@/app/components/SiteHeader";

export const metadata: Metadata = {
  title: "谷口剛気｜守口市のボイストレーナー・講師紹介",
  description:
    "守口市P.S.parkleの講師、谷口剛気のプロフィール。ボイストレーナー・楽曲制作者として、初心者やお子さま一人ひとりに合わせたレッスンを行います。",
};

const achievements = [
  "P.S.歌ってみた部 代表・講師",
  "ボイストレーナー・楽曲制作者",
  "TV番組への楽曲提供",
  "子ども向けダンスイベント主催",
  "放課後等デイサービスでの出張ボイトレ",
  "三重県志摩市で地域活性化イベントを代表運営",
  "京橋商店街組合センベロ音楽ステージ開催",
  "大阪城野外音楽堂 JO-SONIC出演",
  "日テレ特番・テレ朝番組への楽曲提供",
  "沖縄レストラン MAGIC OCEANへステージ楽曲提供",
];

export default function TeacherPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="teacher-page-hero">
          <div className="container teacher-page-grid">
            <div className="teacher-page-photo"><Image src="/teacher-profile.webp" alt="P.S.parkle講師 谷口剛気" width={1078} height={1459} priority /></div>
            <div className="teacher-page-intro">
              <p className="breadcrumb">ホーム <span>／</span> 講師紹介</p>
              <p className="eyebrow">VOICE TRAINER</p>
              <h1>谷口 剛気<small>たにぐち つよき</small></h1>
              <p className="teacher-role">ボイストレーナー・楽曲制作者</p>
              <blockquote>「上手く歌うこと」だけでなく、<br />「安心して声を出せること」を大切に。</blockquote>
            </div>
          </div>
        </section>

        <section className="section teacher-message-page">
          <div className="container narrow reading-copy">
            <p className="eyebrow">MESSAGE</p>
            <h2>今の声を否定せず、<br />一緒に変化を見つけます。</h2>
            <p>はじめまして。P.S.parkleの講師、谷口剛気です。</p>
            <p>普段はボイストレーナーとしてレッスンを行いながら、楽曲制作、ライブ・イベント出演、TV番組への楽曲提供など、音楽に関わる活動を続けています。</p>
            <p>レッスンでは、いきなり歌い方を一方的に教えるのではなく、まず現在のお悩みや目標を伺います。「高音を出したい」「カラオケの点数を上げたい」「声に自信を持ちたい」など、目的は人それぞれです。</p>
            <p>初心者の方も、お子さまも、最初から上手に歌う必要はありません。その人に合ったペースと方法で、安心して声を出せる時間をつくります。</p>
          </div>
        </section>

        <section className="section philosophy-section">
          <div className="container">
            <div className="section-heading centered"><p className="eyebrow">LESSON PHILOSOPHY</p><h2>レッスンで大切にしていること</h2></div>
            <div className="philosophy-grid">
              <article><span>01</span><h3>まず、話を聞く</h3><p>声の悩みだけでなく、歌いたい曲や目指したい姿も伺い、同じゴールを共有します。</p></article>
              <article><span>02</span><h3>分かる言葉で伝える</h3><p>専門用語だけに頼らず、体の感覚や音の変化を、その人が理解しやすい言葉で説明します。</p></article>
              <article><span>03</span><h3>できたことを見つける</h3><p>レッスン前後を比較し、小さな変化も言葉にして、次の練習につながる自信を育てます。</p></article>
            </div>
          </div>
        </section>

        <section className="section achievements-section">
          <div className="container achievements-grid">
            <div><p className="eyebrow">EXPERIENCE</p><h2>活動・指導実績</h2><p>レッスン、楽曲制作、イベントなど、幅広い音楽活動の経験を指導に生かしています。</p></div>
            <ul>{achievements.map((item) => <li key={item}><span>✓</span>{item}</li>)}</ul>
          </div>
        </section>

        <section className="section final-cta"><div className="container"><CtaPanel location="teacher_final" title="谷口剛気のレッスンを、無料で体験してみませんか？" /></div></section>
      </main>
      <SiteFooter />
    </>
  );
}
