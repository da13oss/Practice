import React from 'react';
import Subcontent from './Subcontent';
import Advertisement from './Advertisement';

function MainContent() {
  return (
    <div className="main-content">
      <div className="subcontent-container">
        <Subcontent />
        <Subcontent />
        <Subcontent />
      </div>
      <Advertisement />
    </div>
  );
}

export default MainContent;
