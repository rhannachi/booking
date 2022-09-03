import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from '.'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Button>Button</Button>)

    const heading = screen.getByText('Button')

    expect(heading).toBeInTheDocument()
  })
})
