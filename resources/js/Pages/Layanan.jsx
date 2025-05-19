import { useState } from "react";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import { FiPlus, FiMinus, FiPhone } from "react-icons/fi";
import { Link } from "@inertiajs/react";

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
  <div className="border-b border-zinc-300 py-4">
    <button
      className="flex justify-between items-center w-full text-left focus:outline-none"
      onClick={onClick}
      type="button"
    >
      <span className="text-stone-950 text-2xl font-medium leading-loose">{question}</span>
      <span className="w-8 h-8 flex items-center justify-center text-black">
        {open ? <FiMinus size={24} color="black" /> : <FiPlus size={24} color="black" />}
      </span>
    </button>
    {open && (
      <div className="w-full text-zinc-500 text-base font-normal mt-2">{answer}</div>
    )}
  </div>
);

const Layanan = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  return (
    <div className="relative bg-white min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Pricing Table */}
      <div className="w-full flex flex-col items-center pt-36 pb-12 bg-white">
        <div className="w-[1120px] flex flex-col items-center gap-5">
          <div className="flex flex-col items-center gap-1 w-full">
            <div className="text-center text-lime-700 text-sm font-medium">Pricing Table</div>
            <div className="text-center text-stone-950 text-5xl font-medium leading-[60px]">Pilihan Tingkat Layanan Kami</div>
          </div>
          <div className="w-[742px] text-center text-zinc-500 text-base font-normal">
            Ideal untuk peneliti, pecinta alam, dan pelaku konservasi, Layanan Dasar kami memberikan dukungan penting serta akses ke fitur utama kawasan konservasi ini dengan biaya yang terjangkau. Nikmati akses yang andal ke keanekaragaman hayati dan ekosistem utama Hutan Lindung Sungai Wain.
          </div>
        </div>
        {/* 3x2 Price List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 w-[1120px]">
          {layananList.slice(0, 3).map((item, idx) => (
            <div
              key={idx}
              className="w-72 p-7 bg-white rounded-[20px] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col items-center gap-5"
            >
              <div className="text-center text-stone-950 text-2xl font-medium leading-loose">{item.title}</div>
              <div className="flex items-start gap-[5px]">
                <div className="text-stone-950 text-2xl font-medium">Rp</div>
                <div className="text-stone-950 text-5xl font-medium leading-[60px]">{item.price}</div>
              </div>
              <div className="self-stretch h-0 border-t border-zinc-300"></div>
              <div className="flex flex-col items-center gap-2.5">
                <div className="text-center text-stone-950 text-xl font-normal leading-loose">{item.max}</div>
                <div className="text-center text-stone-950 text-base font-normal">{item.desc}</div>
              </div>
              <Link
                href="/form"
                className="w-full px-4 py-3 bg-lime-300 rounded-lg shadow outline outline-1 outline-lime-300 text-stone-950 text-base font-semibold mt-2 flex justify-center items-center"
              >
                Pesan Sekarang
              </Link>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 w-[1120px]">
          {layananList.slice(3, 6).map((item, idx) => (
            <div
              key={idx}
              className="w-72 p-7 bg-white rounded-[20px] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col items-center gap-5"
            >
              <div className="text-center text-stone-950 text-2xl font-medium leading-loose">{item.title}</div>
              <div className="flex items-start gap-[5px]">
                <div className="text-stone-950 text-2xl font-medium">Rp</div>
                <div className="text-stone-950 text-5xl font-medium leading-[60px]">{item.price}</div>
              </div>
              <div className="self-stretch h-0 border-t border-zinc-300"></div>
              <div className="flex flex-col items-center gap-2.5">
                <div className="text-center text-stone-950 text-xl font-normal leading-loose">{item.max}</div>
                <div className="text-center text-stone-950 text-base font-normal">{item.desc}</div>
              </div>
              <Link
                href="/form"
                className="w-full px-4 py-3 bg-lime-300 rounded-lg shadow outline outline-1 outline-lime-300 text-stone-950 text-base font-semibold mt-2 flex justify-center items-center"
              >
                Pesan Sekarang
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-full flex justify-center items-center bg-white py-24">
        <div className="flex flex-col md:flex-row gap-8 w-[1120px]">
          {/* Left */}
          <div className="w-[473px] flex flex-col gap-10">
            <div className="flex flex-col gap-1">
              <div className="text-lime-600 text-sm font-medium">FAQ’s</div>
              <div className="text-stone-950 text-5xl font-medium leading-[60px]">Temukan Pertanyaanmu Disini</div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-zinc-500 text-xl font-medium">Tidak Menemukan Pertanyaan mu?</div>
              <div className="flex gap-1.5">
                <div className="text-zinc-500 text-xl font-medium">Kirim Pesan ke</div>
                <div className="text-stone-950 text-xl font-medium">Starium@drak.sistem</div>
              </div>
            </div>
            <button className="flex items-center gap-2 px-3.5 py-2.5 bg-lime-300 rounded-lg shadow outline outline-1 outline-lime-300 w-fit">
              <FiPhone className="w-5 h-5" />
              <span className="text-stone-950 text-sm font-semibold">Call +62(89-9824-1808)</span>
            </button>
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
