
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
                        <div className="text-[#fcfcfc] text-sm sm:text-base font-normal font-jakarta leading-normal">
                            © KKN ITK E4 2025. All rights reserved
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
                        <div className="flex items-center gap-3">
                            {/* Email Icon Placeholder */}
                            <div className="w-6 h-6 flex items-center justify-center">
                                <img
                                    src="/storage/icon/Email-Icon.svg"
                                    alt="Email Icon"
                                    className="w-full h-full"
                                />
                            </div>
                            <div className="text-[#fcfcfc] text-sm sm:text-base font-normal font-jakarta leading-normal">
                                sungaiwain96@gmail.com
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            {/* Phone Icon Placeholder */}
                            <div className="w-6 h-6 flex items-center justify-center">
                                {/* Use the public URL directly in the src attribute */}
                                <img
                                    src="/storage/icon/Phone-Icon.svg"
                                    alt="Phone Icon"
                                    className="w-full h-full"
                                />
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