'use client'
import { useEffect, useRef } from 'react'
import styles from './Skills.module.css'

const skillGroups = [
  {
    category: 'Frontend',
    icon: '⬡',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'Chakra UI', level: 82 },
      { name: 'Material UI', level: 80 },
    ],
  },
  {
    category: 'Backend',
    icon: '⬡',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 85 },
      { name: 'REST APIs', level: 88 },
      { name: 'JWT Auth', level: 82 },
      { name: 'Microservices', level: 75 },
    ],
  },
  {
    category: 'Database',
    icon: '⬡',
    skills: [
      { name: 'PostgreSQL', level: 80 },
      { name: 'MongoDB', level: 85 },
      { name: 'SQL', level: 78 },
      { name: 'Mongoose / Sequelize', level: 80 },
    ],
  },
  {
    category: 'State & Tools',
    icon: '⬡',
    skills: [
      { name: 'Redux / Redux Toolkit', level: 82 },
      { name: 'Git & GitHub', level: 88 },
      { name: 'Postman', level: 85 },
      { name: 'VS Code', level: 95 },
    ],
  },
  {
    category: 'DevOps & Cloud',
    icon: '⬡',
    skills: [
      { name: 'AWS (EC2, S3, Lambda)', level: 75 },
      { name: 'Docker', level: 78 },
      { name: 'Docker Compose', level: 75 },
    
    ],
  },
]

const techBadges = [
  'React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL',
  'SQL', 'Redux', 'Tailwind', 'Chakra UI', 'Material UI', 'Git',
  'REST API', 'JWT', 'Microservices', 'Docker', 'AWS', 'EC2', 'S3',
  'Lambda', 'Vercel', 'Netlify', 'JavaScript', 'HTML5', 'CSS3'
]

export default function Skills() {
  const barsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('[data-width]').forEach(bar => {
              bar.style.width = bar.getAttribute('data-width') + '%'
            })
          }
        })
      },
      { threshold: 0.2 }
    )
    if (barsRef.current) observer.observe(barsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <p className="section-label">Tech Stack</p>
        <h2 className="section-title">
          Skills & <span className="cyan">Expertise</span>
        </h2>
        <p className="section-desc" style={{ marginBottom: '4rem' }}>
          Technologies I use daily to build scalable, production-ready applications from idea to deployment.
        </p>

        <div className={styles.grid} ref={barsRef}>
          {skillGroups.map(group => (
            <div key={group.category} className={`card ${styles.card}`}>
              <div className={styles.cardHeader}>
                <span className={styles.cardIcon}>{group.icon}</span>
                <h3 className={styles.cardTitle}>{group.category}</h3>
              </div>
              <div className={styles.skillList}>
                {group.skills.map(skill => (
                  <div key={skill.name} className={styles.skillItem}>
                    <div className={styles.skillTop}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillPct}>{skill.level}%</span>
                    </div>
                    <div className={styles.barTrack}>
                      <div
                        className={styles.barFill}
                        data-width={skill.level}
                        style={{ width: '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.badges}>
          <p className={styles.badgesLabel}>All Technologies</p>
          <div className={styles.badgeWrap}>
            {techBadges.map(tech => (
              <span key={tech} className={styles.badge}>{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}