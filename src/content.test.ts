import { describe, expect, it } from 'vitest'
import { projects, services } from './content'

const allowedGithub = new Set([
  'https://github.com/Momen9696/enterprise-api-automation-framework',
  'https://github.com/Momen9696/enterprise-playwright-ui-automation',
  'https://github.com/Momen9696/enterprise-llm-testing-framework',
  'https://github.com/Momen9696/ai-powered-test-case-generator',
  'https://github.com/Momen9696/enterprise-cicd-test-automation-platform',
  'https://github.com/Momen9696/enterprise-api-performance-testing-framework',
])

describe('portfolio facts', () => {
  it('publishes exactly the six verified repositories', () => {
    expect(projects).toHaveLength(6)
    expect(new Set(projects.map((project) => project.github))).toEqual(allowedGithub)
  })

  it('keeps evidence, limits, and setup on every project', () => {
    for (const project of projects) {
      expect(project.evidenceNotes.length).toBeGreaterThan(0)
      expect(project.limitations.length).toBeGreaterThan(0)
      expect(project.shots.length).toBeGreaterThan(0)
      expect(project.setup.length).toBeGreaterThan(0)
      expect(project.summary.toLowerCase()).not.toContain('client delivered')
    }
  })

  it('defines six services without a made-up price', () => {
    expect(services).toHaveLength(6)
    const blob = JSON.stringify(services)
    expect(blob).not.toMatch(/\$\d+/)
  })
})
