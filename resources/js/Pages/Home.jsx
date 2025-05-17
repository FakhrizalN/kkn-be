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
            <Foooter/>
        </div>
    );
}