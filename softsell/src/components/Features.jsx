export default function Features() {
  const items = [
    { title: "Best Price Guarantee", icon: "🎯" },
    { title: "Secure Transactions", icon: "🔒" },
    { title: "Fast Payouts", icon: "⏳" },
    { title: "Expert Support", icon: "💬" },
  ];
  return (
    <section className="px-6 py-16 bg-gray-100 dark:bg-gray-800 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {items.map(({ title, icon }, idx) => (
          <div key={idx} className="p-6 bg-white dark:bg-gray-900 rounded-lg text-center shadow-md">
            <div className="text-5xl mb-4">{icon}</div>
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
