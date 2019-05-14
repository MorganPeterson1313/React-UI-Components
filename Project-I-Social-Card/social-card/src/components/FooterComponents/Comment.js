import React, { useState, useEffect } from 'react';
import './Footer.css';

function Comments () {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div className = "commentButton">
      
      <a className = "commentButton" onClick={() => setCount(count + 1)}>
      <img className = "comment" src = "https://upload.wikimedia.org/wikipedia/commons/d/d1/VisualEditor_-_Icon_-_Comment.svg"/>
      </a>
      <p className = "count">  {count}</p>
    </div>
  );
}

export default Comments;