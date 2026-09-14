import GlassOptics from './glass-optics';
import { profile } from './content';
import { Work, Credentials, About, Contact } from './sections';
import Motion from './motion';
export default function Home() {
  return (
    <main>
      <GlassOptics />
      <a className="skip" href="#work">
        Skip to studies
      </a>
      <header className="header">
        <a className="wordmark" href="#home" aria-label="Portfolio home">
          p<span>・</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#education">Studies</a>
          <a href="#about">About</a>
          <a href="#contact">
            Contact <span>↗</span>
          </a>
        </nav>
        <span className="header-note">PERSONAL PORTFOLIO</span>
      </header>
      <section className="hero" id="home">
        <div className="hero-art" />
        <div className="hero-content">
          <p className="eyebrow">
            <span className="tiny-cross">+</span> POLITECNICO DI MILANO
          </p>
          <h1>
            <span className="line">
              <span>{profile.name}</span>
            </span>
            <span className="line line-soft">
              <span>
                In the making<span className="period">.</span>
              </span>
            </span>
          </h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-intro">{profile.introduction}</p>
          <a className="glass hero-button" href="#work">
            Follow my journey <span>↘</span>
          </a>
        </div>
        <div className="hero-note glass">
          <span className="status-dot" />
          PORTFOLIO IN PROGRESS
          <span className="note-line">
            Engineering student. At the beginning.
          </span>
        </div>
        <div className="hero-bottom">
          <span>IDEAS INTO SOMETHING REAL</span>
          <a href="#work">
            SCROLL TO EXPLORE <span>↓</span>
          </a>
          <span>01 — 05</span>
        </div>
      </section>
      <Credentials />
      <Work />
      <About />
      <Contact />
      <Motion />
    </main>
  );
}
