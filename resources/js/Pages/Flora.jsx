import { Link } from "@inertiajs/react";
import axios from "axios";
import { useEffect, useState } from "react";

const Flora = () => {
    const [floraList, setFloraList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFlora = async () => {
            try {
                const response = await axios.get("/api/flora/");
                console.log("Response data:", response.data);
                setFloraList(response.data.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching flora data:", error);
                setLoading(false);
            }
        };

        fetchFlora();
    }, []);

    if (loading) {
        return <p style={{ textAlign: "center", fontSize: "18px" }}>Loading...</p>;
    }

    if (!Array.isArray(floraList)) {
        return <p style={{ textAlign: "center", color: "red" }}>Error: Data tidak valid.</p>;
    }

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h1 style={{ textAlign: "center", color: "#4CAF50" }}>Daftar Flora</h1>
            <ul style={{ listStyleType: "none", padding: 0 }}>
                {floraList.map((flora) => (
                    <li
                        key={flora.id}
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
                            href={`/flora/${flora.slug}`}
                            style={{
                                textDecoration: "none",
                                color: "inherit",
                            }}
                        >
                            <strong style={{ fontSize: "18px", color: "#333" }}>
                                {flora.local_name}
                            </strong>
                            <p style={{ margin: "5px 0", fontStyle: "italic", color: "#555" }}>
                                {flora.latin_name}
                            </p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Flora;
