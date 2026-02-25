import { aboutHighlights } from '../data/siteContent';
import styles from '../styles/About.module.css';

function About() {
  return (
    <section id="about" className={`${styles.about} container`} data-reveal>
      <div className={styles.header}>
        <h2>About Our Club</h2>
        <p>
          The AI/ML Club is a student-led space for learning and innovation. We host workshops,
          project cohorts, hackathons, and research collaborations to help students build
          real-world skills and impactful portfolios.
        </p>
      </div>

      <div className={styles.grid}>
        {aboutHighlights.map((item) => (
          <article key={item.title} className={styles.card}>
            <span className={styles.icon} aria-hidden="true">
              {item.icon}
            </span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default About;
