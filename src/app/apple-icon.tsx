import { ImageResponse } from "next/og";
import { siteName } from "@/lib/site";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "#101416",
          color: "#9fc1c9",
          fontSize: 72,
          fontWeight: 700,
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        {siteName
          .split(" ")
          .map((part) => part[0])
          .join("")}
      </div>
    ),
    { ...size },
  );
}
