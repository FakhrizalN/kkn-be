import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";

const Tentang = () => {
  return (
    <div className="relative bg-white min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="w-full flex flex-col items-center pt-12 md:pt-24 pb-8 sm:pt-36 sm:pb-12 bg-white px-4"> {/* Adjusted padding, added px-4 for horizontal mobile padding */}
        <div className="w-full max-w-[1120px] flex flex-col lg:flex-row gap-8 mt-8 sm:mt-12 text-center items-center lg:text-left"> {/* Changed fixed width, added max-width, adjusted gap, stacks on mobile */}
          <img
            // Adjusted image width/height for responsiveness
            className="w-[544px] h-auto max-h-[300px] sm:max-h-[400px] md:max-h-[550px] rounded-[15px] sm:rounded-[20px] object-cover mx-auto"
            src="/storage/B4.jpg" // Placeholder, ideally use a responsive image source
            alt="Hutan Lindung Sungai Wain"
          />
          <div className="w-full md:w-[420px] xl:w-[544px] flex flex-col gap-6 sm:gap-12"> {/* Full width on mobile, adjusted gap */}
            <div className="flex flex-col gap-4 sm:gap-6"> {/* Adjusted inner gap */}
              <div className="flex flex-col gap-1">
                {/* Adjusted font size and leading for title */}
                <div className="text-stone-950 text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight sm:leading-[48px] lg:leading-[60px]">
                  Menjelajahi Keindahan Alam Hutan Lindung Sungai Wain
                </div>
              </div>
              <div className="h-0 border-t border-zinc-300 w-full mx-auto md:mx-0"></div> {/* Ensure line is responsive */}
              <div className="flex flex-col gap-5 sm:gap-7"> {/* Adjusted inner gap */}
                {/* Adjusted font size for description */}
                <div className="text-zinc-500 text-sm sm:text-base font-normal">
                  Kisah kami adalah tentang dedikasi, kecintaan pada alam, dan komitmen untuk melestarikan keajaiban Hutan Lindung Sungai Wain. Sejak pertama kali Anda menginjakkan kaki di sini, Anda akan memulai perjalanan yang merayakan keunikan alam, meningkatkan kesadaran akan lingkungan, dan mencerminkan keindahan yang tak tergantikan. Kami bukan sekadar destinasi wisata; kami adalah mitra dalam petualangan Anda untuk menemukan harmoni dengan alam.
                </div>
              </div>
            </div>
            {/* Gallery images */}
            <div className="flex flex-row justify-center md:justify-start gap-2 sm:gap-4"> {/* Changed to flex-wrap, centered on mobile */}
              <div className="w-[calc(33.33%-4px)] sm:w-44 h-20 sm:h-32 flex flex-col justify-center items-center overflow-hidden"> {/* Adjusted width for 3 cols mobile, reduced height */}
                <img className="w-full h-full rounded-[8px] sm:rounded-[10px] object-cover" src="/storage/B2.jpg" alt="gallery1" />
              </div>
              <div className="w-[calc(33.33%-4px)] sm:w-44 h-20 sm:h-32 flex flex-col justify-center items-center overflow-hidden"> {/* Adjusted width for 3 cols mobile, reduced height */}
                <img className="w-full h-full rounded-[8px] sm:rounded-[10px] object-cover" src="/storage/B3.jpg" alt="gallery2" />
              </div>
              <div className="w-[calc(33.33%-4px)] sm:w-44 h-20 sm:h-32 flex flex-col justify-center items-center overflow-hidden"> {/* Adjusted width for 3 cols mobile, reduced height */}
                <img className="w-full h-full rounded-[8px] sm:rounded-[10px] object-cover" src="/storage/B1.jpg" alt="gallery3" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Value Section */}
      <div className="w-full flex justify-center items-center bg-white py-16 sm:py-24 px-4"> {/* Adjusted padding, added px-4 */}
        <div className="w-full max-w-[1120px] flex flex-col lg:flex-row gap-10 lg:gap-8"> {/* Changed fixed width, added max-width, adjusted gap, stacks on mobile */}
          <div className="flex-1 flex flex-col gap-6"> {/* flex-1 takes remaining space, remains column */}
            {/* Pemandu Profesional */}
            <div className="pb-4 sm:pb-6 border-b border-zinc-300 flex flex-col gap-2 sm:gap-3"> {/* Adjusted padding and gap */}
              <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-2.5"> {/* Centered on mobile, left-aligned on desktop */}
                <span className="p-2 bg-white rounded-full outline-1 outline-[#8FBF23] flex items-center justify-center"> {/* Reduced padding */}
                  {/* Icon Orang */}
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7"> {/* Reduced icon size */}
                    <circle cx="12" cy="8" r="4" stroke="#8FBF23" strokeWidth="2"/>
                    <path d="M4 20c0-2.21 3.582-4 8-4s8 1.79 8 4" stroke="#8FBF23" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
                <span className="text-stone-950 text-xl sm:text-2xl font-medium">Pemandu Profesional</span> {/* Adjusted font size */}
              </div>
              <div className="w-full lg:w-[544px] text-zinc-500 text-sm sm:text-base font-normal text-center lg:text-left"> {/* Full width, adjusted font size, text alignment */}
                Manfaat praktis yang kami tawarkan, seperti pemandu berpengalaman, rute terbaik, dan fasilitas pendukung untuk memastikan pengalaman menjelajah Anda aman, nyaman, dan berkesan.
              </div>
            </div>
            {/* Program Edukasi */}
            <div className="pb-4 sm:pb-6 border-b border-zinc-300 flex flex-col gap-2 sm:gap-3"> {/* Adjusted padding and gap */}
              <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-2.5"> {/* Centered on mobile, left-aligned on desktop */}
                <span className="p-2 bg-white rounded-full outline-1 outline-[#8FBF23] flex items-center justify-center"> {/* Reduced padding */}
                  {/* Icon Lampu */}
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7"> {/* Reduced icon size */}
                    <path d="M12 3a7 7 0 0 0-3 13.326V18a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.674A7 7 0 0 0 12 3Z" stroke="#8FBF23" strokeWidth="2"/>
                    <path d="M9 22h6" stroke="#8FBF23" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
                <span className="text-stone-950 text-xl sm:text-2xl font-medium">Program Edukasi</span> {/* Adjusted font size */}
              </div>
              <div className="w-full lg:w-[544px] text-zinc-500 text-sm sm:text-base font-normal text-center lg:text-left"> {/* Full width, adjusted font size, text alignment */}
                Pengalaman subjektif dan hubungan emosional yang tercipta melalui kegiatan edukasi tentang flora, fauna, dan upaya konservasi, menumbuhkan kebahagiaan, kepuasan, dan rasa peduli terhadap alam.
              </div>
            </div>
            {/* Penghargaan */}
            <div className="pb-4 sm:pb-6 border-b border-zinc-300 flex flex-col gap-2 sm:gap-3"> {/* Adjusted padding and gap */}
              <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-2.5"> {/* Centered on mobile, left-aligned on desktop */}
                <span className="p-2 bg-white rounded-full outline-1 outline-[#8FBF23] flex items-center justify-center"> {/* Reduced padding */}
                  {/* Icon Lonceng */}
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7"> {/* Reduced icon size */}
                    <path d="M18 16v-5a6 6 0 1 0-12 0v5l-1 2h14l-1-2Z" stroke="#8FBF23" strokeWidth="2"/>
                    <path d="M9 20a3 3 0 0 0 6 0" stroke="#8FBF23" strokeWidth="2"/>
                  </svg>
                </span>
                <span className="text-stone-950 text-xl sm:text-2xl font-medium">Penghargaan</span> {/* Adjusted font size */}
              </div>
              <div className="w-full lg:w-[544px] text-zinc-500 text-sm sm:text-base font-normal text-center lg:text-left"> {/* Full width, adjusted font size, text alignment */}
                Status yang diakui secara nasional maupun internasional atas peran penting Hutan Lindung Sungai Wain dalam konservasi keanekaragaman hayati, pelestarian spesies endemik, serta kontribusinya dalam menjaga ekosistem Kalimantan. Hutan ini telah mendapatkan berbagai penghargaan lingkungan dan menjadi contoh kawasan lindung yang dikelola secara berkelanjutan.
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-6 sm:gap-8 justify-start text-center lg:text-left"> {/* Full width, adjusted gap, text alignment */}
            <div className="flex flex-col gap-4 sm:gap-5"> {/* Adjusted inner gap */}
              <div className="flex flex-col gap-1">
                {/* Adjusted font size and leading for title */}
                <div className="w-full text-stone-950 text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight sm:leading-[48px] lg:leading-[60px]">Mindset Pencapaian Kelestarian Hutan</div>
              </div>
              <div className="w-full flex text-zinc-500 text-sm sm:text-base font-normal"> {/* Full width, adjusted font size */}
                Dalam konteks pelestarian alam, nilai yang kami tawarkan adalah manfaat ekologis dan edukatif yang diberikan Hutan Lindung Sungai Wain bagi pengunjung, masyarakat, dan ekosistem. Ini tentang memenuhi kebutuhan wisata alam yang bertanggung jawab sekaligus menjaga kelestarian hutan untuk generasi mendatang.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Location Section */}
      <div className="w-full flex justify-center items-center bg-white py-16 sm:py-24 px-4"> {/* Adjusted padding, added px-4 */}
        <div className="w-full max-w-[1120px] flex flex-col md:flex-row gap-10 md:gap-8"> {/* Changed fixed width, added max-width, adjusted gap, stacks on mobile */}
          {/* Ganti image dengan embed Google Maps */}
          <div className="w-full md:w-[558px] h-[200px] sm:h-72 rounded-[15px] sm:rounded-[20px] flex flex-col justify-center items-center overflow-hidden"> {/* Full width, adjusted height, rounded corners */}
            <iframe
              title="Lokasi Hutan Lindung Sungai Wain"
              // Use a real Google Maps embed URL here, replace with your actual map
              src="https://www.google.com/maps/embed?pb=!1m34!1m12!1m3!1d31912.084715680936!2d116.84025280772154!3d-1.1529268179921994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m19!3e0!4m5!1s0x2df149376d946aad%3A0x36a71e88af2a1299!2sIndomaret%20KM.%2012!3m2!1d-1.1698578!2d116.88035889999999!4m5!1s0x2df149298f826ab5%3A0xc8c509df2f71cdca!2sKebun%20Raya%20Balikpapan%2C%20Jalan%20Soekarno%20Hatta%20Km.%2015%2C%20Karang%20Joang%2C%20Kec.%20Balikpapan%20Utara%2C%20Kota%20Balikpapan%2C%20Kalimantan%20Timur%2076127!3m2!1d-1.136531!2d116.8580073!4m5!1s0x2df14a2c3a41846b%3A0x8fbf08ad5ecba082!2sHutan%20Lindung%20Sungai%20Wain!3m2!1d-1.1452551!2d116.83971559999999!5e0!3m2!1sid!2sid!4v1748684732437!5m2!1sid!2sid"
              width="100%" // Make iframe fluid within its parent div
              height="100%" // Make iframe fluid within its parent div
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full rounded-[15px] sm:rounded-[20px] border-0" // Ensure class applies correctly
            ></iframe>
          </div>
          <div className="w-full md:w-[530px] flex flex-col sm:flex-row md:flex-row gap-8"> {/* Stacks on mobile/small, then row on sm, then column on md */}
            <div className="flex flex-col gap-6 flex-1"> {/* flex-1 to take available space */}
              <div className="text-stone-950 text-xl sm:text-2xl font-medium text-center md:text-left">Kontak</div> {/* Adjusted font size, text alignment */}
              <div className="w-full flex flex-col gap-2.5 items-center md:items-start"> {/* Full width, centered on mobile */}
                <div className="flex gap-2.5">
                  <span className="text-zinc-500 text-sm sm:text-base font-normal">+62 811 538 2227</span> {/* Adjusted font size */}
                </div>
                <div className="flex gap-2.5">
                  <span className="text-zinc-500 text-sm sm:text-base font-normal">sungaiwain96@gmail.com</span> {/* Adjusted font size */}
                </div>
                <div className="flex gap-2.5 text-center md:text-left"> {/* Adjusted text alignment */}
                  <span className="text-zinc-500 text-sm sm:text-base font-normal">
                    Jl. Sei Wain Km 15 RT 36 Kelurahan Karang Joang, Balikpapan Utara, Kalimantan Timur, Indonesia.
                  </span>
                </div>
              </div>
              <div className="flex justify-center md:justify-start gap-3.5"> {/* Centered on mobile, left-aligned on desktop */}
                {/* WhatsApp */}
                <a
                  href="https://wa.me/628115382227"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-2 bg-white rounded-full outline-1 outline-[#8FBF23] flex items-center hover:bg-lime-50 transition"
                  aria-label="WhatsApp"
                >
                  <svg className="w-5 h-5" viewBox="0 0 32 32" fill="none">
                    <path d="M16 3C9.373 3 4 8.373 4 15c0 2.637.86 5.08 2.34 7.09L4 29l7.18-2.31A12.93 12.93 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3Z" stroke="#8FBF23" strokeWidth="2" fill="none"/>
                    <path d="M11.5 13.5c.5 2 2.5 4.5 4.5 5.5l1.5-1.5c.5-.5 1.5 0 2 .5l1 1c.5.5.5 1.5 0 2A7.5 7.5 0 0 1 16 22.5C11.5 20.5 9 16.5 9 13c0-.5.5-1.5 1-2l1-1c.5-.5 1.5-.5 2 0l1.5 1.5c.5.5 1 1.5.5 2l-1.5 1.5Z" stroke="#8FBF23" strokeWidth="2" fill="none"/>
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="https://instagram.com/sungaiwainofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-2 bg-white rounded-full outline-1 outline-[#8FBF23] flex items-center hover:bg-lime-50 transition"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="5" stroke="#8FBF23" strokeWidth="2" fill="none"/>
                    <circle cx="12" cy="12" r="4" stroke="#8FBF23" strokeWidth="2" fill="none"/>
                    <circle cx="17" cy="7" r="1" fill="#8FBF23"/>
                  </svg>
                </a>
                {/* Email */}
                <a
                  href="mailto:sungaiwain96@gmail.com"
                  className="px-2.5 py-2 bg-white rounded-full outline-1 outline-[#8FBF23] flex items-center hover:bg-lime-50 transition"
                  aria-label="Email"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="5" width="18" height="14" rx="2" stroke="#8FBF23" strokeWidth="2" fill="none"/>
                    <path d="M3 7l9 6 9-6" stroke="#8FBF23" strokeWidth="2" fill="none"/>
                  </svg>
                </a>
              </div>
              <div className="flex justify-center md:justify-start mt-6">
                <a
                  href="https://www.google.com/maps/dir/?api=1&origin=&destination=Hutan+Lindung+Sungai+Wain,+Karang+Joang,+Kota+Balikpapan,+Kalimantan+Timur&waypoints=Kebun+Raya+Balikpapan,+Karang+Joang,+Kota+Balikpapan,+Kalimantan+Timur&travelmode=DRIVING_MODE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div data-hierarchy="Primary" data-icon="Default" data-size="lg" data-state="Default" className="px-4 py-2.5 bg-[#cbea7b] rounded-lg shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] outline outline-1 outline-offset-[-1px] outline-[#cbea7b] inline-flex justify-center items-center gap-1.5 overflow-hidden cursor-pointer hover:bg-opacity-80 transition">
                    <div className="justify-start text-black text-base font-semibold font-['Plus_Jakarta_Sans'] leading-normal">Dapatkan Petunjuk Arah</div>
                    <div className="size-5 relative bg-white/0 overflow-hidden">
                        <div className="w-full h-full items-center justify-center">
                          <img
                          src="/storage/icon/Arrow.svg"
                          alt="Arrow Icon"
                          className="w-full h-full"
                          />
                        </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="w-full sm:w-56 pl-0 sm:pl-8 border-l-0 sm:border-l border-zinc-300 flex flex-col gap-4 sm:gap-6 text-center md:text-left"> {/* Removed left border on mobile, stacked text alignment */}
              <div className="text-stone-950 text-xl sm:text-2xl font-medium">Jam Operasional</div> {/* Adjusted font size */}
              <div className="w-full sm:w-44 flex flex-col gap-2 sm:gap-3"> {/* Full width, adjusted gap */}
                <div className="text-zinc-500 text-sm sm:text-base font-normal">
                  Senin - Minggu<br />
                  08:00 - 16:00 WITA
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tentang;