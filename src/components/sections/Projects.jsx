import yourphotoImg from '../../assets/projects/yourphoto.webp'
import fredmanImg from '../../assets/projects/fredman.webp'
import questImg from '../../assets/projects/quest.webp'
import karpetImg from '../../assets/projects/karpet.webp'
import tetrisImg from '../../assets/projects/tetris.gif'
import carifyImg from '../../assets/projects/carify.webp'
import magnum from '../../assets/projects/magnum.webp'

const Projects = () => {
  const projects = [
    {
      id: 5,
      title: 'Tetris',
      description: 'A classic Tetris game with modern design and scoring system.',
      image: tetrisImg,
      link: 'https://hayknurijanyan.github.io/tetris/',
      imgPosition: 'bottom',
      techStack: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: 1,
      title: 'YourPhoto',
      description: 'An online photo-printing platform with user authentication and photo editing.',
      image: yourphotoImg,
      link: 'https://yourphoto.am',
      techStack: ['React', 'Firebase', 'Material UI'],
    },
    {
      id: 4,
      title: 'Karpet',
      description: 'Modern Architecture & Design Service',
      image: karpetImg,
      link: 'https://karpetstudio.am',
      techStack: ['React', 'Next.js', 'Firebase'],
    },

    {
      id: 3,
      title: 'Quest',
      description: 'An adventure-based escape room.',
      image: questImg,
      link: 'https://hayknurijanyan.github.io/questhouse',
      techStack: ['React', 'CSS', 'Github Pages'],
    },
    {
      id: 6,
      title: 'Carify',
      description: 'A car renting platform with advanced search and comparison features.',
      image: carifyImg,
      link: 'https://hayknurijanyan.github.io/carify/',
      techStack: ['React', 'CSS', 'Github Pages'],
    },

    {
      id: 2,
      title: 'Fredman',
      description: 'Construction Service.',
      image: fredmanImg,
      link: 'https://fredmanconstruction.com',
      techStack: ['React', 'Next.js', 'Firebase'],
    },

    {
      id: 7,
      title: 'Magnum',
      description: 'Appliance Repair Service.',
      image: magnum,
      // imgPosition: 'bottom',
      link: 'http://www.magnumappliance.com/',
      techStack: ['HTML', 'CSS', 'Javascript', 'Bootstrap'],
    },
  ]

  // Check if the number of projects is odd
  const isOdd = projects.length % 2 !== 0

  return (
    <section
      id="projects"
      className="py-28 bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-800 dark:via-slate-900 dark:to-slate-950"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-6 px-4 md:px-0">
          A showcase of my <span className="text-indigo-500 dark:text-indigo-400"> projects </span>as a
          software engineer.
        </h2>
        <p className="text-sm md:text-lg text-slate-600 dark:text-slate-400 mb-6 md:mb-24">
          Here are some of the projects I enjoyed working on the most.
        </p>

        {/* Render the first project on top if odd */}
        {isOdd && (
          <div className="mb-12">
            <div className="bg-white dark:bg-slate-800 shadow-lg rounded-lg overflow-hidden">
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className="w-full h-48   md:h-[380px]  object-cover object-bottom"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2">
                  {projects[0].title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 mb-1">{projects[0].description}</p>
                <div className="text-slate-600 dark:text-slate-400 mb-5">
                  <strong>Tech Stack:</strong> {projects[0].techStack.join(', ')}
                </div>
                <a
                  target="_blank"
                  href={projects[0].link}
                  className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-xl shadow-md hover:from-purple-500 hover:to-pink-500 transition-all"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Render the rest of the projects */}
        <div
          className={`grid ${
            isOdd ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2'
          } gap-8`}
        >
          {projects.slice(isOdd ? 1 : 0).map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-slate-800 shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className={`w-full h-48 object-cover object-${project.imgPosition || 'center'}`}
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 mb-1">{project.description}</p>
                <div className="text-slate-600 dark:text-slate-400 mb-5">
                  <strong>Tech Stack:</strong> {project.techStack.join(', ')}
                </div>
                <a
                  target="_blank"
                  href={project.link}
                  className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-xl shadow-md hover:from-purple-500 hover:to-pink-500 transition-all"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
