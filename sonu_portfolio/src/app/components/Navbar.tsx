'use client'
import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = navLinks.map(l => l.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#hero" className={styles.logo}>
          <span className={styles.logoAngle}>&lt;</span>
          <span className={styles.logoName}>SONU</span>
          <span className={styles.logoDot}>.</span>
          <span className={styles.logoDev}>DEV</span>
          <span className={styles.logoAngle}>/&gt;</span>
        </a>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={active === link.href.replace('#', '') ? styles.activeLink : ''}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://drive.google.com/file/d/1lTwl_mQSFfNv9vad6g-O4EiGMjcH0o8Y/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resumeBtn}
            >
              Resume
            </a>
          </li>
        </ul>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? styles.barOpen1 : styles.bar}></span>
          <span className={menuOpen ? styles.barOpen2 : styles.bar}></span>
          <span className={menuOpen ? styles.barOpen3 : styles.bar}></span>
        </button>
      </div>
    </nav>
  )
}
