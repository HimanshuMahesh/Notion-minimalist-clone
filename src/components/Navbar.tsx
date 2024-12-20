
import { NavItem } from "../types"

const navItems: NavItem[] = [
  { label: "Product", href: "#product" },
  { label: "Download", href: "#download" },
  { label: "Solutions", href: "#solutions" },
  { label: "Resources", href: "#resources" },
  { label: "Pricing", href: "#pricing" },
]

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center gap-2">
            <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2h96v96H2z" fill="#000"/>
              <path d="M30 30h40v40H30z" fill="#fff"/>
            </svg>
            <span className="font-bold text-xl">Notion</span>
          </a>
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Request a demo
          </a>
          <button className="px-4 py-2 text-sm font-medium text-white bg-black hover:bg-gray-800 rounded-md transition-colors">
            Get Notion free
          </button>
        </div>
      </div>
    </nav>
  )
}

