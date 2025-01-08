import { Typewriter } from 'react-simple-typewriter'

const VideoSection = () => {
  return (
    <section id="video" className="bg-slate-100 ">
      <div className="text-center mb-12" />

      {/* Video Embed */}
      <div className="flex justify-center">
        <div className="relative w-full h-[93vh]">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover object-top"
            src="/src/assets/vids/main3.webm"
            title="My Work Introduction"
            controls={false}
            autoPlay
            muted
            loop
          >
            Your browser does not support the video tag.
          </video>

          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

          {/* Typing Text */}
          <div className="absolute top-1/2 left-20 transform -translate-y-1/2 text-white font-semibold p-4">
            <div className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl">
              <Typewriter
                words={[
                  "Hey, I'm Hayk.",
                  "I'm an experienced software engineer.",
                  'I turn ideas into stunning web & mobile apps.',
                  "Let's make something awesome together!",
                ]}
                typeSpeed={90}
                deleteSpeed={40}
                delaySpeed={1200}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoSection

// const VideoSection = () => {
//   return (
//     <section id="video" className="py-16 bg-slate-100">
//       <div className="text-center mb-12">
//         <h2 className="text-3xl font-bold text-slate-800">Watch My Work</h2>
//         <p className="text-slate-600 mt-2">
//           Take a look at this video to understand more about my work and expertise.
//         </p>
//       </div>

//       {/* Video Embed */}
//       <div className="flex justify-center">
//         <div className="relative w-full h-0" style={{ paddingTop: '56.25%' }}>
//           <iframe
//             className="absolute top-0 left-0 w-full h-full"
//             src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=0&mute=1&loop=1&playlist=1owLGoRARTY" // Replace with your video URL
//             title="My Work Introduction"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           />
//         </div>
//       </div>
//     </section>
//   )
// }

// export default VideoSection
