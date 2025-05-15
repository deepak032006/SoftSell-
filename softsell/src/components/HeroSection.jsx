export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-gray-800 dark:to-gray-900 text-white transition-colors duration-300">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Resell Your Unused Software Licenses</h1>
      <p className="max-w-xl text-lg mb-6">
        SoftSell helps you turn unused software into money — fast, secure, and hassle-free.
      </p>
      <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition">
        Sell My Licenses
      </button>
    </section>
  );
}
