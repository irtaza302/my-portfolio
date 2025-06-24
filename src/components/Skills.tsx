import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaReact, 
  FaNodeJs, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaPython, 
  FaDatabase,
  FaGitAlt,
  FaAws
} from 'react-icons/fa'
import { 
  SiTypescript, 
  SiMongodb, 
  SiExpress, 
  SiTailwindcss,
  SiTensorflow,
  SiScipy,
  SiPandas,
  SiNumpy,
  SiJupyter,
  SiDocker
} from 'react-icons/si'

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      color: 'from-blue-600 to-purple-600',
      skills: [
        { name: 'React.js', level: 95, icon: FaReact },
        { name: 'TypeScript', level: 90, icon: SiTypescript },
        { name: 'JavaScript', level: 95, icon: FaJs },
        { name: 'HTML5', level: 98, icon: FaHtml5 },
        { name: 'CSS3', level: 92, icon: FaCss3Alt },
        { name: 'Tailwind CSS', level: 88, icon: SiTailwindcss },
      ]
    },
    {
      title: 'Backend Development',
      color: 'from-green-600 to-teal-600',
      skills: [
        { name: 'Node.js', level: 92, icon: FaNodeJs },
        { name: 'Express.js', level: 90, icon: SiExpress },
        { name: 'MongoDB', level: 88, icon: SiMongodb },
        { name: 'SQL/PostgreSQL', level: 85, icon: FaDatabase },
        { name: 'RESTful APIs', level: 93, icon: FaNodeJs },
        { name: 'GraphQL', level: 80, icon: FaDatabase },
      ]
    },
    {
      title: 'Data Science & ML',
      color: 'from-orange-600 to-red-600',
      skills: [
        { name: 'Python', level: 93, icon: FaPython },
        { name: 'TensorFlow', level: 88, icon: SiTensorflow },
        { name: 'Pandas', level: 92, icon: SiPandas },
        { name: 'NumPy', level: 90, icon: SiNumpy },
        { name: 'Scikit-learn', level: 89, icon: SiScipy },
        { name: 'Jupyter', level: 95, icon: SiJupyter },
      ]
    },
    {
      title: 'Tools & DevOps',
      color: 'from-purple-600 to-pink-600',
      skills: [
        { name: 'Git/GitHub', level: 95, icon: FaGitAlt },
        { name: 'Docker', level: 82, icon: SiDocker },
        { name: 'AWS', level: 78, icon: FaAws },
        { name: 'CI/CD', level: 80, icon: FaGitAlt },
        { name: 'Linux', level: 85, icon: FaDatabase },
        { name: 'Agile/Scrum', level: 88, icon: FaGitAlt },
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const categoryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, },
    },
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div 
            variants={categoryVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical <span className="text-blue-400">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A comprehensive toolkit spanning full-stack development and data science, 
              constantly evolving with the latest technologies and best practices.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={categoryVariants}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-400/50 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                  <div className={`w-full h-1 bg-gradient-to-r ${category.color} rounded-full`}></div>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: categoryIndex * 0.2 + skillIndex * 0.1,
                        duration: 0.5 
                      }}
                      className="group"
                    >
                      {/* Skill Header */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <skill.icon className="text-xl text-blue-400" />
                          <span className="text-gray-300 font-medium">{skill.name}</span>
                        </div>
                        <span className="text-blue-400 font-semibold">{skill.level}%</span>
                      </div>

                      {/* Skill Bar */}
                      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                            duration: 1,
                            
                          }}
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                        >
                          {/* Skill Bar Glow Effect */}
                          <motion.div
                            animate={{ 
                              x: ['0%', '100%', '0%'],
                              opacity: [0, 1, 0]
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: 3
                            }}
                            className="absolute inset-0 bg-white/30 rounded-full"
                            style={{ width: '20%' }}
                          ></motion.div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Stats */}
          <motion.div
            variants={categoryVariants}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { value: '24+', label: 'Technologies' },
              { value: '50+', label: 'Projects Built' },
              { value: '15+', label: 'ML Models' },
              { value: '3+', label: 'Years Experience' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-400/50 transition-all duration-300"
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

export default Skills
