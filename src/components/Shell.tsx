import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { asset, profile } from '../content'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Projects', end: false },
  { to: '/services', label: 'Services', end: false },
  { to: '/contact', label: 'Contact', end: false },
]

export function Shell() {
  const [open, setOpen] = useState(false)

  return (
    <div className="site">
      <a className="skip" href="#content">
        Skip to content
      </a>
      <header className="top">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <img src={asset('brand/logo.jpg')} alt="" width="36" height="36" />
          <span>
            <strong>{profile.name}</strong>
            <small>QA automation and AI testing</small>
          </span>
        </NavLink>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </button>
        <nav className={open ? 'open' : ''} aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main id="content">
        <Outlet />
      </main>
      <footer className="foot">
        <p>
          Demonstration repositories by {profile.name}. They show how the work is built and
          measured. They are not client deliveries and they do not include testimonials.
        </p>
        <p>
          <a href={profile.github}>{profile.githubLogin} on GitHub</a>
        </p>
      </footer>
    </div>
  )
}
