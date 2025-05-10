import axios from "axios";
import { useEffect, useState } from "react";

const ArtikelDetail = ({ artikelSlug }) => {
    const [artikel, setArtikel] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArtikelDetail = async () => {
            try {
                const response = await axios.get(`/api/artikel/${artikelSlug}`);
                console.log("Artikel Detail Response:", response.data);
                setArtikel(response.data.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching artikel detail:", error);
                setLoading(false);
            }
        };

        fetchArtikelDetail();
    }, [artikelSlug]);

    if (loading) {
        return <p style={{ textAlign: "center", fontSize: "18px" }}>Loading...</p>;
    }

    if (!artikel) {
        return <p style={{ textAlign: "center", color: "red" }}>Artikel not found.</p>;
    }

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", maxWidth: "800px", margin: "0 auto" }}>
            <h1 style={{ textAlign: "center", color: "#4CAF50", marginBottom: "20px" }}>
                {artikel.judul}
            </h1>
            <img
                src={artikel.gambar}
                alt={artikel.judul}
                style={{
                    width: "100%",
                    maxHeight: "400px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    marginBottom: "20px",
                }}
            />
            <div style={{ marginTop: "20px", lineHeight: "1.6", color: "#333" }}>
                <p style={{ marginBottom: "10px" }}>
                    <strong>Published on:</strong> {new Date(artikel.tanggal_publikasi).toLocaleDateString()}
                </p>
                <p style={{ marginBottom: "10px" }}>
                    <strong>Content:</strong>
                </p>
                <p>{artikel.konten}</p>
            </div>
        </div>
    );
};

export default ArtikelDetail;