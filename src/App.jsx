import Footer from './components/Footer'
import Header from './components/Header'
import VideoSection from './components/sections/VideoSection'
// import HeroSection from './components/sections/HeroSection'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import Career from './components/sections/Career'
import ServicesSection from './components/sections/Services'
import About from './components/sections/About'

const App = () => {
  return (
    <div className="bg-blue text-slate-800">
      <Header />
      <main>
        <VideoSection />
        {/* <HeroSection /> */}
        <Projects />
        <ServicesSection />
        <About />
        <Career />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
