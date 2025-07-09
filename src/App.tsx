import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import CategorySidebar from './components/CategorySidebar';
import Cart from './components/Cart';
import HomePage from './pages/HomePage';
import CheckoutPage from './pages/CheckoutPage';
import SearchPage from './pages/SearchPage';
import { categories } from './data/categories';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>();
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | undefined>();
  const [searchQuery, setSearchQuery] = useState<string | undefined>();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleCategorySelect = (category: string, subCategory?: string) => {
    setSelectedCategory(category);
    setSelectedSubCategory(subCategory);
    setSearchQuery(undefined);
    setIsSidebarOpen(false);
  };

  const handleSearch = (query: string) => {
    if (query.trim()) {
      setSearchQuery(query);
      setSelectedCategory(undefined);
      setSelectedSubCategory(undefined);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen bg-gray-100">
          <Header 
            onSearch={handleSearch} 
            toggleSidebar={toggleSidebar}
            isSidebarOpen={isSidebarOpen}
          />
          
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row">
              <CategorySidebar 
                categories={categories} 
                onSelectCategory={handleCategorySelect}
                isOpen={isSidebarOpen}
              />
              
              <main className="flex-1 lg:pl-8">
                <Routes>
                  <Route 
                    path="/" 
                    element={
                      <HomePage 
                        selectedCategory={selectedCategory}
                        selectedSubCategory={selectedSubCategory}
                        searchQuery={searchQuery}
                      />
                    } 
                  />
                  <Route path="/checkout" element={<CheckoutPage />} />
                  <Route path="/search" element={<SearchPage />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </main>
            </div>
          </div>
          
          <Cart />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;