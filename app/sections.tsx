import { profile, projects, capabilities } from './content';
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
    <section className="section work" id="work">
      <div className="section-top">
        <SectionLabel number="01">SELECTED WORK</SectionLabel>
        <span className="micro">A CLOSER LOOK</span>
      </div>
      <div className="work-heading">
        <h2>
          Things made.
          <br />
          <span className="muted">Ideas explored.</span>
        </h2>
        <p className="section-description">
          A selection of work will live here.
          <br />
          Projects, experiments, and the
          <br />
          thinking behind them.
        </p>
      </div>
      <div className="projects">
        {projects.map((p) => (
          <article
            className={`project ${p.style}`}
            key={p.id}
            id={`project-${p.id}`}
          >
            <div className="project-visual">
              <div className="exhibit-top">
                <span>EXHIBIT / {p.id}</span>
                <span>PROJECT PREVIEW</span>
              </div>
              <div className="exhibit-type" aria-hidden="true">
                {p.id === '01' ? (
                  <>
                    Space for
                    <br />
                    <em>something</em>
                    <br />
                    meaningful.
                  </>
                ) : (
                  <>
                    What
                    <br />
                    comes
                    <br />
                    <span>next?</span>
                  </>
                )}
              </div>
              <div className="exhibit-bottom">
                <span>YOUR WORK GOES HERE</span>
                <span>+</span>
              </div>
            </div>
            <div className="project-caption">
              <div>
                <p className="micro">{p.type} · Placeholder</p>
                <h3>{p.title}</h3>
              </div>
              <span className="project-index">/{p.id}</span>
            </div>
            <p className="project-description">{p.description}</p>
            <div className="tags">
              {p.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </article>
        ))}
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
    <>
      <section className="section quiet" id="achievements">
        <SectionLabel number="03">ACHIEVEMENTS</SectionLabel>
        <div className="quiet-content">
          <h2>Milestones that matter.</h2>
          <div className="empty-row">
            <span className="asterisk">✳</span>
            <div>
              <h3>The highlights, in time.</h3>
              <p>
                Awards, releases, competitions, and meaningful accomplishments
                will appear here.
              </p>
            </div>
            <span className="pending">TO BE ADDED</span>
          </div>
        </div>
      </section>
      <section className="section quiet" id="education">
        <SectionLabel number="04">EDUCATION & CERTIFICATIONS</SectionLabel>
        <div className="quiet-content">
          <h2>A foundation to build on.</h2>
          <div className="education-row">
            <span>01</span>
            <div>
              <h3>Education</h3>
              <p>Degree, institution, and dates to be added.</p>
            </div>
            <span className="pending">—</span>
          </div>
          <div className="education-row">
            <span>02</span>
            <div>
              <h3>Certifications</h3>
              <p>
                Verified qualifications and issuing organizations to be added.
              </p>
            </div>
            <span className="pending">—</span>
          </div>
        </div>
      </section>
    </>
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
      <SectionLabel number="06">ABOUT</SectionLabel>
      <div className="about-layout">
        <h2>
          Beyond
          <br />
          <span className="serif">the work.</span>
        </h2>
        <div>
          <p className="about-lead">
            The person behind
            <br />
            the projects.
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
      <SectionLabel number="07">CONTACT</SectionLabel>
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
