
import { ThemeProvider } from "./context/ThemeContext"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Skills from "./components/Skills/Skills"
import CodewarsSection from "./components/CodewarsSection/CodewarsSection"
import Services from "./components/Services/Services"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/footer"
import Projects from "./components/GitProjects/GitProjects"

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <CodewarsSection />
      <Services />
      <Contact />
      <Footer />
    </ThemeProvider>
  )
}

export default App
