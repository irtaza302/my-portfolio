import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub, FaPython, FaChartBar } from 'react-icons/fa'
import { SiTensorflow, SiJupyter, SiPandas, SiNumpy, SiScipy } from 'react-icons/si'

const DataScienceProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: 'Customer Churn Prediction',
      description: 'Machine learning model to predict customer churn using advanced analytics and feature engineering.',
      longDescription: 'Developed a comprehensive customer churn prediction system using ensemble methods including Random Forest, XGBoost, and Neural Networks. The model analyzes customer behavior patterns, transaction history, and engagement metrics to predict likelihood of churn with 94% accuracy. Implemented feature engineering techniques and used SHAP for model interpretability.',
      image: '/images/ml-project.jpg',
      technologies: [
        { name: 'Python', icon: FaPython },
        { name: 'TensorFlow', icon: SiTensorflow },
        { name: 'Pandas', icon: SiPandas },
        { name: 'NumPy', icon: SiNumpy },
        { name: 'Jupyter', icon: SiJupyter },
      ],
      liveDemo: 'https://churn-prediction.example.com',
      github: 'https://github.com/example/churn-prediction',
      accuracy: '94%',
      datasetSize: '100K+ records',
      modelType: 'Ensemble Learning',
      features: [
        'Feature Engineering & Selection',
        'Ensemble Model (RF, XGBoost, NN)',
        'SHAP Model Interpretability',
        'Real-time Prediction API',
        'Interactive Dashboard',
        'A/B Testing Framework',
        'Automated Retraining Pipeline',
        'Performance Monitoring'
      ],
      metrics: [
        { name: 'Accuracy', value: '94%' },
        { name: 'Precision', value: '92%' },
        { name: 'Recall', value: '89%' },
        { name: 'F1-Score', value: '90%' }
      ]
    },
    {
      id: 2,
      title: 'Stock Price Forecasting',
      description: 'Time series analysis and LSTM neural networks for predicting stock market trends and price movements.',
      longDescription: 'Built a sophisticated stock price forecasting system using LSTM neural networks and time series analysis. The model incorporates technical indicators, sentiment analysis from news articles, and market volatility measures. Implemented attention mechanisms for better long-term dependencies and achieved consistent performance across different market conditions.',
      image: '/images/data-science-bg.png',
      technologies: [
        { name: 'Python', icon: FaPython },
        { name: 'TensorFlow', icon: SiTensorflow },
        { name: 'Pandas', icon: SiPandas },
        { name: 'SciPy', icon: SiScipy },
        { name: 'Jupyter', icon: SiJupyter },
      ],
      liveDemo: 'https://stock-forecast.example.com',
      github: 'https://github.com/example/stock-forecasting',
      accuracy: '87%',
      datasetSize: '10+ years data',
      modelType: 'LSTM Neural Network',
      features: [
        'LSTM with Attention Mechanism',
        'Technical Indicators Integration',
        'Sentiment Analysis from News',
        'Multi-timeframe Predictions',
        'Risk Assessment Metrics',
        'Portfolio Optimization',
        'Real-time Data Pipeline',
        'Interactive Visualizations'
      ],
      metrics: [
        { name: 'MAPE', value: '8.3%' },
        { name: 'RMSE', value: '2.1%' },
        { name: 'Directional Accuracy', value: '87%' },
        { name: 'Sharpe Ratio', value: '1.8' }
      ]
    },
    {
      id: 3,
      title: 'NLP Sentiment Analysis',
      description: 'Advanced natural language processing system for analyzing sentiment in social media and product reviews.',
      longDescription: 'Developed a comprehensive sentiment analysis system using transformer models (BERT, RoBERTa) for analyzing social media posts, product reviews, and customer feedback. The system includes aspect-based sentiment analysis, emotion detection, and real-time processing capabilities. Implemented custom preprocessing pipelines and deployed as a scalable microservice.',
      image: '/images/analytics-bg.jpg',
      technologies: [
        { name: 'Python', icon: FaPython },
        { name: 'TensorFlow', icon: SiTensorflow },
        { name: 'Pandas', icon: SiPandas },
        { name: 'NumPy', icon: SiNumpy },
        { name: 'Jupyter', icon: SiJupyter },
      ],
      liveDemo: 'https://sentiment-analysis.example.com',
      github: 'https://github.com/example/sentiment-nlp',
      accuracy: '96%',
      datasetSize: '500K+ texts',
      modelType: 'Transformer (BERT)',
      features: [
        'BERT-based Classification',
        'Aspect-based Sentiment Analysis',
        'Emotion Detection',
        'Multi-language Support',
        'Real-time Processing API',
        'Custom Preprocessing Pipeline',
        'Bias Detection & Mitigation',
        'Interactive Demo Interface'
      ],
      metrics: [
        { name: 'Accuracy', value: '96%' },
        { name: 'Precision', value: '95%' },
        { name: 'Recall', value: '94%' },
        { name: 'Processing Speed', value: '100ms' }
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
    <section 
      id="data-science" 
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
      style={{
        backgroundImage: 'url(/images/data-science-bg.png)',
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
          <motion.div variants={projectVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Data Science <span className="text-blue-400">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Machine learning models and data analysis projects that extract meaningful insights 
              from complex datasets and solve real-world problems.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={projectVariants}
                whileHover={{ y: -10 }}
                className="bg-gray-800/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-400/50 transition-all duration-300 group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Model Type Badge */}
                  <div className="absolute top-4 left-4 bg-blue-600/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.modelType}
                  </div>
                  
                  {/* Accuracy Badge */}
                  <div className="absolute top-4 right-4 bg-green-600/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.accuracy} Accuracy
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                      <div className="text-blue-400 font-semibold text-sm">Dataset</div>
                      <div className="text-gray-300 text-xs">{project.datasetSize}</div>
                    </div>
                    <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                      <div className="text-green-400 font-semibold text-sm">Accuracy</div>
                      <div className="text-gray-300 text-xs">{project.accuracy}</div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={tech.name}
                        className="flex items-center gap-1 bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                      >
                        <tech.icon className="text-blue-400" />
                        {tech.name}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedProject(project.id)}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300"
                    >
                      View Analysis
                    </motion.button>
                    <motion.a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-lg transition-colors duration-300"
                    >
                      <FaChartBar />
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
              className="bg-gray-800 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const project = projects.find(p => p.id === selectedProject)
                if (!project) return null

                return (
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                        <div className="flex gap-4 text-sm">
                          <span className="bg-blue-600 text-white px-3 py-1 rounded-full">
                            {project.modelType}
                          </span>
                          <span className="bg-green-600 text-white px-3 py-1 rounded-full">
                            {project.accuracy} Accuracy
                          </span>
                        </div>
                      </div>
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

                    {/* Metrics */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      {project.metrics.map((metric, index) => (
                        <div key={index} className="bg-gray-700/50 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-blue-400 mb-1">{metric.value}</div>
                          <div className="text-gray-300 text-sm">{metric.name}</div>
                        </div>
                      ))}
                    </div>

                    {/* Features and Technologies */}
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
                        <FaChartBar />
                        View Dashboard
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

export default DataScienceProjects
