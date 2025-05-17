import { Link } from "@inertiajs/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";

const kategoriList = [
    "Pohon",
    "Semak",
    "Merambat",
    "Tumbuhan Bawah",
    "Anggrek",
    "Lainnya"
];

const ITEMS_PER_PAGE = 9;

// Fungsi pagination window dengan ellipsis
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

const Flora = () => {
    const [floraList, setFloraList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedKategori, setSelectedKategori] = useState(null);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchFlora = async () => {
            try {
                const response = await axios.get("/api/flora/");
                setFloraList(response.data.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };
        fetchFlora();
    }, []);

    // Filter flora berdasarkan kategori dan pencarian
    const filteredFlora = floraList.filter((flora) => {
        const matchKategori = selectedKategori ? flora.kategori === selectedKategori : true;
        const matchSearch =
            flora.local_name.toLowerCase().includes(search.toLowerCase()) ||
            flora.latin_name.toLowerCase().includes(search.toLowerCase());
        return matchKategori && matchSearch;
    });

    // Pagination logic
    const totalPages = Math.ceil(filteredFlora.length / ITEMS_PER_PAGE);
    const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIdx = startIdx + ITEMS_PER_PAGE;
    const floraToShow = filteredFlora.slice(startIdx, endIdx);

    // Reset ke halaman 1 jika filter berubah
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedKategori, search]);

    return (
        <div className="w-full bg-white min-h-screen flex flex-col items-center">
            <Navbar />
            <div className="self-stretch px-[15px] py-[100px] bg-white flex flex-col justify-start items-center gap-[50px]">
                {/* Header */}
                <div className="w-[1120px] pb-[50px] border-b border-[#d6d6d6] flex justify-between items-center">
                    <div className="w-[456px] text-[#0c0c0c] text-5xl font-medium font-jakarta leading-[60px]">
                        Daftar Flora
                    </div>
                    <div className="w-[451px] text-[#7f7f7f] text-base font-normal font-jakarta leading-normal">
                        Jelajahi kekayaan tumbuhan khas Hutan Lindung Sungai Wain, mulai dari pohon endemik hingga tanaman obat alami.
                    </div>
                </div>
                <div className="w-[1120px] flex justify-between items-start">
                    {/* Sidebar */}
                    <div className="w-[235px] flex flex-col justify-start items-start gap-10">
                        {/* Search */}
                        <div className="self-stretch px-3 py-2.5 rounded-lg outline-1 outline-offset-[-1px] outline-[#d6d6d6] flex justify-start items-center gap-2.5">
                            <input
                                type="text"
                                placeholder="Cari Flora"
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                className="flex-1 bg-transparent outline-none text-[#606060] text-sm font-normal font-jakarta leading-tight placeholder-[#606060]"
                            />
                        </div>
                        {/* Kategori */}
                        <div className="flex flex-col justify-start items-start gap-5 w-full">
                            <div className="text-[#0c0c0c] text-2xl font-medium font-jakarta leading-loose">
                                Kategori
                            </div>
                            <div className="flex flex-col justify-start items-start gap-4 w-full">
                                {kategoriList.map((kategori) => (
                                    <button
                                        key={kategori}
                                        className={`flex items-center gap-3.5 w-full group`}
                                        onClick={() => setSelectedKategori(selectedKategori === kategori ? null : kategori)}
                                    >
                                        <div className={`w-[18px] h-[18px] rounded-[20px] bg-white ${selectedKategori === kategori ? "border-[5px] border-[#0c0c0c]" : "border border-[#0c0c0c]"}`}></div>
                                        <span className="text-[#0c0c0c] text-base font-medium font-jakarta leading-normal">
                                            {kategori}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Daftar Flora */}
                    <div className="w-[855px] flex flex-col justify-start items-center gap-[30px]">
                        {/* Grid Flora */}
                        <div className="flex flex-wrap gap-[30px]">
                            {loading ? (
                                <div className="text-center text-lg text-[#0c0c0c] font-jakarta">Loading...</div>
                            ) : floraToShow.length === 0 ? (
                                <div className="text-center text-lg text-[#0c0c0c] font-jakarta">Tidak ada flora ditemukan.</div>
                            ) : (
                                floraToShow.map((flora) => (
                                    <Link
                                        key={flora.id}
                                        href={`/flora/${flora.slug}`}
                                        className="w-[265px] h-full p-5 rounded-[20px] outline-1 outline-offset-[-1px] outline-[#d6d6d6] flex flex-col justify-start items-start overflow-hidden hover:shadow-lg transition"
                                    >
                                        <img
                                            className="self-stretch h-[136px] rounded-[20px] object-cover"
                                            src={flora.foto || "https://placehold.co/225x136"}
                                            alt={flora.local_name}
                                        />
                                        <div className="flex flex-col justify-start items-start gap-3 w-full">
                                            <div className="text-[#0c0c0c] text-2xl font-medium font-jakarta leading-loose truncate max-w-[220px]">
                                                {flora.local_name.length > 20
                                                    ? flora.local_name.slice(0, 20) + "..."
                                                    : flora.local_name}
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center w-full">
                                            <div className="flex justify-start items-center gap-2.5">
                                                <div className="italic text-[#7f7f7f] text-base font-normal font-jakarta leading-normal truncate max-w-[180px]">
                                                    {flora.latin_name.length > 17
                                                        ? flora.latin_name.slice(0, 17) + "..."
                                                        : flora.latin_name}
                                                </div>
                                            </div>
                                            <div className="px-2.5 py-[5px] bg-[#cbea7b] rounded-[7px] flex justify-center items-center gap-2.5">
                                                <div className="text-[#1d2b08] text-sm font-normal font-jakarta leading-tight">
                                                    {flora.kategori || "Lainnya"}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            )}
                        </div>
                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="inline-flex justify-center items-start mt-6">
                                <div className="flex justify-start items-center gap-1">
                                    {/* Previous */}
                                    <button
                                        className="pl-2.5 pr-4 py-2.5 rounded-md inline-flex justify-center items-center gap-1 disabled:opacity-50"
                                        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                                        disabled={currentPage === 1}
                                    >
                                        <span className="text-[#0c0c0c] text-sm font-medium font-inter leading-tight">Previous</span>
                                    </button>
                                    {/* Page Numbers with Ellipsis */}
                                    {getPagination(currentPage, totalPages).map((page, idx) =>
                                        typeof page === "string" ? (
                                            <span
                                                key={page + idx}
                                                className="w-10 py-2.5 rounded-md inline-flex justify-center items-center text-[#0c0c0c] text-sm font-medium font-inter leading-tight select-none"
                                            >
                                                ...
                                            </span>
                                        ) : (
                                            <button
                                                key={page}
                                                className={`w-10 py-2.5 rounded-md inline-flex justify-center items-center ${
                                                    currentPage === page
                                                        ? "bg-white outline-1 outline-offset-[-1px] outline-[#d6d6d6]"
                                                        : ""
                                                }`}
                                                onClick={() => setCurrentPage(page)}
                                            >
                                                <span className="text-[#0c0c0c] text-sm font-medium font-inter leading-tight">{page}</span>
                                            </button>
                                        )
                                    )}
                                    {/* Next */}
                                    <button
                                        className="pl-4 pr-2.5 py-2.5 rounded-md inline-flex justify-center items-center gap-1 disabled:opacity-50"
                                        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                                        disabled={currentPage === totalPages}
                                    >
                                        <span className="text-[#0c0c0c] text-sm font-medium font-inter leading-tight">Next</span>
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

export default Flora;
