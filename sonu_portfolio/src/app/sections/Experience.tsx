import styles from './Experience.module.css'

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <div className="container">
        <p className="section-label">Work History</p>
        <h2 className="section-title">
          Professional <span className="cyan">Experience</span>
        </h2>
        <p className="section-desc" style={{ marginBottom: '4rem' }}>
          My journey building real-world products in a professional environment.
        </p>

        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineLeft}>
              <div className={styles.dot}></div>
              <div className={styles.line}></div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTop}>
                <div>
                  <h3 className={styles.role}>Full Stack Developer</h3>
                  <a
                    href="#"
                    className={styles.company}
                  >
            {process.env.NEXT_PUBLIC_CURRENT_COMP}
                  </a>
                </div>
                <div className={styles.dateBadge}>
                  <span>2022</span>
                  <span className={styles.dateSep}>—</span>
                  <span className={styles.current}>Present</span>
                </div>
              </div>

              <div className={styles.divider}></div>

              <ul className={styles.duties}>
                {[
                  'Architecting and developing full-stack web applications using Next.js, React, Node.js, and Express.js from scratch to production deployment.',
                  'Designing and managing relational and non-relational databases including PostgreSQL, SQL, and MongoDB with complex query optimization.',
                  'Building responsive, accessible UIs with Tailwind CSS, Chakra UI, and Material UI maintaining pixel-perfect consistency across devices.',
                  'Implementing secure REST APIs with JWT authentication, role-based access control, and comprehensive error handling.',
                  'Collaborating with cross-functional teams to define architecture, review code, and ensure best practices across the codebase.',
                  'Integrating third-party services, payment gateways, and external APIs to extend application functionality.',
                ].map((duty, i) => (
                  <li key={i} className={styles.duty}>
                    <span className={styles.dutyIcon}>▹</span>
                    {duty}
                  </li>
                ))}
              </ul>

              <div className={styles.techTags}>
                {['React', 'Next.js', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Tailwind', 'Redux'].map(t => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.educationTitle}>
          <p className="section-label" style={{ marginBottom: '2rem' }}>Education & Certifications</p>
        </div>

        <div className={styles.educationGrid}>
          <div className={`card ${styles.eduCard}`}>
            <div className={styles.eduIcon}>🎓</div>
            <div>
              <h4 className={styles.eduDegree}>Bachelor of Science</h4>
              <p className={styles.eduSchool}>Non Medical</p>
              <p className={styles.eduYear}>2018 — 2022</p>
            </div>
          </div>

          <div className={`card ${styles.eduCard} ${styles.certCard}`}>
            <div className={styles.eduIcon}>🏅</div>
            <div style={{ flex: 1 }}>
              <h4 className={styles.eduDegree}>Full Stack Web Development</h4>
              <p className={styles.eduSchool}>Masai School · Bangalore</p>
              <p className={styles.eduYear}>Certified · 2023</p>
              <div className={styles.certTags}>
                {['MERN Stack', 'DSA', 'System Design', 'React', 'Node.js'].map(t => (
                  <span key={t} className={styles.certTag}>{t}{","}</span>
                ))}
              </div>
            </div>
            <a
              href="https://drive.google.com/file/d/1LqbmYXivX6BOT7O3vKycleafBCg-0Kv6/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.certLink}
              title="View Certificate on LinkedIn"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              View
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
