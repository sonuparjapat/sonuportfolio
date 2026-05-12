'use client'
import { useEffect, useRef, useState } from 'react'
import styles from './Hero.module.css'

const roles = [
  'Full Stack Developer',
  'MERN Stack Engineer',
  'Next.js Specialist',
  'Backend Architect',
  'UI/UX Implementer',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const current = roles[roleIndex]
    let i = typing ? 0 : current.length
    const speed = typing ? 60 : 30

    const interval = setInterval(() => {
      if (typing) {
        setDisplayed(current.slice(0, i + 1))
        i++
        if (i === current.length) {
          clearInterval(interval)
          setTimeout(() => setTyping(false), 1800)
        }
      } else {
        setDisplayed(current.slice(0, i - 1))
        i--
        if (i === 0) {
          clearInterval(interval)
          setRoleIndex(prev => (prev + 1) % roles.length)
          setTyping(true)
        }
      }
    }, speed)

    return () => clearInterval(interval)
  }, [roleIndex, typing])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let animId: number

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const cols = Math.floor(canvas.width / 20)
    const drops = Array(cols).fill(1)
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノ'

    const draw = () => {
      ctx.fillStyle = 'rgba(2, 4, 8, 0.06)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = 'rgba(0, 245, 255, 0.35)'
      ctx.font = '12px JetBrains Mono, monospace'

      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillText(char, i * 20, y * 20)
        if (y * 20 > canvas.height && Math.random() > 0.975) drops[i] = 0
        drops[i]++
      })
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      const fills = document.querySelectorAll<HTMLElement>(`.${styles.mcFill}`)
      fills.forEach(el => {
        const w = el.getAttribute('data-w')
        if (w) el.style.width = w + '%'
      })
    }, 1200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="hero" className={styles.hero}>
      <canvas ref={canvasRef} className={styles.matrix} />

      {/* Atmosphere layers */}
      <div className={styles.orbLeft} />
      <div className={styles.orbRight} />
      <div className={styles.scanLines} />
      <div className={styles.accentBarLeft} />

      {/* Corner brackets */}
      <span className={`${styles.corner} ${styles.cornerTL}`} />
      <span className={`${styles.corner} ${styles.cornerTR}`} />
      <span className={`${styles.corner} ${styles.cornerBL}`} />
      <span className={`${styles.corner} ${styles.cornerBR}`} />

      <div className={styles.content}>
        {/* ── Left column ── */}
        <div className={styles.contentLeft}>

          {/* Status badge */}
          <div className={styles.statusBadge}>
            <span className={styles.statusDot} />
            <span className={styles.statusText}>Available for work</span>
          </div>

          <div className={styles.greeting}>
            <span className={styles.greetLine}></span>
            <span className={styles.greetText}>Hello, World! I&apos;m</span>
            <span className={styles.greetLine}></span>
          </div>

          <h1 className={styles.name}>
            <span className={styles.nameLine1}>SONU</span>
         
          </h1>

          <div className={styles.roleWrapper}>
            <span className={styles.rolePrefix}>{'>'}_</span>
            <span className={styles.role}>{displayed}</span>
            <span className={styles.cursor}>|</span>
          </div>

          <p className={styles.tagline}>
            Crafting scalable, high-performance web applications with{' '}
            <span className={styles.highlight}>{process.env.NEXT_PUBLIC_EXP}+ years</span> of full-stack expertise.
            Currently building at{' '}
            <span className={styles.company}>{process.env.NEXT_PUBLIC_CURRENT_COMP}</span>
          </p>

          <div className={styles.stats}>
            {[
              { num: '2.5+', label: 'Years Exp.' },
              { num: '10+', label: 'Technologies' },
              { num: '4+', label: 'Live Projects' },
            ].map(s => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statNum}>{s.num}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.actions}>
            <a href="#projects" className={`btn-cyan ${styles.btnPrimary}`}>
              <span>View Projects</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#contact" className={styles.btnSecondary}>Get In Touch</a>
          </div>

          <div className={styles.socials}>
            <a href="https://github.com/sonuparjapat" target="_blank" rel="noopener noreferrer" className={styles.social} aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/sonu-parjapat-a1a466196" target="_blank" rel="noopener noreferrer" className={styles.social} aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="mailto:sonuparjapat.connect@gmail.com" className={styles.social} aria-label="Email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>
        </div>

        {/* ── Right column ── */}
        <div className={styles.contentRight}>
          <div className={styles.metricCard}>
            <span className={styles.mcLabel}>Current Focus</span>
            <span className={styles.mcValue}>
              <em>Microservices</em> + Cloud Architecture
            </span>
            <div className={styles.mcBar}>
              <div className={styles.mcFill} data-w="82" style={{ width: '0%' }} />
            </div>
          </div>

          <div className={styles.metricCard}>
            <span className={styles.mcLabel}>Stack Proficiency</span>
            <span className={styles.mcValue}>
              MERN · <em>Next.js</em> · Node.js
            </span>
            <div className={styles.mcBar}>
              <div className={styles.mcFill} data-w="90" style={{ width: '0%' }} />
            </div>
          </div>

          <div className={styles.metricCard}>
            <span className={styles.mcLabel}>Deployment</span>
            <span className={styles.mcValue}>
              <em>AWS</em> · Docker · Vercel
            </span>
            <div className={styles.mcBar}>
              <div className={styles.mcFill} data-w="75" style={{ width: '0%' }} />
            </div>
          </div>

          <div className={styles.termMini}>
            <div className={styles.termHead}>
              <span className={styles.termDot} style={{ background: '#ff5f57' }} />
              <span className={styles.termDot} style={{ background: '#febc2e' }} />
              <span className={styles.termDot} style={{ background: '#28c840' }} />
              <span className={styles.termTitle}>sonu@dev ~</span>
            </div>
            <div className={styles.termBody}>
              <div>
                <span className={styles.tp}>$</span>{' '}
                <span className={styles.tc}>node server.js</span>
              </div>
              <div className={styles.to}>
                Server running on <span className={styles.tv}>:3000</span>
              </div>
              <div className={styles.to}>
                DB connected <span className={styles.tok}>✓</span>
              </div>
              <div className={styles.termGap}>
                <span className={styles.tp}>$</span>{' '}
                <span className={styles.tc}>git push origin main</span>
              </div>
              <div className={styles.to}>
                → <span className={styles.tk}>Deploying to prod</span>{' '}
                <span className={styles.tok}>✓</span>
              </div>
              <div className={styles.termGap}>
                <span className={styles.tp}>$</span>{' '}
                <span className={styles.tb}>_</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <span className={styles.scrollText}>SCROLL</span>
        <div className={styles.scrollLine}></div>
      </div>
    </section>
  )
}