// src/api/healthApi.js

const diseaseData = {
  "fever, cough, fatigue, runny nose, sore throat, sneezing, mild headache, cold": {
    disease: "Common Cold",
    diagnosis: {
      testsOrdered: ["None typically required, unless symptoms persist"],
      confirmedBy: "Based on reported symptoms and physical examination"
    },
    symptoms: [
      "Fever",
      "Cough",
      "Fatigue",
      "Runny nose",
      "Sore throat",
      "Sneezing",
      "Mild headache"
    ],
    prescriptions: [
      {
        name: "Paracetamol",
        dosage: "500mg every 6 hours",
        purpose: "Reduce fever and relieve body pain"
      },
      {
        name: "Cough Syrup",
        dosage: "10ml twice a day",
        purpose: "Suppress cough"
      }
    ],
    treatmentPlan: {
      lifestyleChanges: [
        "Increase fluid intake (water, herbal teas)",
        "Rest adequately"
      ],
      therapies: ["None required"]
    },
    advice: "Rest, stay hydrated, take over-the-counter cold medications, and avoid close contact with others to prevent spreading the virus.",
    followUpPlan: "Monitor symptoms for worsening. Seek medical advice if symptoms persist for more than 10 days.",
    preventiveMeasures: ["Wash hands frequently", "Avoid contact with infected individuals", "Stay warm in cold weather"]
  },

  "severe headache, sensitivity to light, nausea, neck stiffness, blurred vision": {
    disease: "Migraine",
    diagnosis: {
      testsOrdered: ["Neurological examination", "CT scan (in severe cases)"],
      confirmedBy: "History of symptoms and physical examination"
    },
    symptoms: [
      "Severe headache (typically one-sided)",
      "Sensitivity to light and sound",
      "Nausea and vomiting",
      "Neck stiffness",
      "Blurred vision",
      "Aura (in some cases)",
      "Dizziness"
    ],
    prescriptions: [
      {
        name: "Ibuprofen",
        dosage: "400mg every 6 hours",
        purpose: "Relieve headache pain"
      },
      {
        name: "Sumatriptan",
        dosage: "50mg as needed",
        purpose: "Alleviate migraine symptoms"
      }
    ],
    treatmentPlan: {
      lifestyleChanges: [
        "Reduce stress",
        "Limit caffeine intake",
        "Maintain a consistent sleep schedule"
      ],
      therapies: ["Cognitive behavioral therapy (CBT) for stress management"]
    },
    advice: "Stay in a dark, quiet room during a migraine attack, and apply cold compresses if needed.",
    followUpPlan: "Consult a doctor if headaches become more frequent or severe.",
    preventiveMeasures: ["Avoid migraine triggers (e.g., stress, certain foods)", "Practice relaxation techniques"]
  },

  "high fever, chills, nausea, vomiting, diarrhea, muscle pain, fatigue": {
    disease: "Influenza (Flu)",
    diagnosis: {
      testsOrdered: ["Rapid flu test", "Nasal or throat swab"],
      confirmedBy: "Physical examination and test results"
    },
    symptoms: [
      "High fever",
      "Chills",
      "Nausea and vomiting",
      "Diarrhea",
      "Muscle pain",
      "Fatigue",
      "Sore throat",
      "Cough",
      "Headache",
      "Runny nose"
    ],
    prescriptions: [
      {
        name: "Oseltamivir",
        dosage: "75mg twice a day for 5 days",
        purpose: "Antiviral to reduce flu severity"
      },
      {
        name: "Acetaminophen",
        dosage: "500mg every 6 hours",
        purpose: "Reduce fever and relieve pain"
      }
    ],
    treatmentPlan: {
      lifestyleChanges: [
        "Rest in bed",
        "Increase fluid intake",
        "Avoid contact with others to prevent spreading the flu"
      ],
      therapies: ["None required"]
    },
    advice: "Get plenty of rest, drink fluids, and avoid contact with others to prevent spreading the virus.",
    followUpPlan: "Seek medical attention if symptoms worsen or if there is difficulty breathing.",
    preventiveMeasures: ["Annual flu vaccination", "Hand hygiene", "Avoid close contact with infected individuals"]
  },

  "fever, rash, joint pain, red eyes, muscle pain, headache": {
    disease: "Zika Virus",
    diagnosis: {
      testsOrdered: ["Blood test", "Urine test"],
      confirmedBy: "Lab test results"
    },
    symptoms: [
      "Fever",
      "Rash",
      "Joint pain",
      "Red eyes",
      "Muscle pain",
      "Headache"
    ],
    prescriptions: [
      {
        name: "Paracetamol",
        dosage: "500mg every 6 hours",
        purpose: "Reduce fever and relieve pain"
      }
    ],
    treatmentPlan: {
      lifestyleChanges: [
        "Stay hydrated",
        "Rest adequately"
      ],
      therapies: ["None required"]
    },
    advice: "Avoid mosquito bites, rest, and stay hydrated.",
    followUpPlan: "Monitor symptoms and consult a doctor if there is worsening or additional symptoms.",
    preventiveMeasures: ["Use mosquito repellents", "Wear long sleeves and pants", "Sleep under mosquito nets"]
  },

  "persistent cough, night sweats, fatigue, weight loss, fever, chest pain, coughing up blood": {
    disease: "Tuberculosis",
    diagnosis: {
      testsOrdered: ["Sputum test", "Chest X-ray", "TB skin test"],
      confirmedBy: "Sputum culture and imaging results"
    },
    symptoms: [
      "Persistent cough",
      "Night sweats",
      "Fatigue",
      "Weight loss",
      "Fever",
      "Chest pain",
      "Coughing up blood"
    ],
    prescriptions: [
      {
        name: "Rifampin",
        dosage: "600mg once daily",
        purpose: "Antibiotic to kill TB bacteria"
      },
      {
        name: "Isoniazid",
        dosage: "300mg once daily",
        purpose: "Antibiotic for TB treatment"
      }
    ],
    treatmentPlan: {
      lifestyleChanges: [
        "Improve nutrition",
        "Avoid alcohol"
      ],
      therapies: ["Long-term antibiotic therapy"]
    },
    advice: "Take the full course of antibiotics, rest, and maintain proper nutrition.",
    followUpPlan: "Regular follow-up to monitor treatment response and side effects.",
    preventiveMeasures: ["BCG vaccination", "Avoid contact with infected individuals", "Wear a mask in crowded places"]
  },

  "frequent urination, increased thirst, unexplained weight loss, blurred vision, fatigue": {
    disease: "Type 1 Diabetes",
    diagnosis: {
      testsOrdered: ["Blood glucose test", "HbA1c test"],
      confirmedBy: "Blood test results"
    },
    symptoms: [
      "Frequent urination",
      "Increased thirst",
      "Unexplained weight loss",
      "Blurred vision",
      "Fatigue"
    ],
    prescriptions: [
      {
        name: "Insulin",
        dosage: "Individualized based on blood glucose levels",
        purpose: "Manage blood sugar levels"
      }
    ],
    treatmentPlan: {
      lifestyleChanges: [
        "Monitor blood sugar regularly",
        "Follow a diabetes-friendly diet"
      ],
      therapies: ["Insulin therapy"]
    },
    advice: "Monitor blood sugar, follow a healthy diet, and exercise regularly.",
    followUpPlan: "Regular check-ups with an endocrinologist.",
    preventiveMeasures: ["There is no known prevention for Type 1 Diabetes."]
  },

  "high blood sugar, frequent urination, increased thirst, slow-healing wounds, blurred vision": {
    disease: "Type 2 Diabetes",
    diagnosis: {
      testsOrdered: ["Blood glucose test", "HbA1c test"],
      confirmedBy: "Blood test results"
    },
    symptoms: [
      "High blood sugar",
      "Frequent urination",
      "Increased thirst",
      "Slow-healing wounds",
      "Blurred vision"
    ],
    prescriptions: [
      {
        name: "Metformin",
        dosage: "500mg twice daily",
        purpose: "Control blood sugar levels"
      }
    ],
    treatmentPlan: {
      lifestyleChanges: [
        "Adopt a healthy diet",
        "Engage in regular physical activity"
      ],
      therapies: ["Oral medications and lifestyle management"]
    },
    advice: "Maintain a balanced diet, exercise regularly, and monitor blood sugar levels.",
    followUpPlan: "Regular blood sugar monitoring and periodic HbA1c testing.",
    preventiveMeasures: ["Maintain a healthy weight", "Exercise regularly", "Limit sugar intake"]
  },

  "diarrhea, stomach cramps, nausea, vomiting, fever, headache": {
    disease: "Food Poisoning",
    diagnosis: {
      testsOrdered: ["Stool sample", "Blood test (in severe cases)"],
      confirmedBy: "Reported symptoms and stool culture"
    },
    symptoms: [
      "Diarrhea",
      "Stomach cramps",
      "Nausea",
      "Vomiting",
      "Fever",
      "Headache"
    ],
    prescriptions: [
      {
        name: "Oral rehydration salts (ORS)",
        dosage: "As needed to prevent dehydration",
        purpose: "Replenish fluids and electrolytes"
      }
    ],
    treatmentPlan: {
      lifestyleChanges: [
        "Drink plenty of fluids",
        "Avoid solid food until symptoms improve"
      ],
      therapies: ["Fluid therapy in severe cases"]
    },
    advice: "Stay hydrated, rest, and eat bland foods once nausea subsides.",
    followUpPlan: "Seek medical attention if symptoms persist or worsen.",
    preventiveMeasures: ["Practice food hygiene", "Avoid undercooked food", "Wash hands frequently"]
  },

  "abdominal pain, bloating, diarrhea, weight loss, fatigue, malabsorption": {
    disease: "Celiac Disease",
    diagnosis: {
      testsOrdered: ["Blood test for antibodies", "Endoscopy with biopsy"],
      confirmedBy: "Biopsy results"
    },
    symptoms: [
      "Abdominal pain",
      "Bloating",
      "Diarrhea",
      "Weight loss",
      "Fatigue",
      "Malabsorption"
    ],
    prescriptions: [
      {
        name: "Gluten-free diet",
        dosage: "Lifelong",
        purpose: "Prevent symptoms and complications"
      }
    ],
    treatmentPlan: {
      lifestyleChanges: [
        "Adopt a strict gluten-free diet",
        "Monitor nutritional intake"
      ],
      therapies: ["None required if gluten is avoided"]
    },
    advice: "Strictly avoid gluten, and regularly consult a nutritionist.",
    followUpPlan: "Annual check-ups for nutritional deficiencies and symptom monitoring.",
    preventiveMeasures: ["Avoid gluten-containing foods and products"]
  },

  "shortness of breath, chest pain, coughing (sometimes with mucus), wheezing, fatigue": {
    disease: "Chronic Obstructive Pulmonary Disease (COPD)",
    diagnosis: {
      testsOrdered: ["Pulmonary function test", "Chest X-ray", "CT scan"],
      confirmedBy: "Lung function tests and imaging"
    },
    symptoms: [
      "Shortness of breath",
      "Chest pain",
      "Coughing (sometimes with mucus)",
      "Wheezing",
      "Fatigue"
    ],
    prescriptions: [
      {
        name: "Albuterol (inhaler)",
        dosage: "As needed",
        purpose: "Open airways and improve breathing"
      },
      {
        name: "Prednisone",
        dosage: "5mg once daily",
        purpose: "Reduce inflammation in the lungs"
      }
    ],
    treatmentPlan: {
      lifestyleChanges: [
        "Quit smoking",
        "Avoid exposure to lung irritants"
      ],
      therapies: ["Pulmonary rehabilitation"]
    },
    advice: "Quit smoking, take medications as prescribed, and participate in pulmonary rehabilitation.",
    followUpPlan: "Regular lung function tests and monitoring.",
    preventiveMeasures: ["Avoid smoking", "Use air purifiers to reduce lung irritants", "Get vaccinated against respiratory infections"]
  },
  "fever, fatigue, swollen lymph nodes, sore throat, rash, muscle aches": {
    disease: "Mononucleosis (Mono)",
    diagnosis: {
      testsOrdered: ["Monospot test", "Complete blood count (CBC)", "EBV antibody test"],
      confirmedBy: "Blood test results and symptoms"
    },
    symptoms: [
      "Fever",
      "Fatigue",
      "Swollen lymph nodes",
      "Sore throat",
      "Rash",
      "Muscle aches"
    ],
    prescriptions: [
      {
        name: "Acetaminophen",
        dosage: "500mg every 6 hours",
        purpose: "Reduce fever and relieve pain"
      }
    ],
    treatmentPlan: {
      lifestyleChanges: [
        "Increase fluid intake",
        "Get plenty of rest"
      ],
      therapies: ["None required"]
    },
    advice: "Rest, stay hydrated, and avoid contact sports to prevent spleen rupture.",
    followUpPlan: "Monitor for any worsening of symptoms, particularly abdominal pain.",
    preventiveMeasures: ["Avoid sharing utensils or drinks with infected individuals", "Practice good hygiene"]
  },

  "sudden weakness, facial droop, arm numbness, difficulty speaking, vision problems, dizziness": {
    disease: "Stroke",
    diagnosis: {
      testsOrdered: ["CT scan", "MRI", "Carotid ultrasound", "Blood tests"],
      confirmedBy: "Imaging results"
    },
    symptoms: [
      "Sudden weakness (usually one side of the body)",
      "Facial droop",
      "Arm numbness",
      "Difficulty speaking or understanding speech",
      "Vision problems",
      "Dizziness"
    ],
    prescriptions: [
      {
        name: "Aspirin",
        dosage: "81mg daily",
        purpose: "Prevent blood clots"
      },
      {
        name: "Clopidogrel",
        dosage: "75mg once daily",
        purpose: "Prevent further stroke"
      }
    ],
    treatmentPlan: {
      lifestyleChanges: [
        "Adopt a heart-healthy diet",
        "Exercise regularly",
        "Quit smoking"
      ],
      therapies: ["Physical therapy", "Speech therapy"]
    },
    advice: "Seek immediate medical attention at the first sign of a stroke (FAST: Face, Arms, Speech, Time).",
    followUpPlan: "Regular follow-up with a neurologist and monitoring for risk factors like hypertension.",
    preventiveMeasures: ["Control blood pressure", "Quit smoking", "Maintain a healthy diet and weight"]
  },

  "itchy red spots, fever, fatigue, headache, loss of appetite, blister-like rash": {
    disease: "Chickenpox",
    diagnosis: {
      testsOrdered: ["Physical examination"],
      confirmedBy: "Visual diagnosis of rash"
    },
    symptoms: [
      "Itchy red spots",
      "Fever",
      "Fatigue",
      "Headache",
      "Loss of appetite",
      "Blister-like rash"
    ],
    prescriptions: [
      {
        name: "Calamine lotion",
        dosage: "Apply as needed",
        purpose: "Soothe itching"
      },
      {
        name: "Acetaminophen",
        dosage: "500mg every 6 hours",
        purpose: "Reduce fever"
      }
    ],
    treatmentPlan: {
      lifestyleChanges: [
        "Keep skin cool",
        "Avoid scratching to prevent infection"
      ],
      therapies: ["None required"]
    },
    advice: "Stay home, avoid scratching, and apply cool compresses for relief.",
    followUpPlan: "Monitor for any signs of secondary bacterial infection.",
    preventiveMeasures: ["Varicella vaccination", "Avoid contact with infected individuals"]
  },

  "dry cough, chest pain, fever, difficulty breathing, fatigue, shortness of breath": {
    disease: "Pneumonia",
    diagnosis: {
      testsOrdered: ["Chest X-ray", "Sputum culture", "Blood test"],
      confirmedBy: "Chest imaging and lab results"
    },
    symptoms: [
      "Dry cough",
      "Chest pain",
      "Fever",
      "Difficulty breathing",
      "Fatigue",
      "Shortness of breath"
    ],
    prescriptions: [
      {
        name: "Amoxicillin",
        dosage: "500mg three times daily",
        purpose: "Treat bacterial pneumonia"
      },
      {
        name: "Cough suppressant",
        dosage: "10ml twice daily",
        purpose: "Relieve persistent cough"
      }
    ],
    treatmentPlan: {
      lifestyleChanges: [
        "Stay hydrated",
        "Rest adequately"
      ],
      therapies: ["Oxygen therapy (if severe)"]
    },
    advice: "Take antibiotics as prescribed and monitor for any worsening of symptoms.",
    followUpPlan: "Follow up with a chest X-ray to ensure resolution of the infection.",
    preventiveMeasures: ["Pneumococcal vaccination", "Quit smoking", "Practice good hygiene"]
  },

  "high fever, swollen painful joints, rash, muscle pain, nausea, vomiting, fatigue": {
    disease: "Dengue Fever",
    diagnosis: {
      testsOrdered: ["Blood test for dengue antibodies"],
      confirmedBy: "Lab test results"
    },
    symptoms: [
      "High fever",
      "Swollen painful joints",
      "Rash",
      "Muscle pain",
      "Nausea",
      "Vomiting",
      "Fatigue"
    ],
    prescriptions: [
      {
        name: "Acetaminophen",
        dosage: "500mg every 6 hours",
        purpose: "Reduce fever and relieve pain"
      }
    ],
    treatmentPlan: {
      lifestyleChanges: [
        "Stay hydrated",
        "Rest adequately"
      ],
      therapies: ["None required"]
    },
    advice: "Avoid mosquito bites, rest, and stay hydrated.",
    followUpPlan: "Monitor for warning signs such as bleeding or severe abdominal pain, and seek medical attention if present.",
    preventiveMeasures: ["Use mosquito repellent", "Eliminate standing water", "Wear long sleeves"]
  },

  "fever, chills, headache, muscle pain, vomiting, fatigue, diarrhea": {
    disease: "Malaria",
    diagnosis: {
      testsOrdered: ["Blood smear test", "Rapid diagnostic test (RDT)"],
      confirmedBy: "Lab test results"
    },
    symptoms: [
      "Fever",
      "Chills",
      "Headache",
      "Muscle pain",
      "Vomiting",
      "Fatigue",
      "Diarrhea"
    ],
    prescriptions: [
      {
        name: "Artemether-lumefantrine",
        dosage: "80mg/480mg twice daily for 3 days",
        purpose: "Treat malaria infection"
      }
    ],
    treatmentPlan: {
      lifestyleChanges: [
        "Stay hydrated",
        "Rest adequately"
      ],
      therapies: ["None required"]
    },
    advice: "Take the full course of antimalarial medication and avoid mosquito bites.",
    followUpPlan: "Follow up with blood tests to ensure complete clearance of the parasite.",
    preventiveMeasures: ["Use mosquito nets", "Take antimalarial prophylaxis", "Avoid outdoor activities at dusk and dawn"]
  },

  "severe abdominal pain, bloating, diarrhea, constipation, gas, cramping": {
    disease: "Irritable Bowel Syndrome (IBS)",
    diagnosis: {
      testsOrdered: ["Colonoscopy (if needed)", "Stool test"],
      confirmedBy: "Exclusion of other conditions"
    },
    symptoms: [
      "Severe abdominal pain",
      "Bloating",
      "Diarrhea",
      "Constipation",
      "Gas",
      "Cramping"
    ],
    prescriptions: [
      {
        name: "Loperamide",
        dosage: "2mg as needed",
        purpose: "Reduce diarrhea"
      },
      {
        name: "Peppermint oil capsules",
        dosage: "1-2 capsules daily",
        purpose: "Relieve abdominal discomfort"
      }
    ],
    treatmentPlan: {
      lifestyleChanges: [
        "Increase dietary fiber intake",
        "Identify and avoid trigger foods"
      ],
      therapies: ["Cognitive behavioral therapy (CBT) for stress management"]
    },
    advice: "Maintain a high-fiber diet, manage stress, and track food triggers.",
    followUpPlan: "Regular follow-ups to monitor symptoms and adjust treatment as needed.",
    preventiveMeasures: ["Adopt a balanced diet", "Manage stress", "Stay hydrated"]
  },
  "chronic cough, shortness of breath, wheezing, chest tightness": {
      "disease": "Asthma",
      "diagnosis": {
        "testsOrdered": ["Spirometry", "Peak flow measurement", "Chest X-ray"],
        "confirmedBy": "Pulmonary function test results"
      },
      "symptoms": [
        "Chronic cough",
        "Shortness of breath",
        "Wheezing",
        "Chest tightness"
      ],
      "prescriptions": [
        {
          "name": "Albuterol inhaler",
          "dosage": "As needed",
          "purpose": "Relieve acute asthma symptoms"
        },
        {
          "name": "Inhaled corticosteroids",
          "dosage": "As prescribed",
          "purpose": "Reduce inflammation and prevent attacks"
        }
      ],
      "treatmentPlan": {
        "lifestyleChanges": [
          "Avoid asthma triggers",
          "Maintain a healthy weight"
        ],
        "therapies": ["Allergy management"]
      },
      "advice": "Carry your inhaler at all times and follow your asthma action plan.",
      "followUpPlan": "Regular follow-ups to adjust medications as needed.",
      "preventiveMeasures": ["Avoid allergens", "Get vaccinated against flu and pneumonia"]
    },
  
    "itchy eyes, sneezing, runny nose, nasal congestion": {
      "disease": "Allergic Rhinitis",
      "diagnosis": {
        "testsOrdered": ["Allergy skin tests", "Blood tests"],
        "confirmedBy": "Symptom history and allergy testing"
      },
      "symptoms": [
        "Itchy eyes",
        "Sneezing",
        "Runny nose",
        "Nasal congestion"
      ],
      "prescriptions": [
        {
          "name": "Antihistamines (e.g., Cetirizine)",
          "dosage": "10mg once daily",
          "purpose": "Relieve allergy symptoms"
        },
        {
          "name": "Nasal corticosteroids",
          "dosage": "As prescribed",
          "purpose": "Reduce nasal inflammation"
        }
      ],
      "treatmentPlan": {
        "lifestyleChanges": [
          "Avoid known allergens",
          "Keep windows closed during pollen season"
        ],
        "therapies": ["Allergy immunotherapy if needed"]
      },
      "advice": "Use saline nasal sprays for symptom relief and keep indoor air clean.",
      "followUpPlan": "Regular follow-ups to adjust allergy management.",
      "preventiveMeasures": ["Avoid triggers", "Consider air purifiers"]
    },
  
    "extreme thirst, frequent urination, fatigue, blurred vision": {
      "disease": "Diabetes Mellitus",
      "diagnosis": {
        "testsOrdered": ["Fasting blood glucose test", "HbA1c test"],
        "confirmedBy": "Lab test results"
      },
      "symptoms": [
        "Extreme thirst",
        "Frequent urination",
        "Fatigue",
        "Blurred vision"
      ],
      "prescriptions": [
        {
          "name": "Metformin",
          "dosage": "500mg twice daily",
          "purpose": "Control blood sugar levels"
        }
      ],
      "treatmentPlan": {
        "lifestyleChanges": [
          "Follow a balanced diet",
          "Increase physical activity"
        ],
        "therapies": ["Diabetes education and management"]
      },
      "advice": "Monitor blood sugar levels regularly and follow dietary guidelines.",
      "followUpPlan": "Regular follow-ups to monitor HbA1c levels.",
      "preventiveMeasures": ["Maintain a healthy weight", "Regular exercise"]
    },
  
    "chest pain, heart palpitations, shortness of breath, sweating": {
      "disease": "Myocardial Infarction (Heart Attack)",
      "diagnosis": {
        "testsOrdered": ["ECG", "Cardiac enzyme tests", "Coronary angiography"],
        "confirmedBy": "ECG and enzyme test results"
      },
      "symptoms": [
        "Chest pain",
        "Heart palpitations",
        "Shortness of breath",
        "Sweating"
      ],
      "prescriptions": [
        {
          "name": "Aspirin",
          "dosage": "325mg chewable at onset",
          "purpose": "Reduce blood clotting"
        },
        {
          "name": "Beta-blockers",
          "dosage": "As prescribed",
          "purpose": "Reduce heart workload"
        }
      ],
      "treatmentPlan": {
        "lifestyleChanges": [
          "Follow a heart-healthy diet",
          "Quit smoking"
        ],
        "therapies": ["Cardiac rehabilitation"]
      },
      "advice": "Seek emergency medical attention at the first sign of chest pain.",
      "followUpPlan": "Regular cardiology follow-ups to monitor heart health.",
      "preventiveMeasures": ["Control cholesterol", "Maintain a healthy weight"]
    },
  
    "joint pain, stiffness, swelling, fatigue": {
      "disease": "Rheumatoid Arthritis",
      "diagnosis": {
        "testsOrdered": ["Rheumatoid factor test", "Anti-CCP antibody test", "X-rays"],
        "confirmedBy": "Lab test results and clinical evaluation"
      },
      "symptoms": [
        "Joint pain",
        "Stiffness",
        "Swelling",
        "Fatigue"
      ],
      "prescriptions": [
        {
          "name": "Methotrexate",
          "dosage": "7.5mg weekly",
          "purpose": "Reduce inflammation and slow disease progression"
        },
        {
          "name": "NSAIDs (e.g., Ibuprofen)",
          "dosage": "As needed",
          "purpose": "Relieve pain and inflammation"
        }
      ],
      "treatmentPlan": {
        "lifestyleChanges": [
          "Engage in low-impact exercises",
          "Maintain a healthy weight"
        ],
        "therapies": ["Physical therapy"]
      },
      "advice": "Manage stress and keep joints active without overexertion.",
      "followUpPlan": "Regular rheumatology follow-ups to monitor disease activity.",
      "preventiveMeasures": ["Avoid joint injuries", "Regular exercise"]
    },
  
    "burning chest pain, difficulty swallowing, regurgitation, sour taste": {
      "disease": "Gastroesophageal Reflux Disease (GERD)",
      "diagnosis": {
        "testsOrdered": ["Upper endoscopy", "Esophageal pH monitoring"],
        "confirmedBy": "Symptom history and test results"
      },
      "symptoms": [
        "Burning chest pain",
        "Difficulty swallowing",
        "Regurgitation",
        "Sour taste"
      ],
      "prescriptions": [
        {
          "name": "Proton pump inhibitors (e.g., Omeprazole)",
          "dosage": "20mg once daily",
          "purpose": "Reduce stomach acid production"
        },
        {
          "name": "Antacids",
          "dosage": "As needed",
          "purpose": "Neutralize stomach acid"
        }
      ],
      "treatmentPlan": {
        "lifestyleChanges": [
          "Avoid trigger foods",
          "Eat smaller meals"
        ],
        "therapies": ["None required"]
      },
      "advice": "Elevate the head of the bed and avoid lying down after meals.",
      "followUpPlan": "Regular follow-ups to assess symptoms and medication effectiveness.",
      "preventiveMeasures": ["Maintain a healthy weight", "Limit alcohol intake"]
    },
  
    "nausea, vomiting, diarrhea, abdominal cramps": {
      "disease": "Gastroenteritis",
      "diagnosis": {
        "testsOrdered": ["Stool culture", "Blood tests if severe"],
        "confirmedBy": "Symptom history and clinical examination"
      },
      "symptoms": [
        "Nausea",
        "Vomiting",
        "Diarrhea",
        "Abdominal cramps"
      ],
      "prescriptions": [
        {
          "name": "Loperamide",
          "dosage": "As needed",
          "purpose": "Reduce diarrhea"
        },
        {
          "name": "Oral rehydration solution",
          "dosage": "As needed",
          "purpose": "Prevent dehydration"
        }
      ],
      "treatmentPlan": {
        "lifestyleChanges": [
          "Stay hydrated",
          "Avoid solid foods until vomiting subsides"
        ],
        "therapies": ["None required"]
      },
      "advice": "Monitor for signs of dehydration and seek medical attention if needed.",
      "followUpPlan": "Follow up if symptoms persist or worsen.",
      "preventiveMeasures": ["Practice good hand hygiene", "Avoid contaminated food and water"]
    },
  
    "pale skin, fatigue, shortness of breath, dizziness": {
      "disease": "Anemia",
      "diagnosis": {
        "testsOrdered": ["Complete blood count (CBC)", "Iron studies"],
        "confirmedBy": "Lab test results"
      },
      "symptoms": [
        "Pale skin",
        "Fatigue",
        "Shortness of breath",
        "Dizziness"
      ],
      "prescriptions": [
        {
          "name": "Iron supplements",
          "dosage": "As prescribed",
          "purpose": "Treat iron deficiency anemia"
        }
      ],
      "treatmentPlan": {
        "lifestyleChanges": [
          "Increase iron-rich foods in diet",
          "Consider vitamin C for better iron absorption"
        ],
        "therapies": ["None required"]
      },
      "advice": "Monitor your symptoms and ensure a balanced diet.",
      "followUpPlan": "Regular follow-ups to check hemoglobin levels.",
      "preventiveMeasures": ["Consume iron-rich foods", "Regular health check-ups"]
    },
  
    "fatigue, difficulty concentrating, mood changes, cravings": {
      "disease": "Hypothyroidism",
      "diagnosis": {
        "testsOrdered": ["Thyroid function tests"],
        "confirmedBy": "Lab test results"
      },
      "symptoms": [
        "Fatigue",
        "Difficulty concentrating",
        "Mood changes",
        "Cravings"
      ],
      "prescriptions": [
        {
          "name": "Levothyroxine",
          "dosage": "As prescribed",
          "purpose": "Replace thyroid hormone"
        }
      ],
      "treatmentPlan": {
        "lifestyleChanges": [
          "Maintain a balanced diet",
          "Exercise regularly"
        ],
        "therapies": ["None required"]
      },
      "advice": "Take your medication regularly and have periodic thyroid function tests.",
      "followUpPlan": "Regular follow-ups to monitor thyroid levels.",
      "preventiveMeasures": ["Maintain a healthy lifestyle", "Regular health check-ups"]
    },
  
    "excessive thirst, frequent urination, fatigue, blurred vision": {
      "disease": "Diabetes Insipidus",
      "diagnosis": {
        "testsOrdered": ["Water deprivation test", "Urine test"],
        "confirmedBy": "Lab test results"
      },
      "symptoms": [
        "Excessive thirst",
        "Frequent urination",
        "Fatigue",
        "Blurred vision"
      ],
      "prescriptions": [
        {
          "name": "Desmopressin",
          "dosage": "As prescribed",
          "purpose": "Reduce urine output"
        }
      ],
      "treatmentPlan": {
        "lifestyleChanges": [
          "Drink plenty of fluids",
          "Maintain a balanced diet"
        ],
        "therapies": ["None required"]
      },
      "advice": "Monitor your fluid intake and report any significant changes.",
      "followUpPlan": "Regular follow-ups to monitor symptoms and medication effectiveness.",
      "preventiveMeasures": ["Stay hydrated", "Regular health check-ups"]
    },
  






    "chronic fatigue, joint pain, muscle pain, sleep disturbances": {
    "disease": "Fibromyalgia",
    "diagnosis": {
      "testsOrdered": ["Physical examination", "Pain index assessment"],
      "confirmedBy": "Symptom history and physical evaluation"
    },
    "symptoms": [
      "Chronic fatigue",
      "Joint pain",
      "Muscle pain",
      "Sleep disturbances"
    ],
    "prescriptions": [
      {
        "name": "Duloxetine (Cymbalta)",
        "dosage": "30mg daily, increased as needed",
        "purpose": "Antidepressant and pain relief"
      }
    ],
    "treatmentPlan": {
      "lifestyleChanges": [
        "Engage in low-impact exercise",
        "Practice good sleep hygiene"
      ],
      "therapies": ["Cognitive behavioral therapy"]
    },
    "advice": "Consider stress management techniques and regular physical activity.",
    "followUpPlan": "Regular follow-ups to assess treatment effectiveness.",
    "preventiveMeasures": ["Maintain a healthy lifestyle", "Avoid excessive stress"]
  },

  "fever, rash, joint pain, fatigue": {
    "disease": "Systemic Lupus Erythematosus (SLE)",
    "diagnosis": {
      "testsOrdered": ["Antinuclear antibody (ANA) test", "Complete blood count (CBC)"],
      "confirmedBy": "Positive ANA test and symptom history"
    },
    "symptoms": [
      "Fever",
      "Rash",
      "Joint pain",
      "Fatigue"
    ],
    "prescriptions": [
      {
        "name": "Hydroxychloroquine",
        "dosage": "200mg daily",
        "purpose": "Manage lupus symptoms"
      }
    ],
    "treatmentPlan": {
      "lifestyleChanges": [
        "Avoid sun exposure",
        "Follow a healthy diet"
      ],
      "therapies": ["Physical therapy if needed"]
    },
    "advice": "Monitor symptoms closely and report any new symptoms.",
    "followUpPlan": "Regular rheumatology follow-ups.",
    "preventiveMeasures": ["Avoid sun exposure", "Regular health check-ups"]
  },

  "painful urination, increased urinary frequency, lower abdominal pain": {
    "disease": "Urinary Tract Infection (UTI)",
    "diagnosis": {
      "testsOrdered": ["Urine culture", "Urinalysis"],
      "confirmedBy": "Positive culture results"
    },
    "symptoms": [
      "Painful urination",
      "Increased urinary frequency",
      "Lower abdominal pain"
    ],
    "prescriptions": [
      {
        "name": "Nitrofurantoin",
        "dosage": "100mg twice daily for 5 days",
        "purpose": "Antibiotic treatment"
      }
    ],
    "treatmentPlan": {
      "lifestyleChanges": [
        "Increase fluid intake",
        "Practice good personal hygiene"
      ],
      "therapies": ["Pain relief medications if needed"]
    },
    "advice": "Complete the full course of antibiotics and monitor for recurrent symptoms.",
    "followUpPlan": "Follow-up if symptoms do not improve within a few days.",
    "preventiveMeasures": ["Stay hydrated", "Urinate after intercourse"]
  },

  "nausea, vomiting, jaundice, dark urine": {
    "disease": "Hepatitis",
    "diagnosis": {
      "testsOrdered": ["Liver function tests", "Hepatitis virus panel"],
      "confirmedBy": "Positive test results"
    },
    "symptoms": [
      "Nausea",
      "Vomiting",
      "Jaundice",
      "Dark urine"
    ],
    "prescriptions": [
      {
        "name": "Antivirals (specific to type)",
        "dosage": "As prescribed",
        "purpose": "Manage viral hepatitis"
      }
    ],
    "treatmentPlan": {
      "lifestyleChanges": [
        "Avoid alcohol",
        "Eat a balanced diet"
      ],
      "therapies": ["Monitor liver function regularly"]
    },
    "advice": "Follow up with a healthcare provider for ongoing management.",
    "followUpPlan": "Regular follow-ups to monitor liver function.",
    "preventiveMeasures": ["Vaccination for hepatitis A and B", "Safe food practices"]
  },

  "swelling, pain, redness in joints, decreased range of motion": {
    "disease": "Gout",
    "diagnosis": {
      "testsOrdered": ["Joint fluid analysis", "Blood uric acid levels"],
      "confirmedBy": "Joint fluid analysis showing urate crystals"
    },
    "symptoms": [
      "Swelling",
      "Pain",
      "Redness in joints",
      "Decreased range of motion"
    ],
    "prescriptions": [
      {
        "name": "Colchicine",
        "dosage": "1.2mg at onset, then 0.6mg after 1 hour",
        "purpose": "Manage acute gout attack"
      },
      {
        "name": "Allopurinol",
        "dosage": "100mg daily",
        "purpose": "Prevent future attacks"
      }
    ],
    "treatmentPlan": {
      "lifestyleChanges": [
        "Avoid purine-rich foods",
        "Stay hydrated"
      ],
      "therapies": ["Physical therapy if needed"]
    },
    "advice": "Monitor diet and medication adherence.",
    "followUpPlan": "Regular follow-ups to monitor uric acid levels.",
    "preventiveMeasures": ["Maintain a healthy diet", "Limit alcohol intake"]
  },

  "palpitations, lightheadedness, fatigue, shortness of breath": {
    "disease": "Atrial Fibrillation",
    "diagnosis": {
      "testsOrdered": ["ECG", "Echocardiogram"],
      "confirmedBy": "ECG findings of irregular heart rhythm"
    },
    "symptoms": [
      "Palpitations",
      "Lightheadedness",
      "Fatigue",
      "Shortness of breath"
    ],
    "prescriptions": [
      {
        "name": "Anticoagulants (e.g., Warfarin)",
        "dosage": "As prescribed",
        "purpose": "Prevent blood clots"
      },
      {
        "name": "Beta-blockers",
        "dosage": "As prescribed",
        "purpose": "Control heart rate"
      }
    ],
    "treatmentPlan": {
      "lifestyleChanges": [
        "Manage stress",
        "Avoid excessive caffeine and alcohol"
      ],
      "therapies": ["Cardioversion if needed"]
    },
    "advice": "Monitor heart rate and report any significant changes.",
    "followUpPlan": "Regular cardiology follow-ups.",
    "preventiveMeasures": ["Maintain a healthy lifestyle", "Regular exercise"]
  },


  "itching, redness, rash, swelling": {
    "disease": "Allergic Dermatitis",
    "diagnosis": {
      "testsOrdered": ["Patch testing", "Skin examination"],
      "confirmedBy": "History of exposure and symptom evaluation"
    },
    "symptoms": [
      "Itching",
      "Redness",
      "Rash",
      "Swelling"
    ],
    "prescriptions": [
      {
        "name": "Topical corticosteroids",
        "dosage": "Apply twice daily until symptoms resolve",
        "purpose": "Reduce inflammation"
      }
    ],
    "treatmentPlan": {
      "lifestyleChanges": [
        "Avoid known allergens",
        "Keep the skin moisturized"
      ],
      "therapies": ["Oral antihistamines if needed"]
    },
    "advice": "Monitor for signs of secondary infection.",
    "followUpPlan": "Follow up if symptoms persist beyond two weeks.",
    "preventiveMeasures": ["Identify and avoid allergens", "Maintain skin hygiene"]
  },


  "red, swollen gums, bleeding while brushing, bad breath": {
    "disease": "Gingivitis",
    "diagnosis": {
      "testsOrdered": ["Dental examination", "Periodontal probing"],
      "confirmedBy": "Clinical evaluation"
    },
    "symptoms": [
      "Red, swollen gums",
      "Bleeding while brushing",
      "Bad breath"
    ],
    "prescriptions": [
      {
        "name": "Chlorhexidine mouthwash",
        "dosage": "Twice daily",
        "purpose": "Reduce bacteria in the mouth"
      }
    ],
    "treatmentPlan": {
      "lifestyleChanges": [
        "Practice good oral hygiene",
        "Regular dental check-ups"
      ],
      "therapies": ["Professional dental cleaning if needed"]
    },
    "advice": "Floss daily to maintain gum health.",
    "followUpPlan": "Follow up with a dentist in six months.",
    "preventiveMeasures": ["Brush teeth twice daily", "Avoid tobacco"]
  },


  "pain in the back, numbness, difficulty walking, loss of bladder control": {
    "disease": "Herniated Disc",
    "diagnosis": {
      "testsOrdered": ["MRI", "CT scan"],
      "confirmedBy": "Imaging results indicating herniation"
    },
    "symptoms": [
      "Pain in the back",
      "Numbness",
      "Difficulty walking",
      "Loss of bladder control"
    ],
    "prescriptions": [
      {
        "name": "Pain medications (e.g., NSAIDs)",
        "dosage": "As needed",
        "purpose": "Manage pain"
      }
    ],
    "treatmentPlan": {
      "lifestyleChanges": [
        "Avoid heavy lifting",
        "Engage in physical therapy"
      ],
      "therapies": ["Surgery if severe symptoms persist"]
    },
    "advice": "Maintain good posture and use ergonomic furniture.",
    "followUpPlan": "Follow-up after treatment for symptom management.",
    "preventiveMeasures": ["Regular exercise", "Maintain healthy body weight"]
  },



    "persistent cough, chest pain, fatigue, wheezing": {
      "disease": "Chronic Bronchitis",
      "diagnosis": {
        "testsOrdered": ["Pulmonary function tests", "Chest X-ray"],
        "confirmedBy": "Clinical history and lung function tests"
      },
      "symptoms": [
        "Persistent cough",
        "Chest pain",
        "Fatigue",
        "Wheezing"
      ],
      "prescriptions": [
        {
          "name": "Bronchodilators",
          "dosage": "As prescribed",
          "purpose": "Open airways to ease breathing"
        },
        {
          "name": "Inhaled corticosteroids",
          "dosage": "As prescribed",
          "purpose": "Reduce inflammation in the lungs"
        }
      ],
      "treatmentPlan": {
        "lifestyleChanges": [
          "Quit smoking",
          "Avoid lung irritants"
        ],
        "therapies": ["Pulmonary rehabilitation if needed"]
      },
      "advice": "Stay hydrated and avoid extreme temperatures.",
      "followUpPlan": "Regular follow-ups to monitor lung function.",
      "preventiveMeasures": ["Vaccinations (e.g., flu shot)", "Avoid exposure to pollutants"]
    },
  
    "skin rash, fatigue, fever, joint pain": {
      "disease": "Psoriatic Arthritis",
      "diagnosis": {
        "testsOrdered": ["Physical examination", "Blood tests for inflammation"],
        "confirmedBy": "Clinical history and symptom evaluation"
      },
      "symptoms": [
        "Skin rash",
        "Fatigue",
        "Fever",
        "Joint pain"
      ],
      "prescriptions": [
        {
          "name": "NSAIDs (e.g., Ibuprofen)",
          "dosage": "As prescribed for pain relief",
          "purpose": "Reduce inflammation and pain"
        },
        {
          "name": "DMARDs (e.g., Methotrexate)",
          "dosage": "As prescribed",
          "purpose": "Control disease progression"
        }
      ],
      "treatmentPlan": {
        "lifestyleChanges": [
          "Maintain a healthy weight",
          "Engage in regular exercise"
        ],
        "therapies": ["Physical therapy if needed"]
      },
      "advice": "Manage stress to help control flare-ups.",
      "followUpPlan": "Regular rheumatology follow-ups to monitor disease activity.",
      "preventiveMeasures": ["Avoid known triggers", "Stay hydrated"]
    },
  
  
    "joint stiffness, swelling, fatigue, fever": {
      "disease": "Osteoarthritis",
      "diagnosis": {
        "testsOrdered": ["X-rays", "MRI"],
        "confirmedBy": "Clinical history and imaging findings"
      },
      "symptoms": [
        "Joint stiffness",
        "Swelling",
        "Fatigue",
        "Fever"
      ],
      "prescriptions": [
        {
          "name": "Acetaminophen",
          "dosage": "As needed for pain relief",
          "purpose": "Manage pain"
        },
        {
          "name": "Topical NSAIDs",
          "dosage": "Apply to affected areas as needed",
          "purpose": "Reduce local inflammation"
        }
      ],
      "treatmentPlan": {
        "lifestyleChanges": [
          "Engage in low-impact exercises",
          "Maintain a healthy weight"
        ],
        "therapies": ["Physical therapy"]
      },
      "advice": "Warm up before exercising to reduce stiffness.",
      "followUpPlan": "Regular follow-ups to monitor joint function.",
      "preventiveMeasures": ["Healthy lifestyle choices", "Avoid joint injuries"]
    },
  
    "chronic fatigue, muscle pain, sleep disturbances, memory issues": {
      "disease": "Chronic Fatigue Syndrome (CFS)",
      "diagnosis": {
        "testsOrdered": ["Exclusion of other conditions"],
        "confirmedBy": "Persistent fatigue lasting more than 6 months"
      },
      "symptoms": [
        "Chronic fatigue",
        "Muscle pain",
        "Sleep disturbances",
        "Memory issues"
      ],
      "prescriptions": [
        {
          "name": "Antidepressants",
          "dosage": "As prescribed",
          "purpose": "Manage symptoms"
        }
      ],
      "treatmentPlan": {
        "lifestyleChanges": [
          "Establish a regular sleep schedule",
          "Gradually increase physical activity"
        ],
        "therapies": ["Cognitive behavioral therapy (CBT) if needed"]
      },
      "advice": "Pace activities to avoid exacerbating symptoms.",
      "followUpPlan": "Regular follow-ups to monitor symptoms and treatment response.",
      "preventiveMeasures": ["Awareness of triggers", "Stress management techniques"]
    },
  
    "fever, cough, headache, muscle aches": {
      "disease": "Typhoid Fever",
      "diagnosis": {
        "testsOrdered": ["Blood cultures", "Widal test"],
        "confirmedBy": "Positive blood culture for Salmonella Typhi"
      },
      "symptoms": [
        "Fever",
        "Cough",
        "Headache",
        "Muscle aches"
      ],
      "prescriptions": [
        {
          "name": "Ciprofloxacin",
          "dosage": "500mg twice daily for 7 days",
          "purpose": "Antibiotic treatment"
        }
      ],
      "treatmentPlan": {
        "lifestyleChanges": [
          "Stay hydrated",
          "Rest"
        ],
        "therapies": ["Symptomatic treatment for fever and pain"]
      },
      "advice": "Seek medical attention if symptoms worsen.",
      "followUpPlan": "Regular follow-ups to monitor recovery.",
      "preventiveMeasures": ["Vaccination and safe food practices"]
    },
  
    "shortness of breath, chest tightness, anxiety": {
      "disease": "Panic Disorder",
      "diagnosis": {
        "testsOrdered": ["Psychiatric evaluation"],
        "confirmedBy": "Clinical history and symptom assessment"
      },
      "symptoms": [
        "Shortness of breath",
        "Chest tightness",
        "Anxiety"
      ],
      "prescriptions": [
        {
          "name": "Selective serotonin reuptake inhibitors (SSRIs)",
          "dosage": "As prescribed",
          "purpose": "Manage anxiety symptoms"
        }
      ],
      "treatmentPlan": {
        "lifestyleChanges": [
          "Practice relaxation techniques",
          "Regular physical activity"
        ],
        "therapies": ["Cognitive behavioral therapy (CBT)"]
      },
      "advice": "Keep a journal of panic episodes to identify triggers.",
      "followUpPlan": "Regular psychiatric follow-ups to monitor progress.",
      "preventiveMeasures": ["Awareness of anxiety symptoms", "Stress management techniques"]
    },
  
    "yellowing of skin, abdominal pain, fatigue": {
      "disease": "Hepatitis A",
      "diagnosis": {
        "testsOrdered": ["Liver function tests", "Hepatitis A antibody test"],
        "confirmedBy": "Positive Hepatitis A antibody test"
      },
      "symptoms": [
        "Yellowing of skin",
        "Abdominal pain",
        "Fatigue"
      ],
      "prescriptions": [
        {
          "name": "Rest and hydration",
          "dosage": "As needed",
          "purpose": "Supportive care"
        }
      ],
      "treatmentPlan": {
        "lifestyleChanges": [
          "Avoid alcohol",
          "Eat a balanced diet"
        ],
        "therapies": ["Monitoring liver function"]
      },
      "advice": "Avoid sharing utensils or drinks to prevent transmission.",
      "followUpPlan": "Regular follow-ups to monitor liver function.",
      "preventiveMeasures": ["Vaccination and good hygiene practices"]
    },
  
  
    "unexplained weight loss, increased appetite, fatigue": {
      "disease": "Hyperthyroidism",
      "diagnosis": {
        "testsOrdered": ["Thyroid function tests", "TSH level"],
        "confirmedBy": "Elevated thyroid hormone levels"
      },
      "symptoms": [
        "Unexplained weight loss",
        "Increased appetite",
        "Fatigue"
      ],
      "prescriptions": [
        {
          "name": "Methimazole",
          "dosage": "As prescribed",
          "purpose": "Reduce thyroid hormone production"
        }
      ],
      "treatmentPlan": {
        "lifestyleChanges": [
          "Manage stress levels",
          "Engage in regular exercise"
        ],
        "therapies": ["Regular monitoring of thyroid levels"]
      },
      "advice": "Avoid excessive caffeine intake.",
      "followUpPlan": "Regular endocrinology follow-ups to monitor thyroid function.",
      "preventiveMeasures": ["Regular thyroid screenings", "Awareness of symptoms"]
    },

  
    "painful swelling in the joints, fatigue, fever": {
      "disease": "Rheumatic Fever",
      "diagnosis": {
        "testsOrdered": ["Throat culture", "Blood tests for inflammation"],
        "confirmedBy": "History of streptococcal infection"
      },
      "symptoms": [
        "Painful swelling in the joints",
        "Fatigue",
        "Fever"
      ],
      "prescriptions": [
        {
          "name": "Penicillin",
          "dosage": "As prescribed for prevention",
          "purpose": "Prevent streptococcal infections"
        }
      ],
      "treatmentPlan": {
        "lifestyleChanges": [
          "Stay active but avoid overexertion",
          "Rest when needed"
        ],
        "therapies": ["Physical therapy if needed"]
      },
      "advice": "Report any recurrent sore throat to a healthcare provider.",
      "followUpPlan": "Regular follow-ups to monitor heart health.",
      "preventiveMeasures": ["Prompt treatment of strep throat", "Awareness of symptoms"]
    },
  
    "chronic abdominal pain, bloating, gas, diarrhea": {
      "disease": "Crohn's Disease",
      "diagnosis": {
        "testsOrdered": ["Colonoscopy", "CT scan"],
        "confirmedBy": "Endoscopic findings and biopsy"
      },
      "symptoms": [
        "Chronic abdominal pain",
        "Bloating",
        "Gas",
        "Diarrhea"
      ],
      "prescriptions": [
        {
          "name": "Anti-inflammatory drugs (e.g., Mesalamine)",
          "dosage": "As prescribed",
          "purpose": "Reduce inflammation"
        }
      ],
      "treatmentPlan": {
        "lifestyleChanges": [
          "Follow a low-residue diet during flare-ups",
          "Stay hydrated"
        ],
        "therapies": ["Nutritional counseling"]
      },
      "advice": "Keep a food diary to identify triggers.",
      "followUpPlan": "Regular gastroenterology follow-ups to monitor disease activity.",
      "preventiveMeasures": ["Awareness of symptoms", "Regular health screenings"]
    },
  
    "severe headache, sensitivity to light, nausea, vomiting": {
      "disease": "Tension-Type Headache",
      "diagnosis": {
        "testsOrdered": ["Clinical evaluation"],
        "confirmedBy": "History and symptom evaluation"
      },
      "symptoms": [
        "Severe headache",
        "Sensitivity to light",
        "Nausea",
        "Vomiting"
      ],
      "prescriptions": [
        {
          "name": "NSAIDs (e.g., Ibuprofen)",
          "dosage": "As needed for pain relief",
          "purpose": "Reduce pain and inflammation"
        }
      ],
      "treatmentPlan": {
        "lifestyleChanges": [
          "Practice stress management techniques",
          "Ensure proper posture"
        ],
        "therapies": ["Physical therapy if needed"]
      },
      "advice": "Take breaks from screens to reduce strain.",
      "followUpPlan": "Regular follow-ups if headaches persist.",
      "preventiveMeasures": ["Awareness of triggers", "Healthy lifestyle habits"]
    },
  
    "persistent dry eyes, redness, blurred vision": {
      "disease": "Dry Eye Syndrome",
      "diagnosis": {
        "testsOrdered": ["Schirmer's test", "Tear break-up time test"],
        "confirmedBy": "Clinical history and symptom evaluation"
      },
      "symptoms": [
        "Persistent dry eyes",
        "Redness",
        "Blurred vision"
      ],
      "prescriptions": [
        {
          "name": "Artificial tears",
          "dosage": "As needed",
          "purpose": "Lubricate eyes"
        }
      ],
      "treatmentPlan": {
        "lifestyleChanges": [
          "Avoid dry or windy environments",
          "Take breaks during screen time"
        ],
        "therapies": ["Warm compresses for eyes"]
      },
      "advice": "Stay hydrated and reduce screen time.",
      "followUpPlan": "Regular eye care follow-ups to monitor symptoms.",
      "preventiveMeasures": ["Awareness of environmental triggers", "Regular eye check-ups"]
    },
  
  
}



