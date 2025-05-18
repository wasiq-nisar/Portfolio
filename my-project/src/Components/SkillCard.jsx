export const SkillCard = ({ icon, title, skills }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="text-gray-800 mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill) => (
          <li key={skill} className="flex items-center gap-2">
            <span className="w-2 h-2 bg-gray-800 rounded-full"></span>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}