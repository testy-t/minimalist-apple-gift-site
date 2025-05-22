const InstructionsSection = () => {
  const steps = [
    {
      number: 1,
      title: "Получите код",
      description:
        "После покупки вы получите уникальный код активации на email",
    },
    {
      number: 2,
      title: "Активируйте",
      description:
        'Введите код в App Store или iTunes Store в разделе "Использовать код"',
    },
    {
      number: 3,
      title: "Покупайте",
      description: "Средства будут добавлены на ваш Apple ID для покупок",
    },
  ];

  return (
    <section id="instructions" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Как использовать
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          Простые шаги для активации вашей Apple Gift Card
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {steps.map((step) => (
            <div key={step.number} className="space-y-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xl">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructionsSection;
