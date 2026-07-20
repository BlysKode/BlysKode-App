import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { Analytics } from '@vercel/analytics/react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import WhyChooseUs from './components/WhyChooseUs'
import FAQ from './components/FAQ'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import { prefersReducedMotion } from './lib/motion'

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother)

export default function App() {
  const wrapper = useRef(null)
  const content = useRef(null)

  useGSAP(() => {
    if (prefersReducedMotion()) return

    ScrollSmoother.create({
      wrapper: wrapper.current,
      content: content.current,
      smooth: 1.2,
      effects: true,
      normalizeScroll: true,
    })
  })

  return (
    <>
      <Navbar />
      <div id="smooth-wrapper" ref={wrapper}>
        <div id="smooth-content" ref={content}>
          <main>
            <Hero />
            <Services />
            <Process />
            <WhyChooseUs />
            <FAQ />
            <CTASection />
          </main>
          <Footer />
        </div>
      </div>
      <WhatsAppButton />
      <Analytics />
    </>
  )
}
