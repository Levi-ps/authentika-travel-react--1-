import { useState } from 'react'
import { useLanguage } from './hooks/useLanguage'
import { useReveal } from './hooks/useReveal'

import Topbar    from './components/Topbar'
import Navbar    from './components/Navbar'
import MobileNav from './components/MobileNav'
import CatStrip  from './components/CatStrip'
import BackToTop from './components/BackToTop'

import Hero          from './pages/Hero'
import About         from './pages/About'
import Hotels        from './pages/Hotels'
//import Destinations  from './pages/Destinations'

import Vols          from './pages/Vols'
import Activities    from './pages/Activities'
import Excursions    from './pages/Excursions'
import Circuits      from './pages/Circuits'
import Hebergements  from './pages/Hebergements'
import Mice          from './pages/Mice'
import Formations    from './pages/Formations'
import Testimonials  from './pages/Testimonials'
import Contact       from './pages/Contact'
import Footer        from './pages/Footer'

export default function App() {
  const { lang, setLang, t } = useLanguage()
  const [mobileOpen, setMobileOpen] = useState(false)
  useReveal()

  return (
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'} style={lang === 'ar' ? { fontFamily: "'Tajawal', sans-serif" } : {}}>
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} lang={lang} setLang={setLang} />
      <Topbar lang={lang} setLang={setLang} />
      <Navbar lang={lang} setLang={setLang} onMobileOpen={() => setMobileOpen(true)} />
      <Hero t={t} />
      <CatStrip lang={lang} />
      <main>
        <About        t={t} lang={lang} />
        <Hotels       t={t} />
        
        
        <Vols         t={t} />
        <Activities   t={t} lang={lang} />
        <Excursions   t={t} lang={lang} />
        <Circuits     t={t} lang={lang} />
        <Hebergements t={t} lang={lang} />
        <Mice         t={t} />
        <Formations   t={t} lang={lang} />
        <Testimonials t={t} lang={lang} />
        <Contact      t={t} />
      </main>
      <Footer t={t} />
      <BackToTop />
    </div>
  )
}