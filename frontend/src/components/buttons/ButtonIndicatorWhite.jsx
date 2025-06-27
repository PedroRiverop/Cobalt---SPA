import React, { useState } from 'react';
import './ButtonIndicatorWhite.css';
import { useNavigate } from 'react-router-dom';

function ScrollIndicatorHorizontal({ to }) {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <div
      className={`scroll-horizontal-container-white ${hover ? 'hovered' : ''}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleClick}
    >
      <div className="scroll-horizontal-circle-white">
        <svg className="scroll-horizontal-arrow-white" viewBox="0 0 72 24">
          <path d="M0 12h42 M44 12l-4-4 M44 12l-4 4" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

export default ScrollIndicatorHorizontal;
