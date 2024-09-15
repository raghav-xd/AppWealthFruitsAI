import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FaqPage.css'

const FaqPage = () => {
  const [faqs, setFaqs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch FAQs from the backend API
    axios.get('http://127.0.0.1:8000/api/faqs/')
      .then(response => {
        setFaqs(response.data);
      })
      .catch(error => {
        setError('Error fetching FAQs');
      });
  }, []);

  return (
    <div className="faq-page">
      <h1>Frequently Asked Questions</h1>
      {error && <p>{error}</p>}
      <div className="faq-list">
        {faqs.map(faq => (
          <div key={faq.id} className="faq-item">
            <h2>{faq.question}</h2>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqPage;
