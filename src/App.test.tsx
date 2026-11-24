import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it } from 'vitest'
import App from './App'
import { projects } from './content'

afterEach(() => {
  cleanup()
  window.history.pushState({}, '', '/')
})

describe('portfolio site', () => {
  it('introduces the profile and links every repository', async () => {
    const user = userEvent.setup()
    render(<App />)
    expect(
      screen.getByRole('heading', { name: "Mo'men Ali", level: 1 }),
    ).toBeInTheDocument()
    expect(screen.getByText('Senior QA Automation Engineer | AI Testing Engineer')).toBeInTheDocument()
    await user.click(screen.getByRole('link', { name: 'View the six projects' }))
    for (const project of projects) {
      expect(screen.getByRole('heading', { name: project.title })).toBeInTheDocument()
    }
  })

  it('opens a case study with its GitHub link and a real evidence image', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('link', { name: 'Enterprise API Automation Framework' }))
    expect(screen.getByRole('link', { name: 'GitHub repository' })).toHaveAttribute(
      'href',
      'https://github.com/Momen9696/enterprise-api-automation-framework',
    )
    expect(screen.getByAltText(/Robot Framework report/)).toBeInTheDocument()
    expect(screen.getByText(/23 passed/)).toBeInTheDocument()
  })
})
