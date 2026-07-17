import { CALENDAR_URL, LINE_URL } from "@/app/lib/site";
import { TrackedLink } from "./TrackedLink";

type Props = {
  location: string;
  title?: string;
  description?: string;
  compact?: boolean;
};

export function CtaPanel({
  location,
  title = "まずは無料体験で、今の声を聞かせてください",
  description = "体験も通常と同じ60分。ご希望の日時や会場を公式LINEでご案内します。相談だけでも大丈夫です。",
  compact = false,
}: Props) {
  return (
    <div className={`cta-panel${compact ? " cta-panel-compact" : ""}`}>
      <div>
        <p className="eyebrow eyebrow-light">FREE TRIAL LESSON</p>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="cta-actions">
        <TrackedLink
          href={LINE_URL}
          eventName="line_click"
          location={location}
          className="button button-line button-wide"
        >
          <span className="button-kicker">24時間受付</span>
          LINEで無料体験を相談する
          <span aria-hidden="true">→</span>
        </TrackedLink>
        <TrackedLink
          href={CALENDAR_URL}
          eventName="calendar_click"
          location={location}
          className="text-link text-link-light"
        >
          空き日時をカレンダーで確認する <span aria-hidden="true">↗</span>
        </TrackedLink>
      </div>
    </div>
  );
}
