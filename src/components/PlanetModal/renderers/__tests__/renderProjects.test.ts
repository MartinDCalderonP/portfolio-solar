import { renderProjects } from '../projects'

import type { Project } from '@/types'

describe('renderProjects', () => {
  test('renders projects sorted by year descending', () => {
    const container = document.createElement('div')
    const projects: Project[] = [
      { id: '1', title: 'Older', year: 2020 },
      { id: '2', title: 'Newer', year: 2022 }
    ]

    renderProjects({ container, projects })

    const titles = container.querySelectorAll('.project-card-title')
    const [firstTitle, secondTitle] = titles
    const { textContent: firstText } = firstTitle
    const { textContent: secondText } = secondTitle

    expect(titles).toHaveLength(2)
    expect(firstText).toContain('Newer')
    expect(secondText).toContain('Older')
  })

  test('renders empty projects list', () => {
    const container = document.createElement('div')
    const { children } = container

    renderProjects({ container, projects: [] })

    expect(children).toHaveLength(0)
  })

  test('sorts projects with null year to the end', () => {
    const container = document.createElement('div')
    const { children } = container
    const projects: Project[] = [
      { id: '1', title: 'With Year', year: 2022 },
      { id: '2', title: 'No Year' }
    ]

    renderProjects({ container, projects })

    expect(children).toHaveLength(2)
    const [firstChild, secondChild] = children
    const projectCardTitle = firstChild.querySelector('.project-card-title')!
    const { textContent: firstText } = projectCardTitle
    const { className: secondClassName, textContent: secondText } = secondChild

    expect(firstText).toContain('With Year')
    expect(secondClassName).toBe('chip')
    expect(secondText).toContain('No Year')
  })

  test('sorts with null year as first element', () => {
    const container = document.createElement('div')
    const { children } = container
    const projects: Project[] = [
      { id: '2', title: 'No Year' },
      { id: '1', title: 'With Year', year: 2022 }
    ]

    renderProjects({ container, projects })

    expect(children).toHaveLength(2)
    const [firstChild, secondChild] = children
    const projectCardTitle = firstChild.querySelector('.project-card-title')!
    const { textContent: firstText } = projectCardTitle
    const { textContent: secondText } = secondChild

    expect(firstText).toContain('With Year')
    expect(secondText).toContain('No Year')
  })
})
