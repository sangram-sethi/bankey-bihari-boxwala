import { ImageResponse } from "next/og";

export const size = {
  width: 192,
  height: 192,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #6f1d2b 0%, #b08d57 100%)",
          color: "#ffffff",
          fontSize: 84,
          fontWeight: 700,
          letterSpacing: "-0.06em",
        }}
      >
        BB
      </div>
    ),
    {
      ...size,
    }
  );
}