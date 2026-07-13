import { createProjectCard, renderProjects } from '../projects'

import type { Project } from '@/types'

describe('createProjectCard', () => {
  test('returns link element when no year and single link', () => {
    const result = createProjectCard({
      id: '1',
      links: ['https://github.com/user/repo'],
      title: 'Proj'
    })

    expect(result.tagName).toBe('A')
    expect(result.className).toBe('link-button')
  })

  test('returns link wrapper when no year and multiple links', () => {
    const result = createProjectCard({
      id: '2',
      links: ['https://github.com/user/repo', 'https://example.com'],
      title: 'Proj'
    })

    expect(result.className).toBe('project-card-links')
    expect(result.children).toHaveLength(2)
    expect(result.children[0].tagName).toBe('A')
    expect(result.children[1].tagName).toBe('A')
  })

  test('returns chip when no year and no links', () => {
    const result = createProjectCard({
      id: '3',
      title: 'Skill'
    })

    expect(result.className).toBe('chip')
    expect(result.textContent).toBe('Skill')
    expect(result.querySelector('.chip-level')!.textContent).toBe('')
  })

  test('creates full project card with all fields', () => {
    const result = createProjectCard({
      description: 'A project',
      id: '4',
      links: ['https://github.com/user/repo'],
      logo: '/logo.png',
      title: 'My Project',
      year: 2024
    })

    expect(result.className).toBe('project-card')
    expect(
      result.querySelector('.project-card-image')!.querySelector('img')!
    ).not.toBeNull()
    expect(
      result.querySelector('.project-card-image img')!.getAttribute('src')
    ).toBe('/logo.png')
    expect(result.querySelector('.project-card-title')!.textContent).toBe(
      'My Project (2024)'
    )
    expect(result.querySelector('.project-card-description')!.textContent).toBe(
      'A project'
    )
    expect(result.querySelectorAll('.link-button')).toHaveLength(1)
  })

  test('creates card without image when no logo', () => {
    const result = createProjectCard({
      id: '5',
      title: 'No Logo',
      year: 2023
    })

    expect(result.className).toBe('project-card')
    expect(result.querySelector('.project-card-image')).toBeNull()
    expect(result.querySelector('.project-card-title')!.textContent).toBe(
      'No Logo (2023)'
    )
  })

  test('creates card without link elements when no links array', () => {
    const result = createProjectCard({
      id: '6',
      title: 'No Links',
      year: 2022
    })

    expect(result.querySelectorAll('.link-button')).toHaveLength(0)
  })
})

describe('renderProjects', () => {
  test('renders projects sorted by year descending', () => {
    const container = document.createElement('div')
    const projects: Project[] = [
      { id: '1', title: 'Older', year: 2020 },
      { id: '2', title: 'Newer', year: 2022 }
    ]

    renderProjects({ container, projects })

    const titles = container.querySelectorAll('.project-card-title')

    expect(titles).toHaveLength(2)
    expect(titles[0].textContent).toContain('Newer')
    expect(titles[1].textContent).toContain('Older')
  })

  test('renders empty projects list', () => {
    const container = document.createElement('div')

    renderProjects({ container, projects: [] })

    expect(container.children).toHaveLength(0)
  })
})
