import { ImageResponse } from "next/og";
import { toko } from "@/lib/toko";

export const alt = `${toko.nama} - Katalog & Pesan Kopi`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#f3f6f0",
        }}
      >
        <svg width="130" height="160" viewBox="0 0 130 160">
          <ellipse
            cx="65"
            cy="80"
            rx="52"
            ry="70"
            fill="#1f6b4f"
            transform="rotate(-18 65 80)"
          />
          <path
            d="M48 36 C70 50 62 78 70 100 C74 112 80 118 86 124"
            fill="none"
            stroke="#f3f6f0"
            strokeWidth="9"
            strokeLinecap="round"
          />
        </svg>
        <div
          style={{
            fontSize: 140,
            fontWeight: 800,
            color: "#14301f",
            letterSpacing: -4,
            lineHeight: 1,
            marginTop: 28,
          }}
        >
          Ayasha
        </div>
        <div
          style={{
            fontSize: 44,
            color: "#2a6048",
            letterSpacing: 14,
            marginTop: 18,
          }}
        >
          COFFEE &amp; CO.
        </div>
      </div>
    ),
    size,
  );
}
