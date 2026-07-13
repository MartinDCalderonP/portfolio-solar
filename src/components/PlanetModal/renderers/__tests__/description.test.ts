import { renderDescription } from '../description'

interface DescriptionCase {
  expectedContents: string[]
  expectedCount: number
  text: string
}

describe('renderDescription', () => {
  const CASES: DescriptionCase[] = [
    {
      text: 'line1\nline2\nline3',
      expectedCount: 3,
      expectedContents: ['line1', 'line2', 'line3']
    },
    {
      text: 'single line',
      expectedCount: 1,
      expectedContents: ['single line']
    },
    {
      text: '',
      expectedCount: 1,
      expectedContents: ['']
    }
  ]

  test.each(CASES)(
    'splits "$text" into $expectedCount paragraph(s)',
    ({ expectedContents, expectedCount, text }) => {
      const container = document.createElement('div')

      renderDescription({ container, text })

      const paragraphs = container.querySelectorAll(
        '.modal-description-paragraph'
      )

      expect(paragraphs).toHaveLength(expectedCount)
      expectedContents.forEach((content, index) => {
        expect(paragraphs[index].innerHTML).toBe(content)
      })
    }
  )
})
