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
                setLoading(false);
            }
        };
        fetchFaunaDetail();
    }, [faunaSlug]);

    if (loading) {
        return (
            <div className="w-full flex justify-center items-center py-20">
                <span className="text-lg text-[#0c0c0c] font-jakarta">Loading...</span>
            </div>
        );
    }

    if (!fauna) {
        return (
            <div className="w-full flex justify-center items-center py-20">
                <span className="text-lg text-red-500 font-jakarta">Fauna not found.</span>
            </div>
        );
    }

    return (
        <div className="w-full flex flex-col justify-center items-center bg-white font-jakarta">
            <Navbar />
            {/* Detail Fauna */}
            <div className="w-full bg-white flex flex-col justify-center items-center">
                <div className="self-stretch px-[15px] py-[100px] bg-white flex flex-col justify-center items-center gap-[50px]">
                    <div className="w-[1120px] pb-8 border-b border-[#d6d6d6] flex flex-row justify-center items-start gap-3">
                        <div className="w-full flex flex-col justify-between items-start gap-5">
                            <div className="text-[#0c0c0c] text-5xl font-medium leading-[60px]">
                                {fauna.nama}
                            </div>
                            <div className="text-[#0c0c0c] text-2xl font-medium leading-9 italic">
                                {fauna.nama_latin}
                            </div>
                            <div className="w-[707px] text-[#7f7f7f] text-base font-normal leading-normal mt-4">
                                {fauna.deskripsi}
                            </div>
                        </div>
                        <img className="w-[352px] h-[400px] rounded-[20px] object-cover" src={fauna.foto || "https://placehold.co/352x400"} alt={fauna.nama} />
                    </div>
                    <div className="flex justify-center items-center gap-8">
                        {/* Kategori */}
                        <div className="w-[352px] px-5 py-10 bg-[#f9f9fb] rounded-[20px] flex flex-col justify-start items-start gap-4">
                            <div className="flex flex-col justify-start items-start gap-1">
                                <div className="text-[#547417] text-4xl font-medium leading-[44px]">Kategori</div>
                                <div className="text-[#0c0c0c] text-2xl font-medium leading-loose">{fauna.kategori || "Tidak diketahui"}</div>
                            </div>
                            <div className="text-[#7f7f7f] text-base font-normal leading-normal">
                                {fauna.nama_family ? `Family: ${fauna.nama_family}` : "Family tidak tersedia"}
                            </div>
                        </div>
                        {/* Berat */}
                        <div className="w-[352px] px-5 py-10 bg-[#f9f9fb] rounded-[20px] flex flex-col justify-start items-start gap-4">
                            <div className="flex flex-col justify-start items-start gap-1">
                                <div className="text-[#547417] text-4xl font-medium leading-[44px]">Berat</div>
                                <div className="text-[#0c0c0c] text-2xl font-medium leading-loose">{fauna.berat ? `${fauna.berat} Kg` : "N/A"}</div>
                            </div>
                            <div className="text-[#7f7f7f] text-base font-normal leading-normal">
                                Berat rata-rata fauna dewasa.
                            </div>
                        </div>
                        {/* Panjang */}
                        <div className="w-[352px] px-5 py-10 bg-[#f9f9fb] rounded-[20px] flex flex-col justify-start items-start gap-4">
                            <div className="flex flex-col justify-start items-start gap-1">
                                <div className="text-[#547417] text-4xl font-medium leading-[44px]">Panjang</div>
                                <div className="text-[#0c0c0c] text-2xl font-medium leading-loose">{fauna.panjang ? `${fauna.panjang} Cm` : "N/A"}</div>
                            </div>
                            <div className="text-[#7f7f7f] text-base font-normal leading-normal">
                                Panjang tubuh dari kepala hingga ekor.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gallery
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