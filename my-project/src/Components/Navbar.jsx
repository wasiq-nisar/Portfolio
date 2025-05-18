import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { navLinks } from "../constants"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

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
    <nav className="flex items-center justify-between px-12 py-4 shadow-md sticky top-0 bg-white z-50">
      <h1 className="text-xl font-bold">Muhammad Wasiq</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 text-sm font-medium">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              to={link.link}
              className="px-3 py-2 rounded-md transition-all duration-200 hover:bg-gray-300 hover:scale-105"
              onClick={(e) => handleNavClick(e, link.link, link.name)}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden z-10">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.link}
                  className="px-3 py-2 rounded-md transition-all duration-200 hover:bg-gray-300 hover:scale-105"
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
