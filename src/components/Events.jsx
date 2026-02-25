import { events } from '../data/siteContent';
import styles from '../styles/Events.module.css';

function Events() {
  return (
    <section id="events" className={`${styles.events} container`} data-reveal>
    <section id="events" className={`${styles.events} container`}>
      <div className={styles.header}>
        <h2>Upcoming Events</h2>
        <p>Hands-on sessions and competitive challenges designed to turn ideas into impact.</p>
      </div>

      <div className={styles.grid}>
        {events.map((event) => (
          <article key={event.title} className={styles.card}>
            <p className={styles.date}>{event.date}</p>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <button type="button" className={styles.readMore}>
              Read More
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Events;
