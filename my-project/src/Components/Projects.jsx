import React from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import ProjectCard from "./ProjectCard"
import { FEATURED_PROJECTS } from "../constants"

const Projects = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl">
              A selection of my recent iOS development work. These projects showcase my skills in Swift, SwiftUI, and
              UIKit.
            </p>
          </div>
          <Link
            to="/projects"
            className="mt-6 md:mt-0 flex items-center gap-2 text-black font-medium hover:underline"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
