import { useState } from 'react';
import assets from '../assets/assets';
import { FaArrowRightLong } from "react-icons/fa6";
import { CiLight, CiDark } from 'react-icons/ci';
import useThemeStore from '../store/ThemeStore';
import Menu from "./Menu.jsx";

const Navbar = () => {
    const { isDark, toggleTheme } = useThemeStore();
    const [openMenu, setOpenMenu] = useState(false);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <nav className="w-full sticky top-0 z-50 flex justify-center px-4 sm:px-6">

            <div className="
               max-w-7xl w-full flex justify-between items-center px-6 sm:px-10 lg:px-16 xl:px-20 py-4 backdrop-blur-xl bg-iosGlassLight dark:bg-iosGlassDark rounded-ios border border-white/40 dark:border-white/10 shadow-ios dark:shadow-iosDark transition-all duration-300">

                {/* Mobile */}
                <img
                    src={isDark ? assets.menu_icon_dark : assets.menu_icon}
                    alt="Menu"
                    className="w-[25px] cursor-pointer block md:hidden"
                    onClick={() => setOpenMenu(true)}
                />

                {/* Logo */}
                <img
                    onClick={scrollToHome}
                    src={isDark ? assets.logo_dark : assets.logo}
                    className="w-32 sm:w-40 cursor-pointer select-none active:opacity-70 active:scale-[.97] transition"
                    alt="logo"
                />

                {/* Links */}
                <div className="hidden md:block">
                    <ul className="flex gap-8 font-medium text-gray-700 dark:text-gray-300 tracking-tight">

                        <li onClick={() => scrollToSection("home")} className="hover:text-iosBlueDark cursor-pointer">Home</li>
                        <li onClick={() => scrollToSection("services")} className="hover:text-iosBlueDark cursor-pointer">Services</li>
                        <li onClick={() => scrollToSection("work")} className="hover:text-iosBlueDark cursor-pointer">Our Work</li>
                        <li onClick={() => scrollToSection("testimonials")} className="hover:text-iosBlueDark cursor-pointer">Testimonials</li>

                    </ul>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="text-xl w-10 h-10 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/10 transition"
                    >
                        {isDark ? <CiLight /> : <CiDark />}
                    </button>

                    <button
                        onClick={() => scrollToSection("contact")}
                        className="hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-full text-white font-medium bg-iosBlue hover:bg-iosBlueDark shadow-ios dark:shadow-iosDark transition"
                    >
                        Connect
                        <FaArrowRightLong />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {openMenu && (
                <Menu
                    isOpen={openMenu}
                    onClose={() => setOpenMenu(false)}
                    scrollToSection={scrollToSection}
                />
            )}
        </nav>
    );
};

const scrollToHome = () => {
    document.getElementById("home")?.scrollIntoView({
        behavior: "smooth",
    });
};

export default Navbar;
