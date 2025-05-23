import { Mail, ArrowRight } from "lucide-react"
import { useTheme } from "../context/ThemeContext"
import { motion } from "framer-motion"

const Contact = () => {
  const { isDarkMode } = useTheme()

  return (
    <motion.section
      className={`py-20 px-6 md:px-20 transition-colors duration-500 ${isDarkMode ? "bg-gray-900" : "bg-white"}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      id="contact"
    >
      <div className="max-w-5xl mx-auto text-center">
        <Mail
          className={`w-12 h-12 mx-auto mb-6 transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-gray-800"
            }`}
        />
        <h2
          className={`text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? "text-white" : "text-gray-900"
            }`}
        >
          Let's Work Together
        </h2>
        <p
          className={`max-w-2xl mx-auto mb-8 transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
        >
          I'm currently available for freelance work and full-time positions. If you have a project that needs some
          creative coding, I'd love to hear about it.
        </p>
        <motion.a
          href="/ContactUs"
          className={`inline-flex items-center gap-2 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all ${isDarkMode ? "bg-teal-600 text-white hover:bg-teal-700" : "bg-black text-white"
            }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get In Touch
          <ArrowRight className="w-5 h-5" />
        </motion.a>
      </div>
    </motion.section>
  )
}

export default Contact
