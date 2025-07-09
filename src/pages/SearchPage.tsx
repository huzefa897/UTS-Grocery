import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search as SearchIcon, ArrowLeft } from 'lucide-react';
import ProductGrid from '../components/ProductGrid';
import { products } from '../data/products';
import { Product } from '../types';

const SearchPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchQuery.trim()) return;
    
    const query = searchQuery.toLowerCase();
    const results = products.filter(product => 
      product.name.toLowerCase().includes(query) || 
      product.description.toLowerCase().includes(query)
    );
    
    setSearchResults(results);
    setHasSearched(true);
  };

  return (
    <div className="py-8 px-4">
      <button
        onClick={() => navigate('/')}
        className="inline-flex items-center text-green-700 mb-6 hover:text-green-800"
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to Home
      </button>
      
      <div className="max-w-2xl mx-auto mb-8">
        <form onSubmit={handleSearch}>
          <div className="relative">
            <SearchIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-2 px-4 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              autoFocus
            />
            <button 
              type="submit"
              className="absolute right-2 top-2 bg-green-600 text-white px-4 py-1 rounded-md hover:bg-green-700 transition-colors"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      
      {hasSearched && (
        <div className="max-w-6xl mx-auto">
          <ProductGrid
            products={searchResults}
            title={`Search Results for "${searchQuery}"`}
          />
        </div>
      )}
      
      {!hasSearched && (
        <div className="max-w-2xl mx-auto text-center py-8">
          <SearchIcon className="mx-auto h-12 w-12 text-gray-400" />
          <h2 className="mt-4 text-lg font-medium text-gray-700">Search for products</h2>
          <p className="mt-2 text-gray-500">Enter keywords to find products by name or description</p>
        </div>
      )}
    </div>
  );
};

export default SearchPage;