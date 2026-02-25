import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import JoinUs from './components/JoinUs';
import Footer from './components/Footer';
import styles from './styles/App.module.css';

function App() {
  useEffect(() => {
    const revealedElements = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    revealedElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.pageShell}>
      <div className={styles.bgOrbOne} aria-hidden="true" />
      <div className={styles.bgOrbTwo} aria-hidden="true" />
      <div className={styles.gridOverlay} aria-hidden="true" />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Events />
        <JoinUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
