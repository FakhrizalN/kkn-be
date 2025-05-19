import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";

const FloraDetail = ({ floraSlug }) => {
    const [flora, setFlora] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFloraDetail = async () => {
            try {
                const response = await axios.get(`/api/flora/${floraSlug}`);
                setFlora(response.data.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };
        fetchFloraDetail();
    }, [floraSlug]);

    if (loading) {
        return (
            <div className="w-full flex justify-center items-center py-20">
                <span className="text-lg text-[#0c0c0c] font-jakarta">Loading...</span>
            </div>
        );
    }

    if (!flora) {
        return (
            <div className="w-full flex justify-center items-center py-20">
                <span className="text-lg text-red-500 font-jakarta">Flora not found.</span>
            </div>
        );
    }

    return (
        <div className="w-full flex flex-col justify-center items-center bg-white font-jakarta">
            <Navbar />
            {/* Detail Flora */}
            <div className="w-full bg-white flex flex-col justify-center items-center">
                <div className="self-stretch px-[15px] py-[100px] bg-white flex flex-col justify-center items-center gap-[50px]">
                    <div className="w-[1120px] pb-8 border-b border-[#d6d6d6] flex flex-col justify-center items-start gap-3">
                        <div className="w-full flex justify-between items-end gap-5">
                            <div className="text-[#0c0c0c] text-5xl font-medium leading-[60px]">
                                {flora.local_name}
                            </div>
                            <div className="text-[#0c0c0c] text-2xl font-medium leading-9 italic">
                                {flora.latin_name}
                            </div>
                        </div>
                        <div className="w-[707px] text-[#7f7f7f] text-base font-normal leading-normal mt-4">
                            {flora.description}
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-8">
                        {/* Family */}
                        <div className="w-[352px] px-5 py-10 bg-[#f9f9fb] rounded-[20px] flex flex-col justify-start items-start gap-4">
                            <div className="flex flex-col justify-start items-start gap-1">
                                <div className="text-[#547417] text-4xl font-medium leading-[44px]">Family</div>
                                <div className="text-[#0c0c0c] text-2xl font-medium leading-loose">{flora.family || "Tidak diketahui"}</div>
                            </div>
                            <div className="text-[#7f7f7f] text-base font-normal leading-normal">
                                {flora.ekologi ? `Ekologi: ${flora.ekologi}` : "Ekologi tidak tersedia"}
                            </div>
                        </div>
                        {/* Kategori */}
                        <div className="w-[352px] px-5 py-10 bg-[#f9f9fb] rounded-[20px] flex flex-col justify-start items-start gap-4">
                            <div className="flex flex-col justify-start items-start gap-1">
                                <div className="text-[#547417] text-4xl font-medium leading-[44px]">Kategori</div>
                                <div className="text-[#0c0c0c] text-2xl font-medium leading-loose">{flora.kategori || "Tidak diketahui"}</div>
                            </div>
                            <div className="text-[#7f7f7f] text-base font-normal leading-normal">
                                {flora.distribusi ? `Distribusi: ${flora.distribusi}` : "Distribusi tidak tersedia"}
                            </div>
                        </div>
                        {/* Lainnya */}
                        <div className="w-[352px] px-5 py-10 bg-[#f9f9fb] rounded-[20px] flex flex-col justify-start items-start gap-4">
                            <div className="flex flex-col justify-start items-start gap-1">
                                <div className="text-[#547417] text-4xl font-medium leading-[44px]">Lainnya</div>
                                <div className="text-[#0c0c0c] text-2xl font-medium leading-loose">{flora.lainnya || "-"}</div>
                            </div>
                            <div className="text-[#7f7f7f] text-base font-normal leading-normal">
                                &nbsp;
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gallery */}
            <div className="w-full flex flex-col justify-center items-center">
                <div className="self-stretch px-[15px] py-[100px] bg-white flex flex-col justify-center items-center gap-[50px]">
                    <div className="w-[1120px] flex flex-col justify-center items-center gap-1">
                        <div className="self-stretch text-center text-[#0c0c0c] text-5xl font-medium leading-[60px]">
                            Gallery
                        </div>
                    </div>
                    <div className="w-[1120px] flex justify-center items-center gap-8">
                        <img className="w-[352px] h-[400px] rounded-[20px] object-cover" src={flora.photo || "https://placehold.co/352x400"} alt={flora.local_name} />
                        <img className="w-[352px] h-[400px] rounded-[20px] object-cover" src="https://placehold.co/352x400?text=Gallery+2" alt="Gallery 2" />
                        <img className="w-[352px] h-[400px] rounded-[20px] object-cover" src="https://placehold.co/352x400?text=Gallery+3" alt="Gallery 3" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default FloraDetail;