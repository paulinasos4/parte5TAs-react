import React, { useState } from 'react';

function clickbutton() {
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(!showText);
  };

  return (
    <div>
      <button onClick={handleClick}>click</button>
      {showText && <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>}
    </div>
  );
}

export default clickbutton;