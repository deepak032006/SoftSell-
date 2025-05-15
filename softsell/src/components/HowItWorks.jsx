export default function HowItWorks() {
  const steps = [
    { title: "Upload License", icon: "📤" },
    { title: "Get Valuation", icon: "💰" },
    { title: "Get Paid", icon: "💸" },
  ];
  return (
    <section className="px-6 py-16 text-center max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-12">How It Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
        {steps.map(({ title, icon }, idx) => (
          <div key={idx} className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex flex-col items-center space-y-4">
            <div className="text-6xl">{icon}</div>
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
