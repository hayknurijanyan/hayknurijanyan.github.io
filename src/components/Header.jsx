import { useState, useEffect } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])
  const navLinks = [
    { id: 'projects', name: 'Projects', href: '#projects' },
    { id: 'services', name: 'Services', href: '#services' },
    { id: 'about', name: 'About', href: '#about' },
    { id: 'career', name: 'Career', href: '#career' },
    { id: 'contact', name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 w-full bg-white dark:bg-black shadow-md z-50">
      <div className="container mx-auto flex items-center sm:justify-between justify-center p-3">
        <div className="text-md hidden sm:block justify-center">
          <a
            href="#"
            className="flex gap-2 hover:text-slate-500 dark:hover:text-slate-300 text-sm text-slate-900 dark:text-white"
          >
            Hayk Nurijanyan
          </a>
        </div>

        <nav className="flex items-center space-x-6 h-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="hover:text-slate-500 dark:hover:text-slate-300 text-sm text-slate-700 dark:text-slate-300"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => setIsDarkMode((prev) => !prev)}
            className="flex items-center justify-center p-1 rounded-full bg-slate-200 dark:bg-slate-600 hover:bg-slate-300 dark:hover:bg-slate-500"
          >
            {isDarkMode ? (
              <FiSun className="text-yellow-400 w-4 h-4" />
            ) : (
              <FiMoon className="text-blue-600 w-4 h-4" />
            )}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
