import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FeedbackForm.css";

const FeedbackForm = () => {
  const [doctors, setDoctors] = useState([]);
  const [formData, setFormData] = useState({
    doctor_name: "",
    patient_no: "",
    rating: "",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch the updated list of doctors from the database
    const fetchDoctors = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/doctor-appointments", {
          headers: {
            "Cache-Control": "no-cache", // Ensure fresh data is fetched
          },
        });
        setDoctors(response.data.map((doctor) => doctor.name));
      } catch (err) {
        console.error("Error fetching doctors:", err);
      }
    };

    fetchDoctors();
  }, []); // Runs every time the component is mounted

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/feedback", formData);
      setMessage(response.data.message || "Feedback submitted successfully!");
      setFormData({ doctor_name: "", patient_no: "", rating: "" });

      // Re-fetch the updated list of doctors after feedback submission
      const updatedDoctors = await axios.get("http://localhost:5000/api/doctor-appointments", {
        headers: {
          "Cache-Control": "no-cache", // Ensure fresh data is fetched
        },
      });
      setDoctors(updatedDoctors.data.map((doctor) => doctor.name));
    } catch (err) {
      console.error("Error submitting feedback:", err);
      setMessage("Failed to submit feedback. Please try again.");
    }
  };

  return (
    <div className="feedback-form-container">
      <h2 className="feedback-form-title">Submit Feedback</h2>
      {message && <p className="feedback-message">{message}</p>}
      <form className="feedback-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="doctor_name">Doctor Name</label>
          <select
            id="doctor_name"
            name="doctor_name"
            value={formData.doctor_name}
            onChange={handleChange}
            required
          >
            <option value="">Select a doctor</option>
            {doctors.map((doctor, index) => (
              <option key={index} value={doctor}>
                {doctor}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="patient_no">Patient Number</label>
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
          <label htmlFor="rating">Rating</label>
          <select
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            required
          >
            <option value="">Select a rating</option>
            <option value="extremely satisfied">Extremely Satisfied</option>
            <option value="moderately satisfied">Moderately Satisfied</option>
            <option value="not satisfied">Not Satisfied</option>
          </select>
        </div>
        <button type="submit" className="submit-button">
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;