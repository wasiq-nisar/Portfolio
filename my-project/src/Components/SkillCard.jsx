import { motion } from "framer-motion"

export const SkillCard = ({ icon, title, skills, isDarkMode = false, index }) => {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1, // Stagger effect
      },
    },
  }

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.2 + i * 0.05,
        duration: 0.2,
      },
    }),
  }

  return (
    <motion.div
      className={`p-6 rounded-xl shadow-sm border hover:shadow-md transition-all ${isDarkMode ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-gray-100 text-gray-900"
        }`}
      variants={cardVariants}
      whileHover={{ y: -5 }}
    >
      <div className={`mb-4 transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-gray-800"}`}>
        {icon}
      </div>

      <h3
        className={`text-xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? "text-white" : "text-gray-900"
          }`}
      >
        {title}
      </h3>

      <ul className="space-y-2">
        {skills.map((skill, i) => (
          <motion.li
            key={skill}
            className="flex items-center gap-2"
            custom={i}
            variants={skillVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className={`w-2 h-2 rounded-full ${isDarkMode ? "bg-teal-400" : "bg-gray-800"}`}></span>
            <span className={`transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
              {skill}
            </span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}
