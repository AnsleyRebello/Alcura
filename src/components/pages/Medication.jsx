import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { FaVirus, FaVenusMars, FaBirthdayCake, FaGlobeAmericas, FaPrescriptionBottleAlt } from 'react-icons/fa';
// import tabletImage from '../../assets/tablet.png';

function App() {
  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [disease, setDisease] = useState("");
  const genAI = new GoogleGenerativeAI(
    "AIzaSyCJGOZLj-k3K7ZIWZFMSkoWoSxfb7vSwP8"
  );

  const fetchData = async () => {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const prompt = `You are a medical expert. Based on the following biodata: 
    Age: ${age}, Gender: ${gender}, Country: ${country}, Disease: ${disease}, 
    provide a detailed medication recommendation including dosage. give them within html with proper styling with tailwind css. write it as plain text without any markdown syntax.`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    setApiData(text);
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetchData();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-indigo-300">
      <div className="w-[800px] max-w-4xl mx-auto my-4 p-5 sm:p-6 md:p-8 bg-white rounded-xl shadow-xl">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-indigo-700 tracking-tight drop-shadow-md">
          Personalized Medication Recommendation
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-1">
            <label htmlFor="disease" className="text-base font-semibold text-gray-900 flex items-center">
              <FaVirus className="mr-2 text-indigo-500 text-xl" /> Disease
            </label>
            <input 
              id="disease"
              type="text" 
              value={disease} 
              onChange={(e) => setDisease(e.target.value)} 
              placeholder="Enter disease" 
              className="p-3 border-2 border-gray-200 rounded-lg focus:ring-3 focus:ring-indigo-400 focus:border-indigo-400 text-base transition duration-300 ease-in-out"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="gender" className="text-base font-semibold text-gray-900 flex items-center">
              <FaVenusMars className="mr-2 text-indigo-500 text-xl" /> Gender
            </label>
            <select 
              id="gender"
              value={gender} 
              onChange={(e) => setGender(e.target.value)} 
              className="p-3 border-2 border-gray-200 rounded-lg focus:ring-3 focus:ring-indigo-400 focus:border-indigo-400 text-base transition duration-300 ease-in-out"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="age" className="text-base font-semibold text-gray-900 flex items-center">
              <FaBirthdayCake className="mr-2 text-indigo-500 text-xl" /> Age
            </label>
            <input 
              id="age"
              type="text" 
              value={age} 
              onChange={(e) => setAge(e.target.value)} 
              placeholder="Enter age" 
              className="p-3 border-2 border-gray-200 rounded-lg focus:ring-3 focus:ring-indigo-400 focus:border-indigo-400 text-base transition duration-300 ease-in-out"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="country" className="text-base font-semibold text-gray-900 flex items-center">
              <FaGlobeAmericas className="mr-2 text-indigo-500 text-xl" /> Country
            </label>
            <input 
              id="country"
              type="text" 
              value={country} 
              onChange={(e) => setCountry(e.target.value)} 
              placeholder="Enter country" 
              className="p-3 border-2 border-gray-200 rounded-lg focus:ring-3 focus:ring-indigo-400 focus:border-indigo-400 text-base transition duration-300 ease-in-out"
            />
          </div>
          <button 
            type="submit" 
            className="p-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out font-bold shadow-lg flex items-center justify-center transform hover:scale-105"
          >
            <FaPrescriptionBottleAlt className="mr-2 text-xl" /> Get Recommendation
          </button>
        </form>
        {loading ? (
          <div className="mt-8 flex justify-center items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-indigo-600"></div>
          </div>
        ) : apiData ? (
          <div 
            className="mt-8 p-6 border-2 border-indigo-300 rounded-xl bg-white shadow-lg"
            dangerouslySetInnerHTML={{ __html: apiData.replace(/|/g, '') }}
          />
        ) : null}
      </div>
    </div>
  );
}

export default App;