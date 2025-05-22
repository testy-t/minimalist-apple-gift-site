import { useState } from "react";
import { GiftCard } from "@/types";
import { useCart } from "@/hooks/useCart";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import GiftCardsSection from "@/components/GiftCardsSection";
import InstructionsSection from "@/components/InstructionsSection";
import Footer from "@/components/Footer";
import CartSidebar from "@/components/CartSidebar";

const Index = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    cartItemsCount,
  } = useCart();

  const giftCards: GiftCard[] = [
    { value: 1000, popular: false },
    { value: 2500, popular: true },
    { value: 5000, popular: false },
  ];

  const handleAddToCart = (value: number) => {
    addToCart(value);
    setSelectedCard(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        cartItemsCount={cartItemsCount}
        onCartOpen={() => setIsCartOpen(true)}
      />

      <HeroSection />

      <GiftCardsSection
        giftCards={giftCards}
        selectedCard={selectedCard}
        onCardSelect={setSelectedCard}
        onAddToCart={handleAddToCart}
      />

      <InstructionsSection />

      <Footer />

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />
    </div>
  );
};

export default Index;
