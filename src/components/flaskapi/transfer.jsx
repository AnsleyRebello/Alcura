import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Transfer.css";
import { useNavigate } from "react-router-dom";

function Transfer() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await axios.get("http://localhost:5000/api/data");
            setData(response.data);
        } catch (err) {
            console.error("Error fetching data:", err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const Appointment = (doctor) => {
        if (!doctor || !doctor.name) {
            alert("Invalid doctor details. Please try again.");
            return;
        }
        navigate("/appointment", { state: { doctor } });
    };

    return (
        <div className="transfer-container">
            <h1 className="title">Doctors Directory</h1>

            {error && <p className="error">An error occurred: {error}. Please try again later.</p>}
            {loading ? (
                <p className="loading">Fetching doctor data. Please wait...</p>
            ) : data && data.length > 0 ? (
                <div className="cards-container">
                    {data.map((doctor, index) => (
                        <div className="doctor-card" key={index}>
                            <h2>{doctor.name || "Unknown Name"}</h2>
                            <p><strong>Phone:</strong> {doctor.phone_num || "N/A"}</p>
                            <p><strong>Hospital:</strong> {doctor.hosp || "N/A"}</p>
                            <p><strong>Specialization:</strong> {doctor.spec || "N/A"}</p>
                            <p><strong>Disease:</strong> {doctor.disease || "N/A"}</p>
                            <p><strong>Email:</strong> {doctor.email || "N/A"}</p>
                            <p><strong>Experience:</strong> {doctor.experience || "N/A"} years</p>
                            <p><strong>Availability:</strong> {doctor.availability || "N/A"}</p>
                            <p><strong>Consultation Fee:</strong> ₹{doctor.consultation_fee || "N/A"}</p>
                            <p><strong>Rating:</strong> {doctor.rating || "N/A"} / 5</p>
                            <button
                                className="transfer-button"
                                onClick={() => Appointment(doctor)}
                            >
                                Appointment
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="no-data">No doctors available</p>
            )}
        </div>
    );
}

export default Transfer;