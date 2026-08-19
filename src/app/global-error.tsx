"use client";

import { useEffect } from "react";

type GlobalErrorProps = {
  error: Error & { digest?: string };
  retry: () => void;
};

export default function GlobalError({ error, retry }: GlobalErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="ko">
      <body>
        <main
          style={{
            minHeight: "100vh",
            display: "grid",
            placeItems: "center",
            padding: 20,
            background: "#fafafa",
            color: "#18181b",
            fontFamily: "Arial, Helvetica, sans-serif",
          }}
        >
          <section
            style={{
              maxWidth: 480,
              border: "1px solid #e4e4e7",
              borderRadius: 8,
              background: "#ffffff",
              padding: 24,
              textAlign: "center",
            }}
          >
            <p style={{ margin: 0, color: "#dc2626", fontSize: 14, fontWeight: 700 }}>
              Global Error
            </p>
            <h1 style={{ margin: "12px 0 0", fontSize: 24 }}>서비스를 불러오지 못했습니다</h1>
            <p style={{ margin: "12px 0 0", color: "#52525b", fontSize: 14, lineHeight: 1.7 }}>
              잠시 후 다시 시도해주세요.
            </p>
            <button
              onClick={retry}
              style={{
                marginTop: 24,
                height: 40,
                border: 0,
                borderRadius: 6,
                background: "#059669",
                color: "#ffffff",
                padding: "0 16px",
                fontWeight: 700,
                cursor: "pointer",
              }}
              type="button"
            >
              다시 시도
            </button>
          </section>
        </main>
      </body>
    </html>
  );
}
