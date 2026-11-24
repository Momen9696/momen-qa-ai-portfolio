import { asset, services } from '../content'

export function ServicesPage() {
  return (
    <>
      <p className="eyebrow">How an engagement is framed</p>
      <h1>Services</h1>
      <p className="lede">
        These are offers built from the same kind of work as the six demonstration repositories.
        They are not a claim that a client has already bought them. Scope, exclusions, and
        prerequisites are part of the offer so a project does not silently grow into production
        access or a safety guarantee.
      </p>
      {services.map((service) => (
        <article className="service" key={service.slug} id={service.slug}>
          <img src={asset(service.graphic)} alt="" width="88" height="88" />
          <h2>{service.title}</h2>
          <p>{service.problem}</p>
          <h3>Scope</h3>
          <ul>
            {service.scope.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3>Deliverables</h3>
          <ul>
            {service.deliverables.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3>Technology</h3>
          <ul className="chips">
            {service.technology.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3>Expected engagement</h3>
          <p>{service.engagement}</p>
          <h3>Exclusions</h3>
          <ul>
            {service.exclusions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3>Client prerequisites</h3>
          <ul>
            {service.prerequisites.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </>
  )
}
