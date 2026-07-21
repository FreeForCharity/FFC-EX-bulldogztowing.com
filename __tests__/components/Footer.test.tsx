import React from 'react'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import Footer from '../../src/components/footer'

// Extend Jest matchers
expect.extend(toHaveNoViolations)

describe('Footer component', () => {
  it('should render the footer', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
  })

  it('should display Quick Links section', () => {
    render(<Footer />)
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
  })

  it('should display Contact section heading', () => {
    render(<Footer />)
    // Footer has a Contact heading; assert by role to disambiguate from the link list.
    expect(screen.getByRole('heading', { name: /^Contact$/i })).toBeInTheDocument()
  })

  it('should display the business phone number as a tel: link', () => {
    render(<Footer />)
    const links = screen.getAllByRole('link')
    const telLink = links.find((link) => link.getAttribute('href')?.startsWith('tel:'))
    expect(telLink).toBeDefined()
    expect(telLink?.textContent).toMatch(/\(717\) 495-7703/)
  })

  it('should display the office phone number as a tel: link', () => {
    render(<Footer />)
    const links = screen.getAllByRole('link')
    const officeTelLink = links.find((link) => link.getAttribute('href') === 'tel:+17174953065')
    expect(officeTelLink).toBeDefined()
    expect(officeTelLink?.textContent).toMatch(/\(717\) 495-3065/)
  })

  it('should display the current year in copyright', () => {
    render(<Footer />)
    const currentYear = new Date().getFullYear()
    expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument()
  })

  it('should reference Bulldogz Towing in copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/Bulldogz Towing/i)).toBeInTheDocument()
  })

  it('should not have accessibility violations', async () => {
    const { container } = render(<Footer />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
