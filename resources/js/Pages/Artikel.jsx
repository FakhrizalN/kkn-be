import { Link } from "@inertiajs/react";
import axios from "axios";
import { useEffect, useState } from "react";

const Artikel = () => {
    const [artikelList, setArtikelList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArtikel = async () => {
            try {
                const response = await axios.get("/api/artikel/");
                console.log("Response data:", response.data);
                setArtikelList(response.data.data); // Akses array di dalam properti "data"
                setLoading(false);
            } catch (error) {
                console.error("Error fetching artikel data:", error);
                setLoading(false);
            }
        };

        fetchArtikel();
    }, []);

    if (loading) {
        return <p style={{ textAlign: "center", fontSize: "18px" }}>Loading...</p>;
    }

    if (!Array.isArray(artikelList)) {
        return <p style={{ textAlign: "center", color: "red" }}>Error: Data tidak valid.</p>;
    }

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h1 style={{ textAlign: "center", color: "#4CAF50" }}>Daftar Artikel</h1>
            <ul style={{ listStyleType: "none", padding: 0 }}>
                {artikelList.map((artikel) => (
                    <li
                        key={artikel.id}
                        style={{
                            margin: "10px 0",
                            padding: "15px",
                            border: "1px solid #ddd",
                            borderRadius: "8px",
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                            backgroundColor: "#f9f9f9",
                        }}
                    >
                        <Link
                            href={`/artikel/${artikel.slug}`} // Link ke halaman detail artikel
                            style={{
                                textDecoration: "none",
                                color: "inherit",
                            }}
                        >
                            <strong style={{ fontSize: "18px", color: "#333" }}>
                                {artikel.judul}
                            </strong>
                            <p style={{ margin: "5px 0", fontStyle: "italic", color: "#555" }}>
                                {artikel.konten.substring(0, 100)}...
                            </p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Artikel;