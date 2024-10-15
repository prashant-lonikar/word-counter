import React, { useState, useEffect } from 'react';
import './App.css';

// List of common stop words
const stopWords = new Set(["i", "me", "my", "myself", "we", "our", "ours", "ourselves", "you", "your", "yours", "yourself", "yourselves", "he", "him", "his", "himself", "she", "her", "hers", "herself", "it", "its", "itself", "they", "them", "their", "theirs", "themselves", "what", "which", "who", "whom", "this", "that", "these", "those", "am", "is", "are", "was", "were", "be", "been", "being", "have", "has", "had", "having", "do", "does", "did", "doing", "a", "an", "the", "and", "but", "if", "or", "because", "as", "until", "while", "of", "at", "by", "for", "with", "about", "against", "between", "into", "through", "during", "before", "after", "above", "below", "to", "from", "up", "down", "in", "out", "on", "off", "over", "under", "again", "further", "then", "once", "here", "there", "when", "where", "why", "how", "all", "any", "both", "each", "few", "more", "most", "other", "some", "such", "no", "nor", "not", "only", "own", "same", "so", "than", "too", "very", "s", "t", "can", "will", "just", "don", "should", "now"]);

function App() {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [topRealWords, setTopRealWords] = useState([]);
  const [topStopWords, setTopStopWords] = useState([]);

  useEffect(() => {
    const words = text.trim().toLowerCase().split(/\s+/).filter(word => word !== '');
    setWordCount(words.length);
    setCharCount(text.length);

    const realWordFrequency = {};
    const stopWordFrequency = {};

    words.forEach(word => {
      if (stopWords.has(word)) {
        stopWordFrequency[word] = (stopWordFrequency[word] || 0) + 1;
      } else {
        realWordFrequency[word] = (realWordFrequency[word] || 0) + 1;
      }
    });

    const sortedRealWords = Object.entries(realWordFrequency)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);

    const sortedStopWords = Object.entries(stopWordFrequency)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);

    setTopRealWords(sortedRealWords);
    setTopStopWords(sortedStopWords);
  }, [text]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <h1>Enhanced Word Counter</h1>
      <textarea
        rows="10"
        cols="50"
        value={text}
        onChange={handleTextChange}
        placeholder="Paste your text here..."
      />
      <div className="stats">
        <p>Word count: {wordCount}</p>
        <p>Character count: {charCount}</p>
      </div>
      <div className="word-lists">
        <div className="top-words">
          <h2>Top 5 Most Common Words</h2>
          <ul>
            {topRealWords.map(([word, count], index) => (
              <li key={index}>{word}: {count}</li>
            ))}
          </ul>
        </div>
        <div className="top-words">
          <h2>Top 5 Most Common Stop Words</h2>
          <ul>
            {topStopWords.map(([word, count], index) => (
              <li key={index}>{word}: {count}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;