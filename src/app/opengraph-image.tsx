import { ImageResponse } from "next/og";
import { siteName, siteTitle } from "@/lib/site";

export const alt = siteTitle;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "72px",
          background: "linear-gradient(145deg, #101416 0%, #1a2428 55%, #244f5a 100%)",
          color: "#f5f3ef",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "18px",
              height: "18px",
              background: "#9fc1c9",
            }}
          />
          <span
            style={{
              fontSize: 28,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#b6cbd1",
            }}
          >
            Portfolio
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div style={{ fontSize: 88, fontWeight: 700, lineHeight: 0.95 }}>{siteName}</div>
          <div style={{ fontSize: 34, lineHeight: 1.35, color: "#d7e4e7", maxWidth: "900px" }}>
            Senior Full-Stack Engineer & Technical Lead
          </div>
        </div>
        <div style={{ fontSize: 26, color: "#9fc1c9" }}>www.jordantallen.com</div>
      </div>
    ),
    { ...size },
  );
}
