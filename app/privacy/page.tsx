import type { Metadata } from "next";
import { SiteFooter } from "@/app/components/SiteFooter";
import { SiteHeader } from "@/app/components/SiteHeader";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "P.S.parkleのプライバシーポリシーです。",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="simple-hero simple-hero-compact"><div className="container narrow centered-copy"><p className="breadcrumb">ホーム <span>／</span> プライバシーポリシー</p><h1>プライバシーポリシー</h1></div></section>
        <section className="section legal-page">
          <div className="container legal-copy">
            <p>P.S.parkle（以下「当サービス」）は、お客様の個人情報を適切に取り扱うため、以下の方針を定めます。</p>
            <h2>1. 取得する情報</h2>
            <p>当サービスは、体験・レッスンのご案内に必要な範囲で、氏名、年齢または学年、連絡先、希望日時、受講目的、お問い合わせ内容などを取得する場合があります。</p>
            <h2>2. 利用目的</h2>
            <p>取得した情報は、体験・レッスンの予約管理、会場案内、連絡、サービス改善、お問い合わせ対応のために利用します。</p>
            <h2>3. 第三者への提供</h2>
            <p>法令に基づく場合を除き、ご本人の同意なく個人情報を第三者へ提供しません。</p>
            <h2>4. 外部サービスの利用</h2>
            <p>予約・連絡にLINEおよび予約カレンダー、オンラインレッスンにZoomを利用します。各サービスでの情報の取り扱いは、それぞれの提供会社が定める規約・方針に従います。</p>
            <h2>5. アクセス解析</h2>
            <p>当サイトは、閲覧状況やボタンの利用状況を把握し、サイトを改善するためにGoogle AnalyticsおよびMicrosoft Clarityなどのアクセス解析ツールを利用します。これらのツールでは、閲覧ページ、操作状況、スクロール状況などが収集される場合があります。取得される情報は個人を直接特定するものではなく、Microsoft Clarityでは個人情報や入力内容が記録されないよう配慮されています。</p>
            <h2>6. 安全管理</h2>
            <p>取得した情報への不正アクセス、紛失、改ざん、漏えいなどを防ぐため、必要な安全管理措置を講じます。</p>
            <h2>7. 開示・訂正・削除</h2>
            <p>ご本人から個人情報の開示、訂正、利用停止または削除のご希望があった場合は、本人確認のうえ適切に対応します。</p>
            <h2>8. お問い合わせ</h2>
            <p>個人情報の取り扱いに関するお問い合わせは、P.S.parkle公式LINEからご連絡ください。</p>
            <p className="legal-date">制定日：2026年7月17日<br />P.S.parkle　代表 谷口剛気</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
