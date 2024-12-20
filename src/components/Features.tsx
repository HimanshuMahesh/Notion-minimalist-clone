
import { PenTool, Layout, Zap } from 'lucide-react'
import type { Feature } from "../types"

const features: Feature[] = [
  {
    title: "AI-powered writing",
    description: "Write faster, smarter, and more creatively with Notion AI as your sidekick.",
    icon: <PenTool className="w-6 h-6" />,
  },
  {
    title: "Customizable workspace",
    description: "Tailor Notion to your needs with a fully customizable and flexible workspace.",
    icon: <Layout className="w-6 h-6" />,
  },
  {
    title: "Powerful integrations",
    description: "Connect Notion with your favorite tools to streamline your workflow.",
    icon: <Zap className="w-6 h-6" />,
  },
]

export function Features() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">One tool for your whole team</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Write, plan, and get organized in one place
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

