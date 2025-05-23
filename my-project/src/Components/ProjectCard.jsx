import { motion } from "framer-motion"

const ProjectCard = ({ title, description, image, technologies, index, isDarkMode = false }) => {
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

  const imageVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  }

  const techBadgeVariants = {
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
      className={`rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all ${isDarkMode ? "bg-gray-800 border border-gray-700" : "bg-white"
        }`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      whileHover={{
        y: -5,
        boxShadow: isDarkMode
          ? "0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
          : "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
    >
      <motion.div className="w-full h-52 overflow-hidden" initial="rest" whileHover="hover" animate="rest">
        <motion.img src={image} alt={title} className="w-full h-full object-cover" variants={imageVariants} />
      </motion.div>
      <div className="p-6">
        <motion.h3
          className={`text-xl font-bold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          {title}
        </motion.h3>
        <motion.p
          className={`mb-4 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {description}
        </motion.p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, i) => (
            <motion.span
              key={tech}
              className={`text-xs px-3 py-1 rounded-full ${isDarkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-800"
                }`}
              custom={i}
              variants={techBadgeVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
