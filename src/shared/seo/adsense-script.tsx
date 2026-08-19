import Script from "next/script";
import { env } from "@/shared/config/env";

export function AdsenseScript() {
  if (!env.adsenseClient) {
    return null;
  }

  return (
    <Script
      async
      crossOrigin="anonymous"
      id="adsense-script"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${env.adsenseClient}`}
      strategy="afterInteractive"
    />
  );
}
