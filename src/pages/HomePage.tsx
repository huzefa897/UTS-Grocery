import React, { useState, useEffect } from 'react';
import ProductGrid from '../components/ProductGrid';
import { products } from '../data/products'; // Import local products
import { Product } from '../types';

interface HomePageProps {
  selectedCategory?: string;
  selectedSubCategory?: string;
  searchQuery?: string;
}

const HomePage: React.FC<HomePageProps> = ({ 
  selectedCategory, 
  selectedSubCategory,
  searchQuery
}) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [title, setTitle] = useState('All Products');

  // Filter products whenever props change
  useEffect(() => {
    let filtered = [...products];

    if (searchQuery && searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query)
      );
      setTitle(`Search Results for "${searchQuery}"`);
    } else if (selectedCategory) {
      filtered = filtered.filter(product => 
        product.category?.toLowerCase() === selectedCategory.toLowerCase()
      );
      
      if (selectedSubCategory) {
        filtered = filtered.filter(product => 
          product.subCategory?.toLowerCase() === selectedSubCategory.toLowerCase()
        );
        setTitle(`${selectedSubCategory}`);
      } else {
        setTitle(`${selectedCategory}`);
      }
    } else {
      setTitle('All Products');
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, selectedSubCategory, searchQuery]);

  return (
    <div className="py-8">
      <ProductGrid products={filteredProducts} title={title} />
    </div>
  );
};

export default HomePage;
