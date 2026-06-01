import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Personas } from './components/Personas'
import { Features } from './components/Features'
import { HowItWorks } from './components/HowItWorks'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-cano-950 text-cano-100">
      <Header />
      <main>
        <Hero />
        <Personas />
        <Features />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
