import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { FaHome, FaRobot, FaChartBar, FaPills } from "react-icons/fa";
import Home from "./components/pages/Home";
import Chatbot from "./components/pages/Chatbot";
import HealthAnalysis from "./components/pages/HealthAnalysis";
import Medication from "./components/pages/Medication";
import PieChart from "./components/flaskapi/PieChart";
import Transfer from "./components/flaskapi/Transfer";
import Appointment from "./components/flaskapi/Appointment";
import FeedbackBarChart from "./components/flaskapi/FeedbackBarChart";
import FeedbackForm from "./components/flaskapi/FeedbackForm";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
    <BrowserRouter>
      <header className="flex justify-between items-center px-4 py-3 bg-teal-600 text-white sticky top-0 z-10 shadow-md">
        <Link to='/'>
          <div className="flex items-center">
            <img src="/src/assets/logo.jpeg" alt="Healthify Logo" className="rounded-2xl h-8 w-8 mr-2" />
            <h1 className="text-2xl font-bold font-inter hover:text-teal-200">Alcura</h1>
          </div>
        </Link>
        <nav className="flex gap-6">
          <Link to="/" className="flex items-center hover:text-teal-200">
            <FaHome className="mr-1" /> Home
          </Link>
          <Link to="/chatbot" className="flex items-center hover:text-teal-200">
            <FaRobot className="mr-1" /> Chat
          </Link>
          <Link to="/analysis" className="flex items-center hover:text-teal-200">
            <FaChartBar className="mr-1" /> Analysis
          </Link>
          <Link to="/medication" className="flex items-center hover:text-teal-200">
            <FaPills className="mr-1" /> Medication
          </Link>
          <Link to="/doctor" className="flex items-center hover:text-teal-200">
            <FaChartBar className="mr-1" /> Doctor
          </Link>
          {/* <Link to="/appointment" className="flex items-center hover:text-teal-200">
            <FaChartBar className="mr-1" /> Appointment
          </Link> */}
          <Link to="/feedback" className="flex items-center hover:text-teal-200">
            <FaChartBar className="mr-1" /> Feedback
          </Link>
        </nav>
      </header> 

      <main className="flex-grow">
          

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/analysis" element={<HealthAnalysis />} />
          <Route path="/medication" element={<Medication />} />
          <Route path="/chart" element={<PieChart />} />
          <Route path="/doctor" element={<Transfer />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route path="/feedback-chart" element={<FeedbackBarChart />} />

        </Routes>
      </main>
      
    </BrowserRouter>
      <footer className="w-full border-t border-teal-300 py-2 text-center bg-teal-100">
        <p className="text-teal-800">© 2025 Alcura. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;