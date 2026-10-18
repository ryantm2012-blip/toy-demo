/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Product, CartItem, OrderDetails } from './types';
import { PRODUCTS } from './data/mockData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategorySection } from './components/CategorySection';
import { FeaturedProducts } from './components/FeaturedProducts';
import { SpecialOffers } from './components/SpecialOffers';
import { Benefits } from './components/Benefits';
import { AboutSection } from './components/AboutSection';
import { CustomerReviews } from './components/CustomerReviews';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { ProductQuickViewModal } from './components/ProductQuickViewModal';
import { Toast } from './components/Toast';

export default function App() {
  // 1. Persistent Cart State in localStorage
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('purity_toys_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('purity_toys_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cartItems]);

  // Total quantity in cart
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // 2. Navigation & UI state
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Modals & Drawers
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Toast Notification
  const [toast, setToast] = useState<{
    visible: boolean;
    message: string;
    subMessage?: string;
  }>({
    visible: false,
    message: '',
  });

  const showToast = (message: string, subMessage?: string) => {
    setToast({ visible: true, message, subMessage });
  };

  useEffect(() => {
    if (toast.visible) {
      const timer = setTimeout(() => {
        setToast((prev) => ({ ...prev, visible: false }));
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [toast.visible]);

  // Cart operations
  const handleAddToCart = (product: Product, quantity: number = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`Added ${product.name}`, `${quantity} item(s) in basket · R ${product.price * quantity}`);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((i) => (i.product.id === productId ? { ...i, quantity } : i))
    );
  };

  const handleRemoveItem = (productId: string) => {
    const item = cartItems.find((i) => i.product.id === productId);
    setCartItems((prev) => prev.filter((i) => i.product.id !== productId));
    if (item) {
      showToast(`Removed from basket`, item.product.name);
    }
  };

  // Smooth scroll and navigation
  const scrollToSection = (id: string) => {
    setActiveSection(id);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (id === 'bestsellers') {
      // scroll to shop and select best sellers or all
      const shopEl = document.getElementById('shop');
      if (shopEl) {
        shopEl.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Category select handler
  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);
    const shopEl = document.getElementById('shop');
    if (shopEl) {
      shopEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Search click handler in navbar
  const handleSearchClick = () => {
    const shopEl = document.getElementById('shop');
    if (shopEl) {
      shopEl.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 400);
    }
  };

  // Best Sellers button handler
  const handleBestSellersClick = () => {
    setSelectedCategory('all');
    const shopEl = document.getElementById('shop');
    if (shopEl) {
      shopEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-amber-50/20 text-slate-800 font-sans selection:bg-purple-200 selection:text-purple-900">
      
      {/* 1. Sticky Navigation Bar */}
      <Navbar
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onNavigate={scrollToSection}
        activeSection={activeSection}
        onSearchClick={handleSearchClick}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onExploreClick={() => scrollToSection('shop')}
          onBestSellersClick={handleBestSellersClick}
        />

        {/* 3. Shop by Category Section */}
        <CategorySection
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
        />

        {/* 4. Special Offers Promotional Banner */}
        <SpecialOffers
          onShopCollection={() => scrollToSection('shop')}
        />

        {/* 5. Featured Products Catalog */}
        <FeaturedProducts
          products={PRODUCTS}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onAddToCart={(p) => handleAddToCart(p, 1)}
          onQuickView={(p) => setQuickViewProduct(p)}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          searchInputRef={searchInputRef}
        />

        {/* 6. Why Shop With Us? Benefit Pillars */}
        <Benefits />

        {/* 7. About Purity's Toy Extravaganza */}
        <AboutSection />

        {/* 8. Customer Reviews & Testimonials */}
        <CustomerReviews />

        {/* 9. Frequently Asked Questions Accordion */}
        <FaqSection />

        {/* 10. Contact Section & Interactive Form */}
        <ContactSection />
      </main>

      {/* 11. Footer */}
      <Footer
        onNavigate={scrollToSection}
        onSelectCategory={handleSelectCategory}
      />

      {/* Slide-over Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        onFindSomethingFun={() => {
          setIsCartOpen(false);
          scrollToSection('shop');
        }}
      />

      {/* Demo Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        onOrderComplete={(order) => {
          // Clear cart on demo order completion
          setCartItems([]);
          showToast(`Order Placed: ${order.orderNumber}`, `Thank you ${order.customerName}! Demo receipt saved.`);
        }}
        onContinueShopping={() => {
          setIsCheckoutOpen(false);
          scrollToSection('shop');
        }}
      />

      {/* Product Quick View Modal */}
      <ProductQuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Lightweight Toast Notification */}
      <Toast
        message={toast.message}
        subMessage={toast.subMessage}
        isVisible={toast.visible}
        onClose={() => setToast((prev) => ({ ...prev, visible: false }))}
        onOpenCart={() => {
          setToast((prev) => ({ ...prev, visible: false }));
          setIsCartOpen(true);
        }}
      />

    </div>
  );
}
