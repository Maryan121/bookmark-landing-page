import React from 'react'
import Header from './header'
import IntroSection from './introSection'
import Features from './features'
import DownloadSection from './downloadSection'
import Faq from './faq'
import Contact from './contact'
import Footer from './footer'


export default function AllComponents() {
  return (
    <div>
      <Header />
      <IntroSection />
      <Features />
      <DownloadSection />
      <Faq />
      <Contact />
      <Footer />
    </div>
  )
}
