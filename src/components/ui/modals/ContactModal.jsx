/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'

const ContactModal = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }, [isOpen])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(onClose, 300)
  }

  if (!isOpen && !isVisible) return null

  return (
    <div
      className={`fixed inset-0 z-10 transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      onClick={handleClose}
    >
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-slate-500/75 transition-opacity ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      />

      {/* Modal content wrapper */}
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div
          className={`flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 transition-transform ${
            isVisible ? 'translate-y-0 scale-100' : 'translate-y-4 scale-95'
          }`}
        >
          {/* Modal panel */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg dark:bg-slate-800 dark:text-slate-200"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
              aria-label="Close modal"
            >
              <FaTimes size={20} />
            </button>

            {/* Modal header */}
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 dark:bg-slate-800">
              <h3
                className="text-base font-semibold text-slate-900 dark:text-slate-200"
                id="modal-title"
              >
                Leave your message here
              </h3>
            </div>

            {/* Modal body */}
            <div className="px-4 pb-4 sm:p-6">
              <form>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 placeholder-slate-400 text-black text-sm dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-500 dark:focus:ring-blue-500 dark:text-slate-200"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 placeholder-slate-400 text-black text-sm dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-500 dark:focus:ring-blue-500 dark:text-slate-200"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    rows="4"
                    placeholder="Your Message"
                    className="w-full p-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 placeholder-slate-400 text-black text-sm dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-500 dark:focus:ring-blue-500 dark:text-slate-200"
                  ></textarea>
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    // className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-200 dark:bg-blue-500 dark:hover:bg-blue-600"
                    className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-xl shadow-md hover:from-purple-500 hover:to-pink-500 transition-all"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactModal
