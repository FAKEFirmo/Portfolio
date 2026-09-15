import { profile } from './content';
export default function NotFound() {
  return (
    <main>
      <header className="header">
        <a className="wordmark" href="/" aria-label="Portfolio home">
          p<span>・</span>
        </a>
        <span className="header-note">PERSONAL PORTFOLIO</span>
      </header>
      <section className="section lost">
        <p className="eyebrow">
          <span className="tiny-cross">+</span> 404
        </p>
        <h2>
          <span className="line">
            <span>This page does not</span>
          </span>
          <span className="line muted">
            <span>exist yet.</span>
          </span>
        </h2>
        <p className="section-description">
          Plenty of this portfolio is still unwritten, but not this address. The
          work that does exist lives on the home page.
        </p>
        <a className="glass hero-button" href="/">
          Back to the portfolio <span>↘</span>
        </a>
      </section>
      <footer className="lost-footer">
        <span className="micro">{profile.name.toUpperCase()}</span>
      </footer>
    </main>
  );
}
