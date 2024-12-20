
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { TrustedBy } from './components/TrustedBy'
import { WorkflowSection } from './components/WorkflowSection'
import { Features } from './components/Features'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustedBy />
      <WorkflowSection />
      <Features />
    </div>
  )
}

export default App

