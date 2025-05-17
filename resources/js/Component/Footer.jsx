
export default function Footer() {
    return (
        <div className="w-full bg-[#1d2b08] flex flex-col justify-center items-center">
            <div className="self-stretch px-[15px] pt-[100px] bg-[#1d2b08] flex flex-col justify-center items-center gap-[50px]">
                {/* Judul dan tagline */}
                <div className="w-[1120px] flex flex-col justify-center items-center gap-5">
                    <div className="w-[792px] text-center text-[#fcfcfc] text-4xl font-bold font-jakarta leading-[44px]">
                        Hutan Lindung Sungai Wain
                    </div>
                    <div className="w-[792px] text-center text-[#fcfcfc] text-base font-medium font-jakarta leading-normal">
                        Bersama kita jaga bumi, nikmati keindahan alam, dan ciptakan warisan lestari untuk generasi mendatang.
                    </div>
                </div>

                {/* Copyright & kontak */}
                <div className="w-[1120px] py-7 border-t border-[#d6d6d6] flex justify-between items-center">
                    <div className="flex items-center gap-2.5">
                        {/* Logo Placeholder */}
                        <div className="w-[18px] h-[18px] bg-[#fcfcfc] rounded-full flex-shrink-0" />
                        <div className="text-[#fcfcfc] text-base font-normal font-jakarta leading-normal">
                            KKN ITK E4 2025. All rights reserved
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="flex items-center gap-3">
                            {/* Email Icon Placeholder */}
                            <div className="w-6 h-6 flex items-center justify-center">
                                <svg width="18" height="14" viewBox="0 0 18 14" fill="none"><rect x="1" y="2" width="16" height="10" rx="2" stroke="#fcfcfc" strokeWidth="1.5"/><path d="M1 2L9 8L17 2" stroke="#fcfcfc" strokeWidth="1.5"/></svg>
                            </div>
                            <div className="text-[#fcfcfc] text-base font-normal font-jakarta leading-normal">
                                sungaiwain96@gmail.com
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            {/* Phone Icon Placeholder */}
                            <div className="w-6 h-6 flex items-center justify-center">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="8" stroke="#fcfcfc" strokeWidth="1.5"/><path d="M6 7C6.5 8.5 8 10 9.5 10.5M9.5 10.5L12 12M9.5 10.5V13" stroke="#fcfcfc" strokeWidth="1.5" strokeLinecap="round"/></svg>
                            </div>
                            <div className="text-[#fcfcfc] text-base font-normal font-jakarta leading-normal">
                                +1234-456-7890
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}