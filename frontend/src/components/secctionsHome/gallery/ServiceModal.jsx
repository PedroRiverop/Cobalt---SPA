import React from 'react';
import './ServiceModal.css';

function ServiceModal({ onClose, content = [] }) {
  return (
    <div className="modal-overlay-services" onClick={onClose}>
      <div className="modal-content-services" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-services" onClick={onClose}>✕</button>
        {content.map((item, index) => (
          <div key={index} className="modal-service-block">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceModal;
