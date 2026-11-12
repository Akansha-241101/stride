import { ArrowRight } from "lucide-react"
import { extractedData } from "../data/products.js"

export default function BrandStory() {
  const section = extractedData.find((i) => i.section === "the-stride-standard")
  const eyebrow = section.elements.find((i) => i.type === "eyebrow")
  const heading = section.elements.find((i) => i.type === "heading")
  const paragraph = section.elements.find((i) => i.type === "paragraph")
  const button = section.elements.find((i) => i.type === "button")

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-12" style={{ backgroundColor: section.background }}>
      <div className="grid items-center gap-8 md:grid-cols-3">
        <div className="space-y-4">
          <p className="text-sm font-medium uppercase tracking-widest text-[#829C8B]">
            <span className="mr-3 inline-block h-px w-8 align-middle bg-[#829C8B]" />
            {eyebrow.text}
          </p>
          <h2 className="text-3xl font-bold leading-tight text-[#1F3A2A] md:text-4xl">
            {heading.lines.map((line) => <span key={line} className="block">{line}</span>)}
          </h2>
        </div>
        <div className="flex justify-center">
          <img
            src="/lifestyle-sneaker.png"
            alt="Close-up of green STRIDE sneaker"
            className="h-full w-full max-w-sm rounded-2xl object-cover"
          />
        </div>
        <div className="space-y-6">
          <p className="text-base text-[#222222]">{paragraph.text}</p>
          <button
            type="button"
            className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium"
            style={{ border: `1px solid ${button.borderColor}`, color: button.textColor }}
          >
            {button.label}
            <ArrowRight className="ml-1 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
