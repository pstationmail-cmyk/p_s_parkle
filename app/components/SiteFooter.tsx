import Link from "next/link";
import Image from "next/image";
import { LINE_URL, navItems } from "@/app/lib/site";
import { TrackedLink } from "./TrackedLink";

export function SiteFooter() {
  return (
    <>
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand-block">
            <Link href="/" className="brand brand-light" aria-label="P.S.parkle トップページ">
              <span className="footer-logo-box">
                <Image className="brand-logo brand-logo-footer" src="/psparkle-logo.png" alt="P.S.parkle" width={750} height={215} />
              </span>
            </Link>
            <p>守口市で、歌声の変化を実感できるボイトレ</p>
            <p className="footer-small">対面・Zoom対応／小学3年生以上歓迎</p>
          </div>

          <div className="footer-links">
            <p className="footer-title">サイトメニュー</p>
            {navItems.map((item) => (
              <Link href={item.href} key={item.href}>{item.label}</Link>
            ))}
            <Link href="/privacy">プライバシーポリシー</Link>
          </div>

          <div className="footer-contact">
            <p className="footer-title">体験・ご相談</p>
            <p>体験日時や会場は、公式LINEでご案内します。</p>
            <TrackedLink
              href={LINE_URL}
              eventName="line_click"
              location="footer"
              className="button button-line button-small"
            >
              LINEで無料体験を相談
            </TrackedLink>
          </div>
        </div>
        <div className="copyright">© {new Date().getFullYear()} P.S.parkle</div>
      </footer>
      <div className="mobile-sticky-cta">
        <TrackedLink href={LINE_URL} eventName="line_click" location="mobile_sticky" className="button button-line">
          <span className="button-kicker">初回60分</span>
          LINEで無料体験を相談
        </TrackedLink>
      </div>
    </>
  );
}
