import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { GiftCard } from "@/types";

interface GiftCardsSectionProps {
  giftCards: GiftCard[];
  selectedCard: number | null;
  onCardSelect: (value: number) => void;
  onAddToCart: (value: number) => void;
}

const GiftCardsSection = ({
  giftCards,
  selectedCard,
  onCardSelect,
  onAddToCart,
}: GiftCardsSectionProps) => {
  return (
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
              onClick={() => onCardSelect(card.value)}
            >
              {card.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Популярный
                  </span>
                </div>
              )}
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900">
                    {card.value.toLocaleString("ru-RU")} ₽
                  </span>
                </div>
                <div className="mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=200&fit=crop&crop=center"
                    alt={`Apple Gift Card ${card.value}₽`}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </div>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full py-3"
                  onClick={(e) => {
                    e.stopPropagation();
                    onAddToCart(card.value);
                  }}
                >
                  <Icon name="Plus" size={16} className="mr-2" />В корзину
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
  );
};

export default GiftCardsSection;
