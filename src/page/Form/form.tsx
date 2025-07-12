import { useState } from "react";

export default function FeedbackForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-[#b3ffcc] relative overflow-hidden px-4">
      <div className="absolute inset-0 pointer-events-none z-0 blur-[80px]">
        <div className="absolute top-1/3 left-1/4 w-1/2 h-1/3 bg-[#39FF14]/30 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/3 w-1/3 h-1/3 bg-[#b3ffcc]/20 rounded-full blur-[120px]" />
      </div>

      <form
        action="https://formsubmit.co/navrosjo@gmail.com"
        method="POST"
        className="relative z-10 flex flex-col gap-5 p-10 bg-black/60 rounded-2xl border border-[#39FF14]/50 shadow-lg w-full max-w-md backdrop-blur-md"
      >
        {/* Hidden FormSubmit Settings */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />

        <h2 className="text-3xl font-bold text-[#39FF14] text-center mb-4 drop-shadow-md">
          Feedback Form
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="p-3 rounded-md bg-transparent border border-[#39FF14] text-[#b3ffcc] placeholder:text-[#b3ffcc]/50 focus:outline-none focus:ring-2 focus:ring-[#39FF14]"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="p-3 rounded-md bg-transparent border border-[#39FF14] text-[#b3ffcc] placeholder:text-[#b3ffcc]/50 focus:outline-none focus:ring-2 focus:ring-[#39FF14]"
        />

        <textarea
          name="message"
          placeholder="Your Feedback"
          rows={5}
          value={form.message}
          onChange={handleChange}
          required
          className="p-3 rounded-md bg-transparent border border-[#39FF14] text-[#b3ffcc] placeholder:text-[#b3ffcc]/50 focus:outline-none focus:ring-2 focus:ring-[#39FF14]"
        />

        <button
          type="submit"
          className="p-3 mt-4 bg-[#39FF14] text-black font-bold rounded-md hover:bg-green-400 transition shadow-[0_0_12px_#39FF14]"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
