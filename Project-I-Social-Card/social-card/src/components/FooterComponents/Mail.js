import React, { useState, useEffect } from 'react';
import './Footer.css';









function Mail () {




   











    // mail function
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div className = "mailButton">
      
      <a className = "mailButton" onClick={() => setCount(count + 1)}>
      <img className = "mail" src = "https://upload.wikimedia.org/wikipedia/commons/8/8b/PICOL_icon_Mail.svg"/>
      </a>
      <p className = "count">  {count}</p>
    </div>
  );
}

export default Mail;