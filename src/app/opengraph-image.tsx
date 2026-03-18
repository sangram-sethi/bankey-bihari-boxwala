import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/constants/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background:
            "linear-gradient(135deg, #fbf7f2 0%, #f6ead8 45%, #ead6b3 100%)",
          color: "#1f1b18",
          padding: "56px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            border: "1px solid rgba(31,27,24,0.12)",
            borderRadius: "36px",
            background: "rgba(255,255,255,0.72)",
            padding: "56px",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              maxWidth: "760px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                fontSize: "22px",
                color: "#6f1d2b",
              }}
            >
              <div
                style={{
                  display: "flex",
                  padding: "10px 18px",
                  borderRadius: "999px",
                  border: "1px solid rgba(31,27,24,0.12)",
                  background: "#fffaf5",
                }}
              >
                Premium Wholesale Packaging
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: 72,
                  lineHeight: 1.02,
                  fontWeight: 700,
                  letterSpacing: "-0.05em",
                }}
              >
                {siteConfig.name}
              </div>

              <div
                style={{
                  display: "flex",
                  fontSize: 30,
                  lineHeight: 1.35,
                  color: "rgba(31,27,24,0.76)",
                  maxWidth: "760px",
                }}
              >
                Premium jewellery stock boxes for serious wholesale buyers
                across India.
              </div>
            </div>

            <div
              style={{
                display: "flex",
                gap: "14px",
                flexWrap: "wrap",
                fontSize: "22px",
                color: "#1f1b18",
              }}
            >
              <div
                style={{
                  display: "flex",
                  padding: "10px 18px",
                  borderRadius: "999px",
                  background: "#ffffff",
                  border: "1px solid rgba(31,27,24,0.12)",
                }}
              >
                Wholesale-first
              </div>
              <div
                style={{
                  display: "flex",
                  padding: "10px 18px",
                  borderRadius: "999px",
                  background: "#ffffff",
                  border: "1px solid rgba(31,27,24,0.12)",
                }}
              >
                Premium presentation
              </div>
              <div
                style={{
                  display: "flex",
                  padding: "10px 18px",
                  borderRadius: "999px",
                  background: "#ffffff",
                  border: "1px solid rgba(31,27,24,0.12)",
                }}
              >
                WhatsApp enquiry
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                width: "180px",
                height: "180px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "42px",
                background: "linear-gradient(135deg, #6f1d2b 0%, #b08d57 100%)",
                color: "#ffffff",
                fontSize: 78,
                fontWeight: 700,
                letterSpacing: "-0.06em",
                boxShadow: "0 20px 50px rgba(111,29,43,0.18)",
              }}
            >
              BB
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}