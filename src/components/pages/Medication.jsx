import { useState } from "react";
import { FaVirus, FaVenusMars, FaBirthdayCake, FaGlobeAmericas, FaPrescriptionBottleAlt } from "react-icons/fa";

function Medication() {
  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [disease, setDisease] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setApiData(`
        <h2 class="text-xl font-bold text-indigo-700 mb-4">Recommended Medication</h2>
        <ul class="list-disc pl-5">
          <li><strong>Medication:</strong> Paracetamol 500mg</li>
          <li><strong>Dosage:</strong> 1 tablet every 6 hours</li>
          <li><strong>Duration:</strong> 5 days</li>
          <li><strong>Precautions:</strong> Avoid alcohol and stay hydrated</li>
        </ul>
      `);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-indigo-200 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8 relative">
        {/* Decorative Elements */}
        <div className="absolute top-[-50px] right-[-50px] w-[150px] h-[150px] bg-indigo-200 rounded-full opacity-50"></div>
        <div className="absolute bottom-[-50px] left-[-50px] w-[200px] h-[200px] bg-indigo-300 rounded-full opacity-50"></div>

        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Medication Recommendation
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Disease Input */}
          <div>
            <label htmlFor="disease" className="block text-sm font-medium text-gray-700 mb-2">
              <FaVirus className="inline-block text-indigo-500 mr-2" />
              Disease
            </label>
            <input
              id="disease"
              type="text"
              value={disease}
              onChange={(e) => setDisease(e.target.value)}
              placeholder="Enter disease"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              required
            />
          </div>

          {/* Gender Select */}
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
              <FaVenusMars className="inline-block text-indigo-500 mr-2" />
              Gender
            </label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Age Input */}
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
              <FaBirthdayCake className="inline-block text-indigo-500 mr-2" />
              Age
            </label>
            <input
              id="age"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter age"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              required
            />
          </div>

          {/* Country Input */}
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
              <FaGlobeAmericas className="inline-block text-indigo-500 mr-2" />
              Country
            </label>
            <input
              id="country"
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Enter country"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300"
          >
            <FaPrescriptionBottleAlt className="inline-block mr-2" />
            Get Recommendation
          </button>
        </form>

        {/* Loading Spinner */}
        {loading && (
          <div className="mt-6 flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-indigo-600"></div>
          </div>
        )}

        {/* API Data Display */}
        {!loading && apiData && (
          <div
            className="mt-6 p-4 bg-indigo-50 border border-indigo-300 rounded-lg shadow-sm"
            dangerouslySetInnerHTML={{ __html: apiData }}
          />
        )}
      </div>
    </div>
  );
}

export default Medication;