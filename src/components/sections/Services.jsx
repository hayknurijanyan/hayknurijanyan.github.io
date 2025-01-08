const services = [
  {
    title: 'Web Development',
    description: 'Building modern, responsive, and user-friendly websites.',
    icon: '🌐', // Add an icon or image here
  },
  {
    title: 'Mobile App Development',
    description: 'Creating cross-platform mobile applications using the latest frameworks.',
    icon: '📱',
  },
  {
    title: 'UI/UX Design',
    description: 'Designing beautiful and intuitive user interfaces and experiences.',
    icon: '🎨',
  },
  {
    title: 'Backend Development',
    description: 'Building scalable and secure server-side applications.',
    icon: '⚙️',
  },
  {
    title: 'Cloud Services',
    description: 'Providing cloud-based solutions for scalability, storage, and security.',
    icon: '☁️',
  },
  {
    title: 'Website Maintenance & Deployment',
    description: 'Ensuring seamless maintenance and deployment of your website.',
    icon: '🔧',
  },
]

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-slate-50 dark:bg-slate-900 py-20 px-4">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">
          Available Services
        </h2>
        <p className="text-sm md:text-lg text-slate-600 dark:text-slate-400 mt-2">
          I offer a range of services to help you build and grow your business.
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
          >
            <div className="text-4xl text-indigo-500 dark:text-indigo-400 mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-3">
              {service.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 select-none">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ServicesSection
