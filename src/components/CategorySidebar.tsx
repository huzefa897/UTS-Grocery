import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Category } from '../types';

interface CategorySidebarProps {
  categories: Category[];
  onSelectCategory: (category: string, subCategory?: string) => void;
  isOpen: boolean;
}

const CategorySidebar: React.FC<CategorySidebarProps> = ({ 
  categories, 
  onSelectCategory,
  isOpen
}) => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleCategoryClick = (categoryId: string) => {
    onSelectCategory(categoryId);
    if (!expandedCategories.includes(categoryId)) {
      toggleCategory(categoryId);
    }
  };

  const handleSubCategoryClick = (categoryId: string, subCategoryId: string) => {
    onSelectCategory(categoryId, subCategoryId);
  };

  return (
    <aside className={`
      fixed inset-y-0 left-0 z-20 bg-white shadow-lg transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
      lg:translate-x-0 lg:static lg:w-64 lg:min-h-[calc(100vh-5rem)]
    `}>
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Categories</h2>
        <ul className="space-y-1">
          {categories.map(category => (
            <li key={category.id} className="mb-2">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => handleCategoryClick(category.id)}
                  className="flex-grow py-2 px-3 text-left rounded-md hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors"
                >
                  <span className="font-medium text-gray-700">{category.name}</span>
                </button>
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="p-1 rounded-full hover:bg-gray-100"
                  aria-label={expandedCategories.includes(category.id) ? "Collapse category" : "Expand category"}
                >
                  {expandedCategories.includes(category.id) ? (
                    <ChevronUp className="h-4 w-4 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  )}
                </button>
              </div>
              
              {/* Subcategories */}
              {expandedCategories.includes(category.id) && (
                <ul className="ml-6 mt-1 space-y-1">
                  {category.subCategories.map(subCategory => (
                    <li key={subCategory.id}>
                      <button
                        onClick={() => handleSubCategoryClick(category.id, subCategory.id)}
                        className="w-full py-1.5 px-3 text-left rounded-md hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors"
                      >
                        <span className="text-sm text-gray-600">{subCategory.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default CategorySidebar;