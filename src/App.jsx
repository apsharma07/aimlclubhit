import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import JoinUs from './components/JoinUs';
import Footer from './components/Footer';
import styles from './styles/App.module.css';

function App() {
  return (
    <div className={styles.pageShell}>
      <div className={styles.bgOrbOne} aria-hidden="true" />
      <div className={styles.bgOrbTwo} aria-hidden="true" />

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
