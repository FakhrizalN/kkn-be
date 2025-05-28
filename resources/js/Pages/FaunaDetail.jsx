import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";

const FaunaDetail = ({ faunaSlug }) => {
    const [fauna, setFauna] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFaunaDetail = async () => {
            try {
                const response = await axios.get(`/api/fauna/${faunaSlug}`);
                setFauna(response.data.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching fauna detail:", error); // Added error logging
                setLoading(false);
            }
        };
        fetchFaunaDetail();
    }, [faunaSlug]);

    if (loading) {
        return (
            <div className="w-full flex justify-center items-center py-20 min-h-screen bg-white">
                <span className="text-lg text-[#0c0c0c] font-jakarta">Loading...</span>
            </div>
        );
    }

    if (!fauna) {
        return (
            <div className="w-full flex justify-center items-center py-20 min-h-screen bg-white">
                <span className="text-lg text-red-500 font-jakarta">Fauna not found.</span>
            </div>
        );
    }

    return (
        <div className="w-full flex flex-col justify-center items-center bg-white font-jakarta">
            <Navbar />
            {/* Detail Fauna */}
            <div className="w-full bg-white flex flex-col justify-center items-center">
                <div className="self-stretch px-4 py-8 sm:px-[15px] sm:py-[50px] md:py-[100px] bg-white flex flex-col justify-center items-center gap-8 sm:gap-[50px]">
                    {/* Main Info Section */}
                    <div className="w-full max-w-[1120px] pb-6 sm:pb-8 border-b border-[#d6d6d6] flex flex-col-reverse md:flex-row justify-center items-center md:items-start gap-6 md:gap-3 text-center md:text-left">
                        {/* Text Content */}
                        <div className="w-full flex flex-col justify-between items-center md:items-start gap-4 sm:gap-5">
                            {/* Fauna Name - Reduced for mobile */}
                            <div className="text-[#0c0c0c] text-3xl sm:text-4xl md:text-5xl font-medium leading-[40px] sm:leading-[48px] md:leading-[60px]">
                                {fauna.nama}
                            </div>
                            {/* Latin Name - Reduced for mobile */}
                            <div className="text-[#0c0c0c] text-lg sm:text-xl md:text-2xl font-medium leading-normal sm:leading-9 italic">
                                {fauna.nama_latin}
                            </div>
                            {/* Description - Reduced for mobile */}
                            <div className="w-full text-[#7f7f7f] text-sm sm:text-base font-normal leading-normal mt-2 sm:mt-4">
                                {fauna.deskripsi || "Deskripsi tidak tersedia."}
                            </div>
                        </div>
                        {/* Image - Reduced for mobile */}
                        <img
                            className="w-full max-w-[250px] h-auto max-h-[280px] sm:max-w-[300px] sm:max-h-[350px] md:max-w-[352px] md:max-h-[400px] rounded-[15px] sm:rounded-[20px] object-cover mx-auto md:mx-0"
                            src={fauna.foto || "https://placehold.co/352x400"}
                            alt={fauna.nama}
                        />
                    </div>
                    {/* Info Cards Section */}
                    <div className="w-full max-w-[1120px] flex flex-col sm:flex-row justify-center items-stretch gap-4 sm:gap-8">
                        {/* Kategori Card */}
                        <div className="w-full sm:w-1/3 px-3 py-5 sm:px-5 sm:py-10 bg-[#f9f9fb] rounded-[15px] sm:rounded-[20px] flex flex-col justify-start items-center sm:items-start gap-2 sm:gap-4 outline-1 outline-offset-[-1px] outline-[#d6d6d6] text-center sm:text-left">
                            <div className="flex flex-col justify-start items-center sm:items-start gap-1">
                                {/* Kategori Title - Reduced for mobile */}
                                <div className="text-[#547417] text-2xl sm:text-3xl md:text-4xl font-medium leading-[32px] sm:leading-[40px] md:leading-[44px]">Kategori</div>
                                {/* Kategori Value - Reduced for mobile */}
                                <div className="text-[#0c0c0c] text-base sm:text-lg md:text-2xl font-medium leading-normal sm:leading-loose">{fauna.kategori || "Tidak diketahui"}</div>
                            </div>
                        </div>
                        {/* Family Card */}
                        <div className="w-full sm:w-1/3 px-3 py-5 sm:px-5 sm:py-10 bg-[#f9f9fb] rounded-[15px] sm:rounded-[20px] flex flex-col justify-start items-center sm:items-start gap-2 sm:gap-4 outline-1 outline-offset-[-1px] outline-[#d6d6d6] text-center sm:text-left">
                            <div className="flex flex-col justify-start items-center sm:items-start gap-1">
                                {/* Family Title - Reduced for mobile */}
                                <div className="text-[#547417] text-2xl sm:text-3xl md:text-4xl font-medium leading-[32px] sm:leading-[40px] md:leading-[44px]">Family</div>
                                {/* Family Value - Reduced for mobile */}
                                <div className="text-[#0c0c0c] text-base sm:text-lg md:text-2xl font-medium leading-normal sm:leading-loose">{fauna.nama_family || "Tidak diketahui"}</div>
                            </div>
                        </div>
                        {/* Habitat Card */}
                        <div className="w-full sm:w-1/3 px-3 py-5 sm:px-5 sm:py-10 bg-[#f9f9fb] rounded-[15px] sm:rounded-[20px] flex flex-col justify-start items-center sm:items-start gap-2 sm:gap-4 outline-1 outline-offset-[-1px] outline-[#d6d6d6] text-center sm:text-left">
                            <div className="flex flex-col justify-start items-center sm:items-start gap-1">
                                {/* Habitat Title - Reduced for mobile */}
                                <div className="text-[#547417] text-2xl sm:text-3xl md:text-4xl font-medium leading-[32px] sm:leading-[40px] md:leading-[44px]">Habitat</div>
                                {/* Habitat Value - Reduced for mobile */}
                                <div className="text-[#7f7f7f] text-sm sm:text-base font-normal leading-normal">{fauna.habitat || "Tidak diketahui"}</div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

            {/* Gallery Section (Commented out in original, keeping it commented)
            <div className="w-full flex flex-col justify-center items-center">
                <div className="self-stretch px-[15px] py-[100px] bg-white flex flex-col justify-center items-center gap-[50px]">
                    <div className="w-[1120px] flex flex-col justify-center items-center gap-1">
                        <div className="self-stretch text-center text-[#0c0c0c] text-5xl font-medium leading-[60px]">
                            Gallery
                        </div>
                    </div>
                    <div className="w-[1120px] flex justify-center items-center gap-8">
                        <img className="w-[352px] h-[400px] rounded-[20px] object-cover" src={fauna.foto || "https://placehold.co/352x400"} alt={fauna.nama} />
                        <img className="w-[352px] h-[400px] rounded-[20px] object-cover" src="https://placehold.co/352x400?text=Gallery+2" alt="Gallery 2" />
                        <img className="w-[352px] h-[400px] rounded-[20px] object-cover" src="https://placehold.co/352x400?text=Gallery+3" alt="Gallery 3" />
                    </div>
                </div>
            </div> */}
            <Footer />
        </div>
    );
};

export default FaunaDetail;