import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Shell } from './components/Shell'
import { ContactPage } from './pages/ContactPage'
import { Home } from './pages/Home'
import { ProjectDetail, ProjectIndex } from './pages/ProjectPage'
import { ServicesPage } from './pages/ServicesPage'

function basename(): string {
  const base = import.meta.env.BASE_URL
  if (base === '/') return '/'
  return base.replace(/\/$/, '')
}

export default function App() {
  return (
    <BrowserRouter basename={basename()}>
      <Routes>
        <Route element={<Shell />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<ProjectIndex />} />
          <Route path="projects/:slug" element={<ProjectDetail />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route
            path="*"
            element={
              <>
                <h1>Page not found</h1>
                <p>The portfolio has a home page, projects, services, and contact.</p>
              </>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
