import React from 'react';
import './Cart.scss';

interface CartProps {
  // title: string;
  // value: number;
}

const Cart: React.FC<CartProps> = () => {
  const getValueColor = (title: string): string => {
    switch (title.toLowerCase()) {
      case 'households':
        return '#3498db'; // Blue color for Total Households value
      case 'inhabitants':
        return '#2ecc71'; // Green color for Total Inhabitants value
      case 'voters':
        return '#bb0a86'; // Red color for Total Voters value
      case 'non-voters':
        return '#f81010'; // Orange color for Total Non-Voters value
      default:
        return '#000'; // Default color if title does not match
    }
  };
  return (
    <div className="dashboard-cart">
      <div className="cart">
        <h3></h3>
        {/* <p style={{ color: getValueColor(title) }}>{value}</p> */}
      </div>
    </div>
  );
};

export default Cart;
