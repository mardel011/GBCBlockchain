import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CSS from './App.css'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('It has to contain header2', () => {
  render(
    <div>
      <CSS />
    </div>
  )
  const headerClass = header2().type.styledComponentId
  const MyHeaderRoots = document.getElementsByClassName(headerClass)
  const style = window.getComputedStyle(MyHeaderRoots[0])
  expect(style.margin-bottom).toBe('100px')
});
