import { Link } from 'react-router-dom'
import { asset, profile, projects, services, skills } from '../content'

export function Home() {
  return (
    <>
      <section className="hero">
        <p className="eyebrow">Public repositories, re-run on 24 November 2026</p>
        <h1>{profile.name}</h1>
        <p className="role">{profile.title}</p>
        <p className="lede">{profile.intro}</p>
        <div className="hero-actions">
          <Link className="button" to="/projects">
            View the six projects
          </Link>
          <a className="button ghost" href={profile.github}>
            GitHub profile
          </a>
        </div>
        <p className="meta">
          {profile.location}. Contact details beyond GitHub are left as placeholders until you add
          them.
        </p>
      </section>

      <section>
        <h2>Technical skills shown in the repositories</h2>
        <ul className="chips">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <section>
        <div className="section-head">
          <h2>Featured projects</h2>
          <Link to="/projects">All projects</Link>
        </div>
        <div className="cards">
          {projects.map((project) => (
            <article className="card" key={project.slug}>
              <img src={asset(project.thumb)} alt="" />
              <p className="eyebrow">{project.number}</p>
              <h3>
                <Link to={`/projects/${project.slug}`}>{project.title}</Link>
              </h3>
              <p>{project.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="section-head">
          <h2>Services</h2>
          <Link to="/services">Engagement notes</Link>
        </div>
        <div className="service-row">
          {services.map((service) => (
            <article key={service.slug}>
              <img src={asset(service.graphic)} alt="" width="72" height="72" />
              <h3>{service.title}</h3>
              <p>{service.problem}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
