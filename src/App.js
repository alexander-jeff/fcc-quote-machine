import React, { useState, useEffect } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')    
  
  const getQuote = async () => {
    const response = await fetch('https://api.quotable.io/random')
    const data = await response.json()
    const { content, author } = data
    setQuote(content)
    setAuthor(author)
  }

  const getTweetUrl = () => {
    const encodedQuote = encodeURIComponent(quote)
    const url = `https://twitter.com/intent/tweet?text=${encodedQuote}`
    return url
  }


  useEffect(() => {
    getQuote()
  }, [])

  return (
    <div id="quote-box">
      <div id="text">
        <FontAwesomeIcon className="left-quote" icon={faQuoteLeft} />
        <div className="quoted">{quote || `loading...`}</div>
        {/* /<FontAwesomeIcon className="right-quote" icon={faQuoteRight} /> */}
      </div>
      <div id="author">{author || `loading...`}</div>
      <a id="tweet-quote" href={getTweetUrl()}>
        Tweet this quote
      </a>
      <button id="new-quote" onClick={getQuote}>New Quote</button>
    </div>
  )
}

export default App
