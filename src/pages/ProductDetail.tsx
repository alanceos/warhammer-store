import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { Star, Minus, Plus, ShoppingCart, Heart } from 'lucide-react';

// Mock product data (in a real app, this would come from an API)
const product = {
  id: 1,
  name: "Space Marines Combat Patrol",
  price: 149.99,
  description: "Start your Adeptus Astartes collection with this Combat Patrol box! This set contains everything you need to begin your conquest of the galaxy in the name of the Emperor.",
  rating: 4.8,
  reviews: 124,
  stock: 15,
  images: [
    "https://images.unsplash.com/photo-1600891964092-4359893b937f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1662476844640-10c80efa426e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1589187832032-3e560ed4e6b9?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
  ],
  details: [
    "10 Primaris Intercessors",
    "3 Outriders",
    "1 Primaris Lieutenant",
    "1 Primaris Captain",
    "Transfer Sheet",
    "Assembly Guide"
  ],
  features: [
    "Push-fit assembly - no glue required",
    "Detailed plastic components",
    "Multiple weapon options",
    "Compatible with all Space Marine chapters",
    "Perfect for beginners and veterans alike"
  ]
};

export const ProductDetail = () => {
  const { theme } = useTheme();
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    if (quantity < product.stock) setQuantity(quantity + 1);
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#0f172a]' : 'bg-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className={`${theme === 'dark' ? 'bg-[#1e293b]' : 'bg-white'} rounded-lg shadow-lg overflow-hidden`}>
          <div className="md:flex">
            {/* Image Gallery */}
            <div className="md:w-1/2 p-6">
              <div className="relative aspect-square mb-4">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 ${
                      selectedImage === index
                        ? theme === 'dark' ? 'border-[#d97706]' : 'border-amber-600'
                        : theme === 'dark' ? 'border-slate-700' : 'border-gray-200'
                    }`}
                  >
                    <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="md:w-1/2 p-6">
              <h1 className={`text-3xl font-bold mb-2 ${theme === 'dark' ? 'text-[#d97706]' : 'text-amber-600'}`}>
                {product.name}
              </h1>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400'
                          : theme === 'dark' ? 'text-slate-700' : 'text-gray-300'
                      }`}
                      fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                    />
                  ))}
                </div>
                <span className={`ml-2 ${theme === 'dark' ? 'text-[#cbd5e1]' : 'text-gray-600'}`}>
                  ({product.reviews} reviews)
                </span>
              </div>

              <p className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                ${product.price}
              </p>

              <p className={`mb-6 ${theme === 'dark' ? 'text-[#cbd5e1]' : 'text-gray-600'}`}>
                {product.description}
              </p>

              <div className="mb-6">
                <h3 className={`font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Box Contents:
                </h3>
                <ul className={`list-disc pl-5 ${theme === 'dark' ? 'text-[#cbd5e1]' : 'text-gray-600'}`}>
                  {product.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className={`font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Features:
                </h3>
                <ul className={`list-disc pl-5 ${theme === 'dark' ? 'text-[#cbd5e1]' : 'text-gray-600'}`}>
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center mb-6">
                <div className={`flex items-center border rounded-md ${
                  theme === 'dark' ? 'border-slate-700' : 'border-gray-300'
                }`}>
                  <button
                    onClick={decreaseQuantity}
                    className={`p-2 ${theme === 'dark' ? 'hover:bg-slate-700' : 'hover:bg-gray-100'}`}
                  >
                    <Minus className={theme === 'dark' ? 'text-[#cbd5e1]' : 'text-gray-600'} />
                  </button>
                  <span className={`px-4 py-2 ${theme === 'dark' ? 'text-[#cbd5e1]' : 'text-gray-900'}`}>
                    {quantity}
                  </span>
                  <button
                    onClick={increaseQuantity}
                    className={`p-2 ${theme === 'dark' ? 'hover:bg-slate-700' : 'hover:bg-gray-100'}`}
                  >
                    <Plus className={theme === 'dark' ? 'text-[#cbd5e1]' : 'text-gray-600'} />
                  </button>
                </div>
                <span className={`ml-4 ${theme === 'dark' ? 'text-[#cbd5e1]' : 'text-gray-600'}`}>
                  {product.stock} units available
                </span>
              </div>

              <div className="flex gap-4">
                <button className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-md ${
                  theme === 'dark'
                    ? 'bg-[#d97706] hover:bg-[#b45309]'
                    : 'bg-amber-600 hover:bg-amber-700'
                } text-white transition-colors duration-200`}>
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </button>
                <button className={`p-3 rounded-md ${
                  theme === 'dark'
                    ? 'bg-slate-700 hover:bg-slate-600'
                    : 'bg-gray-100 hover:bg-gray-200'
                } transition-colors duration-200`}>
                  <Heart className={theme === 'dark' ? 'text-[#cbd5e1]' : 'text-gray-600'} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 