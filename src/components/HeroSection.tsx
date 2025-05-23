const HeroSection = () => {
  return (
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
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop&crop=center"
            alt="Apple Gift Cards"
            className="w-full max-w-2xl mx-auto rounded-3xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
