import { useEffect, useRef, useState } from "react";
import {
  getDiseaseAdvice,
  getAllDiseases,
  getSymptomsList,
} from "../../api/healthApi";
import Fuse from "fuse.js";
import ProgressBar from "../ProgressBar";
import Select from "react-select";
import { FaPlus, FaTimes, FaSearch, FaStethoscope, FaPrescriptionBottleAlt, FaClipboardList, FaUserMd, FaShieldAlt } from 'react-icons/fa';

function HealthAnalysis() {
  const [symptoms, setSymptoms] = useState([]);
  const [analysis, setAnalysis] = useState("");
  const [diseases, setDiseases] = useState([]);
  const [fuse, setFuse] = useState(null);
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [singleSymptom, setSingleSymptom] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    const fetchDiseasesAndSymptoms = async () => {
      const allDiseases = await getAllDiseases();
      setDiseases(allDiseases);

      const allSymptoms = await getSymptomsList();
      const fuseInstance = new Fuse(allSymptoms, {
        threshold: 0.3,
        distance: 100,
        minMatchCharLength: 1,
      });
      setFuse(fuseInstance);
      setOptions(
        allSymptoms.map((symptom) => ({ value: symptom, label: symptom }))
      );
    };

    fetchDiseasesAndSymptoms();
  }, []);

  const handleSymptomChange = (selectedOptions) => {
    const selectedSymptoms = selectedOptions
      ? selectedOptions.map((option) => option.value)
      : [];
    setSymptoms(selectedSymptoms);
  };

  const handleInputChange = (inputValue) => {
    setInputValue(inputValue);
  };

  const handleSingleSymptomChange = (e) => {
    setSingleSymptom(e.target.value);
  };

  const handleAddSingleSymptom = () => {
    if (singleSymptom && !symptoms.includes(singleSymptom)) {
      setSymptoms([...symptoms, singleSymptom]);
      console.log(symptoms);
      setSingleSymptom("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddSingleSymptom();
    }
  };

  const handleRemoveSymptom = (symptomToRemove) => {
    setSymptoms(symptoms.filter((symptom) => symptom !== symptomToRemove));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (symptoms.length === 0) {
      alert("Please enter symptoms before submitting.");
      return;
    }

    const results = getDiseaseAdvice(symptoms);
    setAnalysis(
      results.map((result, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-2xl font-bold mb-2 text-indigo-600">
            <FaStethoscope className="inline-block mr-2" />{result.disease}
          </h3>
          <h4 className="text-lg font-semibold mb-1 text-gray-700">
            <FaSearch className="inline-block mr-2" />Diagnosis
          </h4>
          <p className="text-sm mb-1">
            Tests Ordered: {result.diagnosis.testsOrdered.join(", ")}
          </p>
          <p className="text-sm mb-2">
            Confirmed By: {result.diagnosis.confirmedBy}
          </p>
          <h4 className="text-lg font-semibold mb-1 text-gray-700">
            <FaClipboardList className="inline-block mr-2" />Symptoms
          </h4>
          <ul className="list-disc list-inside mb-2">
            {result.symptoms.map((symptom, i) => (
              <li key={i} className="text-sm">
                {symptom}
              </li>
            ))}
          </ul>
          <h4 className="text-lg font-semibold mb-1 text-gray-700">
            <FaPrescriptionBottleAlt className="inline-block mr-2" />Prescriptions
          </h4>
          {result.prescriptions.map((prescription, i) => (
            <div key={i} className="mb-2">
              <p className="text-sm font-medium">Name: {prescription.name}</p>
              <p className="text-sm">Dosage: {prescription.dosage}</p>
              <p className="text-sm">Purpose: {prescription.purpose}</p>
            </div>
          ))}
          <h4 className="text-lg font-semibold mb-1 text-gray-700">
            <FaUserMd className="inline-block mr-2" />Treatment Plan
          </h4>
          <p className="text-sm mb-1">
            Lifestyle Changes:{" "}
            {result.treatmentPlan.lifestyleChanges.join(", ")}
          </p>
          <p className="text-sm mb-2">
            Therapies: {result.treatmentPlan.therapies.join(", ")}
          </p>
          <h4 className="text-lg font-semibold mb-1 text-gray-700">
            <FaUserMd className="inline-block mr-2" />Advice
          </h4>
          <p className="text-sm mb-2">{result.advice}</p>
          <h4 className="text-lg font-semibold mb-1 text-gray-700">
            <FaClipboardList className="inline-block mr-2" />Follow-up Plan
          </h4>
          <p className="text-sm mb-2">{result.followUpPlan}</p>
          <h4 className="text-lg font-semibold mb-1 text-gray-700">
            <FaShieldAlt className="inline-block mr-2" />Preventive Measures
          </h4>
          <ul className="list-disc list-inside mb-2">
            {result.preventiveMeasures.map((measure, i) => (
              <li key={i} className="text-sm">
                {measure}
              </li>
            ))}
          </ul>
          <ProgressBar percentage={result.matchPercentage} />
        </div>
      ))
    );
  };

  const firstHalf = diseases.slice(0, Math.ceil(diseases.length / 2));
  const secondHalf = diseases.slice(Math.ceil(diseases.length / 2));

  return (
    <div className="p-6 bg-white shadow-md rounded-lg relative">
      <h2 className="text-3xl font-bold mb-6 text-indigo-700">
        <FaStethoscope className="inline-block mr-2" />Health Analysis
      </h2>
      <form onSubmit={handleSubmit} className="mb-6">
        <Select
          isMulti
          options={options}
          value={symptoms.map((symptom) => ({
            value: symptom,
            label: symptom,
          }))}
          onChange={handleSymptomChange}
          onInputChange={handleInputChange}
          inputValue={inputValue}
          placeholder="Select your symptoms..."
          className="mb-4"
          filterOption={(option, input) => {
            if (input) {
              return fuse
                .search(input)
                .some((result) => result.item === option.value);
            }
            return true;
          }}
        />
        <div className="flex mb-4">
          <input
            type="text"
            value={singleSymptom}
            onChange={handleSingleSymptomChange}
            onKeyPress={handleKeyPress}
            placeholder="Enter a single symptom"
            className="flex-grow mr-2 p-2 border border-gray-300 rounded-lg"
          />
          <button
            type="button"
            onClick={handleAddSingleSymptom}
            className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg"
          >
            <FaPlus className="inline-block mr-2" />Add Symptom
          </button>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2 text-gray-700">
            <FaClipboardList className="inline-block mr-2" />Added Symptoms:
          </h4>
          <ul className="list-disc list-inside">
            {symptoms.map((symptom, index) => (
              <li
                key={index}
                className="flex items-center justify-between mb-2 bg-gray-100 rounded-lg p-2"
              >
                <span className="text-gray-800">{symptom}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveSymptom(symptom)}
                  className="text-red-500 hover:text-red-700 focus:outline-none"
                >
                  <FaTimes />
                </button>
              </li>
            ))}
          </ul>
        </div>
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg text-lg font-semibold transition duration-300 ease-in-out"
        >
          <FaSearch className="inline-block mr-2" />Analyze Symptoms
        </button>
      </form>
      {analysis && (
        <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
          <h3 className="text-2xl font-bold mb-4 text-indigo-600">
            <FaClipboardList className="inline-block mr-2" />Analysis Result:
          </h3>
          <div className="text-lg text-gray-700 whitespace-pre-wrap">
            {analysis}
          </div>
        </div>
      )}
      <div className="mt-8">
        <center className="text-2xl font-bold mb-4 text-indigo-600">
          <FaStethoscope className="inline-block mr-2" />Possible Diseases
        </center>
        <div className="overflow-hidden">
      {/* First slider (Left to Right) */}
      <ul className="flex space-x-4 animate-slideLeft">
        {firstHalf.map((disease, index) => (
          <li key={index} className="text-lg text-gray-700 whitespace-nowrap">
            {disease} {index < firstHalf.length - 1 && <span>|</span>}
          </li>
        ))}
      </ul>

      {/* Second slider (Right to Left) */}
      <ul className="flex space-x-4 animate-slideRight mt-4">
        {secondHalf.map((disease, index) => (
          <li key={index} className="text-lg text-gray-700 whitespace-nowrap">
            {disease} {index < secondHalf.length - 1 && <span>|</span>}
          </li>
        ))}
      </ul>
    </div>
      </div>
    </div>
  );
}

export default HealthAnalysis;
