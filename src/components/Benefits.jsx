import { Truck, Box, ShieldCheck, Leaf } from "lucide-react"
import { extractedData } from "../data/products.js"

const icons = { truck: Truck, box: Box, "shield-check": ShieldCheck, leaf: Leaf }

export default function Benefits() {
  const section = extractedData.find((i) => i.section === "feature-bar")
  const features = section.elements.filter((i) => i.type === "feature")

  return (
    <section className="mx-auto max-w-7xl bg-white px-6 py-10 md:px-12">
      <div className="grid grid-cols-2 gap-6 border-y border-gray-200 py-8 md:grid-cols-4">
        {features.map((f, idx) => {
          const Icon = icons[f.icon]
          return (
            <div
              key={f.title}
              className={`flex items-start gap-3 ${idx !== 0 ? "md:border-l md:border-gray-200 md:pl-6" : ""}`}
            >
              <Icon className="mt-0.5 h-5 w-5 text-[#1F3A2A]" />
              <div>
                <p className="font-semibold text-[#1F3A2A]">{f.title}</p>
                <p className="text-sm text-[#222222]/70">{f.subtitle}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
