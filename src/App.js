import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    setWordCount(newText.trim().split(/\s+/).filter(word => word !== '').length);
  };

  return (
    <div className="App">
      <h1>Word Counter</h1>
      <textarea
        rows="10"
        cols="50"
        value={text}
        onChange={handleTextChange}
        placeholder="Paste your text here..."
      />
      <p>Word count: {wordCount}</p>
    </div>
  );
}

export default App;