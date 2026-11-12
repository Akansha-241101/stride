import { ArrowRight } from "lucide-react"

export default function ProductCard({ product, imageSrc }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-white text-[#1F3A2A]">
      <img src={imageSrc} alt={product.name} className="h-56 w-full bg-[#F3F3F1] object-contain p-4" />
      <div className="flex flex-1 flex-col p-5 text-left">
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <p className="mt-2 text-sm text-[#222222]/80">{product.description}</p>
        <p className="mt-3 text-sm font-medium">{product.price}</p>
        <button type="button" className="mt-auto inline-flex items-center self-end rounded-full border border-[#1F3A2A] px-4 py-2 text-sm font-medium">
          {product.buttonLabel}
          <ArrowRight className="ml-1 h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
