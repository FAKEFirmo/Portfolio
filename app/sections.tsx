import { profile, capabilities } from './content';
export function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <p className="eyebrow" data-reveal>
      {number} / {children}
    </p>
  );
}
export function Work() {
  return (
    <section className="section work student-work" id="work" data-rule>
      <SectionLabel number="02">LEARNING / EXPLORATION</SectionLabel>
      <div className="work-heading">
        <h2 data-reveal="lines">
          <span className="line">
            <span>At the beginning.</span>
          </span>
          <span className="line muted">
            <span>Room to grow.</span>
          </span>
        </h2>
        <p className="section-description" data-reveal>
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
    <section className="section quiet" id="education" data-rule>
      <SectionLabel number="01">EDUCATION / ACHIEVEMENTS</SectionLabel>
      <div className="quiet-content">
        <h2 data-reveal="lines">
          <span className="line">
            <span>Engineering, in progress.</span>
          </span>
        </h2>
        <div className="education-row" data-reveal>
          <span>01</span>
          <div>
            <h3>Politecnico di Milano</h3>
            <p>Engineering studies - Engineering of Computing Systems</p>
          </div>
          <span className="pending">CURRENTLY STUDYING</span>
        </div>
        <div className="education-row" data-reveal>
          <span>02</span>
          <div>
            <h3>MakersLab Robotics Olympiad</h3>
            <p>
              Winner in robotic arm programming, two years in a row.
            </p>
          </div>
          <span className="pending">2023/24 · 2024/25</span>
          <ArmBlueprint />
        </div>
      </div>
    </section>
  );
}
function ArmBlueprint() {
  return (
    <figure className="arm-card">
      <div className="arm-stage" aria-hidden="true">
        <svg className="arm-model" viewBox="0 0 320 220" fill="none" strokeLinecap="round">
          <g className="arm-guides">
            <path d="M20 199H300" />
            <path d="M110 150L150 81L237 104" strokeDasharray="6 3 1 3" />
            <path d="M76 150A34 34 0 0 1 144 150" strokeDasharray="2 4" />
            <path d="M282 199V81M277 199H287M277 81H287" />
            <path d="M150 81H270M237 104V60" strokeDasharray="2 4" />
          </g>
          <g className="arm-body">
            <rect x="60" y="186" width="100" height="12" rx="2" />
            <path d="M78 186L90 166H130L142 186" />
            <circle cx="70" cy="192" r="2" />
            <circle cx="150" cy="192" r="2" />
            <g className="arm-j1">
              <g transform="translate(110 150) rotate(-60)">
                <rect y="-13" width="80" height="26" rx="13" />
                <path d="M24 -6H56M24 6H56" />
              </g>
              <g className="arm-j2">
                <g transform="translate(150 81) rotate(15)">
                  <rect y="-10" width="87" height="20" rx="10" />
                  <path d="M20 0H66" />
                </g>
                <g className="arm-j3">
                  <g transform="translate(237 104) rotate(15)">
                    <rect x="8" y="-9" width="10" height="18" rx="2" />
                    <path className="arm-jaw-top" d="M18 -6L32 -11L42 -5" />
                    <path className="arm-jaw-bottom" d="M18 6L32 11L42 5" />
                  </g>
                  <circle cx="237" cy="104" r="10" />
                  <circle className="arm-joint" cx="237" cy="104" r="2.5" />
                </g>
                <circle cx="150" cy="81" r="16" />
                <circle cx="150" cy="81" r="8" />
                <circle className="arm-joint" cx="150" cy="81" r="3" />
              </g>
              <circle cx="110" cy="150" r="20" />
              <circle cx="110" cy="150" r="12" />
              <circle className="arm-joint" cx="110" cy="150" r="3" />
            </g>
          </g>
          <g className="arm-labels">
            <text x="58" y="146">J1</text>
            <text x="122" y="62">J2</text>
            <text x="244" y="92">J3</text>
            <text x="290" y="144">H</text>
          </g>
        </svg>
      </div>
      <figcaption>
        <p>Programmed with Arduino.</p>
        <span className="micro">
          <span>FIG. 02 — ROBOTIC ARM</span>
          <span>SIDE ELEVATION</span>
        </span>
      </figcaption>
    </figure>
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
    <section className="section about" id="about" data-rule>
      <SectionLabel number="03">ABOUT</SectionLabel>
      <div className="about-layout">
        <h2 data-reveal="lines">
          <span className="line">
            <span>Beyond</span>
          </span>
          <span className="line">
            <span className="serif">the studies.</span>
          </span>
        </h2>
        <div>
          <p className="about-lead" data-reveal>
            Who am I beyond
            <br />
            the degree.
          </p>
          <p className="section-description" data-reveal>
            I'm someone whose always open to learn more, that is probably why I love
            interacting with different people from all around the world. It teaches you
            how different cultures approach things uniquely.
            Navigating multiple viewpoints enhances my ability to analyze situations 
            from various angles, a skill directly applicable to engineering.
            My interests outside of engineering are plenty, traveling, music, books and videogames
            are up there.
          </p>
          <p className="micro" data-reveal>
            BECOME WHO YOU ARE - Nietzsche, Thus Spoke Zarathustra
          </p>
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
    <section className="section contact" id="contact" data-rule>
      <SectionLabel number="04">CONTACT</SectionLabel>
      <div className="contact-heading">
        <h2 data-reveal="lines">
          <span className="line">
            <span>Good things start</span>
          </span>
          <span className="line">
            <span>
              with a <span className="serif">conversation.</span>
            </span>
          </span>
        </h2>
        <span className="contact-arrow" aria-hidden="true" data-reveal>
          ↗
        </span>
      </div>
      <div className="contact-links glass" data-reveal>
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
      <footer data-reveal>
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
