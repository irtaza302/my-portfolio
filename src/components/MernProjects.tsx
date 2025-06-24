import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub, FaReact, FaNodeJs } from 'react-icons/fa'
import { SiMongodb, SiExpress, SiTypescript, SiTailwindcss } from 'react-icons/si'

const MernProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-featured e-commerce platform with user authentication, product management, shopping cart, and payment integration.',
      longDescription: 'A comprehensive e-commerce solution built with the MERN stack. Features include user authentication with JWT, product catalog with search and filtering, shopping cart functionality, order management, payment processing with Stripe, admin dashboard for product and order management, and responsive design for all devices.',
      image: '/images/mern-project.jpg',
      technologies: [
        { name: 'React', icon: FaReact },
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'Express', icon: SiExpress },
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'TypeScript', icon: SiTypescript },
      ],
      liveDemo: 'https://demo.example.com',
      github: 'https://github.com/example/ecommerce',
      features: [
        'User Authentication & Authorization',
        'Product Catalog with Search & Filters',
        'Shopping Cart & Checkout Process',
        'Payment Integration (Stripe)',
        'Order Tracking & Management',
        'Admin Dashboard',
        'Responsive Design',
        'Real-time Notifications'
      ]
    },
    {
      id: 2,
      title: 'Social Media Dashboard',
      description: 'Real-time social media analytics dashboard with data visualization and user engagement metrics.',
      longDescription: 'A powerful social media analytics platform that aggregates data from multiple social platforms. Built with React for the frontend and Node.js backend, featuring real-time updates using Socket.io, interactive charts with Chart.js, and comprehensive analytics for social media performance.',
      image: '/images/tech-stack.png',
      technologies: [
        { name: 'React', icon: FaReact },
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'Express', icon: SiExpress },
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'Tailwind', icon: SiTailwindcss },
      ],
      liveDemo: 'https://social-dashboard.example.com',
      github: 'https://github.com/example/social-dashboard',
      features: [
        'Multi-platform Integration',
        'Real-time Analytics',
        'Interactive Data Visualization',
        'Custom Reporting',
        'Engagement Metrics',
        'Automated Insights',
        'Export Functionality',
        'Mobile Responsive'
      ]
    },
    {
      id: 3,
      title: 'Task Management System',
      description: 'Collaborative task management application with team collaboration features and project tracking.',
      longDescription: 'A comprehensive project management solution designed for teams. Features include Kanban boards, task assignment and tracking, team collaboration tools, file sharing, time tracking, project analytics, and integration with popular development tools.',
      image: '/images/analytics-bg.jpg',
      technologies: [
        { name: 'React', icon: FaReact },
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'Express', icon: SiExpress },
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'TypeScript', icon: SiTypescript },
      ],
      liveDemo: 'https://taskmanager.example.com',
      github: 'https://github.com/example/task-manager',
      features: [
        'Kanban Board Interface',
        'Team Collaboration',
        'File Sharing & Comments',
        'Time Tracking',
        'Project Analytics',
        'Integration APIs',
        'Role-based Access Control',
        'Mobile App Support'
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, },
    },
  }

  return (
    <section id="mern-projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={projectVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              MERN Stack <span className="text-blue-400">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Full-stack web applications built with MongoDB, Express.js, React, and Node.js, 
              showcasing modern development practices and user-centric design.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={projectVariants}
                whileHover={{ y: -10 }}
                className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-400/50 transition-all duration-300 group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={tech.name}
                        className="flex items-center gap-1 bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                      >
                        <tech.icon className="text-blue-400" />
                        {tech.name}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedProject(project.id)}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300"
                    >
                      View Details
                    </motion.button>
                    <motion.a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-lg transition-colors duration-300"
                    >
                      <FaExternalLinkAlt />
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-lg transition-colors duration-300"
                    >
                      <FaGithub />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const project = projects.find(p => p.id === selectedProject)
                if (!project) return null

                return (
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="text-gray-400 hover:text-white text-2xl"
                      >
                        ×
                      </button>
                    </div>

                    {/* Project Image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover rounded-xl mb-6"
                    />

                    {/* Description */}
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                      {project.longDescription}
                    </p>

                    {/* Features */}
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-4">Key Features</h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-gray-300">
                              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-white mb-4">Technologies Used</h4>
                        <div className="space-y-3">
                          {project.technologies.map((tech, index) => (
                            <div key={index} className="flex items-center text-gray-300">
                              <tech.icon className="text-blue-400 text-xl mr-3" />
                              {tech.name}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <motion.a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-300 flex items-center gap-2"
                      >
                        <FaExternalLinkAlt />
                        Live Demo
                      </motion.a>
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-300 flex items-center gap-2"
                      >
                        <FaGithub />
                        Source Code
                      </motion.a>
                    </div>
                  </div>
                )
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default MernProjects
