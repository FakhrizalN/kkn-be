import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Flora = () => {
    const [floraList, setFloraList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFlora = async () => {
            try {
                const response = await axios.get("/api/flora");
                setFloraList(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching flora data:", error);
                setLoading(false);
            }
        };

        fetchFlora();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Daftar Flora</h1>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                {floraList.map((flora) => (
                    <Link
                        to={`/flora/${flora.id}`}
                        key={flora.id}
                        style={{
                            textDecoration: "none",
                            color: "inherit",
                        }}
                    >
                        <div
                            style={{
                                border: "1px solid #ccc",
                                borderRadius: "8px",
                                padding: "16px",
                                cursor: "pointer",
                                width: "200px",
                                textAlign: "center",
                            }}
                        >
                            <img
                                src={flora.photo}
                                alt={flora.local_name}
                                style={{ width: "100%", borderRadius: "8px" }}
                            />
                            <h3>{flora.local_name}</h3>
                            <p><i>{flora.latin_name}</i></p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Flora;
