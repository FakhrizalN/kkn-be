import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FloraDetail = () => {
    const { id } = useParams();
    const [flora, setFlora] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFloraDetail = async () => {
            try {
                const response = await axios.get(`/api/flora/${id}`);
                setFlora(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching flora detail:", error);
                setLoading(false);
            }
        };

        fetchFloraDetail();
    }, [id]);

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