import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import ChatWidget from "./components/ChatWidget";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <header className="flex justify-between items-center px-6 py-4 shadow-md dark:shadow-gray-800 sticky top-0 bg-white dark:bg-gray-900 z-50">
        <h1 className="text-xl font-bold">SoftSell</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full border dark:border-gray-600"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </header>

      <main>
        <HeroSection />
        <HowItWorks />
        <Features />
        <Testimonials />
        <ContactForm />
      </main>

      <ChatWidget />

      <footer className="text-center text-sm py-4 border-t dark:border-gray-700">
        © 2025 SoftSell. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
