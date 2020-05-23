import React from 'react';
import { render } from '@testing-library/react';
import App from './App.css'

afterEach(cleanup)
test('It has to contain header2', () => {
  render(
    <div>
      <App />
    </div>
  )
  const headerClass = header2().type.styledComponentId
  const MyHeaderRoots = document.getElementsByClassName(headerClass)
  const style = window.getComputedStyle(MyHeaderRoots[0])
  expect(style.margin-bottom).toBe('100px')
})
