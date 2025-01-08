import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-100">
      <div className="container mx-auto px-6 text-center">
        {/* Social Icons in one row */}
        <div className="flex justify-center align-center py-8">
          <a
            href="https://www.linkedin.com/in/hayknurijanyan/"
            target="_blank"
            className="mx-4 text-2xl text-slate-800 hover:text-slate-600 dark:text-slate-100 dark:hover:text-slate-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/hayk.nurijanyan"
            target="_blank"
            className="mx-4 text-2xl text-slate-800 hover:text-slate-600 dark:text-slate-100 dark:hover:text-slate-400"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/hayk.nj/"
            target="_blank"
            className="mx-4 text-2xl text-slate-800 hover:text-slate-600 dark:text-slate-100 dark:hover:text-slate-400"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/hayknurijanyan"
            target="_blank"
            className="mx-4 text-2xl text-slate-800 hover:text-slate-600 dark:text-slate-100 dark:hover:text-slate-400"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:haynur001@gmail.com"
            target="_blank"
            className="mx-4 text-2xl text-slate-800 hover:text-slate-600 dark:text-slate-100 dark:hover:text-slate-400"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-300 dark:border-slate-700" />

        {/* Copyright */}
        <div className="flex flex-col justify-center items-center py-4">
          <p className="text-sm text-slate-500 dark:text-slate-400">{`© ${new Date().getFullYear()} Hayk Nurijanyan. All Rights Reserved.`}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
