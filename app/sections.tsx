import { profile, capabilities } from './content';
export function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <p className="eyebrow">
      {number} / {children}
    </p>
  );
}
export function Work() {
  return (
    <section className="section work student-work" id="work">
      <SectionLabel number="02">LEARNING / EXPLORATION</SectionLabel>
      <div className="work-heading">
        <h2>
          At the beginning.
          <br />
          <span className="muted">Room to grow.</span>
        </h2>
        <p className="section-description">
          My portfolio is taking shape alongside my studies. Coursework and
          personal explorations will find their place here as they develop.
        </p>
      </div>
    </section>
  );
}
export function Capabilities() {
  return (
    <section className="section capabilities" id="capabilities">
      <SectionLabel number="02">CAPABILITIES</SectionLabel>
      <div className="cap-layout">
        <div>
          <h2>
            From the first
            <br />
            <span className="muted">what if.</span>
            <br />
            To the final detail.
          </h2>
          <p className="section-description">
            Capability areas below are placeholders.
            <br />
            Your practice will give them substance.
          </p>
        </div>
        <div>
          {capabilities.map((c) => (
            <div className="cap-row" key={c.number}>
              <span className="micro">{c.number}</span>
              <div>
                <h3>{c.title}</h3>
                <p>{c.description}</p>
                <span className="cap-tags">{c.tags}</span>
                <a
                  href={`#project-${c.project}`}
                  className="project-connection"
                >
                  Related work / {c.project} <span>↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export function Credentials() {
  return (
    <section className="section quiet" id="education">
      <SectionLabel number="01">EDUCATION</SectionLabel>
      <div className="quiet-content">
        <h2>Engineering, in progress.</h2>
        <div className="education-row">
          <span>01</span>
          <div>
            <h3>Politecnico di Milano</h3>
            <p>Engineering studies</p>
          </div>
          <span className="pending">CURRENTLY STUDYING</span>
        </div>
      </div>
    </section>
  );
}
export function Trajectory() {
  return (
    <section className="section trajectory" id="background">
      <SectionLabel number="05">BACKGROUND / TRAJECTORY</SectionLabel>
      <h2>
        Every step.
        <br />
        <span className="muted">A new perspective.</span>
      </h2>
      <div className="timeline">
        {[
          { title: 'The starting point', text: 'Where your curiosity began.' },
          {
            title: 'Finding a direction',
            text: 'The experiences that shaped your interests.',
          },
          { title: 'The next chapter', text: 'What you are exploring now.' },
        ].map((x, i) => (
          <div className="timeline-item" key={x.title}>
            <span className="timeline-mark" />
            <p className="micro">CHAPTER 0{i + 1} · TO BE ADDED</p>
            <h3>{x.title}</h3>
            <p>{x.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export function About() {
  return (
    <section className="section about" id="about">
      <SectionLabel number="03">ABOUT</SectionLabel>
      <div className="about-layout">
        <h2>
          Beyond
          <br />
          <span className="serif">the studies.</span>
        </h2>
        <div>
          <p className="about-lead">
            The person beyond
            <br />
            the degree.
          </p>
          <p className="section-description">
            This is where your story belongs: the interests, values, and small
            obsessions that shape how you see the world.
          </p>
          <p className="micro">PERSONAL BIO TO BE ADDED</p>
        </div>
      </div>
    </section>
  );
}
export function Contact() {
  const links = [
    { name: 'Email', url: profile.email ? `mailto:${profile.email}` : '' },
    { name: 'GitHub', url: profile.github },
    { name: 'LinkedIn', url: profile.linkedin },
    { name: 'CV', url: profile.cv },
  ];
  return (
    <section className="section contact" id="contact">
      <SectionLabel number="04">CONTACT</SectionLabel>
      <div className="contact-heading">
        <h2>
          Good things start
          <br />
          with a <span className="serif">conversation.</span>
        </h2>
        <span className="contact-arrow" aria-hidden="true">
          ↗
        </span>
      </div>
      <div className="contact-links glass">
        {links.map((l) =>
          l.url ? (
            <a key={l.name} href={l.url}>
              {l.name}
              <span>↗</span>
            </a>
          ) : (
            <span className="contact-placeholder" key={l.name}>
              {l.name}
              <span>COMING SOON</span>
            </span>
          ),
        )}
      </div>
      <footer>
        <a href="#home" className="footer-brand">
          {profile.name}
          <span>Personal portfolio</span>
        </a>
        <span className="micro">A WORK IN PROGRESS, ALWAYS.</span>
        <a href="#home" className="back-top">
          Back to top ↑
        </a>
      </footer>
    </section>
  );
}
