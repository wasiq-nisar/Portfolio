import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react"
import { CONTACT_DETAILS } from "../constants"
import { useTheme } from "../context/ThemeContext"
import { motion } from "framer-motion"

export default function ContactUs() {
  const { isDarkMode } = useTheme()

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.div
      className={`min-h-screen transition-colors duration-500 ${isDarkMode ? "bg-gray-900" : "bg-white"}`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          className={`text-3xl font-bold mb-8 transition-colors duration-300 ${isDarkMode ? "text-white" : "text-gray-900"
            }`}
          variants={itemVariants}
        >
          Get In Touch
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div variants={itemVariants}>
            <p
              className={`text-lg mb-8 transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
            >
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>

            <div className="space-y-4">
              <motion.div
                className="flex items-center gap-4"
                variants={itemVariants}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Mail className={`w-6 h-6 ${isDarkMode ? "text-teal-400" : "text-gray-800"}`} />
                <a
                  href={`mailto:${CONTACT_DETAILS.email}`}
                  className={`text-lg hover:underline transition-colors duration-300 ${isDarkMode ? "text-gray-200" : "text-gray-800"
                    }`}
                >
                  {CONTACT_DETAILS.email}
                </a>
              </motion.div>

              <motion.div
                className="flex items-center gap-4"
                variants={itemVariants}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Phone className={`w-6 h-6 ${isDarkMode ? "text-teal-400" : "text-gray-800"}`} />
                <a
                  href={`tel:+92${CONTACT_DETAILS.phone.replace(/\s/g, "")}`}
                  className={`text-lg hover:underline transition-colors duration-300 ${isDarkMode ? "text-gray-200" : "text-gray-800"
                    }`}
                >
                  {CONTACT_DETAILS.phone}
                </a>
              </motion.div>

              <motion.div
                className="flex items-center gap-4"
                variants={itemVariants}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Linkedin className={`w-6 h-6 ${isDarkMode ? "text-teal-400" : "text-gray-800"}`} />
                <a
                  href={CONTACT_DETAILS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-lg hover:underline transition-colors duration-300 ${isDarkMode ? "text-gray-200" : "text-gray-800"
                    }`}
                >
                  LinkedIn Profile
                </a>
              </motion.div>

              <motion.div
                className="flex items-center gap-4"
                variants={itemVariants}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Github className={`w-6 h-6 ${isDarkMode ? "text-teal-400" : "text-gray-800"}`} />
                <a
                  href={CONTACT_DETAILS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-lg hover:underline transition-colors duration-300 ${isDarkMode ? "text-gray-200" : "text-gray-800"
                    }`}
                >
                  GitHub Profile
                </a>
              </motion.div>

              <motion.div
                className="flex items-center gap-4"
                variants={itemVariants}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <MapPin className={`w-6 h-6 ${isDarkMode ? "text-teal-400" : "text-gray-800"}`} />
                <span
                  className={`text-lg transition-colors duration-300 ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}
                >
                  {CONTACT_DETAILS.location}
                </span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <form className="space-y-4">
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="name"
                  className={`block mb-2 text-sm font-medium transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className={`w-full p-3 rounded-md transition-colors duration-300 ${isDarkMode
                    ? "bg-gray-800 border-gray-700 text-white focus:border-teal-500 focus:ring-teal-500"
                    : "bg-white border-gray-300 text-gray-900 focus:border-gray-400 focus:ring-gray-400"
                    }`}
                  placeholder="Your name"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="email"
                  className={`block mb-2 text-sm font-medium transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={`w-full p-3 rounded-md transition-colors duration-300 ${isDarkMode
                    ? "bg-gray-800 border-gray-700 text-white focus:border-teal-500 focus:ring-teal-500"
                    : "bg-white border-gray-300 text-gray-900 focus:border-gray-400 focus:ring-gray-400"
                    }`}
                  placeholder="Your email"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="subject"
                  className={`block mb-2 text-sm font-medium transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className={`w-full p-3 rounded-md transition-colors duration-300 ${isDarkMode
                    ? "bg-gray-800 border-gray-700 text-white focus:border-teal-500 focus:ring-teal-500"
                    : "bg-white border-gray-300 text-gray-900 focus:border-gray-400 focus:ring-gray-400"
                    }`}
                  placeholder="Subject"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="message"
                  className={`block mb-2 text-sm font-medium transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className={`w-full p-3 rounded-md transition-colors duration-300 ${isDarkMode
                    ? "bg-gray-800 border-gray-700 text-white focus:border-teal-500 focus:ring-teal-500"
                    : "bg-white border-gray-300 text-gray-900 focus:border-gray-400 focus:ring-gray-400"
                    }`}
                  placeholder="Your message"
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className={`px-6 py-3 rounded-full text-lg font-semibold transition-all ${isDarkMode ? "bg-teal-600 text-white hover:bg-teal-700" : "bg-black text-white"
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
