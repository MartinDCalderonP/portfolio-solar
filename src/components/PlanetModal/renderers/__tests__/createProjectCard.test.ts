import { createProjectCard } from '../projects'

describe('createProjectCard', () => {
  test('returns link element when no year and single link', () => {
    const { className, tagName } = createProjectCard({
      id: '1',
      links: ['https://github.com/user/repo'],
      title: 'Proj'
    })

    expect(tagName).toBe('A')
    expect(className).toBe('link-button')
  })

  test('returns link wrapper when no year and multiple links', () => {
    const { children, className } = createProjectCard({
      id: '2',
      links: ['https://github.com/user/repo', 'https://example.com'],
      title: 'Proj'
    })
    const [firstChild, secondChild] = children
    const { tagName: firstTagName } = firstChild
    const { tagName: secondTagName } = secondChild

    expect(className).toBe('project-card-links')
    expect(children).toHaveLength(2)
    expect(firstTagName).toBe('A')
    expect(secondTagName).toBe('A')
  })

  test('returns chip when no year and no links', () => {
    const result = createProjectCard({
      id: '3',
      title: 'Skill'
    })
    const { className, textContent } = result

    expect(className).toBe('chip')
    expect(textContent).toBe('Skill')
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
