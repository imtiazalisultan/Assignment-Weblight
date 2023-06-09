import React, { useState, useEffect } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [priceRangeFilter, setPriceRangeFilter] = useState('');

  useEffect(() => {
    // Fetch products from the server or API
    // Example API call using fetch:
    fetch('/api/products')
      .then((response) => response.json())
      .then((data) => {
        
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setCategoryFilter(category);
    applyFilters(category, priceRangeFilter);
  };

  const handlePriceRangeChange = (event) => {
    const priceRange = event.target.value;
    setPriceRangeFilter(priceRange);
    applyFilters(categoryFilter, priceRange);
  };

  const applyFilters = (category, priceRange) => {
    let filteredProducts = products;

    if (category !== 'all') {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === category
      );
    }

    if (priceRange !== '') {
      const [minPrice, maxPrice] = priceRange.split('-');
      filteredProducts = filteredProducts.filter(
        (product) => product.price.cost >= minPrice && product.price.cost <= maxPrice
      );
    }

    setFilteredProducts(filteredProducts);
  };

  const handleAddToCart = () => {
   // addToCart(products);
  };


  return (
    <div>
      <h2>Product List</h2>

      <div>
        <label>Category:</label>
        <select value={categoryFilter} onChange={handleCategoryChange}>
          <option value="all">All</option>
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
          {/* Add more options for other categories */}
        </select>
      </div>

      <div>
        <label>Price Range:</label>
        <select value={priceRangeFilter} onChange={handlePriceRangeChange}>
          <option value="">All</option>
          <option value="0-200">$0 - $200</option>
          <option value="200-500">$200 - $500</option>
          <option value="500-1000">$500 - $1000</option>
          {/* Add more options for other price ranges */}
        </select>
      </div>
        <div>Cart</div>
      <ul>
        {filteredProducts.map((item) => (
         
        
          <div  style={{padding:'25px 15px',textAlign:'center'}}>
          <img style={{ width:300 }}src = { item?.url} alt = "logo"/>
          <p style={{ fontWeight: 600, color: '#212121' }} >{item?.title?.shortTitle}</p>
          <p style={{  }} >Cost: ${item?.price.cost}</p>
          <p style={{  }} >MRP: ${item?.price.mrp}</p>
          <p style={{ color: '#212121', opacity: '.6' }} >{item?.tagline}</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
          </div>
         
        ))}
      </ul>
      
    </div>
  );
};

export default ProductList;
