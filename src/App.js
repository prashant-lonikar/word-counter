import React, { useState, useEffect } from 'react';

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

    setTopRealWords(Object.entries(realWordFrequency).sort((a, b) => b[1] - a[1]).slice(0, 5));
    setTopStopWords(Object.entries(stopWordFrequency).sort((a, b) => b[1] - a[1]).slice(0, 5));
  }, [text]);

  const TableComponent = ({ title, data }) => (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Word</th>
            <th className="border border-gray-300 px-4 py-2">Count</th>
          </tr>
        </thead>
        <tbody>
          {data.map(([word, count], index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="border border-gray-300 px-4 py-2">{word}</td>
              <td className="border border-gray-300 px-4 py-2">{count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-5xl sm:mx-auto w-full px-4 sm:px-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-4xl mx-auto">
            <div>
              <h1 className="text-3xl font-semibold text-center mb-6">Enhanced Word Counter</h1>
            </div>
            <div className="space-y-6">
              <textarea
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                rows="8"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Paste your text here..."
              />
              <div className="flex justify-between text-lg">
                <p><span className="font-semibold">Word count:</span> {wordCount}</p>
                <p><span className="font-semibold">Character count:</span> {charCount}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TableComponent title="Top 5 Most Common Words" data={topRealWords} />
                <TableComponent title="Top 5 Most Common Stop Words" data={topStopWords} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;