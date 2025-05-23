import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, Sun, Moon } from "lucide-react"
import { navLinks } from "../constants"
import { useTheme } from "../context/ThemeContext"
import { motion } from "framer-motion"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const { isDarkMode, toggleTheme } = useTheme()

  // Function to handle smooth scrolling
  const handleNavClick = (e, link, linkName) => {
    // Special case for Home link - scroll to top
    if (linkName === "Home") {
      e.preventDefault()

      // Close mobile menu if open
      setIsOpen(false)

      // Scroll to top with smooth behavior
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })

      return
    }

    // Handle other links with hash
    if (link.includes("#")) {
      e.preventDefault()

      // Extract the section ID from the link
      const sectionId = link.split("#")[1]
      const element = document.getElementById(sectionId)

      if (element) {
        // Close mobile menu if open
        setIsOpen(false)

        // Scroll to the element with smooth behavior
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      } else if (location.pathname !== "/") {
        // If we're not on the home page, navigate to home page with the hash
        window.location.href = link
      }
    } else if (location.pathname === link) {
      // If we're already on the page, just close the menu
      e.preventDefault()
      setIsOpen(false)
    }
  }

  return (
    <nav
      className={`flex items-center justify-between px-12 py-4 shadow-md sticky top-0 z-50 transition-colors duration-300 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
    >
      <h1 className="text-xl font-bold">Muhammad Wasiq</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center space-x-6 text-sm font-medium">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              to={link.link}
              className={`px-3 py-2 rounded-md transition-all duration-200 ${isDarkMode ? "hover:bg-gray-700 hover:text-white" : "hover:bg-gray-300 hover:text-gray-900"
                } hover:scale-105`}
              onClick={(e) => handleNavClick(e, link.link, link.name)}
            >
              {link.name}
            </Link>
          </li>
        ))}

        {/* Theme Toggle Button */}
        <li>
          <motion.button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors duration-300 ${isDarkMode
              ? "bg-gray-800 text-yellow-300 hover:bg-gray-700"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
          >
            <motion.div initial={false} animate={{ rotate: isDarkMode ? 180 : 0 }} transition={{ duration: 0.3 }}>
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.div>
          </motion.button>
        </li>
      </ul>

      <div className="flex items-center md:hidden">
        {/* Mobile Theme Toggle */}
        <motion.button
          onClick={toggleTheme}
          className={`p-2 mr-2 rounded-full transition-colors duration-300 ${isDarkMode ? "bg-gray-800 text-yellow-300 hover:bg-gray-700" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
        >
          <motion.div initial={false} animate={{ rotate: isDarkMode ? 180 : 0 }} transition={{ duration: 0.3 }}>
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </motion.div>
        </motion.button>

        {/* Hamburger Button */}
        <button
          className={isDarkMode ? "text-white" : "text-gray-900"}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`absolute top-16 left-0 w-full shadow-md md:hidden z-10 transition-colors duration-300 ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
            }`}
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.link}
                  className={`px-3 py-2 rounded-md transition-all duration-200 ${isDarkMode ? "hover:bg-gray-700 hover:text-white" : "hover:bg-gray-300 hover:text-gray-900"
                    } hover:scale-105`}
                  onClick={(e) => handleNavClick(e, link.link, link.name)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
