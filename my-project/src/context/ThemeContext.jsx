import { createContext, useContext, useState, useEffect } from "react"

// Create the context
const ThemeContext = createContext()

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

// Theme provider component
export const ThemeProvider = ({ children }) => {
  // Check if user has a saved preference or use system preference
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      return savedTheme === "dark"
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
  })

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev)
  }

  // Update localStorage and document class when theme changes
  useEffect(() => {
    // Save to localStorage
    localStorage.setItem("theme", isDarkMode ? "dark" : "light")

    // Update document class for global CSS
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  // Provide theme context to children
  return <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>{children}</ThemeContext.Provider>
}
