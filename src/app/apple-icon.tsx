import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fbf7f2",
        }}
      >
        <div
          style={{
            width: 132,
            height: 132,
            borderRadius: 36,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #6f1d2b 0%, #b08d57 100%)",
            color: "#ffffff",
            fontSize: 64,
            fontWeight: 700,
            letterSpacing: "-0.06em",
          }}
        >
          BB
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}