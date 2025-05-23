import React from "react"
import { motion } from "framer-motion"
import { SkillCard } from "./SkillCard"
import { SKILLS } from "../constants"

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

const Skills = () => {
  return (
    <motion.section
      className="py-20 px-6 md:px-20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
          variants={headerVariants}
        >
          My Skills
        </motion.h2>
        <motion.p
          className="text-gray-600 max-w-3xl mx-auto text-center mb-16"
          variants={headerVariants}
        >
          I've acquired a diverse range of skills throughout my career as an iOS developer and software engineer.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skill, index) => (
            <SkillCard
              key={index}
              icon={<skill.icon className="w-10 h-10" />}
              title={skill.title}
              skills={skill.skills}
              index={index}
            />
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Skills
