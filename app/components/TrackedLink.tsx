"use client";

import type { ReactNode } from "react";

type Props = {
  href: string;
  eventName: "line_click" | "calendar_click";
  location: string;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
};

declare global {
  interface Window {
    dataLayer?: Array<Record<string, string>>;
    gtag?: (
      command: "event",
      eventName: string,
      parameters: Record<string, string>,
    ) => void;
  }
}

export function TrackedLink({
  href,
  eventName,
  location,
  className,
  children,
  ariaLabel,
}: Props) {
  const track = () => {
    const parameters = {
      cta_location: location,
      destination: href,
    };

    if (window.gtag) {
      window.gtag("event", eventName, parameters);
    } else {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: eventName, ...parameters });
    }
  };

  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      onClick={track}
      data-cta={eventName}
      data-cta-location={location}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
