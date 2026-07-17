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
      </div>
    </header>
  );
}
