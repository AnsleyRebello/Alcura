import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import axios from "axios";
import "./FeedbackBarChart.css";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const FeedbackBarChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const fetchFeedbackData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/feedback-data");
        const fetchedData = response.data;

        const doctorNames = [...new Set(fetchedData.map((item) => item.doctor_name))];
        const ratings = ["extremely satisfied", "moderately satisfied", "not satisfied"];

        const datasets = ratings.map((rating) => ({
          label: rating,
          data: doctorNames.map(
            (doctor) =>
              fetchedData.find((item) => item.doctor_name === doctor && item.rating === rating)?.count || 0
          ),
          backgroundColor:
            rating === "extremely satisfied"
              ? "rgba(75, 192, 192, 0.7)"
              : rating === "moderately satisfied"
              ? "rgba(255, 206, 86, 0.7)"
              : "rgba(255, 99, 132, 0.7)",
        }));

        setChartData({
          labels: doctorNames,
          datasets: datasets,
        });
      } catch (err) {
        console.error("Error fetching feedback data:", err);
      }
    };

    fetchFeedbackData();
  }, []);

  return (
    <div className="bar-chart-container">
      <h2 className="bar-chart-title">Doctor Feedback Overview</h2>
      <Bar data={chartData} options={{ responsive: true, plugins: { legend: { position: "top" } } }} />
    </div>
  );
};

export default FeedbackBarChart;