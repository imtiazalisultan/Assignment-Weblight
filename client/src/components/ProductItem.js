import React from 'react';

const ProductItem = ({ product, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div>
      <span>{product.name}</span>
      <span>{product.price}</span>
      <span>{product.category}</span>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