export function getDiseaseAdvice(symptoms) {
  console.log("getDiseaseAdvice called with symptoms:", symptoms);
  const skey = symptoms.join(", ").toLowerCase();

  const matches = [];

  for (const [symptomKey, data] of Object.entries(diseaseData)) {
    const matchCount = skey.split(", ").filter(symptom => data.symptoms.map(s => s.toLowerCase()).includes(symptom)).length;
    const totalSymptoms = skey.split(", ").length;
    
    if (matchCount > 0) {
      matches.push({
        disease: data.disease,
        diagnosis: data.diagnosis,
        symptoms: data.symptoms,
        prescriptions: data.prescriptions,
        treatmentPlan: data.treatmentPlan,
        advice: data.advice,
        followUpPlan: data.followUpPlan,
        preventiveMeasures: data.preventiveMeasures,
        matchPercentage: (matchCount / totalSymptoms) * 100
      });
    }
  }

  if (matches.length === 0) {
    matches.push({
      disease: "Unknown",
      diagnosis: {
        testsOrdered: ["Consult a healthcare provider for appropriate tests"],
        confirmedBy: "Not confirmed, further evaluation needed"
      },
      symptoms: [],
      prescriptions: [],
      treatmentPlan: {
        lifestyleChanges: [],
        therapies: []
      },
      advice: "Consult a healthcare provider for a more accurate diagnosis and advice.",
      followUpPlan: "Schedule an appointment with a healthcare provider for evaluation.",
      preventiveMeasures: [],
      matchPercentage: 0
    });
  }

  return matches.sort((a, b) => b.matchPercentage - a.matchPercentage);
}


export function getAllDiseases() {
  return Object.values(diseaseData).map(data => data.disease);
}

export function getSymptomsList() {
  return Object.keys(diseaseData);
}