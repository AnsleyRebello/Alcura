import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./Appointment.css";

function Appointment() {
    const location = useLocation();
    const navigate = useNavigate();
    const doctor = location.state?.doctor;

    // Redirect to Transfer page if doctor data is missing
    if (!doctor) {
        alert("No doctor details available. Redirecting to the Doctors Directory.");
        navigate("/");
        return null;
    }

    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        date: "",
        time: "",
        doctorName: doctor.name,
        patient_name: "",
        patient_no: "",
    });

    // Fetch appointments for the doctor
    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`http://localhost:5000/api/appoint?doctor=${doctor.name}`);
                setAppointments(response.data);
            } catch (err) {
                console.error("Error fetching appointments:", err);
                setError("Failed to fetch appointments. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchAppointments();
    }, [doctor.name]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/appoint", {
                name: doctor.name,
                date: formData.date,
                time: formData.time,
                patient_name: formData.patient_name,
                patient_no: formData.patient_no,
            });
            alert(response.data.message || "Appointment added successfully!");
            setFormData({ date: "", time: "", doctorName: doctor.name , patient_name: "", patient_no: "" });
            // Refresh appointments after adding a new one
            const updatedAppointments = await axios.get(`http://localhost:5000/api/appoint?doctor=${doctor.name}`);
            setAppointments(updatedAppointments.data);
        } catch (err) {
            console.error("Error adding appointment:", err);
            alert("Failed to add appointment. Please try again.");
        }
    };

    return (
        <div className="appointment-container">
            <h1 className="title">Appointments for Dr. {doctor.name}</h1>

            {loading && <p className="loading">Loading appointments...</p>}
            {error && <p className="error">{error}</p>}

            {!loading && !error && appointments.length === 0 && (
                <p className="no-appointments">No appointments available.</p>
            )}

            {!loading && !error && appointments.length > 0 && (
                <div className="appointments-list">
                    {appointments.map((appointment) => (
                        <div className="appointment-card" key={appointment.id}>
                        <p><strong>Date:</strong> {appointment.appointment_date}</p>
                        <p><strong>Time:</strong> {appointment.appointment_time}</p>
                        <p><strong>Doctor Name:</strong> {appointment.name}</p>
                        <p><strong>Patient</strong> {appointment.patient_name}</p>
                        <p><strong>Mobile-no:</strong> {appointment.patient_no}</p>
                    </div>
                    ))}
                </div>
            )}

            <h2 className="form-title">Add New Appointment</h2>
            <form className="appointment-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="doctorName">Doctor Name</label>
                    <input
                        type="text"
                        id="doctorName"
                        name="doctorName"
                        value={formData.doctorName}
                        readOnly
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="patient_name">Patient Name</label>
                    <input
                        type="text"
                        id="patient_name"
                        name="patient_name"
                        value={formData.patient_name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="patient_no">Patient No</label>
                    <input
                        type="text"
                        id="patient_no"
                        name="patient_no"
                        value={formData.patient_no}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="time">Time</label>
                    <input
                        type="time"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="submit-button">
                    Add Appointment
                </button>
            </form>
        </div>
    );
}

export default Appointment;