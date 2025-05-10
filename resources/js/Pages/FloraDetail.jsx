import axios from "axios";
import { useEffect, useState } from "react";

const FloraDetail = ({ floraSlug }) => {
    const [flora, setFlora] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFloraDetail = async () => {
            try {
                const response = await axios.get(`/api/flora/${floraSlug}`);
                console.log("Flora Detail Response:", response.data);
                setFlora(response.data.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching flora detail:", error);
                setLoading(false);
            }
        };

        fetchFloraDetail();
    }, [floraSlug]);

    if (loading) {
        return <p style={{ textAlign: "center", fontSize: "18px" }}>Loading...</p>;
    }

    if (!flora) {
        return <p style={{ textAlign: "center", color: "red" }}>Flora not found.</p>;
    }

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", maxWidth: "800px", margin: "0 auto" }}>
            <h1 style={{ textAlign: "center", color: "#4CAF50", marginBottom: "20px" }}>
                {flora.local_name}
            </h1>
            <img
                src={flora.photo}
                alt={flora.local_name}
                style={{
                    width: "100%",
                    maxHeight: "400px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    marginBottom: "20px",
                }}
            />
            <h3 style={{ textAlign: "center", fontStyle: "italic", color: "#555" }}>
                {flora.latin_name}
            </h3>
            <div style={{ marginTop: "20px", lineHeight: "1.6", color: "#333" }}>
                <p style={{ marginBottom: "10px" }}>
                    <strong>Description:</strong> {flora.description}
                </p>
                <p style={{ marginBottom: "10px" }}>
                    <strong>Family:</strong> {flora.family}
                </p>
                <p style={{ marginBottom: "10px" }}>
                    <strong>Ekologi:</strong> {flora.ekologi}
                </p>
                <p style={{ marginBottom: "10px" }}>
                    <strong>Distribusi:</strong> {flora.distribusi}
                </p>
            </div>
        </div>
    );
};

export default FloraDetail;