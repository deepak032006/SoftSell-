export default function Testimonials() {
  const reviews = [
    {
      name: "Amit Verma",
      role: "IT Manager",
      company: "TechNova Inc.",
      quote: "SoftSell made it incredibly easy to sell our unused licenses. Quick payments and great support!",
    },
    {
      name: "Sneha Rao",
      role: "Founder",
      company: "CreativeApps",
      quote: "We recovered a lot of value from software we no longer used. Highly recommended!",
    },
  ];
  return (
    <section className="px-6 py-16 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">What Our Customers Say</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {reviews.map(({ name, role, company, quote }, idx) => (
          <blockquote
            key={idx}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md italic"
          >
            <p className="mb-6">&ldquo;{quote}&rdquo;</p>
            <footer className="text-sm font-semibold">
              {name}, {role} @ {company}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
