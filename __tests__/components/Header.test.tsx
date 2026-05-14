import React from 'react'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import Header from '../../src/components/header'

// Extend Jest matchers
expect.extend(toHaveNoViolations)

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/'),
}))

describe('Header component', () => {
  it('should render the header', () => {
    render(<Header />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('should link the logo to the home page', () => {
    render(<Header />)
    expect(screen.getByLabelText(/Bulldogz Towing home/i)).toBeInTheDocument()
  })

  it('should display Home navigation link', () => {
    render(<Header />)
    expect(screen.getByText('Home')).toBeInTheDocument()
  })

  it('should have navigation links', () => {
    render(<Header />)
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThan(0)
  })

  it('should have a click-to-call link with the business phone number', () => {
    render(<Header />)
    const links = screen.getAllByRole('link')
    const telLink = links.find((link) => link.getAttribute('href')?.startsWith('tel:'))
    expect(telLink).toBeDefined()
    expect(telLink?.getAttribute('href')).toContain('17174957703')
  })

  it('should have a mobile menu toggle button', () => {
    render(<Header />)
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBeGreaterThan(0)
  })

  it('should not have accessibility violations', async () => {
    const { container } = render(<Header />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
