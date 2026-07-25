import { ImageResponse } from "next/og";

export const alt = "GLOCMEMIN - Global Christ Message Ministry";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "linear-gradient(145deg, #071a33 0%, #0e2f5a 55%, #1b4f8a 100%)",
          color: "#fff",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#b8892d",
            fontFamily: "sans-serif",
            fontWeight: 700,
          }}
        >
          End Time Christ Army
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 72, lineHeight: 1.05, maxWidth: 900 }}>
            Global Christ Message Ministry
          </div>
          <div
            style={{
              fontSize: 30,
              color: "rgba(255,255,255,0.82)",
              maxWidth: 820,
              fontFamily: "sans-serif",
            }}
          >
            Presenting every man perfect in Christ Jesus. Colossians 1:28.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "sans-serif",
            fontSize: 24,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          <span>GLOCMEMIN</span>
          <span>Jesus is Lord</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
