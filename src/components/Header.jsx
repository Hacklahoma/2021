import React from 'react';
import '../styles/header.scss'
import useWindowDimensions from '../lib/useWindowDimensions';

const Header = () => {
  const { isMobile } = useWindowDimensions();

  return (
    <div className={`header ${isMobile ? 'mobile' : ''}`}>
      <div className="wires">
        <div className="tv">
          <div className="content">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
