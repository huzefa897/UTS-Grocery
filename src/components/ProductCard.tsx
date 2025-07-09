import React from 'react';
import { Plus } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (product.inStock) {
      addToCart(product);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:scale-[1.02]">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase">
              Out of Stock
            </div>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{product.name}</h3>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between mt-3">
          <div>
            <span className="text-lg font-bold text-sky-500">${product.price.toFixed(2)}</span>
            <span className="text-gray-500 text-sm ml-1">/ {product.unit}</span>
          </div>
          
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`
              p-2 rounded-full transition-colors
              ${product.inStock 
                ? 'bg-blue-400 text-white hover:bg-blue-700' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'}
            `}
            aria-label={`Add ${product.name} to cart`}
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;