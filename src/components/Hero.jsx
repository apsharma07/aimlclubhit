import styles from '../styles/Hero.module.css';

function Hero() {
  return (
    <section id="home" className={`${styles.hero} container`}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>University Innovation Collective</p>
        <h1>Explore the Future of AI &amp; Machine Learning</h1>
        <p className={styles.subtitle}>
          Join a community of curious builders collaborating on AI, ML, data science, and robotics
          through workshops, research, and hackathons.
        </p>

        <div className={styles.actions}>
          <a href="#join" className={`${styles.button} ${styles.primary}`}>
            Join Now
          </a>
          <a href="#about" className={`${styles.button} ${styles.secondary}`}>
            Learn More
          </a>
        </div>
      </div>

      <div className={styles.visualCard}>
        <div className={styles.visualGlow} />
        <div className={styles.visualPanel}>
          <h2>Collaborative AI Lab</h2>
          <p>
            Students prototyping models around holographic dashboards, mentorship circles, and
            industry-ready projects.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
