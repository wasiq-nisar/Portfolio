const ProjectDetail = ({ title, description, year, technologies }) => {
  return (
    <div id={title.toLowerCase().replace(/\s+/g, "-")} className="bg-white rounded-xl overflow-hidden shadow-md p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold">{title}</h3>
        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">{year}</span>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span key={tech} className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ProjectDetail
