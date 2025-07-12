import { render, screen } from '@testing-library/react'
import About from './About'
/// <reference types="vitest" />
import '@testing-library/jest-dom'

describe('About Component', () => {
  it('renders heading correctly', () => {
    render(<About />)
    const heading = screen.getByText(/About Me/i)
    expect(heading).toBeInTheDocument()
  })

  it('renders paragraph content', () => {
    render(<About />)
    const paragraph = screen.getByText(/diverse background in the electronics and electrical industry/i)
    expect(paragraph).toBeInTheDocument()
  })

  it('has correct styling classes', () => {
    const { container } = render(<About />)
    const section = container.querySelector('section')
    expect(section).toHaveClass('my-[170px]')
  })
})
