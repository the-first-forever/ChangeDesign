import { render, screen } from '@testing-library/react'
import { expect, describe, it } from 'vitest'

import Button from "./Button";

describe('button component props test.', () => {
  it('default button', () => {
    render(<Button>hello</Button>)
    const element = screen.getByText('hello')
    expect(element).toHaveClass('btn btn-default')
  })

  it('danger button', () => {
    render(<Button btnType='danger'>hello</Button>)
    const element = screen.getByText('hello')
    expect(element).toHaveClass('btn btn-danger')
    expect(element.tagName).toBe('BUTTON')
  })
})