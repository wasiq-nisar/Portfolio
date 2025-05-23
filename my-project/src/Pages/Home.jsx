import { motion } from "framer-motion"
import Hero from "../Components/Hero"
import Skills from "../Components/Skills"
import Projects from "../Components/Projects"
import Contact from "../Components/Contact"

const Home = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
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
    </motion.div>
  )
}

export default Home
