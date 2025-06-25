import React, { useState } from 'react';
import './ButtonIndicator.css';
import { useNavigate } from 'react-router-dom';

function ScrollIndicatorHorizontal({ to }) {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <div
      className={`scroll-horizontal-container ${hover ? 'hovered' : ''}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleClick}
    >
      <div className="scroll-horizontal-circle">
        <svg className="scroll-horizontal-arrow" viewBox="0 0 72 24">
          <path d="M-5 12h42 M40 12l-4-4 M40 12l-4 4" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

export default ScrollIndicatorHorizontal;
