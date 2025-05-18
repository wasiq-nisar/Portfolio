import React from "react"
import { SkillCard } from "./SkillCard"
import { SKILLS } from "../constants"

const Skills = () => {
  return (
    <section className="py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">My Skills</h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-center mb-16">
          I've acquired a diverse range of skills throughout my career as an iOS developer and software engineer.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skill, index) => (
            <SkillCard
              key={index}
              icon={<skill.icon className="w-10 h-10" />}
              title={skill.title}
              skills={skill.skills}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
