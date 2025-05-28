import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../Component/Footer"; // Pastikan path ini benar
import Navbar from "../Component/Navbar"; // Pastikan path ini benar

const FloraDetail = ({ floraSlug }) => {
    const [flora, setFlora] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // State untuk menangani error

    useEffect(() => {
        const fetchFloraDetail = async () => {
            if (!floraSlug) {
                setLoading(false);
                setError("Flora slug not provided.");
                return;
            }
            setLoading(true);
            setError(null); // Reset error sebelum fetch baru
            try {
                const response = await axios.get(`/api/flora/${floraSlug}`);
                if (response.data && response.data.data) {
                    setFlora(response.data.data);
                } else {
                    setError("Flora not found or invalid data structure.");
                }
            } catch (err) {
                console.error("Error fetching flora detail:", err); // Log error ke console
                setError(err.response?.data?.message || "Failed to fetch flora details. Please try again later.");
            } finally {
                setLoading(false);
            }
        };
        fetchFloraDetail();
    }, [floraSlug]);

    if (loading) {
        return (
            <div className="w-full min-h-screen flex flex-col justify-center items-center py-20 bg-white font-jakarta">
                <div className="flex-grow w-full flex justify-center items-center">
                    <span className="text-lg text-[#0c0c0c] font-jakarta">Loading...</span>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full min-h-screen flex flex-col justify-center items-center py-20 bg-white font-jakarta">
                <div className="flex-grow w-full flex justify-center items-center px-4 text-center">
                    <span className="text-lg text-red-500 font-jakarta">{error}</span>
                </div>
            </div>
        );
    }
    
    if (!flora) {
        return (
            <div className="w-full min-h-screen flex flex-col justify-center items-center py-20 bg-white font-jakarta">
                <Navbar />
                <div className="flex-grow w-full flex justify-center items-center px-4 text-center">
                    <span className="text-lg text-red-500 font-jakarta">Flora not found.</span>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="w-full flex flex-col justify-center items-center bg-white font-jakarta min-h-screen">
            <Navbar />
            {/* Detail Flora */}
            <main className="w-full bg-white flex flex-col justify-center items-center flex-grow">
                <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24 flex flex-col justify-center items-center gap-10 md:gap-12">
                    <div className="w-full max-w-[1120px] pb-6 sm:pb-8 border-b border-[#d6d6d6] flex flex-col-reverse md:flex-row justify-center items-center md:items-start gap-6 md:gap-3 text-center md:text-left">
                        <div className="w-full flex flex-col justify-between items-center md:items-start gap-4 sm:gap-5">
                            <div className="text-[#0c0c0c] text-3xl sm:text-4xl md:text-5xl font-medium leading-[40px] sm:leading-[48px] md:leading-[60px]">
                                {flora.local_name}
                            </div>
                            <div className="text-[#0c0c0c] text-lg sm:text-xl md:text-2xl font-medium leading-normal sm:leading-9 italic">
                                {flora.latin_name}
                            </div>
                            <div className="w-full text-[#7f7f7f] text-sm sm:text-base font-normal leading-normal mt-2 sm:mt-4">
                                {flora.description || "Deskripsi tidak tersedia."}
                            </div>
                        </div>
                            <img
                                className="w-full max-w-[250px] h-auto max-h-[280px] sm:max-w-[300px] sm:max-h-[350px] md:max-w-[352px] md:max-h-[400px] rounded-[15px] sm:rounded-[20px] object-cover mx-auto md:mx-0" 
                                src={flora.foto || `https://placehold.co/352x400/EEE/31343C?text=${encodeURIComponent(flora.local_name)}`} 
                                alt={flora.local_name || "Gambar Flora"} 
                            />
                    </div>

                    {/* Bagian Bawah: Family, Ekologi, Distribusi */}
                    <div className="w-full flex flex-col md:flex-row justify-center items-stretch gap-4 md:gap-8"> {/* Reduced gap from 6 to 4 on mobile */}
                        {/* Family */}
                        <div className="w-full md:w-1/3 px-4 py-6 bg-[#f9f9fb] rounded-[15px] flex flex-col justify-start items-center md:items-start gap-2 border border-[#d6d6d6] text-center md:text-left"> {/* Reduced px, py, gap, rounded. Added text-center/left */}
                            <div className="flex flex-col justify-start items-center md:items-start gap-1">
                                {/* Family Title - Further reduced for mobile */}
                                <div className="text-[#547417] text-xl sm:text-2xl md:text-3xl font-medium leading-tight sm:leading-[32px] md:leading-[44px]">Family</div>
                                {/* Family Value - Further reduced for mobile */}
                                <div className="text-[#0c0c0c] text-base sm:text-xl md:text-2xl font-medium leading-normal sm:leading-relaxed">{flora.family || "Tidak diketahui"}</div>
                            </div>
                        </div>

                        {/* Ekologi */}
                        <div className="w-full md:w-1/3 px-4 py-6 bg-[#f9f9fb] rounded-[15px] flex flex-col justify-start items-center md:items-start gap-2 border border-[#d6d6d6] text-center md:text-left"> {/* Reduced px, py, gap, rounded. Added text-center/left */}
                            <div className="flex flex-col justify-start items-center md:items-start gap-1 mb-1"> {/* Reduced mb */}
                                {/* Ekologi Title - Further reduced for mobile */}
                                <div className="text-[#547417] text-xl sm:text-2xl md:text-3xl font-medium leading-tight sm:leading-[32px] md:leading-[44px]">Ekologi</div>
                            </div>
                            {/* Ekologi Value - Further reduced for mobile */}
                            <div className="text-[#7f7f7f] text-sm sm:text-base font-normal leading-normal">
                                {flora.ekologi || "Informasi ekologi tidak tersedia."}
                            </div>
                        </div>

                        {/* Distribusi */}
                        <div className="w-full md:w-1/3 px-4 py-6 bg-[#f9f9fb] rounded-[15px] flex flex-col justify-start items-center md:items-start gap-2 border border-[#d6d6d6] text-center md:text-left"> {/* Reduced px, py, gap, rounded. Added text-center/left */}
                            <div className="flex flex-col justify-start items-center md:items-start gap-1 mb-1"> {/* Reduced mb */}
                                {/* Distribusi Title - Further reduced for mobile */}
                                <div className="text-[#547417] text-xl sm:text-2xl md:text-3xl font-medium leading-tight sm:leading-[32px] md:leading-[44px]">Distribusi</div>
                            </div>
                            {/* Distribusi Value - Further reduced for mobile */}
                            <div className="text-[#7f7f7f] text-sm sm:text-base font-normal leading-normal">
                                {flora.distribusi || "Informasi distribusi tidak tersedia."}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Gallery - jika ingin diaktifkan kembali
            <section className="w-full flex flex-col justify-center items-center">
                <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24 flex flex-col justify-center items-center gap-10 md:gap-12">
                    <div className="w-full flex flex-col justify-center items-center gap-1">
                        <div className="self-stretch text-center text-[#0c0c0c] text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight lg:leading-[60px]">
                            Gallery
                        </div>
                    </div>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        <img className="w-full h-[300px] sm:h-[350px] md:h-[400px] rounded-[20px] object-cover" src={flora.foto || `https://placehold.co/352x400/EEE/31343C?text=${encodeURIComponent(flora.local_name)}`} alt={flora.local_name || "Gambar Flora"} />
                        <img className="w-full h-[300px] sm:h-[350px] md:h-[400px] rounded-[20px] object-cover" src="https://placehold.co/352x400/EEE/31343C?text=Gallery+2" alt="Gallery 2" />
                        <img className="w-full h-[300px] sm:h-[350px] md:h-[400px] rounded-[20px] object-cover" src="https://placehold.co/352x400/EEE/31343C?text=Gallery+3" alt="Gallery 3" />
                    </div>
                </div>
            </section>
            */}
            <Footer />
        </div>
    );
};

export default FloraDetail;