import Navbar from "@/components/Navbar";
import HeroSection from "@/components/blocks/hero-section";
import HeroScrollDemo from "@/components/ui/container-scroll-demo";
import HoverFooter from "@/components/blocks/hover-footer-demo";

export default function Home() {
  return (
    <div className="w-full">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Animations */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* Scroll Animation Demo (new section under hero) */}
      <section id="hero-scroll" className="min-h-screen bg-transparent py-24">
        <div className="max-w-7xl mx-auto px-4">
          <HeroScrollDemo />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            About Our Surfboards
          </h2>
          <p className="text-lg text-gray-700 mb-6 text-center">
            We are passionate about crafting the finest surfboards on the market. With over 20 years of expertise, 
            we combine traditional shaping techniques with modern innovations to deliver boards that transform your surfing experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                Quality Materials
              </h3>
              <p className="text-gray-700">
                We source premium foam, resin, and finishes from trusted suppliers worldwide.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                Expert Craftsmanship
              </h3>
              <p className="text-gray-700">
                Each board is hand-shaped by master craftsmen with decades of experience.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                Fast Shipping
              </h3>
              <p className="text-gray-700">
                Get your board delivered to your door within 3-5 business days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Price Section */}
      <section
        id="price"
        className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            Surfboard Collection
          </h2>
          <p className="text-xl text-gray-700 mb-12 text-center">
            Choose the perfect board for your skill level and style
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Beginner Plan */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Beginner</h3>
              <p className="text-4xl font-bold text-blue-600 mb-2">
                $299<span className="text-lg text-gray-600">/board</span>
              </p>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li>✓ Soft-top construction</li>
                <li>✓ Extra stability & float</li>
                <li>✓ Forgiving in all conditions</li>
                <li>✗ Advanced shaping</li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition">
                Buy Now
              </button>
            </div>

            {/* Intermediate Plan */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-blue-600 transform scale-105">
              <div className="bg-blue-600 text-white py-2 px-4 rounded-full inline-block mb-4 font-bold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Intermediate
              </h3>
              <p className="text-4xl font-bold text-blue-600 mb-2">
                $599<span className="text-lg text-gray-600">/board</span>
              </p>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li>✓ Fiberglass construction</li>
                <li>✓ Responsive & fast</li>
                <li>✓ Versatile performance</li>
                <li>✓ Premium finish</li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition">
                Buy Now
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Pro
              </h3>
              <p className="text-4xl font-bold text-blue-600 mb-2">
                $899<span className="text-lg text-gray-600">/board</span>
              </p>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li>✓ Carbon fiber construction</li>
                <li>✓ Expert shaping</li>
                <li>✓ Competition ready</li>
                <li>✓ Fully customizable</li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition">
                Order Custom
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-white py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            Contact Us
          </h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">
                Message
              </label>
              <textarea
                placeholder="Tell us about your surfing style and board preferences"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
            >
              Get in Touch
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <HoverFooter />
    </div>
  );
}
