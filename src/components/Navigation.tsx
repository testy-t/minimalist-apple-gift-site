import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface NavigationProps {
  cartItemsCount: number;
  onCartOpen: () => void;
}

const Navigation = ({ cartItemsCount, onCartOpen }: NavigationProps) => {
  return (
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
            onClick={onCartOpen}
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
  );
};

export default Navigation;
