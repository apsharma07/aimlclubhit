import { socialLinks } from '../data/siteContent';
import styles from '../styles/Footer.module.css';

function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className="container">
        <h2>AI/ML Club</h2>
        <div className={styles.socials}>
          {socialLinks.map((social) => (
            <a key={social.label} href={social.href} aria-label={social.label}>
              {social.icon}
            </a>
          ))}
        </div>
        <p>© {new Date().getFullYear()} AI/ML Club. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
