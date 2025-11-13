'use client'

import { useState } from 'react'
import styles from './page.module.css'

const slides = [
  {
    id: 1,
    title: 'Artificial Intelligence',
    subtitle: 'The Future is Now',
    content: 'Exploring the evolution, impact, and potential of AI technology',
    gradient: 'var(--gradient-1)'
  },
  {
    id: 2,
    title: 'What is AI?',
    subtitle: 'Understanding the Basics',
    content: 'Artificial Intelligence is the simulation of human intelligence by machines, enabling them to learn, reason, and solve problems.',
    points: [
      'Machine Learning',
      'Natural Language Processing',
      'Computer Vision',
      'Robotics'
    ],
    gradient: 'var(--gradient-2)'
  },
  {
    id: 3,
    title: 'History of AI',
    subtitle: 'From Dreams to Reality',
    content: 'The journey of AI from concept to implementation',
    timeline: [
      { year: '1950', event: 'Turing Test proposed' },
      { year: '1956', event: 'Term "AI" coined at Dartmouth' },
      { year: '1997', event: 'Deep Blue beats Kasparov' },
      { year: '2012', event: 'Deep Learning revolution' },
      { year: '2022', event: 'ChatGPT launched' }
    ],
    gradient: 'var(--gradient-3)'
  },
  {
    id: 4,
    title: 'AI Today',
    subtitle: 'Current Applications',
    content: 'AI is transforming industries and daily life',
    applications: [
      { name: 'Healthcare', desc: 'Disease diagnosis and drug discovery' },
      { name: 'Transportation', desc: 'Autonomous vehicles' },
      { name: 'Finance', desc: 'Fraud detection and trading' },
      { name: 'Entertainment', desc: 'Personalized recommendations' },
      { name: 'Communication', desc: 'Language translation' }
    ],
    gradient: 'var(--gradient-4)'
  },
  {
    id: 5,
    title: 'Types of AI',
    subtitle: 'Understanding the Categories',
    content: 'AI systems can be categorized by their capabilities',
    types: [
      { name: 'Narrow AI', desc: 'Specialized in specific tasks (current state)' },
      { name: 'General AI', desc: 'Human-level intelligence (theoretical)' },
      { name: 'Super AI', desc: 'Surpasses human intelligence (hypothetical)' }
    ],
    gradient: 'var(--gradient-5)'
  },
  {
    id: 6,
    title: 'Machine Learning',
    subtitle: 'The Engine of AI',
    content: 'How machines learn from data',
    approaches: [
      'Supervised Learning: Learning from labeled examples',
      'Unsupervised Learning: Finding patterns in data',
      'Reinforcement Learning: Learning through trial and error'
    ],
    gradient: 'var(--gradient-1)'
  },
  {
    id: 7,
    title: 'Neural Networks',
    subtitle: 'Inspired by the Brain',
    content: 'Artificial neural networks mimic biological neurons to process information',
    features: [
      'Deep Learning architectures',
      'Pattern recognition',
      'Feature extraction',
      'Backpropagation training'
    ],
    gradient: 'var(--gradient-2)'
  },
  {
    id: 8,
    title: 'AI Ethics',
    subtitle: 'Responsible Development',
    content: 'Important considerations for AI development',
    concerns: [
      'Bias and Fairness',
      'Privacy Protection',
      'Transparency',
      'Accountability',
      'Job Displacement'
    ],
    gradient: 'var(--gradient-3)'
  },
  {
    id: 9,
    title: 'The Future',
    subtitle: 'What Lies Ahead',
    content: 'Emerging trends and possibilities',
    predictions: [
      'More natural human-AI interaction',
      'Breakthrough in AGI research',
      'AI-human collaboration',
      'Quantum computing + AI',
      'Personalized AI assistants'
    ],
    gradient: 'var(--gradient-4)'
  },
  {
    id: 10,
    title: 'Conclusion',
    subtitle: 'Embracing the AI Era',
    content: 'AI is not just technology—it\'s a transformation of how we live, work, and think.',
    final: 'The question is not if AI will change the world, but how we will shape that change.',
    gradient: 'var(--gradient-5)'
  }
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const slide = slides[currentSlide]

  return (
    <div className={styles.container}>
      <div className={styles.slide} style={{ background: slide.gradient }}>
        <div className={styles.content}>
          <h1 className={styles.title}>{slide.title}</h1>
          <h2 className={styles.subtitle}>{slide.subtitle}</h2>
          <p className={styles.mainContent}>{slide.content}</p>

          {slide.points && (
            <ul className={styles.points}>
              {slide.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          )}

          {slide.timeline && (
            <div className={styles.timeline}>
              {slide.timeline.map((item, idx) => (
                <div key={idx} className={styles.timelineItem}>
                  <span className={styles.year}>{item.year}</span>
                  <span className={styles.event}>{item.event}</span>
                </div>
              ))}
            </div>
          )}

          {slide.applications && (
            <div className={styles.grid}>
              {slide.applications.map((app, idx) => (
                <div key={idx} className={styles.card}>
                  <h3>{app.name}</h3>
                  <p>{app.desc}</p>
                </div>
              ))}
            </div>
          )}

          {slide.types && (
            <div className={styles.types}>
              {slide.types.map((type, idx) => (
                <div key={idx} className={styles.typeCard}>
                  <h3>{type.name}</h3>
                  <p>{type.desc}</p>
                </div>
              ))}
            </div>
          )}

          {slide.approaches && (
            <ul className={styles.approaches}>
              {slide.approaches.map((approach, idx) => (
                <li key={idx}>{approach}</li>
              ))}
            </ul>
          )}

          {slide.features && (
            <div className={styles.features}>
              {slide.features.map((feature, idx) => (
                <div key={idx} className={styles.feature}>{feature}</div>
              ))}
            </div>
          )}

          {slide.concerns && (
            <ul className={styles.concerns}>
              {slide.concerns.map((concern, idx) => (
                <li key={idx}>{concern}</li>
              ))}
            </ul>
          )}

          {slide.predictions && (
            <ul className={styles.predictions}>
              {slide.predictions.map((prediction, idx) => (
                <li key={idx}>{prediction}</li>
              ))}
            </ul>
          )}

          {slide.final && (
            <p className={styles.final}>{slide.final}</p>
          )}
        </div>

        <div className={styles.navigation}>
          <button onClick={prevSlide} className={styles.navButton}>
            ← Previous
          </button>
          <div className={styles.slideCounter}>
            {currentSlide + 1} / {slides.length}
          </div>
          <button onClick={nextSlide} className={styles.navButton}>
            Next →
          </button>
        </div>

        <div className={styles.dots}>
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`${styles.dot} ${idx === currentSlide ? styles.activeDot : ''}`}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
