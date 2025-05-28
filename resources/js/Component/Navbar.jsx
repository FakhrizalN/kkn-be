import { Link, usePage } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";

// DropdownIcon SVG component (tidak ada perubahan)
function DropdownIcon({ open, hover }) {
    return (
        <svg
            className={`ml-1 transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"} ${hover ? "stroke-[#cbea7b]" : "stroke-[#fcfcfc]"}`}
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
        >
            <path d="M5 7L9 11L13 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

// Komponen HamburgerIcon dengan animasi transformasi (tidak ada perubahan)
function AnimatedHamburgerIcon({ isOpen, onClick }) {
    return (
        <button
            id="hamburger-button"
            className="relative w-7 h-7 flex flex-col justify-center items-center lg:hidden text-[#cbea7b] focus:outline-none z-30"
            onClick={onClick}
            aria-label="Toggle menu"
        >
            <span
                className={`block w-6 h-0.5 bg-[#cbea7b] absolute transition-all duration-300 ease-in-out
                    ${isOpen ? 'rotate-45 top-1/2 -translate-y-1/2' : '-translate-y-2'} `}
            ></span>
            <span
                className={`block w-6 h-0.5 bg-[#cbea7b] absolute transition-all duration-300 ease-in-out
                    ${isOpen ? 'opacity-0' : 'opacity-100'} `}
            ></span>
            <span
                className={`block w-6 h-0.5 bg-[#cbea7b] absolute transition-all duration-300 ease-in-out
                    ${isOpen ? '-rotate-45 top-1/2 -translate-y-1/2' : 'translate-y-2'} `}
            ></span>
        </button>
    );
}

export default function Navbar() {
    const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isHayatiHover, setIsHayatiHover] = useState(false);
    const [isMobileHayatiDropdownOpen, setIsMobileHayatiDropdownOpen] = useState(false);

    const { url } = usePage();
    const desktopDropdownRef = useRef(null);
    const mobileMenuRef = useRef(null);

    // Tutup dropdown desktop jika klik di luar
    useEffect(() => {
        function handleClickOutsideDesktopDropdown(event) {
            if (
                desktopDropdownRef.current &&
                !desktopDropdownRef.current.contains(event.target)
            ) {
                setIsDesktopDropdownOpen(false);
            }
        }
        if (isDesktopDropdownOpen) {
            document.addEventListener("mousedown", handleClickOutsideDesktopDropdown);
        } else {
            document.removeEventListener("mousedown", handleClickOutsideDesktopDropdown);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutsideDesktopDropdown);
        };
    }, [isDesktopDropdownOpen]);

    // Tutup mobile menu utama dan semua dropdown di dalamnya jika klik di luar
    useEffect(() => {
        function handleClickOutsideMobileMenu(event) {
            if (
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(event.target) &&
                event.target.id !== 'hamburger-button' &&
                !event.target.closest('#hamburger-button')
            ) {
                setIsMobileMenuOpen(false);
                setIsMobileHayatiDropdownOpen(false);
            }
        }
        if (isMobileMenuOpen) {
            document.addEventListener("mousedown", handleClickOutsideMobileMenu);
            document.body.style.overflow = 'hidden';
        } else {
            document.removeEventListener("mousedown", handleClickOutsideMobileMenu);
            document.body.style.overflow = '';
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutsideMobileMenu);
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);


    // Helper untuk menentukan apakah link aktif
    const isActive = (href) => {
        if (href === "/hayati") {
            return url.startsWith("/flora") || url.startsWith("/fauna");
        }
        if (href === "/layanan"){
            return url.startsWith("/form") || url.startsWith("/layanan");
        }
        if (href === "/") {
            return url === "/";
        }
        return url.startsWith(href);
    };

    const navLinkClass = (href) => {
        return `px-3 py-2 flex justify-center items-center gap-2.5 font-jakarta text-sm font-semibold leading-tight transition
    border-b-2 border-transparent
    ${isActive(href)
        ? "text-[#cbea7b] border-[#cbea7b]"
        : "text-[#fcfcfc] hover:border-[#cbea7b] hover:text-[#cbea7b]"}`;
    };

    const mobileNavLinkClass = (href) => {
        return `flex items-center justify-between block w-full text-left px-3 py-2 font-jakarta text-base font-semibold leading-tight transition
            ${isActive(href)
                ? "text-[#cbea7b] bg-gray-700/50"
                : "text-[#fcfcfc] hover:bg-gray-700/30"
            }`;
    };

    return (
        <div className="w-full bg-[#1d2b08] flex flex-col justify-center items-center">
            <div className="w-full max-w-[1120px] px-[15px] py-6 flex justify-between items-center relative z-20">
                {/* Logo or Brand */}
                <Link href="/" className="flex items-center">
                    <img
                        src="/storage/Logo2.png"
                        alt="Sungai Wain Logo"
                        className="h-8 sm:h-10 w-auto object-contain"
                    />
                </Link>
                {/* Hamburger for mobile */}
                <AnimatedHamburgerIcon isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen((prev) => !prev)} />
                
                {/* Desktop Menu */}
                <div className="hidden lg:flex justify-center items-center gap-2">
                    <Link href="/" className={navLinkClass("/")}>
                        Beranda
                    </Link>
                    {/* Dropdown Hayati di desktop */}
                    <div className="relative" ref={desktopDropdownRef}>
                        <button
                            type="button"
                            className={navLinkClass("/hayati")}
                            onClick={() => setIsDesktopDropdownOpen((prev) => !prev)}
                            onMouseEnter={() => setIsHayatiHover(true)}
                            onMouseLeave={() => setIsHayatiHover(false)}
                        >
                            Hayati
                            <DropdownIcon open={isDesktopDropdownOpen} hover={isHayatiHover} />
                        </button>
                        {isDesktopDropdownOpen && (
                            <div className="absolute left-0 mt-2 w-40 bg-white rounded shadow-lg z-50 overflow-hidden">
                                <Link
                                    href="/fauna"
                                    className="block w-full text-left px-3 py-2 font-jakarta text-sm font-semibold leading-tight text-[#1d2b08] hover:text-[#cbea7b] hover:bg-[#1d2b08] transition"
                                    onClick={() => setIsDesktopDropdownOpen(false)}
                                    tabIndex={0}
                                >
                                    Fauna
                                </Link>
                                <Link
                                    href="/flora"
                                    className="block w-full text-left px-3 py-2 font-jakarta text-sm font-semibold leading-tight text-[#1d2b08] hover:text-[#cbea7b] hover:bg-[#1d2b08] rounded-b-md transition"
                                    onClick={() => setIsDesktopDropdownOpen(false)}
                                    tabIndex={0}
                                >
                                    Flora
                                </Link>
                            </div>
                        )}
                    </div>
                    <Link href="/layanan" className={navLinkClass("/layanan")}>
                        Layanan Pemandu
                    </Link>
                    <Link href="/tentang" className={navLinkClass("/tentang")}>
                        Tentang Kami
                    </Link>
                </div>
            </div>
            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed z-40 lg:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                ></div>
            )}
            {/* Mobile Menu Sidebar */}
            <div
                ref={mobileMenuRef}
                className={`fixed top-20 right-0 h-full w-3/4 max-w-xs bg-[#1d2b08] shadow-lg z-50 flex flex-col items-start px-6 gap-2 transform transition-transform duration-300 ease-in-out
                    ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <Link href="/" className={mobileNavLinkClass("/")} onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsMobileHayatiDropdownOpen(false);
                }}>
                    Beranda
                </Link>
                {/* Dropdown Hayati di mobile */}
                <div className="w-full flex flex-col items-start">
                    <button
                        type="button"
                        className={mobileNavLinkClass("/hayati")}
                        onClick={() => setIsMobileHayatiDropdownOpen((prev) => !prev)}
                    >
                        Hayati
                        <DropdownIcon open={isMobileHayatiDropdownOpen} hover={false} />
                    </button>
                    {/* Container untuk link Fauna dan Flora - Animasi Slide Down & Fade In */}
                    <div
                        className={`w-full pl-3 flex flex-col bg-[#1d2b08] z-50 transition-all duration-300 ease-in-out
                            ${isMobileHayatiDropdownOpen ? 'max-h-screen opacity-100 pt-1' : 'max-h-0 opacity-0'}
                            overflow-hidden`} // Pastikan overflow-hidden untuk transisi max-h
                    >
                        <Link
                            href="/fauna"
                            className="block w-full text-left px-3 py-2 font-jakarta text-base font-semibold text-white leading-tight hover:text-[#cbea7b] hover:bg-gray-700/30 transition"
                            onClick={() => {
                                setIsMobileHayatiDropdownOpen(false);
                                setIsMobileMenuOpen(false);
                            }}
                            tabIndex={0}
                        >
                            Fauna
                        </Link>
                        <Link
                            href="/flora"
                            className="block w-full text-left px-3 py-2 font-jakarta text-base font-semibold text-white leading-tight hover:text-[#cbea7b] hover:bg-gray-700/30 rounded-b-md transition"
                            onClick={() => {
                                setIsMobileHayatiDropdownOpen(false);
                                setIsMobileMenuOpen(false);
                            }}
                            tabIndex={0}
                        >
                            Flora
                        </Link>
                    </div>
                </div>
                <Link href="/layanan" className={mobileNavLinkClass("/layanan")} onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsMobileHayatiDropdownOpen(false);
                }}>
                    Layanan Pemandu
                </Link>
                <Link href="/tentang" className={mobileNavLinkClass("/tentang")} onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsMobileHayatiDropdownOpen(false);
                }}>
                    Tentang Kami
                </Link>
            </div>
        </div>
    );
}