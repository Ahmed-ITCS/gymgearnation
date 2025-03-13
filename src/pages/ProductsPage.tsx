
import React, { useState } from 'react';
import { products, Product } from '@/data/products';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { useLocalStorage } from '@/hooks/useLocalStorage';

const ProductsPage = () => {
  const [cart, setCart] = useLocalStorage<Product[]>('cart', []);
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [inStockOnly, setInStockOnly] = useState(false);
  
  const categories = ['gloves', 'straps', 'belts', 'sleeves', 'wraps'];
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };
  
  const filteredProducts = products.filter(product => {
    // Filter by search query
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter by price range
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    // Filter by category
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    
    // Filter by stock
    const matchesStock = !inStockOnly || product.inStock;
    
    return matchesSearch && matchesPrice && matchesCategory && matchesStock;
  });
  
  const addToCart = (product: Product) => {
    setCart(prev => [...prev, product]);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
      duration: 3000,
    });
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Products</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="w-full md:w-1/4 bg-white p-6 rounded-lg shadow-lg h-fit">
          <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200">Filters</h2>
          
          {/* Search */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Search</label>
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>
          
          {/* Price Range */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              Price Range: ${priceRange[0]} - ${priceRange[1]}
            </label>
            <Slider 
              defaultValue={[0, 100]} 
              max={100} 
              step={1} 
              value={priceRange}
              onValueChange={setPriceRange}
              className="mt-2" 
            />
          </div>
          
          {/* Categories */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Categories</label>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center">
                  <Checkbox
                    id={`category-${category}`}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={() => handleCategoryChange(category)}
                  />
                  <label
                    htmlFor={`category-${category}`}
                    className="ml-2 text-sm font-medium capitalize"
                  >
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          {/* In Stock Only */}
          <div className="mb-6">
            <div className="flex items-center">
              <Checkbox
                id="in-stock"
                checked={inStockOnly}
                onCheckedChange={(checked) => setInStockOnly(checked as boolean)}
              />
              <label
                htmlFor="in-stock"
                className="ml-2 text-sm font-medium"
              >
                In Stock Only
              </label>
            </div>
          </div>
          
          {/* Reset Filters */}
          <Button
            variant="outline"
            className="w-full"
            onClick={() => {
              setSearchQuery('');
              setPriceRange([0, 100]);
              setSelectedCategories([]);
              setInStockOnly(false);
            }}
          >
            Reset Filters
          </Button>
        </div>
        
        {/* Products Grid */}
        <div className="w-full md:w-3/4">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold text-gray-600">No products found</h3>
              <p className="text-gray-500 mt-2">Try adjusting your filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover"
                    />
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                        <span className="text-white font-semibold px-3 py-1 bg-red-600 rounded-md">
                          Out of Stock
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                      <span className="font-bold text-gym-orange">${product.price.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-1">({product.rating})</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                    <Button
                      className="w-full bg-gym-orange hover:bg-gym-orange/90"
                      disabled={!product.inStock}
                      onClick={() => addToCart(product)}
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
