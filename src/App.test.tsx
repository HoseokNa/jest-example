import React from 'react'
import { render, screen } from '@testing-library/react'
import App, { add, Login } from './App'
import ReactDOM from 'react-dom'

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

describe('Login component tests', () => {
  let container: HTMLDivElement

  // beforeEach: 이 파일의 각 테스트가 실행되기 전에 이 함수를 실행합니다. 함수가 promise를 반환하거나 생성자인 경우, jest는 테스트를 실행하기 전에 해당 promise가 해결될 때까지 기다립니다.
  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
    ReactDOM.render(<Login />, container)
  })

  // 테스트가 서로 방해되지 않도록 마지막에 모든 것을 초기화합니다.
  afterEach(() => {
    document.body.removeChild(container)
    container.remove()
  })

  // 각 입력 필드를 렌더링하기 위한 테스트를 실행합니다.
  it('Renders all input fields correctly', () => {
    // 입력 필드를 선택합니다.
    const inputs = container.querySelectorAll('input')
    // 입력 필드가 올바르게 렌더링되었는지 확인합니다.
    expect(inputs).toHaveLength(2)

    // 첫 번째 입력 필드 및 두 번째 입력 필드를 각각 "이메일" 및 "암호"인지 확인합니다.
    expect(inputs[0].name).toBe('email')
    expect(inputs[1].name).toBe('password')
  })

  // 각 버튼을 렌더링하기 위한 테스트를 실행합니다.
  it('Renders all buttons correctly', () => {
    const buttons = container.querySelectorAll('button')
    expect(buttons).toHaveLength(2)

    expect(buttons[0].type).toBe('button')
    expect(buttons[1].type).toBe('button')
  })
})
