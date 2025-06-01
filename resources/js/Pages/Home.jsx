import { Link } from "@inertiajs/react";
import Foooter from "../Component/Footer";
import Navbar from "../Component/Navbar";

export default function Home() {
    return (
        <div className="w-full bg-white flex flex-col items-center font-jakarta">
            <Navbar />
            {/* Hero Section */}
            <div className="w-full px-4 md:px-6 lg:px-8 py-12 bg-white flex flex-col sm:flex-row justify-center items-center gap-8">
                <div className="w-full max-w-[544px] flex flex-col justify-start items-start gap-8">
                    <div className="w-full flex flex-col justify-start items-start gap-5">
                        <div className="w-full flex flex-col justify-start items-start gap-1">
                            <div className="text-[#6e9818] text-sm font-medium leading-tight">
                                Alam untuk Semua, Lestari Selamanya
                            </div>
                            <div className="text-[#0c0c0c] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight lg:leading-[90px]">
                                Jelajahi Hutan Lindung Sungai Wain
                            </div>
                        </div>
                        <div className="text-[#7f7f7f] text-base font-normal leading-normal">
                            Temukan keindahan hutan tropis, jelajahi jalur alami, dan kenali kekayaan hayati Sungai Wain bersama pemandu lokal.
                        </div>
                    </div>
                    <Link
                        href="/layanan"
                        className="px-4 py-2.5 bg-[#cbea7b] rounded-lg shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] outline-1 outline-offset-[-1px] outline-[#cbea7b] inline-flex justify-center items-center gap-1.5 overflow-hidden"
                    >
                        <span className="text-[#0c0c0c] text-base font-semibold leading-normal">
                            Layanan Pemandu
                        </span>
                    </Link>
                </div>
                <img
                    className="w-full sm:w-[250px] md:w-[350px] lg:w-full max-w-[544px] h-auto lg:h-[700px] rounded-[20px] object-cover mt-8 lg:mt-0"
                    src="/storage/pongo_pygmaeus.jpg"
                    alt="Hero"
                />
            </div>

            {/* Section: Tentang Sungai Wain */}
            <div className="w-full flex flex-col items-center bg-white">
                <div className="w-full max-w-[1120px] px-4 py-12 flex flex-col items-center gap-12">
                    <div className="w-full pb-8 border-b border-[#d6d6d6] flex flex-col items-center gap-5">
                        <div className="w-full text-center text-[#0c0c0c] text-3xl sm:text-4xl md:text-5xl font-medium leading-[40px] md:leading-[60px]">
                            Tentang Sungai Wain
                        </div>
                    </div>
                    <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-8">
                        <div className="w-full max-w-[544px] h-[220px] sm:h-[320px] md:h-[420px] rounded-[20px] flex flex-col justify-center items-center mb-6 lg:mb-0">
                            <img className="w-full h-full rounded-[20px] object-cover" src="/storage/peta_hlsw.png" alt="Tentang Sungai Wain" />
                        </div>
                        <div className="w-full max-w-[544px] flex flex-col justify-start items-start gap-8">
                            <div className="flex flex-col justify-start items-start gap-5">
                                <div className="text-center lg:text-left text-[#0c0c0c] text-2xl sm:text-3xl font-medium leading-[32px] sm:leading-[38px]">
                                    Melindungi Hutan, Melestarikan Kehidupan
                                </div>
                                <div className="w-full text-[#7f7f7f] text-base font-normal leading-normal">
                                    Sungai Wain adalah kawasan hutan lindung di Kalimantan Timur yang kaya akan keanekaragaman hayati. Kami berkomitmen untuk menjaga kelestarian alam dan mendukung ekowisata yang berkelanjutan. Melalui konservasi dan edukasi, kami mengajak Anda bersama-sama merawat warisan alam yang berharga ini.
                                </div>
                            </div>
                            <Link
                                href="/tentang"
                                className="px-4 py-2.5 bg-[#cbea7b] rounded-lg shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] outline-1 outline-offset-[-1px] outline-[#cbea7b] inline-flex justify-center items-center gap-1.5 overflow-hidden"
                            >
                                <span className="text-[#0c0c0c] text-base font-semibold leading-normal">
                                    Selengkapnya
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section: Gallery */}
            <div className="w-full flex flex-col items-center bg-white">
                <div className="w-full max-w-[1120px] px-4 py-12 flex flex-col items-center gap-12">
                    <div className="w-full flex flex-col items-center gap-5 lg:items-start">
                        <div className="w-full max-w-[682px] text-[#0c0c0c] text-3xl sm:text-4xl md:text-5xl font-medium leading-[40px] md:leading-[60px]">
                            Pesona Hutan Sungai Wain
                        </div>
                        <div className="w-full max-w-[682px] text-[#7f7f7f] text-base font-normal leading-normal">
                            Lihat lebih dekat keindahan alam dan aktivitas ekowisata di Hutan Lindung Sungai Wain melalui potret terbaik dari pengunjung dan tim pelestari.
                        </div>
                    </div>
                    <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-8">
                        <div className="w-full max-w-[300px] flex flex-col sm:flex-row justify-center lg:flex-col gap-8">
                            <img className="w-full h-[180px] sm:h-[234px] rounded-[20px] object-cover" src="/storage/B6.jpg" alt="Gallery 1" />
                            <img className="w-full h-[180px] sm:h-[234px] rounded-[20px] object-cover" src="/storage/B7.jpg" alt="Gallery 2" />
                        </div>
                        <img className="w-[300px] h-[180px] sm:h-[234px] flex lg:h-[500px] lg:w-full rounded-[20px] object-cover" src="/storage/B8.jpg" alt="Gallery Center" />
                        <div className="w-full max-w-[300px] flex flex-col sm:flex-row justify-center lg:flex-col gap-8">
                            <img className="w-full h-[180px] sm:h-[234px] rounded-[20px] object-cover" src="/storage/B3.jpg" alt="Gallery 3" />
                            <img className="w-full h-[180px] sm:h-[234px] rounded-[20px] object-cover" src="/storage/B9.jpg" alt="Gallery 4" />
                        </div>
                    </div>
                </div>
            </div>

            <Foooter />
        </div>
    );
}