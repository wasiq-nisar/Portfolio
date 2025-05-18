import Hero from "../Components/Hero"
import Skills from "../Components/Skills"
import Projects from "../Components/Projects"
import Contact from "../Components/Contact"

const Home = () => {
  return (
    <div>
      <Hero />
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  )
}

export default Home
