import { extractedData } from "../data/products.js"
import ProductCard from "./ProductCard.jsx"

const productImages = [
  "/everyday-sneaker-removebg-preview.png",
  "/performance-sneaker-removebg-preview.png",
  "/streetwear-sneaker-removebg-preview.png",
]

export default function FeaturedCollection() {
  const section = extractedData.find((i) => i.section === "featured-collection")
  const eyebrow = section.elements.find((i) => i.type === "eyebrow")
  const heading = section.elements.find((i) => i.type === "heading")
  const paragraph = section.elements.find((i) => i.type === "paragraph")
  const grid = section.elements.find((i) => i.type === "product-grid")

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-12">
      <div className="rounded-3xl px-6 py-10 md:px-10 md:py-12" style={{ backgroundColor: section.background }}>
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-white">
              <span className="mr-3 inline-block h-px w-8 align-middle bg-white" />
              {eyebrow.text}
            </p>
            <h2 className="mt-4 text-3xl font-bold uppercase leading-tight text-white md:text-5xl">
              {heading.lines.map((line) => <span key={line} className="block">{line}</span>)}
            </h2>
          </div>
          <p className="max-w-md text-sm text-white/90 md:justify-self-end">{paragraph.text}</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {grid.cards.map((card, i) => (
            <ProductCard key={card.name} product={card} imageSrc={productImages[i]} />
          ))}
        </div>
      </div>
    </section>
  )
}
