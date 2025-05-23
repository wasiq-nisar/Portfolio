import { BrowserRouter, Routes, Route } from "react-router-dom"
import ContactUs from "./Pages/ContactUs"
import Home from "./Pages/Home"
import Navbar from "./Components/Navbar"
import { ThemeProvider } from "./context/ThemeContext"

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
