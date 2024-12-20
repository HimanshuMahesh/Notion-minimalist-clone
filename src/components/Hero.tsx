
import { FeatureToggle } from './FeatureToggle'

export function Hero() {
  return (
    <section className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight max-w-4xl mx-auto">
            Write, plan, share. <br />
            With AI at your side.
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            Notion is the connected workspace where better, faster work happens.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 text-base font-medium text-white bg-black hover:bg-gray-800 rounded-md transition-colors">
              Get Notion free
            </button>
            <button className="px-8 py-3 text-base font-medium text-black border border-gray-300 hover:bg-gray-50 rounded-md transition-colors">
              Request a demo
            </button>
          </div>
        </div>
        <FeatureToggle />
      </div>
    </section>
  )
}

