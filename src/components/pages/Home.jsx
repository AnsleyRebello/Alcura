import { Link } from 'react-router-dom';
import chatbotImage from '/src/assets/chatbot.jpeg';
import analysisImage from '/src/assets/analysis.jpeg';
import medicationImage from '/src/assets/medication.jpeg';
import Spline from '@splinetool/react-spline';
import { FaRobot, FaChartBar, FaPills } from 'react-icons/fa';
import { useRef } from 'react';
 // Import the PieChart component

const Home = () => {
  const mainContentRef = useRef(null);

  const handleSplineClick = () => {
    mainContentRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans bg-blue-50">
      <div className="h-screen relative">
        <Spline scene="https://prod.spline.design/Ab9tZ3Gg5ERNxvwT/scene.splinecode" onClick={handleSplineClick} />
      </div>
      <main ref={mainContentRef} className="container mx-auto px-4 py-8">
        <section className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold mb-4 text-blue-600">Welcome to Alcura!</h1>
          <p className="text-2xl text-blue-400 font-light">Your AI-Powered Health Assistant</p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-center mb-4">
              <img src={chatbotImage} alt="Chatbot" className="w-16 h-16 rounded-full mr-4" />
              <FaRobot className="text-4xl text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-center text-blue-600">Chat with AI</h3>
            <p className="mb-4 text-blue-800 text-center">Describe your symptoms and get instant feedback from our AI.</p>
            <Link to="/chatbot" className="block w-full bg-blue-400 text-white text-center py-3 rounded-lg hover:bg-blue-500 transition duration-300">Start Chat</Link>
          </div>

          <div className="bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-center mb-4">
              <img src={analysisImage} alt="Analysis" className="w-16 h-16 rounded-full mr-4" />
              <FaChartBar className="text-4xl text-green-400" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-center text-green-600">Health Analysis</h3>
            <p className="mb-4 text-green-800 text-center">Get a comprehensive analysis of your health based on your symptoms.</p>
            <Link to="/analysis" className="block w-full bg-green-400 text-white text-center py-3 rounded-lg hover:bg-green-500 transition duration-300">Start Analysis</Link>
          </div>

          <div className="bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-center mb-4">
              <img src={analysisImage} alt="Analysis" className="w-16 h-16 rounded-full mr-4" />
              <FaChartBar className="text-4xl text-green-400" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-center text-green-600">Doctor Analysis</h3>
            <p className="mb-4 text-green-800 text-center">Get a comprehensive analysis of your health based on your symptoms.</p>
            <Link to="/chart" className="block w-full bg-green-400 text-white text-center py-3 rounded-lg hover:bg-green-500 transition duration-300">View PieChart</Link> {/* Add this button */}
          </div>

          <div className="bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-center mb-4">
              <img src={medicationImage} alt="Medication" className="w-16 h-16 rounded-full mr-4" />
              <FaPills className="text-4xl text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-center text-purple-600">Medication Guide</h3>
            <p className="mb-4 text-purple-800 text-center">Receive personalized medication recommendations and dosage information.</p>
            <Link to="/medication" className="block w-full bg-purple-400 text-white text-center py-3 rounded-lg hover:bg-purple-500 transition duration-300">Get Recommendations</Link>
          </div>

          {/* Doctor Availability Section */}
          <div className="bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-center mb-4">
              <img src={analysisImage} alt="Doctor" className="w-16 h-16 rounded-full mr-4" />
              <FaChartBar className="text-4xl text-indigo-400" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-center text-indigo-600">Doctor Availability</h3>
            <p className="mb-4 text-indigo-800 text-center">Check available doctors based on your analysis and book an appointment.</p>
            <Link to="/doctor" className="block w-full bg-indigo-400 text-white text-center py-3 rounded-lg hover:bg-indigo-500 transition duration-300">View Doctors</Link>
            </div>

          {/* Doctor Feedback Section */}
          <div className="bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-center mb-4">
              <img src={analysisImage} alt="Doctor" className="w-16 h-16 rounded-full mr-4" />
              <FaChartBar className="text-4xl text-orange-400" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-center text-orange-600">Doctor Feedback</h3>
            <p className="mb-4 text-orange-800 text-center">Rate your doctor and view feedback statistics based on patient reviews.</p>
            <Link to="/feedback-chart" className="block w-full bg-orange-400 text-white text-center py-3 rounded-lg hover:bg-orange-500 transition duration-300">View BarChart</Link>
            </div>
    </div>


  
      </main>
    </div>
  );
};

export default Home;