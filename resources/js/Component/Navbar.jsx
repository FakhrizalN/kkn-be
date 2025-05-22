import { Link, usePage } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";

// DropdownIcon SVG component
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

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isHayatiHover, setIsHayatiHover] = useState(false);
    const { url } = usePage();
    const dropdownRef = useRef(null);

    // Tutup dropdown jika klik di luar
    useEffect(() => {
        function handleClickOutside(event) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsDropdownOpen(false);
            }
        }
        if (isDropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isDropdownOpen]);

    // Helper untuk menentukan apakah link aktif
    const isActive = (href) => {
        if (href === "/hayati") {
            // Aktif jika di /flora atau /fauna
            return url.startsWith("/flora") || url.startsWith("/fauna");
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

    return (
        <div className="w-full bg-[#1d2b08] flex flex-col justify-center items-center">
            <div className="w-full max-w-[1120px] px-[15px] py-6 flex justify-between items-center">
                {/* Logo or Brand */}
                <Link href="/" className="text-[#cbea7b] text-xl font-bold font-jakarta">
                    Sungai Wain
                </Link>w
                {/* Hamburger for mobile */}
                <button
                    className="lg:hidden text-[#cbea7b] focus:outline-none"
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                    aria-label="Toggle menu"
                >
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                        <path stroke="#cbea7b" strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
                    </svg>
                </button>
                {/* Desktop Menu */}
                <div className="hidden lg:flex justify-center items-center gap-2">
                    <Link href="/" className={navLinkClass("/")}>
                        Beranda
                    </Link>
                    <div className="relative" ref={dropdownRef}>
                        <button
                            type="button"
                            className={navLinkClass("/hayati")}
                            onClick={() => setIsDropdownOpen((prev) => !prev)}
                            onMouseEnter={() => setIsHayatiHover(true)}
                            onMouseLeave={() => setIsHayatiHover(false)}
                        >
                            Hayati
                            <DropdownIcon open={isDropdownOpen} hover={isHayatiHover} />
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute left-0 mt-2 w-40 bg-white rounded shadow-lg z-50">
                                <Link
                                    href="/fauna"
                                    className="block w-full text-left px-3 py-2 font-jakarta text-sm font-semibold leading-tight text-[#1d2b08] hover:text-[#cbea7b] hover:bg-[#1d2b08] transition"
                                    onClick={() => setIsDropdownOpen(false)}
                                    tabIndex={0}
                                >
                                    Fauna
                                </Link>
                                <Link
                                    href="/flora"
                                    className="block w-full text-left px-3 py-2 font-jakarta text-sm font-semibold leading-tight text-[#1d2b08] hover:text-[#cbea7b] hover:bg-[#1d2b08] rounded-b-md transition"
                                    onClick={() => setIsDropdownOpen(false)}
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
            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="fixed top-0 right-0 h-full w-3/4 max-w-xs bg-[#1d2b08] shadow-lg z-50 flex flex-col items-start pt-20 px-6 gap-2 animate-slide-in">
                    <button
                        className="absolute top-4 right-4 text-[#cbea7b] text-2xl"
                        onClick={() => setIsMobileMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        &times;
                    </button>
                    <Link href="/" className={navLinkClass("/")} onClick={() => setIsMobileMenuOpen(false)}>
                        Beranda
                    </Link>
                    {/* Dropdown Hayati di mobile: tampil di bawah tombol Hayati, tidak menutupi menu lain */}
                    <div className="w-full flex flex-col items-start" ref={dropdownRef}>
                        <button
                            type="button"
                            className={navLinkClass("/hayati")}
                            onClick={() => setIsDropdownOpen((prev) => !prev)}
                            onMouseEnter={() => setIsHayatiHover(true)}
                            onMouseLeave={() => setIsHayatiHover(false)}
                        >
                            Hayati
                            <DropdownIcon open={isDropdownOpen} hover={isHayatiHover} />
                        </button>
                        {isDropdownOpen && (
                            <div className="w-full flex flex-col bg-white rounded shadow-lg z-50 mt-1">
                                <Link
                                    href="/fauna"
                                    className="block w-full text-left px-3 py-2 font-jakarta text-sm font-semibold leading-tight text-[#1d2b08] hover:text-[#cbea7b] hover:bg-[#1d2b08] transition"
                                    onClick={() => {
                                        setIsDropdownOpen(false);
                                        setIsMobileMenuOpen(false);
                                    }}
                                    tabIndex={0}
                                >
                                    Fauna
                                </Link>
                                <Link
                                    href="/flora"
                                    className="block w-full text-left px-3 py-2 font-jakarta text-sm font-semibold leading-tight text-[#1d2b08] hover:text-[#cbea7b] hover:bg-[#1d2b08] rounded-b-md transition"
                                    onClick={() => {
                                        setIsDropdownOpen(false);
                                        setIsMobileMenuOpen(false);
                                    }}
                                    tabIndex={0}
                                >
                                    Flora
                                </Link>
                            </div>
                        )}
                    </div>
                    <Link href="/layanan" className={navLinkClass("/layanan")} onClick={() => setIsMobileMenuOpen(false)}>
                        Layanan Pemandu
                    </Link>
                    <Link href="/tentang" className={navLinkClass("/tentang")} onClick={() => setIsMobileMenuOpen(false)}>
                        Tentang Kami
                    </Link>
                </div>
            )}
        </div>
    );
}