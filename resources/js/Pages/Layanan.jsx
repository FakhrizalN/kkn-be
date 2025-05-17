import { FiPlus, FiMinus } from "react-icons/fi";
import { useState } from "react";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";

const FAQItem = ({ index, question, answer }) => {
  const [open, setOpen] = useState(index === 0);
  return (
    <div className="border-b pb-4">
      <div
        className="flex justify-between items-start cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        <div className="text-xl text-gray-600">
          {open ? <FiMinus /> : <FiPlus />}
        </div>
      </div>
      {open && answer && (
        <p className="text-gray-500 mt-2 text-sm leading-relaxed">{answer}</p>
      )}
    </div>
  );
};

const Layanan = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Section Harga */}
        <section className="w-full bg-white flex flex-col items-center">
          <div className="w-full px-4 py-16 flex flex-col items-center gap-12">
            <div className="max-w-4xl flex flex-col items-center gap-5">
              <div className="flex flex-col items-center gap-1">
                <div className="text-center text-indigo-700 text-sm font-medium">Pilihan Layanan Pemanduan Wisata HLSW</div>
                <div className="text-center text-stone-950 text-4xl md:text-5xl font-bold leading-tight">Our Range of Service Level Options</div>
              </div>
              <div className="max-w-2xl text-center text-zinc-500 text-base leading-normal">
                Cocok untuk pengunjung perorangan dan kelompok kecil, menawarkan pengalaman menjelajahi HLSW dengan panduan dasar yang informatif.
              </div>
            </div>
            <div className="w-full flex flex-col md:flex-row justify-center items-center gap-8">
              {/* Super Short Track */}
              <div className="w-80 p-6 bg-gray-50 rounded-[20px] flex flex-col items-start gap-10">
                <div className="flex flex-col items-start gap-4 w-full">
                  <div className="flex items-end gap-2">
                    <div className="text-stone-950 text-5xl font-medium leading-[60px]">Rp 25.000</div>
                  </div>
                  <div className="text-stone-950 text-base">Grup (Max 4 Orang)</div>
                  <div className="text-stone-950 text-2xl font-semibold">Super Short Track</div>
                  <div className="text-zinc-500 text-base">Track terpendek tanpa pendamping buat kunjungan singkat batas waktu 1 jam berada didalam hutan.</div>
                </div>
                <div className="flex flex-col gap-4 w-full">
                  {[
                    "Limited Features",
                    "Basic Support",
                    "Trial for Premium Features",
                    "Community Access",
                    "No Commitment"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3.5">
                      <span className="inline-block w-4 h-2.5 border-2 border-stone-950 rounded-sm" />
                      <span className="text-stone-950 text-base font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full px-5 py-4 bg-lime-300 rounded-[100px] shadow text-stone-950 text-lg font-semibold">Daftar Sekarang</button>
              </div>
              {/* Jungle Tracking */}
              <div className="w-80 p-6 bg-gray-50 rounded-[20px] flex flex-col items-start gap-10">
                <div className="flex flex-col items-start gap-4 w-full">
                  <div className="flex items-end gap-2">
                    <div className="text-stone-950 text-5xl font-medium leading-[60px]">Rp.150-300</div>
                    <div className="text-stone-950 text-base">/ Grup (10orang)</div>
                  </div>
                  <div className="text-stone-950 text-2xl font-semibold">Jungle Tracking</div>
                  <div className="text-zinc-500 text-base">Nuansa alam yang asli dan asri dengan berbagai jenis flora dan fauna langka didalam HLSW.</div>
                </div>
                <div className="flex flex-col gap-4 w-full">
                  {[
                    "Premium Features",
                    "Custom Integrations",
                    "Personalised Onboarding",
                    "Dedicated Account Manager",
                    "Higher API Limits"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3.5">
                      <span className="inline-block w-4 h-2.5 border-2 border-stone-950 rounded-sm" />
                      <span className="text-stone-950 text-base font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full px-5 py-4 bg-lime-300 rounded-[100px] shadow text-black text-lg font-semibold">Get Started</button>
              </div>
              {/* River Trip */}
              <div className="w-80 p-6 bg-gray-50 rounded-[20px] flex flex-col items-start gap-10">
                <div className="flex flex-col items-start gap-4 w-full">
                  <div className="flex items-end gap-2">
                    <div className="text-stone-950 text-5xl font-medium leading-[60px]">Rp.400-700</div>
                    <div className="text-stone-950 text-base">/ Grup (10orang)</div>
                  </div>
                  <div className="text-stone-950 text-2xl font-semibold">River Trip</div>
                  <div className="text-zinc-500 text-base">Menyusuri sungai menggunakan perahu motor ke muara sungai wain.</div>
                </div>
                <div className="flex flex-col gap-4 w-full">
                  {[
                    "Unlimited Usage",
                    "Exclusive Content",
                    "Custom Reports and Analytics",
                    "Priority Support",
                    "VIP Community Access"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3.5">
                      <span className="inline-block w-4 h-2.5 border-2 border-stone-950 rounded-sm" />
                      <span className="text-stone-950 text-base font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full px-5 py-4 bg-lime-300 rounded-[100px] shadow text-black text-lg font-semibold">Get Started</button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left Column */}
            <div>
              <p className="text-green-700 font-medium mb-2">FAQ’s</p>
              <h2 className="text-4xl font-bold leading-tight mb-6">Temukan Pertanyaanmu Disini</h2>
              <p className="text-gray-500 text-lg mb-6">
                Couldn’t not find what you were looking for? <br />
                write to us at <span className="font-medium text-black">Starium@drak.sistem</span>
              </p>
              <button className="bg-lime-300 text-black font-medium py-2 px-4 rounded-lg shadow inline-flex items-center">
                <span className="mr-2">📞</span> Call +62(89–9824–1808)
              </button>
            </div>
            {/* Right Column (FAQ Items) */}
            <div className="space-y-6">
              {[
                {
                  question: "Apa itu HLSW ?",
                  answer:
                    "Hutan Lindung Sungai Wain (HLSW) adalah sebuah kawasan hutan konservasi yang terletak di Kota Balikpapan, Kalimantan Timur, Indonesia. Kawasan ini memiliki peran penting dalam pelestarian keanekaragaman hayati, perlindungan sumber daya air, serta penelitian dan pendidikan lingkungan.",
                },
                { question: "Apakah HLSW terbuka untuk umum?", answer: "" },
                { question: "Bagaimana cara memesan tempat dan tour?", answer: "" },
                {
                  question: "Apa saja flora dan fauna unik yang bisa ditemui di HLSW?",
                  answer: "",
                },
              ].map((item, index) => (
                <FAQItem
                  key={index}
                  index={index}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Layanan;
