import Image from "next/image"
import { useState } from "react"
import { Star, ChevronRight } from "lucide-react"

export default function LandingPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="relative h-96 w-full">
        <Image
          src="/Apple-Store-fifth-avenue-new-york-redesign-exterior-091919_big.jpg.large_2x.jpg"
          alt="Apple Store on Fifth Avenue, New York"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold tracking-tight">Next-Gen Smartphone</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: "San Francisco, sans-serif" }}>
            Experience the Future of Smartphones
          </h2>
          <p className="text-xl mb-8" style={{ fontFamily: "sans-serif" }}>
            Unleash the power of the next-gen technology in the palm of your hand
          </p>
          <button className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition duration-300">
            Pre-order Now!
          </button>
          <p className="mt-4 text-sm text-gray-600">Get a free pair of earphones with your pre-order</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image on the left */}
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden">
              <Image
                src="/DALL·E 2025-01-21 11.22.55 - A minimalist sketch of an Apple-style smartphone. The design should focus on simplicity, with clean lines, a thin profile, and a large screen. The pho Background Removed.png"
                alt="Modern smartphone design"
                fill
                className="object-cover"
              />
            </div>
            {/* Form on the right */}
            <div className="max-w-md mx-auto w-full">
              <h3 className="text-3xl font-bold mb-6 text-center" style={{ fontFamily: "San Francisco, sans-serif" }}>
                Pre-order Your Device
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-black text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-800 transition duration-300"
                >
                  Pre-order Now!
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-10 text-center" style={{ fontFamily: "San Francisco, sans-serif" }}>
            What Our Customers Say
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                text: "The new smartphone exceeded all my expectations. The camera is amazing and the performance is lightning fast. It's a game changer in my daily use.",
                author: "Jane Doe",
              },
              {
                text: "I've never experienced such smooth functionality. The battery lasts all day and the display is crystal clear. This is by far the best phone I've owned.",
                author: "John Doe",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="mb-4" style={{ fontFamily: "sans-serif" }}>
                  "{testimonial.text}"
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{testimonial.author}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-8 rounded-lg">
              <p className="text-4xl font-bold mb-2" style={{ fontFamily: "San Francisco, sans-serif" }}>
                Over 90%
              </p>
              <p className="text-xl" style={{ fontFamily: "sans-serif" }}>
                of our customers would recommend our product
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <p className="text-4xl font-bold mb-2" style={{ fontFamily: "San Francisco, sans-serif" }}>
                Over 1.3 million
              </p>
              <p className="text-xl" style={{ fontFamily: "sans-serif" }}>
                pre-orders to date
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6" style={{ fontFamily: "San Francisco, sans-serif" }}>
            Ready to Experience the Future?
          </h3>
          <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300 flex items-center mx-auto">
            Pre-order Now! <ChevronRight className="ml-2" />
          </button>
        </div>
      </section>
    </div>
  )
}

