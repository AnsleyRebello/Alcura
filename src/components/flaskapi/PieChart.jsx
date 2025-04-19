import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import axios from "axios";
import './PieChart.css'; // Import the CSS file

// Register chart components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: "Number of Patients Consulted",
        data: [],
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(153, 102, 255, 0.7)",
          "rgba(255, 159, 64, 0.7)",
        ],
        borderColor: "white",
        borderWidth: 1,
      },
    ],
  });

  const [error, setError] = useState(null);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Number of Appointments by Doctor",
      },
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/doctor-appointments");
        const fetchedData = response.data;

        const labels = fetchedData.map((item) => item.name);
        const appointmentCounts = fetchedData.map((item) => item.appointment_count);

        setData({
          labels: labels,
          datasets: [
            {
              label: "Number of Patients Consulted",
              data: appointmentCounts,
              backgroundColor: [
                "rgba(255, 99, 132, 0.7)",
                "rgba(54, 162, 235, 0.7)",
                "rgba(255, 206, 86, 0.7)",
                "rgba(75, 192, 192, 0.7)",
                "rgba(153, 102, 255, 0.7)",
                "rgba(255, 159, 64, 0.7)",
              ],
              borderColor: "white",
              borderWidth: 1,
            },
          ],
        });
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch data. Please try again later.");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="pie-chart-container">
      <h2 className="pie-chart-title">Appointments Overview</h2>
      {error && <p className="error">{error}</p>}
      <div className="pie-chart-wrapper">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default PieChart;