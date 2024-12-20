
const companies = [
  { name: "Affirm", logo: "/images/Affirm_logo.svg.png" },
  { name: "Netflix", logo: "/images/netflix.png" },
  { name: "Discord", logo: "/images/discord.svg" },
  { name: "Figma", logo: "/images/figma.png" },
  { name: "Pinterest", logo: "/images/pinterest.png" },
]

export function TrustedBy() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-600 mb-8 text-lg">Trusted by teams at</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {companies.map((company) => (
            <img
              key={company.name}
              src={company.logo}
              alt={company.name}
              className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

