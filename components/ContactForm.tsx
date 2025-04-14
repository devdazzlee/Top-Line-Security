import React from "react";

const ContactForm = () => {
  return (
    <section className="min-h-screen flex items-center justify-center  px-6 py-12">
      <div className="bg-[#0c2249] backdrop-blur-md rounded-3xl shadow-2xl p-10 max-w-3xl w-full">
        <h2 className="text-4xl font-bold text-white text-center mb-10">
          Get in Touch
        </h2>
        <p className="text-white text-center mb-6 text-sm opacity-80">
          <span className="block">📞 Technical Support: Available 24/7</span>
          <span className="block">🕘 Sales Opening Hours: Mon–Sun 9am–6pm</span>
          <span className="block">💬 Live Chat: 9am–9pm</span>
        </p>
        <form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm font-semibold text-white">
                First Name
              </label>
              <input
                type="text"
                placeholder="John"
                className="w-full rounded-xl border-2 border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-400 bg-white/20 text-white p-4 outline-none placeholder-white/70 transition"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-semibold text-white">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Doe"
                className="w-full rounded-xl border-2 border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-400 bg-white/20 text-white p-4 outline-none placeholder-white/70 transition"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold text-white">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border-2 border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-400 bg-white/20 text-white p-4 outline-none placeholder-white/70 transition"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold text-white">
              Your Message
            </label>
            <textarea
              rows={5}
              placeholder="Type your message here..."
              className="w-full rounded-xl border-2 border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-400 bg-white/20 text-white p-4 outline-none placeholder-white/70 transition resize-none"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-500 hover:to-blue-500 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
