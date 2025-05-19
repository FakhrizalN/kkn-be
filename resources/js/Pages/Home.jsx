import { Link } from "@inertiajs/react";
import Foooter from "../Component/Footer";
import Navbar from "../Component/Navbar";

export default function Home() {
    return (
        <div data-property-1="Hero - 22" className="w-full bg-white inline-flex flex-col justify-center items-center">
            <Navbar/>
            <div className="self-stretch px-[15px] py-[100px] bg-white inline-flex justify-center items-center gap-8">
                <div className="w-[544px] inline-flex flex-col justify-start items-start gap-8">
                    <div className="self-stretch flex flex-col justify-start items-start gap-5">
                        <div className="self-stretch flex flex-col justify-start items-start gap-1">
                            <div className="justify-center text-[#6e9818] text-sm font-medium font-jakarta leading-tight">
                                Alam untuk Semua, Lestari Selamanya
                            </div>
                            <div className="self-stretch justify-center text-[#0c0c0c] text-7xl font-semibold font-jakarta leading-[90px]">
                                Jelajahi Hutan Lindung Sungai Wain
                            </div>
                        </div>
                        <div className="self-stretch justify-center text-[#7f7f7f] text-base font-normal font-jakarta leading-normal">
                            Temukan keindahan hutan tropis, jelajahi jalur alami, dan kenali kekayaan hayati Sungai Wain bersama pemandu lokal.
                        </div>
                    </div>
                    {/* Tombol Layanan Pemandu */}
                    <Link
                        href="/layanan"
                        className="px-4 py-2.5 bg-[#cbea7b] rounded-lg shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] outline-1 outline-offset-[-1px] outline-[#cbea7b] inline-flex justify-center items-center gap-1.5 overflow-hidden"
                    >
                        <span className="text-[#0c0c0c] text-base font-semibold font-jakarta leading-normal">
                            Layanan Pemandu
                        </span>
                    </Link>
                </div>
                <img className="w-[544px] h-[700px] rounded-[20px]" src="https://placehold.co/544x700" />
            </div>

            {/* Section: Tentang Sungai Wain */}
            <div className="w-full flex flex-col justify-center items-center bg-white">
                <div className="self-stretch px-[15px] py-[100px] flex flex-col justify-center items-center gap-[50px]">
                    <div className="w-[1120px] pb-8 border-b border-[#d6d6d6] flex flex-col justify-start items-center gap-5">
                        <div className="self-stretch text-center text-[#0c0c0c] text-5xl font-medium font-jakarta leading-[60px]">
                            Tentang Sungai Wain
                        </div>
                    </div>
                    <div className="w-[1120px] flex justify-center items-center gap-8">
                        <div className="w-[544px] h-[420px] rounded-[20px] flex flex-col justify-center items-center">
                            <img className="w-[544px] h-[420px] rounded-[20px]" src="https://placehold.co/544x420" alt="Tentang Sungai Wain" />
                        </div>
                        <div className="w-[544px] flex flex-col justify-start items-start gap-8">
                            <div className="flex flex-col justify-start items-start gap-5">
                                <div className="text-center text-[#0c0c0c] text-3xl font-medium font-jakarta leading-[38px]">
                                    Melindungi Hutan, Melestarikan Kehidupan
                                </div>
                                <div className="w-[544px] text-[#7f7f7f] text-base font-normal font-jakarta leading-normal">
                                    Sungai Wain adalah kawasan hutan lindung di Kalimantan Timur yang kaya akan keanekaragaman hayati. Kami berkomitmen untuk menjaga kelestarian alam dan mendukung ekowisata yang berkelanjutan. Melalui konservasi dan edukasi, kami mengajak Anda bersama-sama merawat warisan alam yang berharga ini.
                                </div>
                            </div>
                            <Link
                                href="/tentang"
                                className="px-4 py-2.5 bg-[#cbea7b] rounded-lg shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] outline-1 outline-offset-[-1px] outline-[#cbea7b] inline-flex justify-center items-center gap-1.5 overflow-hidden"
                            >
                                <span className="text-[#0c0c0c] text-base font-semibold font-jakarta leading-normal">
                                    Selengkapnya
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section: Gallery */}
            <div className="w-full flex flex-col justify-center items-center bg-white">
                <div className="self-stretch px-[15px] py-[100px] flex flex-col justify-center items-center gap-[50px]">
                    <div className="w-[1120px] flex flex-col justify-center items-start gap-5">
                        <div className="self-stretch text-[#0c0c0c] text-5xl font-medium font-jakarta leading-[60px]">
                            Pesona Hutan Sungai Wain
                        </div>
                        <div className="w-[682px] text-[#7f7f7f] text-base font-normal font-jakarta leading-normal">
                            Lihat lebih dekat keindahan alam dan aktivitas ekowisata di Hutan Lindung Sungai Wain melalui potret terbaik dari pengunjung dan tim pelestari.
                        </div>
                    </div>
                    <div className="flex justify-center items-start gap-8">
                        <div className="w-[300px] flex flex-col justify-start items-start gap-8">
                            <img className="w-[300px] h-[234px] rounded-[20px]" src="https://placehold.co/300x234" alt="Gallery 1" />
                            <img className="w-[300px] h-[234px] rounded-[20px]" src="https://placehold.co/300x234" alt="Gallery 2" />
                        </div>
                        <img className="w-[456px] h-[500px] rounded-[20px]" src="https://placehold.co/456x500" alt="Gallery Center" />
                        <div className="w-[300px] flex flex-col justify-start items-start gap-8">
                            <img className="w-[300px] h-[234px] rounded-[20px]" src="https://placehold.co/300x234" alt="Gallery 3" />
                            <img className="w-[300px] h-[234px] rounded-[20px]" src="https://placehold.co/300x234" alt="Gallery 4" />
                        </div>
                    </div>
                </div>
            </div>

            <Foooter/>
        </div>
    );
}