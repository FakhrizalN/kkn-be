import axios from "axios";
import { useEffect, useState } from "react";

const FaunaDetail = ({ faunaSlug }) => {
    const [fauna, setFauna] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFaunaDetail = async () => {
            try {
                const response = await axios.get(`/api/fauna/${faunaSlug}`);
                console.log("Fauna Detail Response:", response.data);
                setFauna(response.data.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching fauna detail:", error);
                setLoading(false);
            }
        };

        fetchFaunaDetail();
    }, [faunaSlug]);

    if (loading) {
        return <p style={{ textAlign: "center", fontSize: "18px" }}>Loading...</p>;
    }

    if (!fauna) {
        return <p style={{ textAlign: "center", color: "red" }}>Fauna not found.</p>;
    }

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", maxWidth: "800px", margin: "0 auto" }}>
            <h1 style={{ textAlign: "center", color: "#4CAF50", marginBottom: "20px" }}>
                {fauna.nama}
            </h1>
            <img
                src={fauna.foto}
                alt={fauna.nama}
                style={{
                    width: "100%",
                    maxHeight: "400px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    marginBottom: "20px",
                }}
            />
            <h3 style={{ textAlign: "center", fontStyle: "italic", color: "#555" }}>
                {fauna.nama_latin}
            </h3>
            <div style={{ marginTop: "20px", lineHeight: "1.6", color: "#333" }}>
                <p style={{ marginBottom: "10px" }}>
                    <strong>Description:</strong> {fauna.deskripsi}
                </p>
                <p style={{ marginBottom: "10px" }}>
                    <strong>Family:</strong> {fauna.nama_family}
                </p>
                <p style={{ marginBottom: "10px" }}>
                    <strong>Berat:</strong> {fauna.berat ? `${fauna.berat} kg` : "N/A"}
                </p>
                <p style={{ marginBottom: "10px" }}>
                    <strong>Panjang:</strong> {fauna.panjang ? `${fauna.panjang} cm` : "N/A"}
                </p>
            </div>
        </div>
    );
};

export default FaunaDetail;