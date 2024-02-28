import React, { useState } from 'react';
import Popover from '@mui/material/Popover';
import { SketchPicker } from 'react-color'; // Import the color picker component

export default function ColorComponent({ onColorChange }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentColor, setCurrentColor] = useState('#EFEFDD'); // Initial color

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleColorChange = (color) => {
    setCurrentColor(color.hex);

    // Call the onColorChange callback when the color changes
    if (onColorChange) {
      onColorChange(color.hex);
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div style={{ width: '90%', borderRadius: '10px', border: '1px solid #6B42CA', padding: '8px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: '10px' }}>
      <div>{currentColor}</div>
      <div
        style={{ width: '25px', height: '20px', backgroundColor: currentColor, cursor: 'pointer' }}
        onClick={handleClick}
      ></div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
      >
        <SketchPicker
          color={currentColor}
          onChange={handleColorChange}
        />
      </Popover>
    </div>
  );
}