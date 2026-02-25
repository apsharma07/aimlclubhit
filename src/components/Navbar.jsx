import { navLinks } from '../data/siteContent';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  return (
    <header className={styles.navWrap}>
      <nav className={`${styles.navbar} container`}>
        <a href="#home" className={styles.logo}>
          <span className={styles.logoDot} />
          AI/ML Club
        </a>

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
