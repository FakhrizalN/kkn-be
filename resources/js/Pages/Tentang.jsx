import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";

const Tentang = () => {
  return (
    <div className="relative bg-white min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="w-full flex flex-col items-center pt-36 pb-12 bg-white">
        <div className="flex flex-col md:flex-row gap-8 mt-12 w-[1120px]">
          <img
            className="w-[544px] h-[550px] rounded-[20px] object-cover"
            src="https://placehold.co/544x550"
            alt="Hutan Lindung Sungai Wain"
          />
          <div className="w-[544px] flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <div className="text-stone-950 text-5xl font-medium leading-[60px]">
                  Menjelajahi Keindahan Alam Hutan Lindung Sungai Wain
                </div>
              </div>
              <div className="h-0 border-t border-zinc-300"></div>
              <div className="flex flex-col gap-7">
                <div className="text-zinc-500 text-base font-normal">
                  Kisah kami adalah tentang dedikasi, kecintaan pada alam, dan komitmen untuk melestarikan keajaiban Hutan Lindung Sungai Wain. Sejak pertama kali Anda menginjakkan kaki di sini, Anda akan memulai perjalanan yang merayakan keunikan alam, meningkatkan kesadaran akan lingkungan, dan mencerminkan keindahan yang tak tergantikan. Kami bukan sekadar destinasi wisata; kami adalah mitra dalam petualangan Anda untuk menemukan harmoni dengan alam.
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-44 h-32 flex flex-col justify-center items-center overflow-hidden">
                <img className="w-44 h-32 rounded-[10px] object-cover" src="https://placehold.co/170x130" alt="gallery1" />
              </div>
              <div className="w-44 h-32 flex flex-col justify-center items-center overflow-hidden">
                <img className="w-44 h-32 rounded-[10px] object-cover" src="https://placehold.co/170x130" alt="gallery2" />
              </div>
              <div className="w-44 h-32 flex flex-col justify-center items-center overflow-hidden">
                <img className="w-44 h-32 rounded-[10px] object-cover" src="https://placehold.co/170x130" alt="gallery3" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Value Section */}
      <div className="w-full flex justify-center items-center bg-white py-24">
        <div className="flex flex-col md:flex-row gap-8 w-[1120px]">
          <div className="flex-1 flex flex-col gap-6">
            {/* Pemandu Profesional */}
            <div className="pb-6 border-b border-zinc-300 flex flex-col gap-3">
              <div className="flex items-center gap-2.5">
                <span className="p-2.5 bg-white rounded-full outline-1 outline-[#8FBF23] flex items-center justify-center">
                  {/* Icon Orang */}
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24" className="w-7 h-7">
                    <circle cx="12" cy="8" r="4" stroke="#8FBF23" strokeWidth="2"/>
                    <path d="M4 20c0-2.21 3.582-4 8-4s8 1.79 8 4" stroke="#8FBF23" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
                <span className="text-stone-950 text-2xl font-medium">Pemandu Profesional</span>
              </div>
              <div className="w-[544px] text-zinc-500 text-base font-normal">
                Manfaat praktis yang kami tawarkan, seperti pemandu berpengalaman, rute terbaik, dan fasilitas pendukung untuk memastikan pengalaman menjelajah Anda aman, nyaman, dan berkesan.
              </div>
            </div>
            {/* Program Edukasi */}
            <div className="pb-6 border-b border-zinc-300 flex flex-col gap-3">
              <div className="flex items-center gap-2.5">
                <span className="p-2.5 bg-white rounded-full outline-1 outline-[#8FBF23] flex items-center justify-center">
                  {/* Icon Lampu */}
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24" className="w-7 h-7">
                    <path d="M12 3a7 7 0 0 0-3 13.326V18a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.674A7 7 0 0 0 12 3Z" stroke="#8FBF23" strokeWidth="2"/>
                    <path d="M9 22h6" stroke="#8FBF23" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
                <span className="text-stone-950 text-2xl font-medium">Program Edukasi</span>
              </div>
              <div className="w-[544px] text-zinc-500 text-base font-normal">
                Pengalaman subjektif dan hubungan emosional yang tercipta melalui kegiatan edukasi tentang flora, fauna, dan upaya konservasi, menumbuhkan kebahagiaan, kepuasan, dan rasa peduli terhadap alam.
              </div>
            </div>
            {/* Penghargaan */}
            <div className="pb-6 border-b border-zinc-300 flex flex-col gap-3">
              <div className="flex items-center gap-2.5">
                <span className="p-2.5 bg-white rounded-full outline-1 outline-[#8FBF23] flex items-center justify-center">
                  {/* Icon Lonceng */}
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24" className="w-7 h-7">
                    <path d="M18 16v-5a6 6 0 1 0-12 0v5l-1 2h14l-1-2Z" stroke="#8FBF23" strokeWidth="2"/>
                    <path d="M9 20a3 3 0 0 0 6 0" stroke="#8FBF23" strokeWidth="2"/>
                  </svg>
                </span>
                <span className="text-stone-950 text-2xl font-medium">Penghargaan</span>
              </div>
              <div className="w-[544px] text-zinc-500 text-base font-normal">
                Status yang diakui secara nasional maupun internasional atas peran penting Hutan Lindung Sungai Wain dalam konservasi keanekaragaman hayati, pelestarian spesies endemik, serta kontribusinya dalam menjaga ekosistem Kalimantan. Hutan ini telah mendapatkan berbagai penghargaan lingkungan dan menjadi contoh kawasan lindung yang dikelola secara berkelanjutan.
              </div>
            </div>
          </div>
          <div className="w-[544px] flex flex-col gap-8 justify-start">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <div className="text-stone-950 text-5xl font-medium leading-[60px]">Mindset Pencapaian Kelestarian Hutan</div>
              </div>
              <div className="w-[544px] text-zinc-500 text-base font-normal">
                Dalam konteks pelestarian alam, nilai yang kami tawarkan adalah manfaat ekologis dan edukatif yang diberikan Hutan Lindung Sungai Wain bagi pengunjung, masyarakat, dan ekosistem. Ini tentang memenuhi kebutuhan wisata alam yang bertanggung jawab sekaligus menjaga kelestarian hutan untuk generasi mendatang.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Location Section */}
      <div className="w-full flex justify-center items-center bg-white py-24">
        <div className="flex flex-col md:flex-row gap-8 w-[1120px]">
          {/* Ganti image dengan embed Google Maps */}
          <div className="w-[558px] h-72 rounded-[20px] flex flex-col justify-center items-center overflow-hidden">
            <iframe
              title="Lokasi Hutan Lindung Sungai Wain"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3247.4735481406183!2d116.83881054402568!3d-1.1450298328725474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df14a2c3a41846b%3A0x8fbf08ad5ecba082!2sHutan%20Lindung%20Sungai%20Wain!5e0!3m2!1sid!2sid!4v1747902501490!5m2!1sid!2sid"
              width="558"
              height="288"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-[558px] h-72 rounded-[20px] border-0"
            ></iframe>
          </div>
          <div className="w-[530px] flex gap-8">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <div className="text-stone-950 text-2xl font-medium">Kontak</div>
                <div className="w-72 flex flex-col gap-2.5">
                  <div className="flex gap-2.5">
                    <span className="text-zinc-500 text-base font-normal">+62 811 538 2227</span>
                  </div>
                  <div className="flex gap-2.5">
                    <span className="text-zinc-500 text-base font-normal">sungaiwain96@gmail.com</span>
                  </div>
                  <div className="flex gap-2.5">
                    <span className="text-zinc-500 text-base font-normal">
                      Jl. Sei Wain Km 15 RT 36 Kelurahan Karang Joang, Balikpapan Utara, Kalimantan Timur, Indonesia.
                    </span>
                  </div>
                </div>
                <div className="flex gap-3.5">
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/628115382227"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2.5 bg-white rounded-full outline-1 outline-[#8FBF23] flex items-center hover:bg-lime-50 transition"
                    aria-label="WhatsApp"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 32 32" fill="none">
                      <path d="M16 3C9.373 3 4 8.373 4 15c0 2.637.86 5.08 2.34 7.09L4 29l7.18-2.31A12.93 12.93 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3Z" stroke="#8FBF23" strokeWidth="2" fill="none"/>
                      <path d="M11.5 13.5c.5 2 2.5 4.5 4.5 5.5l1.5-1.5c.5-.5 1.5 0 2 .5l1 1c.5.5.5 1.5 0 2A7.5 7.5 0 0 1 16 22.5C11.5 20.5 9 16.5 9 13c0-.5.5-1.5 1-2l1-1c.5-.5 1.5-.5 2 0l1.5 1.5c.5.5 1 1.5.5 2l-1.5 1.5Z" stroke="#8FBF23" strokeWidth="2" fill="none"/>
                    </svg>
                  </a>
                  {/* Instagram */}
                  <a
                    href="https://instagram.com/sungaiwain96"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2.5 bg-white rounded-full outline-1 outline-[#8FBF23] flex items-center hover:bg-lime-50 transition"
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
                    className="px-3 py-2.5 bg-white rounded-full outline-1 outline-[#8FBF23] flex items-center hover:bg-lime-50 transition"
                    aria-label="Email"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="5" width="18" height="14" rx="2" stroke="#8FBF23" strokeWidth="2" fill="none"/>
                      <path d="M3 7l9 6 9-6" stroke="#8FBF23" strokeWidth="2" fill="none"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-56 pl-8 border-l border-zinc-300 flex flex-col gap-6">
              <div className="text-stone-950 text-2xl font-medium">Jam Operasional</div>
              <div className="w-44 flex flex-col gap-3">
                <div className="text-zinc-500 text-base font-normal">
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