import { Search, ShoppingBag } from "lucide-react";
import { extractedData } from "../data/products.js";

export default function Navbar() {
  const header = extractedData.find((item) => item.section === "header");
  const logo = header.elements.find((item) => item.type === "logo");
  const nav = header.elements.find((item) => item.type === "navigation");
  const cart = header.elements.find((item) => item.type === "text");

  return (
    <header
      className="w-full"
      style={{
        backgroundColor: header.background,
        fontFamily: "Inter, sans-serif",
      }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
        <a
          href="#"
          className="text-2xl font-bold tracking-wide"
          style={{ color: logo.textColor }}
        >
          {logo.text}
        </a>
        <ul
          className="hidden items-center gap-2 rounded-full px-4 py-2 md:flex"
          style={{ backgroundColor: nav.background }}
        >
          {nav.items.map((item) => (
            <li key={item.label}>
              <a
                href="#"
                className="rounded-full px-3 py-1 text-sm font-medium transition-colors hover:bg-white"
                style={{ color: logo.textColor }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div
          className="flex items-center gap-3"
          style={{ color: logo.textColor }}
        >
          <button
            type="button"
            aria-label="Search"
            className="rounded-full p-2 hover:bg-[#F3F3F1]"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Shopping bag"
            className="rounded-full p-2 hover:bg-[#F3F3F1]"
          >
            <ShoppingBag className="h-5 w-5" />
          </button>
          <span className="hidden text-sm font-medium sm:inline">
            {cart.text}
          </span>
        </div>
      </nav>
    </header>
  );
}
