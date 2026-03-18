import { Badge } from "@/components/common/badge";
import { Button } from "@/components/common/button";

type ProductEnquiryPanelProps = {
  productName: string;
  pricePerPiece: number;
  gstNote: string;
  inStock: boolean;
  whatsappHref: string;
};

export function ProductEnquiryPanel({
  productName,
  pricePerPiece,
  gstNote,
  inStock,
  whatsappHref,
}: ProductEnquiryPanelProps) {
  const enquiryPoints = [
    "Bulk quantity discussion",
    "Colour and size confirmation",
    "Direct business handling on WhatsApp",
    inStock ? "Current stock available for enquiry" : "Check latest availability",
  ];

  return (
    <aside className="rounded-4xl border border-(--border) bg-white/85 p-6 shadow-(--shadow-card) sm:p-8">
      <div className="flex flex-wrap items-center gap-3">
        <Badge variant={inStock ? "gold" : "soft"}>
          {inStock ? "In Stock" : "Availability on Request"}
        </Badge>
        <Badge variant="soft">Wholesale Enquiry</Badge>
      </div>

      <div className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--gold)">
          Price Direction
        </p>
        <h2 className="mt-3 font-serif text-4xl text-(--foreground)">
          ₹{pricePerPiece} / piece
        </h2>
        <p className="mt-2 text-sm text-(--muted-soft)">{gstNote}</p>
      </div>

      <div className="mt-6 rounded-3xl border border-(--border) bg-[#fcf7f1] p-5">
        <p className="text-sm leading-7 text-(--muted)">
          Interested in{" "}
          <span className="font-medium text-(--foreground)">{productName}</span>?
          Start the conversation directly on WhatsApp for quantity, availability,
          pricing confirmation, and final business discussion.
        </p>
      </div>

      <div className="mt-6 space-y-3">
        {enquiryPoints.map((point) => (
          <div
            key={point}
            className="flex items-start gap-3 rounded-[20px] border border-(--border) bg-white px-4 py-3"
          >
            <span className="mt-1 h-2 w-2 rounded-full bg-(--gold)" />
            <p className="text-sm text-(--foreground)">{point}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <Button href={whatsappHref} fullWidth>
          Enquire on WhatsApp
        </Button>

        <Button href="/contact" variant="secondary" fullWidth>
          Contact for Business Details
        </Button>
      </div>
    </aside>
  );
}