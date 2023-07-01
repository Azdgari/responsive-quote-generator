import React from 'react';
import './quote-generator.css'
import { ReactComponent as RefreshIcon } from '../../assets/icons/icon-refresh.svg';

const QuoteGenerator = () => {
  const [data, setData] = React.useState(null);

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const { statusCode, statusMessage, ...data } = await response.json();
      if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`);
      setData(data);
    } catch (error) {
      console.log(error);
      setData({ content: 'Error fetching quote' });
    }
  }

  React.useEffect(() => {
    fetchQuote();
  }, []);

  if (!data) return null;

  return (
    <div className="upper-container">
      <div className="quotes">
        <p id="quote-body">{data.content}</p>
        <h2 id="author">{data.author}</h2>

      </div>
      <div className="button-container">
        <button className="refresh" onClick={fetchQuote}>
          <RefreshIcon className="refresh-icon" />
        </button>
      </div>
    </div>
  )
}


export default QuoteGenerator