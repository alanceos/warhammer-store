import React, { useState, useEffect } from 'react';
import { ShoppingCart, Search, User, Menu, ChevronDown, Facebook, Twitter, Instagram, Youtube, Sun, Moon } from 'lucide-react';

// Mock data for products
const featuredProducts = [
  {
    id: 1,
    name: "Space Marines Combat Patrol",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1600891964092-4359893b937f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Necron Warriors Squad",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1589187832032-3e560ed4e6b9?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Citadel Paint Set",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Age of Sigmar Starter Set",
    price: 169.99,
    image: "https://images.unsplash.com/photo-1662476844640-10c80efa426e?auto=format&fit=crop&w=800&q=80"
  }
];

const categories = [
  {
    name: "Warhammer 40,000",
    description: "In the grim darkness of the far future, there is only war",
    image: "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Age of Sigmar",
    description: "Epic fantasy battles in the Mortal Realms",
    image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Paints & Supplies",
    description: "Everything you need to bring your miniatures to life",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80"
  }
];

function App() {
  const [theme, setTheme] = useState('dark');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-[#0f172a] text-[#cbd5e1]' : 'bg-gray-100 text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`sticky top-0 z-50 transition-colors duration-300 ${theme === 'dark' ? 'bg-[#1e293b] border-slate-700' : 'bg-white border-gray-200'} border-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className={`text-2xl font-cinzel font-bold ${theme === 'dark' ? 'text-[#d97706]' : 'text-amber-600'}`}>WARHAMMER</h1>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                <a href="#" className={`${theme === 'dark' ? 'text-[#cbd5e1] hover:text-[#d97706]' : 'text-gray-700 hover:text-amber-600'} transition-colors duration-200 flex items-center`}>
                  Shop <ChevronDown className="ml-1 h-4 w-4" />
                </a>
                <a href="#" className={`${theme === 'dark' ? 'text-[#cbd5e1] hover:text-[#d97706]' : 'text-gray-700 hover:text-amber-600'} transition-colors duration-200`}>Community</a>
                <a href="#" className={`${theme === 'dark' ? 'text-[#cbd5e1] hover:text-[#d97706]' : 'text-gray-700 hover:text-amber-600'} transition-colors duration-200`}>Events</a>
                <a href="#" className={`${theme === 'dark' ? 'text-[#cbd5e1] hover:text-[#d97706]' : 'text-gray-700 hover:text-amber-600'} transition-colors duration-200`}>Support</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full ${theme === 'dark' ? 'text-[#cbd5e1] hover:text-[#d97706]' : 'text-gray-700 hover:text-amber-600'} transition-colors duration-200`}
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <Search className={`h-6 w-6 ${theme === 'dark' ? 'text-[#cbd5e1] hover:text-[#d97706]' : 'text-gray-700 hover:text-amber-600'} cursor-pointer`} />
              <User className={`h-6 w-6 ${theme === 'dark' ? 'text-[#cbd5e1] hover:text-[#d97706]' : 'text-gray-700 hover:text-amber-600'} cursor-pointer`} />
              <ShoppingCart className={`h-6 w-6 ${theme === 'dark' ? 'text-[#cbd5e1] hover:text-[#d97706]' : 'text-gray-700 hover:text-amber-600'} cursor-pointer`} />
              <Menu 
                className={`h-6 w-6 md:hidden ${theme === 'dark' ? 'text-[#cbd5e1] hover:text-[#d97706]' : 'text-gray-700 hover:text-amber-600'} cursor-pointer`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative">
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-black/50' : 'bg-black/30'} z-10`}></div>
        <div className="relative h-[600px] bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?auto=format&fit=crop&w=2000&q=80')"}}>
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-cinzel font-bold text-white mb-4">Enter the Grimdark</h2>
              <p className="text-xl text-white mb-8">Discover the finest Warhammer miniatures and accessories</p>
              <button className={`${theme === 'dark' ? 'bg-[#d97706] hover:bg-[#b45309]' : 'bg-amber-600 hover:bg-amber-700'} text-white px-8 py-3 rounded-md transition-colors duration-200`}>
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${theme === 'dark' ? 'bg-[#0f172a]' : 'bg-gray-100'}`}>
        <h2 className={`text-3xl font-cinzel font-bold text-center mb-12 ${theme === 'dark' ? 'text-[#d97706]' : 'text-amber-600'}`}>Browse Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className={`${theme === 'dark' ? 'bg-[#1e293b] border-slate-700' : 'bg-white border-gray-200'} rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-200 border shadow-lg hover:shadow-xl`}>
              <img src={category.image} alt={category.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className={`text-xl font-cinzel font-bold ${theme === 'dark' ? 'text-[#d97706]' : 'text-amber-600'} mb-2`}>{category.name}</h3>
                <p className={theme === 'dark' ? 'text-[#cbd5e1]' : 'text-gray-700'}>{category.description}</p>
                <button className={`${theme === 'dark' ? 'text-[#d97706] hover:text-[#b45309]' : 'text-amber-600 hover:text-amber-700'} font-semibold transition-colors duration-200 mt-4`}>
                  Explore →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${theme === 'dark' ? 'bg-[#1e293b]' : 'bg-white'}`}>
        <h2 className={`text-3xl font-cinzel font-bold text-center mb-12 ${theme === 'dark' ? 'text-[#d97706]' : 'text-amber-600'}`}>Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className={`${theme === 'dark' ? 'bg-[#0f172a] border-slate-700' : 'bg-gray-50 border-gray-200'} rounded-lg overflow-hidden border shadow-lg hover:shadow-xl transition-all duration-200`}>
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className={`font-semibold ${theme === 'dark' ? 'text-[#cbd5e1]' : 'text-gray-900'} mb-2`}>{product.name}</h3>
                <p className={`${theme === 'dark' ? 'text-[#d97706]' : 'text-amber-600'} font-bold mb-4`}>${product.price}</p>
                <button className={`w-full ${theme === 'dark' ? 'bg-[#d97706] hover:bg-[#b45309]' : 'bg-amber-600 hover:bg-amber-700'} text-white py-2 rounded transition-colors duration-200`}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Community Section */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-gradient-to-b from-[#0f172a] to-[#1e293b]' : 'bg-gradient-to-b from-gray-100 to-white'}`}>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className={`text-3xl font-cinzel font-bold mb-6 ${theme === 'dark' ? 'text-[#d97706]' : 'text-amber-600'}`}>Join Our Community</h2>
          <p className={`${theme === 'dark' ? 'text-[#cbd5e1]' : 'text-gray-700'} mb-8 max-w-2xl mx-auto`}>
            Connect with fellow warriors, share your painted miniatures, and stay updated with the latest news and events.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className={`${theme === 'dark' ? 'bg-[#d97706] hover:bg-[#b45309]' : 'bg-amber-600 hover:bg-amber-700'} text-white px-6 py-2 rounded transition-colors duration-200`}>
              View Gallery
            </button>
            <button className={`border ${theme === 'dark' ? 'border-[#d97706] text-[#d97706] hover:bg-[#d97706]' : 'border-amber-600 text-amber-600 hover:bg-amber-600'} px-6 py-2 rounded hover:text-white transition-colors duration-200`}>
              Read Blog
            </button>
            <button className={`border ${theme === 'dark' ? 'border-[#d97706] text-[#d97706] hover:bg-[#d97706]' : 'border-amber-600 text-amber-600 hover:bg-amber-600'} px-6 py-2 rounded hover:text-white transition-colors duration-200`}>
              Events Calendar
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${theme === 'dark' ? 'bg-[#1e293b] border-slate-700' : 'bg-white border-gray-200'} border-t pt-12 pb-8`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className={`font-cinzel font-bold ${theme === 'dark' ? 'text-[#d97706]' : 'text-amber-600'} mb-4`}>Shop</h3>
              <ul className="space-y-2">
                <li><a href="#" className={`${theme === 'dark' ? 'text-[#cbd5e1] hover:text-[#d97706]' : 'text-gray-700 hover:text-amber-600'}`}>New Releases</a></li>
                <li><a href="#" className={`${theme === 'dark' ? 'text-[#cbd5e1] hover:text-[#d97706]' : 'text-gray-700 hover:text-amber-600'}`}>Best Sellers</a></li>
                <li><a href="#" className={`${theme === 'dark' ? 'text-[#cbd5e1] hover:text-[#d97706]' : 'text-gray-700 hover:text-amber-600'}`}>Deals</a></li>
                <li><a href="#" className={`${theme === 'dark' ? 'text-[#cbd5e1] hover:text-[#d97706]' : 'text-gray-700 hover:text-amber-600'}`}>Gift Cards</a></li>
              </ul>
            </div>
            <div>
              <h3 className={`font-cinzel font-bold ${theme === 'dark' ? 'text-[#d97706]' : 'text-amber-600'} mb-4`}>Community</h3>
              <ul className="space-y-2">
                <li><a href="#" className={`${theme === 'dark' ? 'text-[#cbd5e1] hover:text-[#d97706]' : 'text-gray-700 hover:text-amber-600'}`}>Events</a></li>
                <li><a href="#" className={`${theme === 'dark' ? 'text-[#cbd5e1] hover:text-[#d97706]' : 'text-gray-700 hover:text-amber-600'}`}>Blog</a></li>
                <li><a href="#" className={`${theme === 'dark' ? 'text-[#cbd5e1] hover:text-[#d97706]' : 'text-gray-700 hover:text-amber-600'}`}>Forum</a></li>
                <li><a href="#" className={`${theme === 'dark' ? 'text-[#cbd5e1] hover:text-[#d97706]' : 'text-gray-700 hover:text-amber-600'}`}>Gallery</a></li>
              </ul>
            </div>
            <div>
              <h3 className={`font-cinzel font-bold ${theme === 'dark' ? 'text-[#d97706]' : 'text-amber-600'} mb-4`}>Help</h3>
              <ul className="space-y-2">
                <li><a href="#" className={`${theme === 'dark' ? 'text-[#cbd5e1] hover:text-[#d97706]' : 'text-gray-700 hover:text-amber-600'}`}>Contact Us</a></li>
                <li><a href="#" className={`${theme === 'dark' ? 'text-[#cbd5e1] hover:text-[#d97706]' : 'text-gray-700 hover:text-amber-600'}`}>Shipping</a></li>
                <li><a href="#" className={`${theme === 'dark' ? 'text-[#cbd5e1] hover:text-[#d97706]' : 'text-gray-700 hover:text-amber-600'}`}>Returns</a></li>
                <li><a href="#" className={`${theme === 'dark' ? 'text-[#cbd5e1] hover:text-[#d97706]' : 'text-gray-700 hover:text-amber-600'}`}>FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className={`font-cinzel font-bold ${theme === 'dark' ? 'text-[#d97706]' : 'text-amber-600'} mb-4`}>Follow Us</h3>
              <div className="flex space-x-4">
                <Facebook className={`h-6 w-6 ${theme === 'dark' ? 'text-[#cbd5e1] hover:text-[#d97706]' : 'text-gray-700 hover:text-amber-600'} cursor-pointer`} />
                <Twitter className={`h-6 w-6 ${theme === 'dark' ? 'text-[#cbd5e1] hover:text-[#d97706]' : 'text-gray-700 hover:text-amber-600'} cursor-pointer`} />
                <Instagram className={`h-6 w-6 ${theme === 'dark' ? 'text-[#cbd5e1] hover:text-[#d97706]' : 'text-gray-700 hover:text-amber-600'} cursor-pointer`} />
                <Youtube className={`h-6 w-6 ${theme === 'dark' ? 'text-[#cbd5e1] hover:text-[#d97706]' : 'text-gray-700 hover:text-amber-600'} cursor-pointer`} />
              </div>
              <p className={`mt-4 ${theme === 'dark' ? 'text-[#cbd5e1]' : 'text-gray-700'}`}>Subscribe to our newsletter</p>
              <div className="mt-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={`w-full px-3 py-2 ${theme === 'dark' ? 'bg-[#0f172a] border-slate-700 text-[#cbd5e1]' : 'bg-gray-50 border-gray-200 text-gray-900'} border rounded focus:outline-none focus:border-amber-600`}
                />
              </div>
            </div>
          </div>
          <div className={`mt-12 pt-8 border-t ${theme === 'dark' ? 'border-slate-700 text-[#cbd5e1]' : 'border-gray-200 text-gray-700'} text-center text-sm`}>
            <p>© 2025 Warhammer Store. All rights reserved.</p>
            <p className="mt-2">Warhammer and associated logos are registered trademarks of Games Workshop Limited.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;