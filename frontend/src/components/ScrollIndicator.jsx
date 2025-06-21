import React, { useState } from 'react';
import './ScrollIndicator.css';

function ScrollIndicator({ targetId }) {
  const [hover, setHover] = useState(false);

  const handleClick = () => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`scroll-indicator-container ${hover ? 'hovered' : ''}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleClick}
    >
      <div className="scroll-circle">
        <svg className="scroll-arrow" viewBox="0 0 24 72">
          <path d="M12 0v42 M12 42l-4-4 M12 42l4-4" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

export default ScrollIndicator;

