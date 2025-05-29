import { Link } from "@inertiajs/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";

const kategoriList = [
    "Mamalia",
    "Burung",
    "Reptil",
    "Amfibi",
    "Serangga",
    "Lainnya"
];

// Define items per page for different views
const MOBILE_ITEMS_PER_PAGE = 8; // Max 8 for mobile
const DESKTOP_ITEMS_PER_PAGE = 9; // Default 9 for larger screens

// Fungsi untuk pagination dengan ellipsis
function getPagination(current, total) {
    let pages = [];
    if (total <= 5) {
        for (let i = 1; i <= total; i++) pages.push(i);
    } else if (current <= 3) {
        pages = [1, 2, 3, '...', total];
    } else if (current >= total - 2) {
        pages = [1, '...', total - 2, total - 1, total];
    } else {
        pages = [1, '...', current, '...', total];
    }
    // Hilangkan duplikat
    let cleanPages = [];
    let prev;
    for (let p of pages) {
        if (p !== prev) cleanPages.push(p);
        prev = p;
    }
    return cleanPages;
}

const Fauna = () => {
    const [faunaList, setFaunaList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedKategori, setSelectedKategori] = useState(null);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    // State to track if it's a mobile view
    const [isMobile, setIsMobile] = useState(false);

    // Effect to fetch fauna data
    useEffect(() => {
        const fetchFauna = async () => {
            try {
                const response = await axios.get("/api/fauna/");
                setFaunaList(response.data.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching fauna data:", error);
                setLoading(false);
            }
        };
        fetchFauna();
    }, []);

    // Effect to detect screen size for responsive items per page
    useEffect(() => {
        const checkIsMobile = () => {
            // Tailwind's 'md' breakpoint is 768px by default.
            // Using 768px as the threshold for mobile/desktop view logic.
            setIsMobile(window.innerWidth < 768);
        };

        // Initial check
        checkIsMobile();

        // Add event listener for window resize
        window.addEventListener('resize', checkIsMobile);

        // Cleanup the event listener on component unmount
        return () => window.removeEventListener('resize', checkIsMobile);
    }, []); // Empty dependency array means this runs once on mount and cleans up on unmount

    // Determine current ITEMS_PER_PAGE based on screen size
    const currentItemsPerPage = isMobile ? MOBILE_ITEMS_PER_PAGE : DESKTOP_ITEMS_PER_PAGE;

    // Filter fauna berdasarkan kategori dan pencarian
    const filteredFauna = faunaList.filter((fauna) => {
        const matchKategori = selectedKategori ? fauna.kategori === selectedKategori : true;
        const matchSearch =
            fauna.nama.toLowerCase().includes(search.toLowerCase()) ||
            fauna.nama_latin.toLowerCase().includes(search.toLowerCase());
        return matchKategori && matchSearch;
    });

    // Pagination logic uses currentItemsPerPage
    const totalPages = Math.ceil(filteredFauna.length / currentItemsPerPage);
    const startIdx = (currentPage - 1) * currentItemsPerPage;
    const endIdx = startIdx + currentItemsPerPage;
    const faunaToShow = filteredFauna.slice(startIdx, endIdx);

    // Reset ke halaman 1 jika filter atau screen size berubah
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedKategori, search, isMobile]); // Added isMobile to dependencies

    return (
        <div className="w-full bg-white min-h-screen flex flex-col justify-center items-center">
            <Navbar />
            <div className="self-stretch px-[15px] py-12 md:py-24 bg-white flex flex-col justify-start items-center gap-[50px] md:px-4">
                {/* Header */}
                <div className="w-full max-w-[1120px] pb-[50px] border-b border-[#d6d6d6] flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left md:pb-8">
                    {/* Adjusted header text size for mobile */}
                    <div className="w-full text-[#0c0c0c] text-3xl font-medium font-jakarta leading-[40px] sm:text-4xl sm:leading-[48px] md:text-5xl md:leading-[60px] md:w-[456px]">
                        Daftar Fauna
                    </div>
                    {/* Adjusted description text size for mobile */}
                    <div className="w-full text-[#7f7f7f] text-sm font-normal font-jakarta leading-normal sm:text-base md:w-[451px]">
                        Temukan beragam satwa liar yang hidup di Hutan Lindung Sungai Wain, dari primata langka hingga burung endemik Kalimantan
                    </div>
                </div>
                <div className="w-full max-w-[1120px] flex flex-col items-start gap-8 md:flex-row md:justify-between">
                    {/* Sidebar */}
                    <div className="w-full md:w-[235px] min-h-[auto] flex flex-col justify-start items-start gap-10">
                        {/* Search */}
                        <div className="self-stretch px-3 py-2.5 rounded-lg outline-1 outline-offset-[-1px] outline-[#d6d6d6] flex justify-start items-center gap-2.5">
                            <input
                                type="text"
                                placeholder="Cari Fauna"
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                className="flex-1 bg-transparent outline-none text-[#606060] text-sm font-normal font-jakarta leading-tight placeholder-[#606060]"
                            />
                        </div>
                        {/* Kategori */}
                        <div className="flex flex-col justify-start items-start gap-5 w-full">
                            {/* Adjusted category header text size for mobile */}
                            <div className="text-[#0c0c0c] text-xl font-medium font-jakarta leading-loose sm:text-2xl">
                                Kategori
                            </div>
                            {/* NEW: Using grid for mobile categories, and then md:flex-col for desktop */}
                            <div className="grid grid-cols-2 gap-x-4 gap-y-2 w-full md:flex md:flex-col md:items-start md:gap-4">
                                {kategoriList.map((kategori) => (
                                    <button
                                        key={kategori}
                                        className={`flex items-center gap-3.5 group`}
                                        onClick={() => setSelectedKategori(selectedKategori === kategori ? null : kategori)}
                                    >
                                        <div className={`w-[18px] h-[18px] rounded-[20px] border ${selectedKategori === kategori ? "border-[5px] border-[#0c0c0c]" : "border border-[#0c0c0c]"}`}></div>
                                        {/* Adjusted category item text size for mobile */}
                                        <span className="text-[#0c0c0c] text-sm font-medium font-jakarta leading-normal sm:text-base">
                                            {kategori}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Daftar Fauna */}
                    <div className="w-full md:w-[855px] flex flex-col justify-start items-center gap-[30px]">
                        {/* Grid Fauna */}
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-[20px] sm:gap-[30px] w-full justify-items-center">
                            {loading ? (
                                <div className="text-center text-lg text-[#0c0c0c] font-jakarta col-span-full">Loading...</div>
                            ) : faunaToShow.length === 0 ? (
                                <div className="text-center text-lg text-[#0c0c0c] font-jakarta col-span-full">Tidak ada fauna ditemukan.</div>
                            ) : (
                                faunaToShow.map((fauna) => (
                                    <Link
                                        key={fauna.id}
                                        href={`/fauna/${fauna.slug}`}
                                        className="w-full max-w-[265px] h-full p-3 sm:p-5 rounded-[20px] outline-1 outline-offset-[-1px] outline-[#d6d6d6] flex flex-col justify-start items-start gap-3 sm:gap-4 overflow-hidden hover:shadow-lg transition"
                                    >
                                        {/* Adjusted image height for mobile (slightly larger than 80px now) */}
                                        <img
                                            className="self-stretch h-[90px] sm:h-[136px] rounded-[15px] sm:rounded-[20px] object-cover"
                                            src={`/storage/${fauna.foto}`}
                                            alt={fauna.nama}
                                        />
                                        <div className="flex flex-col justify-start items-start gap-2 sm:gap-3 w-full">
                                            {/* Adjusted fauna name font size for mobile (slightly larger than base now) */}
                                            <div className="text-[#0c0c0c] text-base font-medium font-jakarta leading-tight sm:text-lg sm:leading-loose truncate w-full">
                                                {fauna.nama}
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center w-full">
                                            <div className="flex justify-start items-center gap-2.5">
                                                {/* Adjusted Latin name font size for mobile (slightly larger than xs now) */}
                                                <div className="italic text-[#7f7f7f] text-xs font-normal font-jakarta leading-normal sm:text-sm truncate w-full">
                                                    {fauna.nama_latin}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            )}
                        </div>
                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="inline-flex justify-center items-start mt-4 sm:mt-6">
                                <div className="flex justify-start items-center gap-1">
                                    {/* Previous */}
                                    <button
                                        className="px-2 py-1.5 rounded-md inline-flex justify-center items-center gap-1 disabled:opacity-50 sm:pl-2.5 sm:pr-4 sm:py-2.5"
                                        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                                        disabled={currentPage === 1}
                                    >
                                        <span className="text-[#0c0c0c] text-xs font-medium font-inter leading-tight sm:text-sm">Previous</span>
                                    </button>
                                    {/* Page Numbers with Ellipsis */}
                                    {getPagination(currentPage, totalPages).map((page, idx) =>
                                        typeof page === "string" ? (
                                            <span
                                                key={page + idx}
                                                className="w-8 py-1.5 rounded-md inline-flex justify-center items-center text-[#0c0c0c] text-xs font-medium font-inter leading-tight select-none sm:w-10 sm:py-2.5 sm:text-sm"
                                            >
                                                ...
                                            </span>
                                        ) : (
                                            <button
                                                key={page}
                                                className={`w-8 py-1.5 rounded-md inline-flex justify-center items-center sm:w-10 sm:py-2.5 ${
                                                    currentPage === page
                                                        ? "bg-white outline-1 outline-offset-[-1px] outline-[#d6d6d6]"
                                                        : ""
                                                }`}
                                                onClick={() => setCurrentPage(page)}
                                            >
                                                <span className="text-[#0c0c0c] text-xs font-medium font-inter leading-tight sm:text-sm">{page}</span>
                                            </button>
                                        )
                                    )}
                                    {/* Next */}
                                    <button
                                        className="px-2 py-1.5 rounded-md inline-flex justify-center items-center gap-1 disabled:opacity-50 sm:pl-4 sm:pr-2.5 sm:py-2.5"
                                        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                                        disabled={currentPage === totalPages}
                                    >
                                        <span className="text-[#0c0c0c] text-xs font-medium font-inter leading-tight sm:text-sm">Next</span>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Fauna;