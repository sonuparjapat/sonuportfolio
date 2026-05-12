import styles from './Projects.module.css'

const projects = [
  {
    id: 1,
    title: 'Oroganix',
    tagline: 'Organic & Ayurvedic E-Commerce Platform',
    description:
      'A full-featured organic and Ayurvedic e-commerce platform with product management, cart, orders, and secure checkout. Built with a modern stack for performance and scalability.',
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    live: 'https://oroganix.com/',
    github: 'https://github.com/sonuparjapat/ayurvedaeccom',
    featured: true,
    color: '#00f5ff',
    number: '01',
  },
  {
    id: 2,
    title: 'Shine U',
    tagline: 'Beauty & Cosmetics E-Commerce (Purple.com Clone)',
    description:
      'A clone of Purple.com — a beauty and cosmetics shopping platform. Features product listings, filtering, cart, Redux state management, and a polished UI.',
    stack: ['React', 'Redux', 'Node.js', 'MongoDB', 'Express'],
    live: 'https://purple-com-clone-kor8.vercel.app/',
    github: 'https://github.com/sonuparjapat/Purple.com-clone-',
    featured: true,
    color: '#b57bee',
    number: '02',
  },
  {
    id: 3,
    title: 'My Notes',
    tagline: 'Personal Notes Web App',
    description:
      'A full-stack notes application with complete CRUD operations, search, pagination, and private user accounts. Every user sees only their own data.',
    stack: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
    live: 'https://makingnotes.netlify.app/',
    github: 'https://github.com/sonuparjapat/Notes-making-application',
    featured: false,
    color: '#00f5ff',
    number: '03',
  },
  {
    id: 4,
    title: 'RegStuff',
    tagline: 'Multi-Category E-Commerce Store',
    description:
      'A multi-category e-commerce store where users can browse and purchase products across various categories. Built with Chakra UI for a clean, accessible interface.',
    stack: ['React', 'Chakra UI', 'Node.js', 'MongoDB', 'Express'],
    live: 'https://regstuff.vercel.app/',
    github: 'https://github.com/sonuparjapat/dailyobjects-clone-',
    featured: false,
    color: '#00f5ff',
    number: '04',
  },
]

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <p className="section-label">Portfolio</p>
        <h2 className="section-title">
          Featured <span className="cyan">Projects</span>
        </h2>
        <p className="section-desc" style={{ marginBottom: '4rem' }}>
          Live applications I&apos;ve designed, built, and deployed — each one solving a real problem with a complete tech stack.
        </p>

        <div className={styles.grid}>
          {projects.slice(0, 2).map(project => (
            <div key={project.id} className={styles.featuredCard}>
              <div className={styles.featuredInner}>
                <div className={styles.projNum}>{project.number}</div>
                <h3 className={styles.projTitle}>{project.title}</h3>
                <p className={styles.projTagline} style={{ color: project.color }}>{project.tagline}</p>
                <p className={styles.projDesc}>{project.description}</p>
                <div className={styles.stack}>
                  {project.stack.map(s => (
                    <span key={s} className={styles.stackItem}>{s}</span>
                  ))}
                </div>
                <div className={styles.projLinks}>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className={styles.linkLive}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    Live Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.linkGithub}>
                    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                    GitHub
                  </a>
                </div>
              </div>
              <div className={styles.featuredGlow} style={{ background: `radial-gradient(ellipse at top left, ${project.color}10, transparent 60%)` }}></div>
            </div>
          ))}
        </div>

        <div className={styles.smallGrid}>
          {projects.slice(2).map(project => (
            <div key={project.id} className={`card ${styles.smallCard}`}>
              <div className={styles.smallTop}>
                <span className={styles.smallNum}>{project.number}</span>
                <div className={styles.smallLinks}>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                  </a>
                </div>
              </div>
              <h3 className={styles.smallTitle}>{project.title}</h3>
              <p className={styles.smallTagline}>{project.tagline}</p>
              <p className={styles.smallDesc}>{project.description}</p>
              <div className={styles.stack} style={{ marginTop: 'auto' }}>
                {project.stack.map(s => (
                  <span key={s} className={styles.stackItem}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.moreProjects}>
          <a
            href="https://github.com/sonuparjapat"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cyan"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            Explore More on GitHub
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  )
}
