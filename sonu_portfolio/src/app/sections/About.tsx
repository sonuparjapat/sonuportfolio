import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.left}>
            <p className="section-label">About Me</p>
            <h2 className="section-title">
              Engineering <span className="cyan">Solutions</span>,<br />
              Not Just Code
            </h2>
            <p className={styles.bio}>
              I&apos;m a Full Stack Developer at <strong>{process.env.NEXT_PUBLIC_CURRENT_COMP}</strong>,
              where I&apos;ve been building and scaling production-grade web applications for
              over {process.env.NEXT_PUBLIC_EXP} years. I thrive at the intersection of clean architecture and seamless
              user experiences.
            </p>
            <p className={styles.bio}>
              My expertise spans the entire stack — from crafting pixel-perfect UIs with React,
              Next.js, and modern CSS frameworks, to designing robust backend systems with
              Node.js, Express, and databases like PostgreSQL and MongoDB.
            </p>

            <div className={styles.infoGrid}>
              {[
                { label: 'Name', value: 'Sonu' },
                { label: 'Role', value: 'Full Stack Developer' },
                { label: 'Company', value: `${process.env.NEXT_PUBLIC_CURRENT_COMP}` },
                { label: 'Experience', value: `${process.env.NEXT_PUBLIC_EXP}+ Years` },
                { label: 'Email', value: 'sonuparjapat.connect@gmail.com' },
                { label: 'Phone', value: '+91 9996230902' },
              ].map(item => (
                <div key={item.label} className={styles.infoItem}>
                  <span className={styles.infoLabel}>{item.label}</span>
                  <span className={styles.infoValue}>{item.value}</span>
                </div>
              ))}
            </div>

            <a
              href="https://drive.google.com/file/d/1lTwl_mQSFfNv9vad6g-O4EiGMjcH0o8Y/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyan"
              style={{ marginTop: '2rem', display: 'inline-flex' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
              Download Resume
            </a>
          </div>

          <div className={styles.right}>
            <div className={styles.codeBlock}>
              <div className={styles.codeHeader}>
                <div className={styles.dot} style={{ background: '#ff5f56' }}></div>
                <div className={styles.dot} style={{ background: '#ffbd2e' }}></div>
                <div className={styles.dot} style={{ background: '#27c93f' }}></div>
                <span className={styles.fileName}>sonu.config.js</span>
              </div>
              <pre className={styles.code}>{`const developer = {
  name: "Sonu",
  role: "Full Stack Developer",
  experience:${process.env.NEXT_PUBLIC_EXP} + years,
  
  stack: {
    frontend: [
      "React", "Next.js",
      "Tailwind CSS", "Chakra UI",
      "Material UI"
    ],
    backend: [
      "Node.js", "Express.js"
    ],
    database: [
      "PostgreSQL", "MongoDB",
      "SQL"
    ],
    state: ["Redux", "Context API"],
  },

  currentRole: {
    company: ${process.env.NEXT_PUBLIC_CURRENT_COMP},
    position: "Full Stack Developer",
    since: "2022"
  },

  passion: [
    "Clean Architecture",
    "Performance Optimization",
    "Great UX"
  ]
};

export default developer;`}</pre>
            </div>

            <div className={styles.decorBox}>
              <div className={styles.decorLine}></div>
              <span className={styles.decorText}>Available for opportunities</span>
              <div className={styles.statusDot}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
