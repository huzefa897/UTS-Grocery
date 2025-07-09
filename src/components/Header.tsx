import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Logo from './Logo';

interface HeaderProps {
  onSearch: (query: string) => void;
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const sampleSuggestions = [
  'Organic Bananas',
  'Fresh Strawberries',
  'Avocado',
  'Frozen Pizza',
  'Ice Cream',
  'Orange Juice',
  'Sparkling Water',
  'Toilet Paper',
  'Dog Food',
  'Milk',
  'Whole Wheat Bread',
  'Cheddar Cheese',
  'Olive Oil',
  'Broccoli'
];

const Header: React.FC<HeaderProps> = ({ onSearch, toggleSidebar, isSidebarOpen }) => {
  const { totalItems, setIsCartOpen } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      onSearch(searchQuery);
      setFilteredSuggestions([]); // Clear suggestions
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 0) {
      const matches = sampleSuggestions.filter(item =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredSuggestions(matches.slice(0, 5)); // Show top 5 matches
    } else {
      setFilteredSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    onSearch(suggestion);
    setFilteredSuggestions([]);
  };

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-30 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={toggleSidebar}
            aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
          >
            {isSidebarOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>

          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={handleLogoClick}>
            <button onClick={() => window.location.reload()} className="flex items-center">
              <Logo className="h-10 w-10" />
            </button>
          </div>

          {/* Search bar */}
          <div className="hidden md:flex flex-1 mx-6 relative">
            <form onSubmit={handleSearchSubmit} className="w-full">
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={handleInputChange}
                className="w-full py-2 px-4 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <button
                type="submit"
                className="absolute right-3 top-2 text-sm text-sky-700 font-medium"
              >
                Search
              </button>
            </form>

            {/* Suggestions dropdown */}
            {filteredSuggestions.length > 0 && (
              <ul className="absolute top-12 left-0 right-0 bg-white border border-gray-200 rounded-md shadow-lg z-40">
                {filteredSuggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Mobile search button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => navigate('/search')}
          >
            <Search className="h-6 w-6 text-gray-700" />
          </button>

          {/* Cart button */}
          <button
            className="p-2 rounded-md hover:bg-gray-100 transition-colors relative"
            onClick={handleCartClick}
          >
            <ShoppingCart className="h-6 w-6 text-gray-700" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-sky-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>

        {/* Mobile search bar */}
        <form
          onSubmit={handleSearchSubmit}
          className="mt-4 md:hidden flex relative"
        >
          <input
            type="text"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={handleInputChange}
            className="w-full py-2 px-4 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <button
            type="submit"
            className="absolute right-3 top-2 text-sm text-green-700 font-medium"
          >
            Search
          </button>
        </form>

        {/* Mobile suggestions */}
        {filteredSuggestions.length > 0 && (
          <ul className="mt-2 md:hidden bg-white border border-gray-200 rounded-md shadow-lg z-40">
            {filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
