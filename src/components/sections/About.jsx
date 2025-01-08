const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-blue-500  to-pink-400 text-white">
      <div className="container mx-auto px-6 text-center">
        {/* <h2 className="text-4xl font-bold mb-6">About Me</h2> */}
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hello! I&apos;m Hayk</h2>
            <p className="text-md md:text-lg mb-4">
              a passionate Software Engineer with a love for coding and building impactful web and mobile
              applications. With experience in front-end, back-end, and mobile development, I focus on
              creating scalable, responsive, and user-friendly applications.
            </p>
            <p className="text-md md:text-lg mb-4">
              I specialize in React, React Native, Node.js, and other cutting-edge technologies to bring
              ideas to life. Constant learning and improving my craft is what drives me.
            </p>
            <p className="text-md md:text-lg mb-4">
              I hold a Bachelor&apos;s Degree in Computer Science, which provided me with a solid
              foundation in software engineering and problem-solving skills.
            </p>
            <p className="text-md md:text-lg">
              When I&apos;m not coding, I enjoy exploring new tech trends, reading, and spending time
              with loved ones.
            </p>
          </div>

          <div className="lg:w-1/3 flex justify-center">
            <div className="w-full h-[30rem] overflow-hidden rounded-xl border-4 border-indigo-500 shadow-lg">
              <img src="/src/assets/hayk.webp" alt="Hayk" className="w-full h-full  object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
