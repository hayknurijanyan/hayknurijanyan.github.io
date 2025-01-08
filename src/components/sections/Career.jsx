import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const experienceData = [
  {
    companyName: 'Maurice Ward Group',
    jobTitle: 'Full Stack Software Engineer',
    location: 'Mountain View, CA',
    duration: 'March 2024 - Present',
    description:
      'Worked on both frontend and backend, focusing on API integrations and handling transactions systems.',
    companyLogo: '/src/assets/logos/mw.webp',
    companyWebsite: 'https://www.mauriceward.com/',
  },
  {
    companyName: 'Buildern',
    jobTitle: 'Software Developer',
    location: 'Redmond, WA',
    duration: 'July 2021 - December 2023',
    description:
      'Worked on both frontend and backend, developing full CRUD APIs, dashboards, and features.',
    companyLogo: '/src/assets/logos/bn.webp',
    companyWebsite: 'https://www.buildern.com',
  },
  {
    companyName: 'YourPhoto App',
    jobTitle: 'Web & Mobile Developer',
    location: 'Seattle, WA',
    duration: 'Dec 2020 - July 2021',
    description: 'Developed core features, including user authentication & responsive designs.',
    companyLogo: '/src/assets/logos/yp.webp',
    companyWebsite: 'https://www.yourphoto.am',
  },
]

const Career = () => {
  return (
    <section
      id="career"
      className="py-20 bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-800 dark:via-slate-900 dark:to-slate-950"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-4xl font-bold dark:text-slate-200 mb-12 md:mb-20">
          Career & Achievements
        </h2>

        {/* Swiper Slider */}
        <Swiper
          autoplay
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          navigation={true}
          breakpoints={{
            360: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {experienceData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-lg transform transition duration-300">
                {/* Company Logo on the top left */}
                <div className="flex justify-start mb-4">
                  <img
                    src={item.companyLogo}
                    alt={item.companyName}
                    className="w-12 h-12 object-contain"
                  />
                </div>

                {/* Company Info on the right */}
                <div className="text-left">
                  <a
                    href={item.companyWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold text-blue-400 hover:underline mb-2"
                  >
                    {item.companyName}
                  </a>
                  <p className="text-sm text-slate-600 dark:text-slate-200">{item.jobTitle}</p>
                  <p className="text-xs text-slate-400 dark:text-slate-100">{item.duration}</p>
                  <p className="text-sm text-slate-800 dark:text-slate-100 mt-4">{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mt-16 flex flex-col md:flex-row items-center justify-center space-x-0  md:space-x-8 gap-4 md:gap-0">
        <div className="flex items-center">
          <img src="/src/assets/logos/google.webp" alt="Google Certified" className="w-14" />
          <p className="ml-2 text-sm text-slate-800 dark:text-slate-100">
            Google Web Analytics & SEO Certification
          </p>
        </div>
        <div className="flex items-center">
          <img src="/src/assets/logos/aws.webp" alt="AWS Certified" className="w-12" />
          <p className="ml-2 text-sm text-slate-800 dark:text-slate-100">AWS Certification</p>
        </div>
      </div>
    </section>
  )
}

export default Career
