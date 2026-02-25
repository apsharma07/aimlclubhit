import styles from '../styles/JoinUs.module.css';

function JoinUs() {
  return (
    <section id="join" className={`${styles.join} container`} data-reveal>
      <div>
        <p className={styles.kicker}>Join the movement</p>
        <h2>Build the future with the AI/ML Club.</h2>
        <p>
          Whether you are a beginner or advanced practitioner, we provide mentorship,
          interdisciplinary collaboration, and opportunities to publish and present.
        </p>
      </div>
      <a href="#contact" className={styles.button}>
        Register Now
      </a>
    </section>
  );
}

export default JoinUs;
