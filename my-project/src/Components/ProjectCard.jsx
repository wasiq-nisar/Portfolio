import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"

const ProjectCard = ({ title, description, image, technologies }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="w-full h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span key={tech} className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        {/* Optional view details link */}
        {/* <Link
          to={
            title === "Phone Cleaner: Wipe Master"
              ? "/projects/phone-cleaner"
              : `/projects#${title.toLowerCase().replace(/\s+/g, "-")}`
          }
          className="inline-flex items-center text-black font-medium hover:underline"
        >
          View Details
          <ArrowUpRight className="ml-1 w-4 h-4" />
        </Link> */}
      </div>
    </div>
  )
}

export default ProjectCard
