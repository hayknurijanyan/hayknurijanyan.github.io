import { useState } from 'react'
import ContactModal from '../ui/modals/ContactModal'

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => setIsModalOpen(!isModalOpen)

  return (
    <section id="contact" className="py-36 bg-white text-black dark:bg-slate-900 dark:text-slate-200">
      <div className="container mx-auto px-8 text-center">
        <h2 className="text-4xl font-semibold mb-6">Let&apos;s Connect</h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-xl mx-auto">
          {`Have a question, or want to collaborate? I'd love to hear from you. Click the button below to get in touch.`}
        </p>

        {/* Contact Button */}
        <button
          onClick={toggleModal}
          className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-xl shadow-md hover:from-purple-500 hover:to-pink-500 transition-all"
        >
          Send Message
        </button>

        {/* Modal */}
        <ContactModal isOpen={isModalOpen} onClose={toggleModal} />
      </div>
    </section>
  )
}

export default Contact
