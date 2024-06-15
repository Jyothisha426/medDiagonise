import React, { useState, useEffect } from "react";
import Select from "react-select";
import Header from "../Header";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import "./index.css";

const NewHome = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [diseases, setDiseases] = useState([]);
  const [matchedDiseases, setMatchedDiseases] = useState([]);
  const [symptomOptions, setSymptomOptions] = useState([]);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const jwtToken = Cookies.get('jwt_token');

  useEffect(() => {
    if (jwtToken === undefined) {
      navigate('/register');
    }
  }, [jwtToken, navigate]);

  useEffect(() => {
    fetch("/diseases.json")
      .then((response) => response.json())
      .then((data) => {
        setDiseases(data.diseases);
        const allSymptoms = Array.from(
          new Set(data.diseases.flatMap((disease) => disease.symptoms))
        );
        setSymptomOptions(
          allSymptoms.map((symptom) => ({ label: symptom, value: symptom }))
        );
      });
  }, []);

  const handleSearch = () => {
    const selectedSymptomValues = selectedSymptoms.map((symptom) =>
      symptom.value.toLowerCase()
    );
    const matched = diseases.filter((disease) =>
      selectedSymptomValues.some((symptom) =>
        disease.symptoms.includes(symptom)
      )
    );
    if (matched.length === 0) {
      setError("No diseases match the given symptoms.");
    } else {
      setError("");
      setMatchedDiseases(matched);
    }
  };

  if (jwtToken === undefined) {
    return null;
  }

  return (
    <>
      <Header />
      <div className="app-container">
        <h1 className="heading">Disease Diagnosis</h1>
        <div className="input-container">
          <label htmlFor="symptoms">Enter symptoms:</label>
          <Select
            isMulti
            id="symptoms"
            options={symptomOptions}
            value={selectedSymptoms}
            onChange={setSelectedSymptoms}
            placeholder="Select symptoms"
          />
          <button onClick={handleSearch}>Submit Symptoms</button>
        </div>
        <div className="results-container">
          {error && <p>{error}</p>}
          {matchedDiseases.length > 0 ? (
            matchedDiseases.map((disease, index) => (
              <div key={index} className="disease-card">
                <h2>{disease.name}</h2>
                <p>
                  <strong>Disease Overview:</strong> {disease.description}
                </p>
                <p>
                  <strong>Warning Indicators:</strong> {disease.symptoms.join(", ")}
                </p>
                <p>
                  <strong>Medication:</strong> {disease.medication.join(", ")}
                </p>
              </div>
            ))
          ) : null}
        </div>
      </div>
    </>
  );
};

export default NewHome;
