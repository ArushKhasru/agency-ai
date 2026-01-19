import { useState } from 'react';
import toast from 'react-hot-toast';
import assets from '../assets/assets';
import { FaArrowRightLong } from "react-icons/fa6";
import emailjs from '@emailjs/browser';


const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill all fields');
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      );

      toast.success('Message sent successfully');

      setFormData({
        name: '',
        email: '',
        message: ''
      });

    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Failed to send message ');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 flex justify-center">

      <div className="
        max-w-4xl w-full
        p-12
        rounded-ios
        backdrop-blur-xl
        bg-iosGlassLight dark:bg-iosGlassDark
        border border-white/40 dark:border-white/10
        shadow-ios dark:shadow-iosDark
        transition-all
      ">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white">
            Reach out to us
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400 text-lg">
            Ready to grow your brand? Let’s connect and build something exceptional.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">

          {/* 2 Column row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-800 dark:text-gray-200">
                Your name
              </label>
              <div className="relative">
                <img
                  src={assets.person_icon}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 opacity-70"
                />
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="
                    w-full pl-12 pr-4 py-3 rounded-ios
                    bg-white/70 dark:bg-white/10
                    border border-black/10 dark:border-white/10
                    backdrop-blur-sm
                    text-gray-900 dark:text-white
                    focus:ring-2 focus:ring-iosBlue focus:border-transparent
                    transition-all
                  "
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-800 dark:text-gray-200">
                Email id
              </label>
              <div className="relative">
                <img
                  src={assets.email_icon}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 opacity-70"
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="
                    w-full pl-12 pr-4 py-3 rounded-ios
                    bg-white/70 dark:bg-white/10
                    border border-black/10 dark:border-white/10
                    backdrop-blur-sm
                    text-gray-900 dark:text-white
                    focus:ring-2 focus:ring-iosBlue focus:border-transparent
                    transition-all
                  "
                />
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-800 dark:text-gray-200">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              className="
                w-full px-4 py-3 rounded-ios resize-none
                bg-white/70 dark:bg-white/10
                border border-black/10 dark:border-white/10
                backdrop-blur-sm
                text-gray-900 dark:text-white
                focus:ring-2 focus:ring-iosBlue focus:border-transparent
                transition-all
              "
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`
    relative overflow-hidden
    px-8 py-3 flex items-center gap-3 justify-center
    rounded-full font-medium text-white
    bg-iosBlue hover:bg-iosBlueDark
    shadow-[0_2px_6px_rgba(0,0,0,0.15)]
    transition-all duration-300
    active:scale-95
    disabled:opacity-70 disabled:cursor-not-allowed
  `}
          >
            {loading ? (
              <>
                {/* Spinner */}
                <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Submit <FaArrowRightLong className="transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>


        </form>
      </div>
    </section>
  );
}
