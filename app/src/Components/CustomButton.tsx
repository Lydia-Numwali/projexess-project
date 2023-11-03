import React from 'react';

interface CustomButtonProps {
  label: string;
  textColor: string;
  bgColor: string; 
  icon:string; 
}

const CustomButton: React.FC<CustomButtonProps> = ({ label, textColor, bgColor,icon }) => {
  const buttonStyle = {
    color: textColor,
    backgroundColor: bgColor,
    icon:icon
  };

  return (
    <button
      className="rounded-[30px] px-32 py-2 text-lg cursor-pointer"
      style={buttonStyle} // Apply text and background color styles
    >
      {label}
    </button>
  );
};

export default CustomButton;
