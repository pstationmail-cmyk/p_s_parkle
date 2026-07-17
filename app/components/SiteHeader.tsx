import Link from "next/link";
import Image from "next/image";
import { LINE_URL, navItems } from "@/app/lib/site";
import { TrackedLink } from "./TrackedLink";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand" aria-label="P.S.parkle トップページ">
          <Image className="brand-logo" src="/psparkle-logo.png" alt="P.S.parkle" width={750} height={215} priority />
        </Link>

        <nav className="desktop-nav" aria-label="メインナビゲーション">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <TrackedLink
          href={LINE_URL}
          eventName="line_click"
          location="header"
          className="header-cta"
        >
          <span className="line-dot" aria-hidden="true">LINE</span>
          無料体験を相談
        </TrackedLink>

        <details className="mobile-menu">
          <summary aria-label="メニューを開く">
            <span />
            <span />
            <span />
          </summary>
          <nav className="mobile-menu-panel" aria-label="モバイルメニュー">
            <p>MENU</p>
            {navItems.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}<span aria-hidden="true">→</span>
              </Link>
            ))}
            <TrackedLink
              href={LINE_URL}
              eventName="line_click"
              location="mobile_menu"
              className="button button-line mobile-menu-cta"
            >
              LINEで無料体験を相談
            </TrackedLink>
          </nav>
        </details>
      </div>
    </header>
  );
}
