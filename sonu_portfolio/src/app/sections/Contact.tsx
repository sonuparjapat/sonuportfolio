import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <p className="section-label">Get In Touch</p>
        <h2 className="section-title">
          Let&apos;s <span className="cyan">Connect</span>
        </h2>
        <p className="section-desc" style={{ marginBottom: '4rem' }}>
          Whether you have a project in mind, an opportunity to share, or just want to say hello — my inbox is always open.
        </p>

        <div className={styles.grid}>
          <div className={styles.infoPanel}>
            <div className={styles.bigCTA}>
              <p className={styles.bigCTALabel}>// ready to collaborate</p>
              <h3 className={styles.bigCTATitle}>Open to new opportunities & freelance projects</h3>
              <a
                href="mailto:sonuparjapat.connect@gmail.com"
                className="btn-cyan"
                style={{ marginTop: '1.5rem', display: 'inline-flex' }}
              >
                Say Hello
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>

            <div className={styles.contacts}>
              {[
                {
                  label: 'Email',
                  value: 'sonuparjapat.connect@gmail.com',
                  href: 'mailto:sonuparjapat.connect@gmail.com',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  ),
                },
                {
                  label: 'Phone',
                  value: '+91 9996230902',
                  href: 'tel:+919996230902',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.22 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.05 6.05l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                  ),
                },
                {
                  label: 'LinkedIn',
                  value: 'sonu',
                  href: 'https://www.linkedin.com/in/sonu-parjapat-a1a466196',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  ),
                },
                {
                  label: 'GitHub',
                  value: 'github.com/sonuparjapat',
                  href: 'https://github.com/sonuparjapat',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                  ),
                },
              ].map(item => (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                  <span className={styles.contactIcon}>{item.icon}</span>
                  <div>
                    <span className={styles.contactLabel}>{item.label}</span>
                    <span className={styles.contactValue}>{item.value}</span>
                  </div>
                  <svg className={styles.arrow} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              ))}
            </div>
          </div>

          <div className={styles.terminalPanel}>
            <div className={styles.termHeader}>
              <div className={styles.termDots}>
                <span style={{ background: '#ff5f56' }}></span>
                <span style={{ background: '#ffbd2e' }}></span>
                <span style={{ background: '#27c93f' }}></span>
              </div>
              <span className={styles.termTitle}>terminal</span>
            </div>
            <div className={styles.termBody}>
              <div className={styles.termLine}>
                <span className={styles.termPrompt}>$</span>
                <span className={styles.termCmd}> ssh sonu@sgate-tech.dev</span>
              </div>
              <div className={styles.termOutput}>Connected to Sonu Parjapat — Full Stack Developer</div>
              <div className={styles.termBlank}></div>
              <div className={styles.termLine}>
                <span className={styles.termPrompt}>sonu@dev:~$</span>
                <span className={styles.termCmd}> cat about.txt</span>
              </div>
              <div className={styles.termOutput}>→ {process.env.NEXT_PUBLIC_EXP}+ years building production apps</div>
              <div className={styles.termOutput}>→ MERN Stack | Next.js | PostgreSQL</div>
              <div className={styles.termOutput}>→ Currently @ {process.env.NEXT_PUBLIC_CURRENT_COMP}</div>
              <div className={styles.termOutput}>→ Open to new opportunities</div>
              <div className={styles.termBlank}></div>
              <div className={styles.termLine}>
                <span className={styles.termPrompt}>sonu@dev:~$</span>
                <span className={styles.termCmd}> echo $STATUS</span>
              </div>
              <div className={styles.termOutput} style={{ color: 'rgba(39, 201, 63, 0.9)' }}>AVAILABLE FOR HIRE ✓</div>
              <div className={styles.termBlank}></div>
              <div className={styles.termLine}>
                <span className={styles.termPrompt}>sonu@dev:~$</span>
                <span className={styles.termCursor}>█</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
