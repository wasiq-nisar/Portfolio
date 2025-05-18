import { Mail, ArrowRight } from "lucide-react"

const Contact = () => {
  return (
    <section className="py-20 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <Mail className="w-12 h-12 mx-auto mb-6 text-gray-800" />
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          I'm currently available for freelance work and full-time positions. If you have a project that needs some
          creative coding, I'd love to hear about it.
        </p>
        <a
          href="/ContactUs"
          className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform"
        >
          Get In Touch
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  )
}

export default Contact
