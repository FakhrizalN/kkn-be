import { Link } from "@inertiajs/react";
import { useState } from "react";
import { FiMinus, FiPhone, FiPlus } from "react-icons/fi";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";

const layananList = [
  {
    title: "Super Short Track",
    price: "25.000",
    max: "Max 4 Orang",
    desc: "Tanpa Pemandu",
  },
  {
    title: "Jungle Tracking",
    price: "150.000",
    max: "Max 10 Orang",
    desc: "Pemandu + Short Track",
  },
  {
    title: "River Trip",
    price: "400.000",
    max: "Max 10 Orang",
    desc: "Pemandu + Short Track",
  },
  {
    title: "Super Short Track",
    price: "50.000",
    max: "Max 4 Orang",
    desc: "Didampingi Pemandu",
  },
  {
    title: "Jungle Tracking",
    price: "300.000",
    max: "Max 10 Orang",
    desc: "Pemandu + Long Track",
  },
  {
    title: "River Trip",
    price: "700.000",
    max: "Max 10 Orang",
    desc: "Pemandu + Long Track + Req Jam",
  },
];

const faqList = [
  {
    question: "Apa itu HLSW ?",
    answer:
      "Hutan Lindung Sungai Wain (HLSW) adalah sebuah kawasan hutan konservasi yang terletak di Kota Balikpapan, Kalimantan Timur, Indonesia. Kawasan ini memiliki peran penting dalam pelestarian keanekaragaman hayati, perlindungan sumber daya air, serta penelitian dan pendidikan lingkungan.",
  },
  {
    question: "Apakah HLSW terbuka untuk umum?",
    answer:
      "Ya, HLSW terbuka untuk umum dengan mengikuti prosedur dan peraturan yang berlaku untuk menjaga kelestarian kawasan.",
  },
  {
    question: "Bagaimana cara memesan tempat dan tour?",
    answer:
      "Anda dapat memesan tempat dan tour melalui kontak resmi HLSW atau melalui website kami. Silakan hubungi kami untuk informasi lebih lanjut.",
  },
  {
    question: "Apa saja flora dan fauna unik yang bisa ditemui di HLSW?",
    answer:
      "Beberapa flora dan fauna unik di HLSW antara lain orangutan, bekantan, beruang madu, kantong semar, dan berbagai jenis anggrek hutan.",
  },
];

const FAQItem = ({ question, answer, open, onClick }) => (
  <div className="border-b border-zinc-300 py-3 sm:py-4">
    <button
      className="flex justify-between items-center w-full text-left focus:outline-none"
      onClick={onClick}
      type="button"
    >
      <span className="text-stone-950 text-xl sm:text-2xl font-medium leading-normal sm:leading-loose">{question}</span>
      <span className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-black">
        {open ? <FiMinus size={20} color="black" /> : <FiPlus size={20} color="black" />}
      </span>
    </button>
    {/* Perubahan di sini untuk animasi */}
    <div
      className={`w-full text-zinc-500 text-sm sm:text-base font-normal overflow-hidden transition-all duration-500 ease-in-out ${
        open ? 'max-h-[500px] mt-1 sm:mt-2 opacity-100' : 'max-h-0 mt-0 opacity-0'
      }`}
    >
      {answer}
    </div>
  </div>
);

