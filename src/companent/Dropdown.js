import React from 'react'

export default function Dropdown({ placeHolder}) {
    const getDisplay = () => {
        return placeHolder;
      };
  return (
    <div className="dropdown-container">
    <div className="dropdown-input">
      <div className="dropdown-selected-value">{getDisplay()}</div>
      
      <div className="dropdown-tools">
        <div className="dropdown-tool">
          
        </div>
      </div>
    </div>
  </div>
  )
}
