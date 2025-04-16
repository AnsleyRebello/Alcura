# Healthify

![Healthify Logo](/healthify.png)

Healthify is an AI-powered health assistant application built using React and Vite. It provides users with features such as a chatbot for symptom analysis, health analysis based on user inputs, and personalized medication recommendations. The application aims to empower users to manage their health effectively through easy-to-use interfaces and intelligent responses.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Screenshots](#screenshots)

## Features
- **AI Chatbot**: Interact with an AI chatbot to describe symptoms and receive instant feedback.
- **Health Analysis**: Input symptoms to receive a comprehensive analysis and potential disease advice.
- **Medication Guide**: Get personalized medication recommendations based on user inputs.
- **Responsive Design**: The application is designed to be responsive and user-friendly across devices.

## Technologies Used

### Frontend:
- React
- Vite
- Tailwind CSS
- Radix UI
- React Router
- Axios for API calls

### Backend:
- Google Generative AI for chatbot responses (simulated)

## Installation
To run this project locally, follow these steps:

Clone the repository:
```bash
git clone https://github.com/yourusername/healthify.git
cd healthify
```

Install dependencies:
```bash
npm install
```

Set up environment variables:

Create a `.env` file in the root directory and add your API keys:
```plaintext
VITE_GEMINI_API_KEY=your_api_key_here
```

Start the development server:
```bash
npm run dev
```

Open your browser and navigate to [http://localhost:5173](http://localhost:5173) to view the application.

## Usage
- **Home Page**: The landing page provides an overview of the application and its features. Users can navigate to the chatbot, health analysis, or medication guide.
- **Chatbot**: Users can interact with the chatbot by typing their symptoms or health-related questions.
- **Health Analysis**: Users can select symptoms from a dropdown and receive a detailed analysis.
- **Medication Guide**: Users can input their biodata to receive personalized medication recommendations.

## Project Structure
```
healthify/
├── src/
│   ├── api/
│   │   └── healthApi.js          # API calls
│   ├── assets/                    # Images and assets
│   ├── components/                # React components
│   │   ├── Chatbot.jsx            # Chatbot component
│   │   ├── HealthAnalysis.jsx     # Health analysis component
│   │   ├── Medication.jsx         # Medication guide component
│   │   └── Home.jsx               # Home page component
│   ├── App.jsx                    # Main application component
│   ├── main.jsx                   # Entry point
│   ├── index.css                  # Global styles
│   └── vite.config.js             # Vite configuration
├── public/                        # Public assets
├── .env                           # Environment variables
├── package.json                   # Project dependencies
└── README.md                      # Project documentation
```

## Contributing
Contributions are welcome! If you would like to contribute to this project, please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Screenshots
### Home Page
![Home Page 1](/Screenshot%202024-11-16%20111845.png)
![Home Page 2](/Screenshot%202024-11-16%20111852.png)

### Chatbot Interface
![Chatbot Page](/Screenshot%202024-11-16%20111907.png)

### Health Analysis
![Health Analysis](/Screenshot%202024-11-16%20111917.png)

### Medication Guide
![Medication Guide](/Screenshot%202024-11-16%20111927.png)

### Credits
This project was built in collaboration with [Alister Fernandes](https://github.com/Alister1210).