import { HERO_CONTENT } from "../constants"
import { ArrowRight } from "lucide-react"
import { useTheme } from "../context/ThemeContext"
import { motion } from "framer-motion"

const Hero = () => {
  const { isDarkMode } = useTheme()

  return (
    <motion.section
      className={`mt-28 flex items-center px-6 md:px-20 transition-colors duration-500 ${isDarkMode ? "bg-gray-900" : "bg-white"
        }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl">
        <p
          className={`text-lg md:text-xl font-medium mb-4 transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-gray-800"
            }`}
        >
          {HERO_CONTENT.greeting}
        </p>
        <h1
          className={`text-4xl md:text-6xl font-extrabold leading-tight mb-6 transition-colors duration-300 ${isDarkMode ? "text-white" : "text-black"
            }`}
        >
          {HERO_CONTENT.titleLine1}
          <br />
          {HERO_CONTENT.titleLine2} <span className="text-gray-400">{HERO_CONTENT.highlight}</span>
        </h1>

        <p
          className={`mt-8 text-base md:text-lg max-w-xl leading-relaxed transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
        >
          {HERO_CONTENT.description}
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <motion.a
            href="/ContactUs"
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-lg font-semibold hover:scale-105 transition-all ${isDarkMode ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-black text-white"
              }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {HERO_CONTENT.cta}
            <ArrowRight className="w-5 h-5" />
          </motion.a>

          {/* <motion.a
            href="/resume.pdf"
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-lg font-semibold hover:scale-105 transition-all ${
              isDarkMode 
                ? "bg-gray-800 text-white border-2 border-gray-600" 
                : "bg-white text-black border-2 border-black"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {HERO_CONTENT.downloadCta}
            <Download className="w-5 h-5" />
          </motion.a> */}
        </div>
      </div>
    </motion.section>
  )
}

export default Hero
