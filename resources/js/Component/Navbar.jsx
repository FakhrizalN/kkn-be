import { Link, usePage } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
        ${isActive(href) ? "text-[#cbea7b]" : "text-[#fcfcfc] hover:border-b hover:border-[#cbea7b] hover:text-[#cbea7b]"}`;
    };

    return (
        <div className="w-full h-[100px] bg-[#1d2b08] flex flex-col justify-center items-center">
            <div className="w-full px-[15px] py-8 bg-[#1d2b08] flex justify-center items-center">
                <div className="flex justify-center items-center">
                    <Link href="/" className={navLinkClass("/")}>
                        Beranda
                    </Link>
                    <div className="relative" ref={dropdownRef}>
                        <button
                            type="button"
                            className={navLinkClass("/hayati")}
                            onClick={() => setIsDropdownOpen((prev) => !prev)}
                        >
                            Hayati
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
        </div>
    );
}