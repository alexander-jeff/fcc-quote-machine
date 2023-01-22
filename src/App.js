import React, { useState, useEffect } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')

  const getQuote = async () => {
    const response = await fetch(
      'https://gist.githubusercontent.com/alexander-jeff/75c996a2e1305b9c8fbeac5f84c76706/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
    )
    const responseData = await response.json()
    const { quotes } = responseData

    const randomIndex = Math.floor(Math.random() * quotes.length)
    const data = quotes[randomIndex]

    const { quote, author } = data
    setQuote(quote)
    setAuthor(author)
  }

  const getTweetUrl = () => {
    const tweetString = quote + '\n—' + author
    const encodedQuote = encodeURIComponent(tweetString)
    const url = `https://twitter.com/intent/tweet?text=${encodedQuote}`
    return url
  }

  useEffect(() => {
    getQuote()
  }, [])

  return (
    <div id='quote-box'>
      <div id='text'>
        <FontAwesomeIcon
          className='left-quote'
          icon={faQuoteLeft}
        />
        <div className='quoted'>{quote || `loading...`}</div>
        {/* /<FontAwesomeIcon className="right-quote" icon={faQuoteRight} /> */}
      </div>
      <div id='author'>{author || `loading...`}</div>
      <a
        id='tweet-quote'
        href={getTweetUrl()}
        target='_blank'
        rel='noopener noreferrer'
      >
        Tweet this quote
      </a>
      <button
        id='new-quote'
        onClick={getQuote}
      >
        New Quote
      </button>
    </div>
  )
}

export default App
