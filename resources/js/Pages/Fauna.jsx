import { Link } from "@inertiajs/react";
import axios from "axios";
import { useEffect, useState } from "react";

const Fauna = () => {
    const [faunaList, setFaunaList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFauna = async () => {
            try {
                const response = await axios.get("/api/fauna/");
                console.log("Response data:", response.data);
                setFaunaList(response.data.data); // Akses array di dalam properti "data"
                setLoading(false);
            } catch (error) {
                console.error("Error fetching fauna data:", error);
                setLoading(false);
            }
        };

        fetchFauna();
    }, []);

    if (loading) {
        return <p style={{ textAlign: "center", fontSize: "18px" }}>Loading...</p>;
    }

    if (!Array.isArray(faunaList)) {
        return <p style={{ textAlign: "center", color: "red" }}>Error: Data tidak valid.</p>;
    }

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h1 style={{ textAlign: "center", color: "#4CAF50" }}>Daftar Fauna</h1>
            <ul style={{ listStyleType: "none", padding: 0 }}>
                {faunaList.map((fauna) => (
                    <li
                        key={fauna.id}
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
                            href={`/fauna/${fauna.slug}`} // Link ke halaman detail fauna
                            style={{
                                textDecoration: "none",
                                color: "inherit",
                            }}
                        >
                            <strong style={{ fontSize: "18px", color: "#333" }}>
                                {fauna.nama}
                            </strong>
                            <p style={{ margin: "5px 0", fontStyle: "italic", color: "#555" }}>
                                {fauna.nama_latin}
                            </p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Fauna;