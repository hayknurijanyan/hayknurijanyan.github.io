const HeroSection = () => {
  return (
    <section className="relative h-screen bg-gradient-to-b from-slate-100 via-slate-200 to-slate-300 flex items-center justify-center overflow-hidden">
      {/* Background Design */}
      <div className="absolute inset-0 -z-10">
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-30 w-[150%] h-[150%] rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Hero Content */}
      <div className="text-center max-w-3xl mx-auto px-4">
        {/* Profile Photo */}
        <div className="mb-6">
          <img
            src="/src/assets/hayk.webp"
            alt="Hayk Nurijanyan"
            className="w-50 h-60 mx-auto rounded-xl border-2 border-indigo-500 shadow-md object-cover"
          />
        </div>

        {/* Text Content */}
        <h1 className="text-6xl font-bold leading-tight text-slate-900 mb-6">
          {`Hi, I'm `}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Hayk Nurijanyan
          </span>
        </h1>
        <p className="text-lg text-slate-700 mb-8">
          A <span className="font-semibold text-slate-900">Software Engineer</span> passionate about
          building <span className="font-semibold text-slate-900">scalable</span> and{' '}
          <span className="font-semibold text-slate-900">efficient</span> software solutions.
        </p>
        <a
          href="#projects"
          className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium px-8 py-4 rounded-full shadow-lg hover:shadow-2xl hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transform transition-all duration-300"
        >
          Explore My Work
        </a>
      </div>
    </section>
  )
}

export default HeroSection
