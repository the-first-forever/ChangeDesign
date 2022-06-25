import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Button from './Button'

describe('test button component', () => {
  it('renders in the default button.', () => {
    render(<Button>hello</Button>)
    const element = screen.getByText('hello')
    expect(element).toBeTruthy()
    expect(element).toBeInTheDocument()
    expect(element.tagName).toBe('BUTTON')
  })
})
