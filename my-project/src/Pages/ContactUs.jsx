import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react"
import { CONTACT_DETAILS } from "../constants"

export default function ContactUs() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Get In Touch</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg mb-8">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6" />
              <a href={`mailto:${CONTACT_DETAILS.email}`} className="text-lg hover:underline">
                {CONTACT_DETAILS.email}
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6" />
              <a href={`tel:+92${CONTACT_DETAILS.phone.replace(/\s/g, "")}`} className="text-lg hover:underline">
                {CONTACT_DETAILS.phone}
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Linkedin className="w-6 h-6" />
              <a
                href={CONTACT_DETAILS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:underline"
              >
                LinkedIn Profile
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Github className="w-6 h-6" />
              <a
                href={CONTACT_DETAILS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:underline"
              >
                GitHub Profile
              </a>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6" />
              <span className="text-lg">{CONTACT_DETAILS.location}</span>
            </div>
          </div>
        </div>

        <div>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Your email"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Subject"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-full text-lg font-semibold hover:scale-105 transition-transform"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
