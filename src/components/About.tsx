import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaChartBar, FaLightbulb, FaGraduationCap } from 'react-icons/fa'

const About: React.FC = () => {
  const stats = [
    { number: '50+', label: 'Projects Completed', icon: FaCode },
    { number: '3+', label: 'Years Experience', icon: FaGraduationCap },
    { number: '15+', label: 'ML Models Deployed', icon: FaChartBar },
    { number: '100+', label: 'Problems Solved', icon: FaLightbulb },
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, },
    },
  }

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
      style={{
        backgroundImage: 'url(/images/about-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gray-900/85"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-blue-400">Me</span>
            </h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Bridging Development & Data Science
              </h3>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate technologist with a unique blend of full-stack development 
                and data science expertise. My journey began with web development, crafting 
                elegant and functional applications using the MERN stack.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                As I delved deeper into the world of data, I discovered the power of machine 
                learning and analytics. This led me to become proficient in Python, R, and 
                various ML frameworks, allowing me to build intelligent applications that 
                not only look great but also make smart decisions.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Today, I specialize in creating data-driven web applications that combine 
                beautiful user interfaces with powerful analytical capabilities. Whether 
                it's building a responsive React application or developing predictive models, 
                I bring creativity and technical expertise to every project.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                {['Problem Solver', 'Team Player', 'Continuous Learner', 'Innovation Driven'].map((trait, index) => (
                  <motion.span
                    key={trait}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full border border-blue-400/30"
                  >
                    {trait}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Stats */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700 hover:border-blue-400/50 transition-all duration-300"
                  >
                    <stat.icon className="text-4xl text-blue-400 mx-auto mb-4" />
                    <motion.h4
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                      className="text-3xl font-bold text-white mb-2"
                    >
                      {stat.number}
                    </motion.h4>
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Skills Preview */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
              >
                <h4 className="text-xl font-bold text-white mb-4">Core Expertise</h4>
                <div className="space-y-3">
                  {[
                    { skill: 'Full-Stack Development', level: 95 },
                    { skill: 'Data Science & ML', level: 90 },
                    { skill: 'Problem Solving', level: 98 },
                    { skill: 'Team Collaboration', level: 92 },
                  ].map((item, index) => (
                    <div key={item.skill}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300 text-sm">{item.skill}</span>
                        <span className="text-blue-400 text-sm">{item.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          transition={{ delay: index * 0.2, duration: 1 }}
                          className="bg-gradient-to-r from-blue-600 to-blue-400 h-2 rounded-full"
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
