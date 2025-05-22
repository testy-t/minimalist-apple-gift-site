import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import CartSidebar from "@/components/CartSidebar";
import Icon from "@/components/ui/icon";

interface CartItem {
  id: number;
  value: number;
  quantity: number;
}

const Index = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const giftCards = [
    { value: 1000, popular: false },
    { value: 2500, popular: true },
    { value: 5000, popular: false },
  ];

  const addToCart = (value: number) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.value === value);
      if (existing) {
        return prev.map((item) =>
          item.value === value
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { id: value, value, quantity: 1 }];
    });
    setSelectedCard(null);
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item)),
    );
  };

  const cartItemsCount = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0,
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="text-xl font-semibold text-gray-900">
                🍎 Apple Store
              </div>
              <div className="hidden md:flex space-x-6">
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Главная
                </a>
                <a
                  href="#products"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Карты
                </a>
                <a
                  href="#instructions"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Инструкции
                </a>
              </div>
            </div>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 relative"
              onClick={() => setIsCartOpen(true)}
            >
              <Icon name="ShoppingCart" size={18} className="mr-2" />
              Корзина
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            Apple Gift Card
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Подарите возможность выбора. Карты Apple можно использовать для
            покупок в App Store, iTunes Store и Apple Books.
          </p>
          <div className="mb-16">
            <img
              src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=400&fit=crop&crop=center"
              alt="Apple Gift Cards"
              className="w-full max-w-2xl mx-auto rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Gift Cards Section */}
      <section id="products" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Выберите номинал
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Доступны карты различных номиналов для любого бюджета
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {giftCards.map((card) => (
              <Card
                key={card.value}
                className={`relative bg-white border-2 transition-all duration-300 hover:shadow-xl cursor-pointer ${
                  selectedCard === card.value
                    ? "border-blue-500 shadow-lg"
                    : "border-gray-200 hover:border-gray-300"
                } ${card.popular ? "ring-2 ring-blue-500 ring-opacity-50" : ""}`}
                onClick={() => setSelectedCard(card.value)}
              >
                {card.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Популярно
                    </span>
                  </div>
                )}

                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="w-24 h-16 mx-auto bg-gradient-to-br from-gray-800 to-gray-600 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white text-2xl font-bold">🍎</span>
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {card.value.toLocaleString("ru-RU")} ₽
                  </h3>

                  <p className="text-gray-600 mb-6">Apple Gift Card</p>

                  <Button
                    className={`w-full rounded-full py-3 font-medium transition-all ${
                      selectedCard === card.value
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                    }`}
                  >
                    {selectedCard === card.value ? "Выбрано" : "Выбрать"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {selectedCard && (
            <div className="mt-12 text-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-12 py-4 text-lg font-medium">
                Купить за {selectedCard.toLocaleString("ru-RU")} ₽
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Instructions Preview */}
      <section id="instructions" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Как использовать
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Простые шаги для активации вашей Apple Gift Card
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Получите код
              </h3>
              <p className="text-gray-600">
                После покупки вы получите уникальный код активации на email
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Активируйте
              </h3>
              <p className="text-gray-600">
                Введите код в App Store или iTunes Store в разделе "Использовать
                код"
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Покупайте</h3>
              <p className="text-gray-600">
                Средства будут добавлены на ваш Apple ID для покупок
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600">
            © 2024 Apple Gift Cards. Все права защищены.
          </p>
        </div>
      </footer>

      {/* Cart Sidebar */}
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
