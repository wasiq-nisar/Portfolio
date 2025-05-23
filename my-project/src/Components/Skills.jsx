import { motion } from "framer-motion"
import { SkillCard } from "./SkillCard"
import { SKILLS } from "../constants"
import { useTheme } from "../context/ThemeContext"

const Skills = () => {
  const { isDarkMode } = useTheme()

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  }

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <motion.section
      className={`py-20 px-6 md:px-20 transition-colors duration-500 ${isDarkMode ? "bg-gray-900" : "bg-white"}`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      id="skills"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-16" variants={headerVariants}>
          <motion.h2
            className={`text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? "text-white" : "text-gray-900"
              }`}
          >
            My Skills
          </motion.h2>
          <motion.p
            className={`max-w-3xl mx-auto transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
          >
            I've acquired a diverse range of skills throughout my career as an iOS developer and software engineer.
          </motion.p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants}>
          {SKILLS.map((skill, index) => (
            <SkillCard
              key={index}
              icon={<skill.icon className="w-10 h-10" />}
              title={skill.title}
              skills={skill.skills}
              isDarkMode={isDarkMode}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Skills
