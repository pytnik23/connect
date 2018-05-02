import React from 'react';

const Link = ({
  children,
  active,
  onClick,
}) => {
  if (active) {
    return children;
  }

  return (
    <button
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Link;
