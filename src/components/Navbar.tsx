
import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, ShoppingCart, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-10 bg-gym-dark text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-gym-orange">
            <Dumbbell className="h-8 w-8" />
            <span>AU Gym Accessories</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-white hover:text-gym-orange transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-white hover:text-gym-orange transition-colors">
              Shop
            </Link>
            <Link to="/cart" className="relative">
              <Button variant="ghost" className="text-white hover:text-gym-orange">
                <ShoppingCart className="h-6 w-6" />
              </Button>
            </Link>
          </nav>
          
          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-gym-dark text-white">
              <nav className="flex flex-col gap-4 mt-8">
                <Link to="/" className="text-xl font-medium hover:text-gym-orange px-2 py-1">
                  Home
                </Link>
                <Link to="/products" className="text-xl font-medium hover:text-gym-orange px-2 py-1">
                  Shop
                </Link>
                <Link to="/cart" className="text-xl font-medium hover:text-gym-orange px-2 py-1">
                  Cart
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
