import React from 'react';

interface CustomButtonProps {
  label: string;
  textColor: string;
  bgColor: string;
  borderColor: string; // Add borderColor prop
}

const CustomButton: React.FC<CustomButtonProps> = ({ label, textColor, bgColor, borderColor }) => {
  const buttonStyle = {
    color: textColor,
    backgroundColor: bgColor,
    borderColor: borderColor, // Set border color
    borderWidth: '2px', // Example border width
  };

  return (
    <button
      className="rounded-[30px] px-32 py-2 text-lg cursor-pointer"
      style={buttonStyle}
    >
      {label}
    </button>
  );
};

export default CustomButton;
