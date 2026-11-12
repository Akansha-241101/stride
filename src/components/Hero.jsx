import { ArrowRight } from "lucide-react";
import { extractedData } from "../data/products.js";

export default function Hero() {
  const hero = extractedData.find((i) => i.section === "hero");
  const eyebrow = hero.elements.find((i) => i.type === "eyebrow");
  const heading = hero.elements.find((i) => i.type === "heading");
  const para = hero.elements.find((i) => i.type === "paragraph");
  const buttons = hero.elements.filter((i) => i.type === "button");
  const product = hero.elements.find((i) => i.type === "product-card");
  const dots = hero.elements.find((i) => i.type === "carousel-indicator");

  return (
    <section className="mx-auto max-w-7xl bg-white px-6 py-20 md:px-12 md:py-24">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <p className="mb-6 flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#1F3A2A]">
            <span className="h-px w-8 bg-[#1F3A2A]" />
            {eyebrow.text}
          </p>
          <h1 className="mb-6 text-6xl font-extrabold leading-[1.05] uppercase text-[#1F3A2A] md:text-6xl">
            {heading.lines.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </h1>
          <p className="mb-6 max-w-md text-base text-[#222222]">{para.text}</p>
          <div className="flex flex-wrap gap-3">
            {buttons.map((b) => (
              <button
                key={b.label}
                type="button"
                className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium"
                style={{
                  backgroundColor:
                    b.style === "filled" ? b.backgroundColor : "transparent",
                  color: b.textColor,
                  border:
                    b.style === "outline"
                      ? `1px solid ${b.borderColor}`
                      : "none",
                }}
              >
                {b.label}
                {b.icon === "arrow-right" ? (
                  <ArrowRight className="ml-1 h-4 w-4" />
                ) : null}
              </button>
            ))}
          </div>
        </div>
        <div className="relative flex min-h-[380px] items-center justify-center overflow-hidden py-8 md:min-h-[480px] md:overflow-visible">
          <span
            className="pointer-events-none absolute -right-2 -top-4 z-0 select-none text-[5.5rem] font-bold leading-none text-transparent opacity-50 md:text-[9rem]"
            style={{ WebkitTextStroke: "1px #E5E7EB" }}
          >
            STRIDE®
          </span>
          <span className="absolute left-[16%] top-[20%] z-20 h-8 w-8 bg-[#D6F65A]" />
          <span className="absolute right-[14%] top-[42%] z-20 h-8 w-8 bg-[#F29BC9]" />
          <span className="absolute bottom-[22%] right-[28%] z-20 h-6 w-6 bg-[#FBE97A]" />
          <img
            src="/everyday-sneaker-removebg-preview.png"
            alt="Dark green and cream low-top sneaker"
            className="relative z-10 w-full max-w-sm scale-110 object-contain md:max-w-lg"
          />
          <div className="absolute bottom-0 right-0 z-20 text-right">
            <p className="text-sm font-semibold text-[#1F3A2A]">{product.name}</p>
            <div className="my-1 ml-auto h-px w-24 bg-gray-300" />
            <p className="text-sm font-medium text-[#1F3A2A]">{product.price}</p>
            <div className="mt-2 flex justify-end gap-[1.5px]">
              {Array.from({ length: dots.count }).map((_, i) => (
                <span
                  key={i}
                  className="h-2 w-2 rounded-full border"
                  style={{
                    backgroundColor: i === dots.activeIndex ? dots.activeColor : "transparent",
                    borderColor: dots.activeColor,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
