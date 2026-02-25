import { useState } from 'react';
import { navLinks } from '../data/siteContent';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.navWrap}>
      <nav className={`${styles.navbar} container`}>
        <a href="#home" className={styles.logo} onClick={closeMenu}>
  return (
    <header className={styles.navWrap}>
      <nav className={`${styles.navbar} container`}>
        <a href="#home" className={styles.logo}>
          <span className={styles.logoDot} />
          AI/ML Club
        </a>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul id="main-navigation" className={`${styles.links} ${menuOpen ? styles.linksOpen : ''}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className={styles.link} onClick={closeMenu}>
        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className={styles.link}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
