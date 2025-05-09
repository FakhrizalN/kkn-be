import axios from "axios";
import React, { useEffect, useState } from "react";

const FloraDetail = ({ floraId }) => {
    const [flora, setFlora] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFloraDetail = async () => {
            try {
                const response = await axios.get(`/api/flora/${floraId}`);
                console.log("Flora Detail Response:", response.data);
                setFlora(response.data.data); // Akses data flora di dalam properti "data"
                setLoading(false);
            } catch (error) {
                console.error("Error fetching flora detail:", error);
                setLoading(false);
            }
        };

        fetchFloraDetail();
    }, [floraId]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!flora) {
        return <p>Flora not found.</p>;
    }

    return (
        <div style={{ padding: "16px" }}>
            <h1>{flora.local_name}</h1>
            <img
                src={flora.photo}
                alt={flora.local_name}
                style={{ width: "100%", borderRadius: "8px" }}
            />
            <h3><i>{flora.latin_name}</i></h3>
            <p>{flora.description}</p>
            <p><strong>Family:</strong> {flora.family}</p>
            <p><strong>Ekologi:</strong> {flora.ekologi}</p>
            <p><strong>Distribusi:</strong> {flora.distribusi}</p>
        </div>
    );
};

export default FloraDetail;