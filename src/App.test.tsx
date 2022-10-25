import React from 'react'
import { render, screen } from '@testing-library/react'
import App, { add } from './App'

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})

describe('add function', () => {
  describe('when given to integers', () => {
    it('should return a add result', () => {
      const [a, b, expected] = [5, 8, 13]
      const result = add(a, b)

      expect(result).toEqual(expected)
    })
  })
})
