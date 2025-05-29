import { useEffect, useRef, useState } from "react";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";

const fasilitasList = [
  { label: "Makanan & Minuman : Menyesuaikan Ditempat", value: "Makanan & Minuman" },
  { label: "Panggung : Rp 250.000", value: "Panggung" },
  { label: "Gazebo : Rp 50.000", value: "Gazebo" },
  { label: "Rumah Pohon : Rp. 100.000", value: "Rumah Pohon" },
  { label: "Kelengkapan Sepatu & Stick : Rp 50.000", value: "Kelengkapan Sepatu & Stick" },
];

const paketList = [
  "Super Short Track Rp 25.000",
  "Super Short Track Rp 50.000",
  "Jungle Tracking Rp 150.000",
  "Jungle Tracking Rp 300.000",
  "River Trip Rp 400.000",
  "River Trip Rp 700.000"
];

const getQueryParam = (key) => {
  const params = new URLSearchParams(window.location.search);
  return params.get(key) || "";
};

// resources/js/Pages/Form.jsx
const Form = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [paket, setPaket] = useState("");
  const [pesan, setPesan] = useState("");
  const [fasilitas, setFasilitas] = useState([]);
  const [selectOpen, setSelectOpen] = useState(false);
  const selectRef = useRef(null);

  useEffect(() => {
    const paketQuery = getQueryParam("paket");
    if (paketQuery) {
      // Cari paket yang title-nya sama di paketList
      const found = paketList.find((item) =>
        item.toLowerCase().startsWith(paketQuery.toLowerCase())
      );
      if (found) setPaket(found);
    }
  }, []);

  // Optional: close icon if click outside select
  useEffect(() => {
    function handleClick(e) {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setSelectOpen(false);
      }
    }
    if (selectOpen) {
      document.addEventListener("mousedown", handleClick);
    }
    return () => document.removeEventListener("mousedown", handleClick);
  }, [selectOpen]);

  const handleFasilitasChange = (value) => {
    setFasilitas((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fasilitasText = fasilitas.length > 0 ? fasilitas.join(", ") : "-";
    const text = `Halo, saya ingin melakukan pemesanan:\n\nNama Lengkap: ${nama}\nEmail: ${email}\nPaket: ${paket}\nFasilitas Tambahan: ${fasilitasText}\nPesan: ${pesan}`;
    const url = `https://wa.me/6281998241808?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="w-full bg-white flex flex-col items-center min-h-screen">
      <Navbar />
      <form
        className="w-full flex flex-col items-center flex-grow" // Added flex-grow
        onSubmit={handleSubmit}
      >
        <div className="self-stretch px-4 py-12 sm:px-8 md:px-12 lg:px-[15px] sm:py-24 md:py-32 lg:py-24 bg-white flex flex-col justify-center items-center gap-8 sm:gap-12"> {/* Adjusted padding */}
          {/* Header Section */}
          <div className="w-full max-w-[1120px] flex flex-col items-center gap-4 sm:gap-5 text-center"> {/* Added max-w, adjusted gap */}
            <div className="w-full flex flex-col items-center gap-1">
              <div className="text-stone-950 text-4xl sm:text-5xl font-medium leading-[48px] sm:leading-[60px]"> {/* Adjusted font size */}
                Form Layanan Pelanggan
              </div>
            </div>
            <div className="w-full max-w-[842px] text-zinc-500 text-sm sm:text-base font-normal"> {/* Adjusted font size */}
              Tim layanan pelanggan kami siap membantu Anda dengan pertanyaan, keluhan, atau permintaan informasi yang Anda miliki. Baik Anda membutuhkan bantuan terkait pemesanan maupun memiliki pertanyaan mengenai layanan, kami siap melayani Anda.
            </div>
          </div>
          {/* Form Fields Section */}
          <div className="w-full max-w-[1120px] flex flex-col justify-start items-start gap-8 sm:gap-10 px-4 sm:px-0"> {/* Added max-w, adjusted gap, removed fixed width */}
            <div className="flex flex-col md:flex-row justify-start items-start gap-6 w-full"> {/* Stacks on mobile, row on md+ */}
              <div className="flex flex-col justify-start items-start gap-4 w-full md:w-[544px]"> {/* Full width on mobile, fixed width on md+ */}
                {/* Nama Lengkap */}
                <div className="flex flex-col justify-start items-start gap-2 w-full">
                  <div>
                    <span className="text-stone-950 text-sm sm:text-base font-normal">Nama Lengkap </span> {/* Adjusted font size */}
                    <span className="text-red-600 text-sm sm:text-base font-normal">*</span> {/* Adjusted font size */}
                  </div>
                  <input
                    type="text"
                    required
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    placeholder="Nama Lengkap"
                    className="w-full h-10 sm:h-12 px-3 bg-white rounded-lg outline-1 outline-offset-[-1px] outline-zinc-300 text-zinc-500 text-sm font-normal"
                  />
                </div>
                {/* Email */}
                <div className="flex flex-col justify-start items-start gap-2 w-full">
                  <div>
                    <span className="text-stone-950 text-sm sm:text-base font-normal">Email </span> {/* Adjusted font size */}
                    <span className="text-red-600 text-sm sm:text-base font-normal">*</span> {/* Adjusted font size */}
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Masukan email anda"
                    className="w-full h-10 sm:h-12 px-3 bg-white rounded-lg outline-1 outline-offset-[-1px] outline-zinc-300 text-zinc-500 text-sm font-normal"
                  />
                </div>
              </div>
              {/* Fasilitas Tambahan */}
              <div className="w-full md:w-[566px] flex flex-col justify-start items-start">
                <div className="text-stone-950 text-sm sm:text-base font-normal mb-2">Fasilitas Tambahan</div> {/* Adjusted font size */}
                <div className="w-full px-3 py-3.5 bg-white rounded-lg flex flex-col justify-start items-start overflow-hidden border border-zinc-300"> {/* Added border for checkbox group */}
                  {fasilitasList.map((item) => (
                    <label key={item.value} className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2 cursor-pointer"> {/* Adjusted gap and margin-bottom */}
                      <input
                        type="checkbox"
                        checked={fasilitas.includes(item.value)}
                        onChange={() => handleFasilitasChange(item.value)}
                        className="accent-lime-600 w-4 h-4 sm:w-5 sm:h-5 rounded border border-stone-950"
                      />
                      <span className="text-stone-950 text-sm sm:text-base font-normal">{item.label}</span> {/* Adjusted font size */}
                    </label>
                  ))}
                </div>
              </div>
            </div>
            {/* Paket */}
            <div className="flex flex-col justify-start items-start gap-2 w-full">
              <div>
                <span className="text-stone-950 text-sm sm:text-base font-normal">Paket </span> {/* Adjusted font size */}
                <span className="text-red-600 text-sm sm:text-base font-normal">*</span> {/* Adjusted font size */}
              </div>
              <div className="relative w-full" ref={selectRef}>
                <select
                  required
                  value={paket}
                  onChange={(e) => {
                    setPaket(e.target.value);
                    setSelectOpen(false); // Tutup animasi icon saat memilih paket
                  }}
                  className="w-full h-10 sm:h-12 px-3 py-2 sm:py-3.5 bg-white rounded-lg outline-1 outline-offset-[-1px] outline-zinc-300 text-zinc-500 text-sm font-normal appearance-none"
                  onMouseDown={() => setSelectOpen(true)} // Gunakan onMouseDown agar icon langsung berputar saat klik
                  onBlur={() => setSelectOpen(false)}
                >
                  <option value="">Pilih Paket</option>
                  {paketList.map((item) => (
                    <option key={item} value={item}>{item}</option>
                  ))}
                </select>
                {/* Dropdown icon di kanan, animasi rotate */}
                <span
                  className={`pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-zinc-400 transition-transform duration-300 ${selectOpen ? "rotate-180" : "rotate-0"}`}
                >
                  <svg width="18" height="18" fill="none" viewBox="0 0 20 20"> {/* Adjusted icon size */}
                    <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </div>
            {/* Pesan */}
            <div className="flex flex-col justify-start items-start gap-2 w-full">
              <div className="text-stone-950 text-sm sm:text-base font-normal">Pesan</div> {/* Adjusted font size */}
              <textarea
                value={pesan}
                onChange={(e) => setPesan(e.target.value)}
                placeholder="Tuliskan pesan disini..."
                className="w-full h-24 sm:h-28 px-3 py-2 sm:py-3.5 bg-white rounded-lg outline-1 outline-offset-[-1px] outline-zinc-300 text-zinc-500 text-sm font-normal resize-none"
              />
            </div>
          </div>
          {/* Submit Button */}
          <button
            className="px-4 py-2.5 bg-[#cbea7b] rounded-lg shadow flex items-center gap-1.5 font-semibold text-black outline-0 text-base sm:text-lg"
            type="submit" // Ensure button is of type submit
          >
            Kirim Pesanan
            <span className="w-5 h-5 flex items-center justify-center">
              <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                <path d="M4 8h8M8 4l4 4-4 4" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Form;