import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header - Fixed */}
      <header className="bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-500 text-white py-6 shadow-lg fixed top-0 left-0 w-full z-10">
        <div className="container mx-auto flex items-center justify-between px-4">
          <h1 className="text-4xl font-bold">QR Code Generator</h1>
        </div>
      </header>

      {/* Body Content */}
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-500 py-20 text-center text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-4">
              Create Your Custom QR Code in Seconds
            </h2>
            <p className="text-xl mb-8">
              Easily generate QR codes for URLs, payments, and more with a few
              clicks!
            </p>
            <div className="flex justify-center flex-wrap gap-6">
              <Link
                href="/live-qr"
                className="bg-teal-600 px-8 py-4 rounded-lg text-xl font-semibold hover:bg-teal-700 transition-all"
              >
                Get Started
              </Link>
              <Link
                href="/payment-qr"
                className="bg-orange-600 px-8 py-4 rounded-lg text-xl font-semibold hover:bg-orange-700 transition-all"
              >
                Create Payment QR
              </Link>
            </div>
          </div>
        </section>

        {/* Feature Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-4xl font-semibold mb-8">Why Choose Us?</h2>
            <div className="flex justify-center flex-wrap gap-8">
              <div className="w-72 bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Fast and Easy</h3>
                <p className="text-gray-700">
                  Generate your QR codes instantly with an easy-to-use
                  interface.
                </p>
              </div>
              <div className="w-72 bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Secure Payments</h3>
                <p className="text-gray-700">
                  Generate secure QR codes for UPI and other payment systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-gradient-to-br from-blue-700 via-purple-600 to-pink-600 text-white py-16 text-center">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-semibold mb-4">
              Ready to Create Your QR Code?
            </h3>
            <p className="text-xl mb-8">
              Get started today and make your digital experience simpler and
              faster!
            </p>
            <div className="flex justify-center flex-wrap gap-6">
              <Link
                href="/live-qr"
                className="bg-teal-600 px-8 py-4 rounded-lg text-xl font-semibold hover:bg-teal-700 transition-all"
              >
                Start Now
              </Link>
              <Link
                href="/payment-qr"
                className="bg-orange-600 px-8 py-4 rounded-lg text-xl font-semibold hover:bg-orange-700 transition-all"
              >
                Payment QR Code
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 QR Code Generator by Raj Haldar. All Rights Reserved.</p>
          <div className="mt-4">
            <p className="text-gray-400">
              Contact:
              <a
                href="mailto:rajhaldar8000@gmail.com"
                className="hover:text-gray-300"
              >
                {" "}
                rajhaldar8000@gmail.com
              </a>{" "}
              | LinkedIn:
              <a
                href="https://www.linkedin.com/in/raj-halder-2279a1266/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                {" "}
                linkedin.com/in/rajhalder
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
