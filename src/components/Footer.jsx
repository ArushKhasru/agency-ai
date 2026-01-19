import { useState } from 'react';
import assets from '../assets/assets';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast'

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
const SUBSCRIBE_TEMPLATE = import.meta.env.VITE_SUBSCRIBE_TEMPLATE;

export default function Footer() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error('Email is required');
      return;
    }

   setLoading(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        SUBSCRIBE_TEMPLATE,
        { email: email },
        PUBLIC_KEY
      );

      toast.success('Subscribed successfully');
      setEmail('');
    } catch (err) {
      console.error(err);
      toast.error('Subscription failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="mt-32 py-24 flex justify-center">
      <div className="
        max-w-7xl w-full px-6 py-12
        rounded-ios backdrop-blur-xl
        bg-iosGlassLight dark:bg-iosGlassDark
        border border-white/40 dark:border-white/10
        shadow-ios dark:shadow-iosDark
        transition-all
      ">

        {/* TOP */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-16">

          {/* LEFT */}
          <div>
            <img src={assets.logo} alt="Logo" className="h-9 select-none mb-6" />

            <p className="text-gray-600 dark:text-gray-400 max-w-md mb-10 leading-relaxed">
              From strategy to execution, we craft digital experiences that move
              your business forward.
            </p>

            <nav className="flex flex-wrap gap-8 text-gray-700 dark:text-gray-300 font-medium">
              <span className="cursor-pointer hover:text-iosBlueDark transition">Home</span>
              <span className="cursor-pointer hover:text-iosBlueDark transition">Services</span>
              <span className="cursor-pointer hover:text-iosBlueDark transition">Our Work</span>
              <span className="cursor-pointer hover:text-iosBlueDark transition">Testimonials</span>
            </nav>
          </div>

          {/* RIGHT */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Stay in the loop
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              Weekly insights, articles, and resources — straight to your inbox.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-4 max-w-md"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="
                  flex-1 px-4 py-3 rounded-ios
                  border border-black/10 dark:border-white/10
                  bg-white/70 dark:bg-white/10
                  text-gray-900 dark:text-white
                  backdrop-blur-md
                  focus:outline-none focus:ring-2 focus:ring-iosBlue
                  transition
                "
              />
              <button
                type="submit"
                disabled={loading}
                className="
    relative overflow-hidden
    px-8 py-3 rounded-ios font-medium text-white
    bg-iosBlue hover:bg-iosBlueDark
    transition-all duration-300
    active:scale-95
    disabled:opacity-60 disabled:cursor-not-allowed
  "
              >
                {loading ? (
                  <span className="flex justify-center items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Subscribing...
                  </span>
                ) : (
                  'Subscribe'
                )}
              </button>

            </form>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-black/10 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © 2025 agency.ai — All rights reserved.
          </p>

          <div className="flex items-center gap-6 opacity-80 hover:opacity-100 transition">
            <img src={assets.facebook_icon} className="w-5 h-5 cursor-pointer" alt="" />
            <img src={assets.twitter_icon} className="w-5 h-5 cursor-pointer" alt="" />
            <img src={assets.instagram_icon} className="w-5 h-5 cursor-pointer" alt="" />
            <img src={assets.linkedin_icon} className="w-5 h-5 cursor-pointer" alt="" />
          </div>
        </div>

      </div>
    </footer>
  );
}
