import { render } from '@testing-library/react'
import App from './App'

test(`I can see a wrapper element with id='quote-box'`, () => {
  render(<App />)
  const target = document.getElementById('quote-box')
  expect(target).toBeInTheDocument()
})

test(`#quote-box contains a clickable <a> element with id='tweet-quote'`, () => {
  render(<App />)
  const target = document.getElementById('tweet-quote')
  expect(target).toBeInTheDocument()
  expect(target).toBeInstanceOf(HTMLAnchorElement)
  expect(target).toHaveAttribute('href', expect.stringContaining('twitter.com/intent/tweet'))
})
