import { Link, useParams } from 'react-router-dom'
import { asset, projectBySlug, projects } from '../content'

export function ProjectIndex() {
  return (
    <>
      <p className="eyebrow">Case studies</p>
      <h1>Six working test-engineering systems</h1>
      <p className="lede">
        Each write-up follows the code, the tests that were re-run, and the reports already stored
        in the repository. Cover images are brand illustrations. Screenshots are captures of the
        running application or of a generated report.
      </p>
      <div className="cards">
        {projects.map((project) => (
          <article className="card" key={project.slug}>
            <img src={asset(project.cover)} alt="" />
            <p className="eyebrow">{project.number}</p>
            <h2>
              <Link to={`/projects/${project.slug}`}>{project.title}</Link>
            </h2>
            <p>{project.value}</p>
          </article>
        ))}
      </div>
    </>
  )
}

function List({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export function ProjectDetail() {
  const { slug } = useParams()
  const project = projectBySlug(slug)

  if (!project) {
    return (
      <>
        <h1>Project not found</h1>
        <p>
          <Link to="/projects">Back to projects</Link>
        </p>
      </>
    )
  }

  return (
    <article className="study">
      <p className="eyebrow">Project {project.number}</p>
      <h1>{project.title}</h1>
      <p className="lede">{project.summary}</p>
      <p>
        <a className="button" href={project.github}>
          GitHub repository
        </a>{' '}
        <a className="button ghost" href={project.ciUrl}>
          Latest verified CI run
        </a>
      </p>
      <img
        className="cover"
        src={asset(project.cover)}
        alt={`Abstract illustration for ${project.title}. Not a product screenshot.`}
      />

      <h2>Problem</h2>
      <p>{project.problem}</p>
      <h2>Business value</h2>
      <p>{project.value}</p>

      <h2>Architecture</h2>
      <img src={asset(project.diagram)} alt="" />
      <p>{project.diagramCaption}</p>

      <h2>Technology stack</h2>
      <ul className="chips">
        {project.stack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>Key capabilities</h2>
      <List items={project.capabilities} />
      <h2>Testing strategy</h2>
      <List items={project.strategy} />
      <h2>Verification evidence</h2>
      <List items={project.evidenceNotes} />
      <div className="shots">
        {project.shots.map((shot) => (
          <figure key={shot.src}>
            <img src={asset(shot.src)} alt={shot.alt} />
            <figcaption>{shot.caption}</figcaption>
          </figure>
        ))}
      </div>

      <h2>Setup and demo</h2>
      <pre>
        <code>{project.setup.join('\n')}</code>
      </pre>
      <h2>Security considerations</h2>
      <List items={project.security} />
      <h2>Known limitations</h2>
      <List items={project.limitations} />
    </article>
  )
}
