import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Routes, Route } from 'react-router-dom'

import Layout from './components/Layout'
import Home from './pages/Home'
import ServicesOverview from './pages/ServicesOverview'
import ServiceDetail from './pages/ServiceDetail'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import HireHub from './pages/HireHub'
import HireDetail from './pages/HireDetail'
import NotFound from './pages/NotFound'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesOverview />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/hire-developers" element={<HireHub />} />
        <Route path="/hire-developers/:slug" element={<HireDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
