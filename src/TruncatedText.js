import React, { useState } from 'react';
import './App.css';

const TruncatedText = ({ text}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };



  return (
    <div>
      <div style={{ whiteSpace: expanded ? 'pre-wrap' : 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        {text}
      </div>
      
        <div className='button'>
        <button onClick={toggleExpansion} classname="button">
          {expanded ? 'Show Less' : 'Show More'}
        </button>
        </div>
      
    </div>
  );
};

export default TruncatedText;