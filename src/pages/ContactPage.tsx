import { profile, projects } from '../content'

export function ContactPage() {
  return (
    <>
      <p className="eyebrow">Contact</p>
      <h1>Start from the work that already runs</h1>
      <p className="lede">
        {profile.name} is based in {profile.location}. The public GitHub account is{' '}
        <a href={profile.github}>{profile.githubLogin}</a>. An email address and an Upwork profile
        URL are not published here.
      </p>
      <dl className="facts">
        <div>
          <dt>Email</dt>
          <dd>Add your preferred contact email</dd>
        </div>
        <div>
          <dt>Upwork</dt>
          <dd>Add your Upwork profile URL</dd>
        </div>
        <div>
          <dt>GitHub</dt>
          <dd>
            <a href={profile.github}>{profile.github}</a>
          </dd>
        </div>
        <div>
          <dt>Location</dt>
          <dd>{profile.location}, as listed on the public GitHub profile</dd>
        </div>
      </dl>
      <h2>Repositories</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.slug}>
            <a href={project.github}>{project.title}</a>
          </li>
        ))}
      </ul>
    </>
  )
}