const Layanan = () => {
  const [openFAQ, setOpenFAQ] = useState(-1); // Ubah initial state menjadi -1 agar tidak ada yang terbuka di awal

  return (
    <div className="relative bg-white min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Pricing Table */}
      <div className="w-full flex flex-col items-center pt-12 md:pt-24 pb-8 sm:pt-36 sm:pb-12 bg-white px-4">
        <div className="w-full max-w-[1120px] flex flex-col items-center gap-4 sm:gap-5 text-center">
          <div className="flex flex-col items-center gap-1 w-full">
            <div className="text-stone-950 text-4xl sm:text-5xl font-medium leading-[48px] sm:leading-[60px]">Pilihan Tingkat Layanan Kami</div>
          </div>
          <div className="w-full max-w-[742px] text-zinc-500 text-sm sm:text-base font-normal">
            Ideal untuk peneliti, pecinta alam, dan pelaku konservasi, Layanan Dasar kami memberikan dukungan penting serta akses ke fitur utama kawasan konservasi ini dengan biaya yang terjangkau. Nikmati akses yang andal ke keanekaragaman hayati dan ekosistem utama Hutan Lindung Sungai Wain.
          </div>
        </div>
        {/* Price List Grid - Top Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 sm:mt-12 w-full max-w-[1120px]">
          {layananList.slice(0, 3).map((item, idx) => (
            <div
              key={idx}
              className="w-full max-w-[288px] mx-auto p-5 sm:p-7 bg-white rounded-[20px] outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col items-center gap-4 sm:gap-5"
            >
              <div className="text-center text-stone-950 text-xl sm:text-2xl font-medium leading-normal sm:leading-loose">{item.title}</div>
              <div className="flex items-start gap-[5px]">
                <div className="text-stone-950 text-xl sm:text-2xl font-medium">Rp</div>
                <div className="text-stone-950 text-4xl sm:text-5xl font-medium leading-[50px] sm:leading-[60px]">{item.price}</div>
              </div>
              <div className="self-stretch h-0 border-t border-zinc-300"></div>
              <div className="flex flex-col h-full items-center gap-2 sm:gap-2.5">
                <div className="text-center text-stone-950 text-lg sm:text-xl font-normal leading-normal sm:leading-loose">{item.max}</div>
                <div className="text-center text-stone-950 text-sm sm:text-base font-normal">{item.desc}</div>
              </div>
              <Link
                href={`/form?paket=${encodeURIComponent(item.title)}`}
                className="w-full px-4 py-3 bg-[#cbea7b] rounded-lg shadow outline-1 outline-lime-300 text-stone-950 text-base font-semibold mt-2 flex justify-center items-center"
              >
                Pesan Sekarang
              </Link>
            </div>
          ))}
        </div>
        {/* Price List Grid - Bottom Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 sm:mt-8 w-full max-w-[1120px]">
          {layananList.slice(3, 6).map((item, idx) => (
            <div
              key={idx}
              className="w-full max-w-[288px] mx-auto p-5 sm:p-7 bg-white rounded-[20px] outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col items-center gap-4 sm:gap-5"
            >
              <div className="text-center text-stone-950 text-xl sm:text-2xl font-medium leading-normal sm:leading-loose">{item.title}</div>
              <div className="flex items-start gap-[5px]">
                <div className="text-stone-950 text-xl sm:text-2xl font-medium">Rp</div>
                <div className="text-stone-950 text-4xl sm:text-5xl font-medium leading-[50px] sm:leading-[60px]">{item.price}</div>
              </div>
              <div className="self-stretch h-0 border-t border-zinc-300"></div>
              <div className="flex flex-col h-full items-center gap-2 sm:gap-2.5">
                <div className="text-center text-stone-950 text-lg sm:text-xl font-normal leading-normal sm:leading-loose">{item.max}</div>
                <div className="text-center text-stone-950 text-sm sm:text-base font-normal">{item.desc}</div>
              </div>
              <Link
                href={`/form?paket=${encodeURIComponent(item.title)}`}
                className="w-full px-4 py-3 bg-[#cbea7b] rounded-lg shadow outline-1 outline-lime-300 text-stone-950 text-base font-semibold mt-2 flex justify-center items-center"
              >
                Pesan Sekarang
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-full flex justify-center items-center bg-white py-16 sm:py-24 px-4">
        <div className="w-full max-w-[1120px] flex flex-col md:flex-row gap-10 md:gap-8">
          {/* Left */}
          <div className="w-full md:w-[473px] flex flex-col gap-6 sm:gap-10 text-center md:text-left">
            <div className="flex flex-col gap-1">
              <div className="text-stone-950 text-4xl sm:text-5xl font-medium leading-[48px] sm:leading-[60px]">Temukan Pertanyaanmu Disini</div>
            </div>
            <div className="flex flex-col gap-2 items-center md:items-start">
              <div className="text-zinc-500 text-lg sm:text-xl font-medium">Tidak Menemukan Pertanyaan mu?</div>
              <div className="flex flex-col sm:flex-row gap-0.5 sm:gap-1.5 items-center">
                <div className="text-zinc-500 text-lg sm:text-xl font-medium">Kirim Pesan ke</div>
                <div className="text-stone-950 text-lg sm:text-xl font-medium">sungaiwain96@gmail.com</div>
              </div>
            </div>
            <a
              href="https://wa.me/628115382227"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-3.5 py-2.5 bg-[#cbea7b] rounded-lg shadow outline-1 outline-lime-300 w-fit mx-auto md:mx-0"
              aria-label="WhatsApp"
            >
              <FiPhone className="w-5 h-5" />
              <span className="text-stone-950 text-sm font-semibold">Call +62 811 538 2227</span>
            </a>
          </div>
          {/* Right */}
          <div className="flex-1 flex flex-col gap-2">
            {faqList.map((item, idx) => (
              <FAQItem
                key={idx}
                question={item.question}
                answer={item.answer}
                open={openFAQ === idx}
                onClick={() => setOpenFAQ(openFAQ === idx ? -1 : idx)}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layanan;