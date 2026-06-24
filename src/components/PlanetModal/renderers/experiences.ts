import type { Experience } from '@/types'
import { getDateRank } from './dates'

const createExperienceCard = ({
  description,
  endDate,
  startDate,
  title
}: Experience): HTMLDivElement => {
  const card = document.createElement('div')

  card.className = 'project-card'

  const body = document.createElement('div')

  body.className = 'project-card-body'

  const titleEl = document.createElement('div')

  titleEl.className = 'project-card-title'
  titleEl.textContent = title
  body.append(titleEl)

  const dateEl = document.createElement('div')

  dateEl.className = 'experience-date'
  dateEl.textContent = `${startDate} - ${endDate}`
  body.append(dateEl)

  if (description) {
    const descriptionEl = document.createElement('div')

    descriptionEl.className = 'project-card-description'
    descriptionEl.textContent = description
    body.append(descriptionEl)
  }

  card.append(body)

  return card
}

interface RenderExperiencesParams {
  container: HTMLElement
  experiences: Experience[]
}

const renderExperiences = ({
  container,
  experiences
}: RenderExperiencesParams): void => {
  const sortedExperiences = [...experiences].sort(
    ({ startDate: a }, { startDate: b }) => {
      return getDateRank({ date: b }) - getDateRank({ date: a })
    }
  )

  sortedExperiences.forEach((experience) => {
    container.append(createExperienceCard(experience))
  })
}

export { renderExperiences }
