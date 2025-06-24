import React from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      type: 'work',
      title: 'Senior Full-Stack Developer & Data Scientist',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Leading development of data-driven web applications using MERN stack and machine learning models. Architected and deployed scalable solutions serving 100K+ users.',
      achievements: [
        'Increased user engagement by 45% through ML-powered recommendation system',
        'Led a team of 5 developers in building enterprise-level applications',
        'Reduced application load time by 60% through optimization techniques',
        'Implemented CI/CD pipelines reducing deployment time by 80%'
      ],
      technologies: ['React', 'Node.js', 'Python', 'TensorFlow', 'AWS', 'MongoDB']
    },
    {
      id: 2,
      type: 'work',
      title: 'Full-Stack Developer',
      company: 'StartupXYZ',
      location: 'Remote',
      period: '2021 - 2022',
      description: 'Developed and maintained multiple web applications using MERN stack. Collaborated with data science team to integrate ML models into production applications.',
      achievements: [
        'Built 3 production applications from scratch',
        'Integrated payment systems processing $1M+ monthly',
        'Developed real-time analytics dashboard',
        'Mentored 2 junior developers'
      ],
      technologies: ['React', 'Express.js', 'MongoDB', 'Python', 'Docker']
    },
    {
      id: 3,
      type: 'work',
      title: 'Junior Developer & Data Analyst',
      company: 'DataTech Inc.',
      location: 'New York, NY',
      period: '2020 - 2021',
      description: 'Started career focusing on web development and data analysis. Built analytical tools and dashboards while learning advanced development practices.',
      achievements: [
        'Automated data processing workflows saving 20+ hours/week',
        'Created interactive dashboards for business stakeholders',
        'Contributed to open-source projects',
        'Completed advanced JavaScript and Python certifications'
      ],
      technologies: ['JavaScript', 'React', 'Python', 'Pandas', 'MySQL']
    },
    {
      id: 4,
      type: 'education',
      title: 'Master of Science in Computer Science',
      company: 'Stanford University',
      location: 'Stanford, CA',
      period: '2018 - 2020',
      description: 'Specialized in Machine Learning and Data Science. Graduated Magna Cum Laude with thesis on "Deep Learning Applications in Web Technologies".',
      achievements: [
        'GPA: 3.9/4.0',
        'Published 2 research papers on ML applications',
        'Teaching Assistant for Data Structures course',
        'Winner of Annual Hackathon 2019'
      ],
      technologies: ['Python', 'TensorFlow', 'R', 'Java', 'C++']
    },
    {
      id: 5,
      type: 'education',
      title: 'Bachelor of Science in Software Engineering',
      company: 'UC Berkeley',
      location: 'Berkeley, CA',
      period: '2014 - 2018',
      description: 'Strong foundation in computer science fundamentals, software engineering principles, and web development technologies.',
      achievements: [
        'Summa Cum Laude graduate',
        'President of Computer Science Society',
        'Internship at Google (Summer 2017)',
        'Dean\'s List all 4 years'
      ],
      technologies: ['Java', 'JavaScript', 'HTML/CSS', 'SQL', 'Git']
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Professional <span className="text-blue-400">Journey</span>
            </h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A timeline of my career progression, educational background, and key achievements 
              in full-stack development and data science.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 w-1 bg-blue-400 h-full"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="relative flex items-start"
                >
                  {/* Timeline Node */}
                  <div className="absolute left-0 w-8 h-8 bg-blue-600 border-4 border-gray-800 rounded-full flex items-center justify-center z-10">
                    {exp.type === 'work' ? (
                      <FaBriefcase className="text-white text-sm" />
                    ) : (
                      <FaGraduationCap className="text-white text-sm" />
                    )}
                  </div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="w-full ml-16 md:ml-20"
                  >
                    <div className="bg-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-blue-400/50 transition-all duration-300 shadow-lg">
                      {/* Header */}
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                        <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm mb-2">
                          <span className="flex items-center gap-1">
                            <FaBriefcase className="text-blue-400" />
                            {exp.company}
                          </span>
                          <span className="flex items-center gap-1">
                            <FaMapMarkerAlt className="text-blue-400" />
                            {exp.location}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-blue-400 text-sm font-medium">
                          <FaCalendarAlt />
                          {exp.period}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start text-gray-300 text-sm">
                              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-white font-semibold mb-3">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-400/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { value: '3+', label: 'Years Experience' },
              { value: '5+', label: 'Companies Worked' },
              { value: '50+', label: 'Projects Completed' },
              { value: '15+', label: 'Technologies Mastered' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-blue-400/50 transition-all duration-300"
              >
                <motion.h4
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="text-3xl font-bold text-blue-400 mb-2"
                >
                  {stat.value}
                </motion.h4>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
