import React from 'react'
import { HERO_CONTENT } from "../constants";
import { ArrowRight, Download } from "lucide-react"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <section className="mt-28 flex items-center px-6 md:px-20 bg-white">
      <div className="max-w-4xl">
        <p className="text-lg md:text-xl font-medium text-gray-800 mb-4">
          {HERO_CONTENT.greeting}
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold text-black leading-tight mb-6">
          {HERO_CONTENT.titleLine1}
          <br />
          {HERO_CONTENT.titleLine2}{" "}
          <span className="text-gray-400">{HERO_CONTENT.highlight}</span>
        </h1>

        <p className="mt-8 text-gray-600 text-base md:text-lg max-w-xl leading-relaxed">
          {HERO_CONTENT.description}
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <Link
            href="/projects"
            className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-lg font-semibold hover:scale-105 transition-transform"
          >
            {HERO_CONTENT.cta}
            <ArrowRight className="w-5 h-5" />
          </Link>

          {/* <Link
            href="/resume.pdf"
            className="flex items-center gap-2 bg-white text-black border-2 border-black px-6 py-3 rounded-full text-lg font-semibold hover:scale-105 transition-transform"
          >
            {HERO_CONTENT.downloadCta}
            <Download className="w-5 h-5" />
          </Link> */}
        </div>
      </div>
    </section>
  )
}

export default Hero