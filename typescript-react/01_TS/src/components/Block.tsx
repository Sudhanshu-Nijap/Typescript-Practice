import React from 'react';

interface BlockProps {
  value: string | null;
  onClick: () => void;
}

const Block: React.FC<BlockProps> = ({ value, onClick }) => {
  return (
    <button className="block" onClick={onClick}>
      {value}
    </button>
  );
};

export default Block;
