// import axios from 'axios';

// const BASE_URL = 'https://api.gemini.com';

// const geminiApi = axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     'Content-Type': 'application/json',
//     'X-GEMINI-APIKEY': import.meta.env.VITE_GEMINI_API_KEY,
//   },
// });

// export const getAccountBalances = async () => {
//   try {
//     const response = await geminiApi.get('/v1/balances');
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching account balances:', error);
//     throw error;
//   }
// };


import axios from 'axios';

const BASE_URL = 'https://api.gemini.com'; // Replace with a real health API base URL

const healthApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-GEMINI-APIKEY': import.meta.env.GEMINI_API_KEY,
  },
});

// Function to get general health advice or tips
export const getHealthTips = async () => {
  try {
    const response = await healthApi.get('/v1/tips');
    return response.data;
  } catch (error) {
    console.error('Error fetching health tips:', error);
    throw error;
  }
};

// Function to get chatbot responses (could be AI-based)
export const getChatbotResponse = async (message) => {
  try {
    const response = await healthApi.post('/v1/chatbot', { message });
    return response.data;
  } catch (error) {
    console.error('Error getting chatbot response:', error);
    throw error;
  }
};


