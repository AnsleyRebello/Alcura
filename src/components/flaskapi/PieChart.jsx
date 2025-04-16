import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import axios from "axios"; // this does the job of fetching data from the backend

// Register chart components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const [data, setData] = useState({ // this usestate is used to set the data for the chart
    labels: [], // this is the labels for the chart
    datasets: [  // this is the datasets for the chart
      {
        label: "Number of Appointments", // this is the label for the chart
        data: [],  // this is the data for the chart
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

  // Fetch data from the backend
  useEffect(() => { // the useeffect hook is used to fetch data from the backend when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/doctor-appointments");
        const fetchedData = response.data;

        // Extract labels (doctor names) and data (appointment counts)
        const labels = fetchedData.map((item) => item.name);
        const appointmentCounts = fetchedData.map((item) => item.appointment_count);

        // Update chart data
        setData({
          labels: labels,
          datasets: [
            {
              label: "Number of Appointments",
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
    <div style={{ width: "400px", margin: "0 auto" }}>
      {error && <p className="error">{error}</p>}
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;