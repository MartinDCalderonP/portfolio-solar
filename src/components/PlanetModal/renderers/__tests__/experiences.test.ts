import { createExperienceCard, renderExperiences } from '../experiences'

import type { Experience } from '@/types'

describe('createExperienceCard', () => {
  test('creates card with title, date range, and description', () => {
    const card = createExperienceCard({
      description: 'My role',
      endDate: '2023',
      id: 'exp1',
      startDate: '2020',
      title: 'Software Engineer'
    })

    expect(card.className).toBe('project-card')
    expect(card.querySelector('.project-card-title')!.textContent).toBe(
      'Software Engineer'
    )
    expect(card.querySelector('.experience-date')!.textContent).toBe(
      '2020 - 2023'
    )
    expect(card.querySelector('.project-card-description')!.textContent).toBe(
      'My role'
    )
  })

  test('creates card without description element', () => {
    const card = createExperienceCard({
      endDate: '2023',
      id: 'exp2',
      startDate: '2020',
      title: 'Engineer'
    })

    expect(card.querySelector('.project-card-description')).toBeNull()
  })
})

describe('renderExperiences', () => {
  test('renders experiences sorted by startDate descending', () => {
    const container = document.createElement('div')
    const experiences: Experience[] = [
      {
        endDate: 'Diciembre 2020',
        id: '1',
        startDate: 'Enero 2019',
        title: 'Older'
      },
      {
        endDate: 'Diciembre 2023',
        id: '2',
        startDate: 'Marzo 2021',
        title: 'Newer'
      }
    ]

    renderExperiences({ container, experiences })

    const titles = container.querySelectorAll('.project-card-title')

    expect(titles).toHaveLength(2)
    expect(titles[0].textContent).toBe('Newer')
    expect(titles[1].textContent).toBe('Older')
  })

  test('renders same-year experiences sorted by month descending', () => {
    const container = document.createElement('div')
    const experiences: Experience[] = [
      {
        endDate: 'Diciembre 2023',
        id: '1',
        startDate: 'Marzo 2023',
        title: 'Earlier in Year'
      },
      {
        endDate: 'Diciembre 2023',
        id: '2',
        startDate: 'Junio 2023',
        title: 'Later in Year'
      }
    ]

    renderExperiences({ container, experiences })

    const titles = container.querySelectorAll('.project-card-title')

    expect(titles).toHaveLength(2)
    expect(titles[0].textContent).toBe('Later in Year')
    expect(titles[1].textContent).toBe('Earlier in Year')
  })

  test('renders empty experiences list', () => {
    const container = document.createElement('div')

    renderExperiences({ container, experiences: [] })

    expect(container.children).toHaveLength(0)
  })
})
