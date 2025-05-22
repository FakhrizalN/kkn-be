export default function Footer() {
    return (
        <div className="w-full bg-[#1d2b08] flex flex-col justify-center items-center">
            <div className="w-full max-w-[1440px] px-4 pt-16 bg-[#1d2b08] flex flex-col justify-center items-center gap-12">
                {/* Judul dan tagline */}
                <div className="w-full max-w-[1120px] flex flex-col justify-center items-center gap-5">
                    <div className="w-full max-w-[792px] text-center text-[#fcfcfc] text-2xl sm:text-3xl md:text-4xl font-bold font-jakarta leading-[36px] md:leading-[44px]">
                        Hutan Lindung Sungai Wain
                    </div>
                    <div className="w-full max-w-[792px] text-center text-[#fcfcfc] text-sm sm:text-base font-medium font-jakarta leading-normal">
                        Bersama kita jaga bumi, nikmati keindahan alam, dan ciptakan warisan lestari untuk generasi mendatang.
                    </div>
                </div>
                {/* Copyright & kontak */}
                <div className="w-full max-w-[1120px] py-7 border-t border-[#d6d6d6] flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
                    <div className="flex items-center gap-2.5 mb-4 md:mb-0">
                        {/* Logo Placeholder */}
                        <div className="w-[18px] h-[18px] bg-[#fcfcfc] rounded-full flex-shrink-0" />
                        <div className="text-[#fcfcfc] text-sm sm:text-base font-normal font-jakarta leading-normal">
                            KKN ITK E4 2025. All rights reserved
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
                        <div className="flex items-center gap-3">
                            {/* Email Icon Placeholder */}
                            <div className="w-6 h-6 flex items-center justify-center">
                                <svg width="18" height="14" viewBox="0 0 18 14" fill="none"><rect x="1" y="2" width="16" height="10" rx="2" stroke="#fcfcfc" strokeWidth="1.5"/><path d="M1 2L9 8L17 2" stroke="#fcfcfc" strokeWidth="1.5"/></svg>
                            </div>
                            <div className="text-[#fcfcfc] text-sm sm:text-base font-normal font-jakarta leading-normal">
                                sungaiwain96@gmail.com
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            {/* Phone Icon Placeholder */}
                            <div className="w-6 h-6 flex items-center justify-center">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="8" stroke="#fcfcfc" strokeWidth="1.5"/><path d="M6 7C6.5 8.5 8 10 9.5 10.5M9.5 10.5L12 12M9.5 10.5V13" stroke="#fcfcfc" strokeWidth="1.5" strokeLinecap="round"/></svg>
                            </div>
                            <div className="text-[#fcfcfc] text-sm sm:text-base font-normal font-jakarta leading-normal">
                                +62 811 538 2227
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}