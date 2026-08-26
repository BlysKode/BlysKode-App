import Breadcrumbs from '../components/Breadcrumbs'
import CTASection from '../components/CTASection'

export default function Contact() {
  return (
    <>
      <div className="shell pt-[92px] pb-2 sm:pt-[108px] lg:pt-[128px]">
        <Breadcrumbs
          trail={[
            { name: 'Home', path: '/' },
            { name: 'Contact', path: '/contact' },
          ]}
        />
      </div>
      <CTASection titleAs="h1" />
    </>
  )
}
