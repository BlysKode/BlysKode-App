import Breadcrumbs from '../components/Breadcrumbs'
import CTASection from '../components/CTASection'

export default function Contact() {
  return (
    <div className="pt-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Breadcrumbs
          trail={[
            { name: 'Home', path: '/' },
            { name: 'Contact', path: '/contact' },
          ]}
        />
      </div>
      <CTASection />
    </div>
  )
}
