const axios = require('axios');

const ML_SERVICE_URL = process.env.ML_SERVICE_URL || "http://localhost:8000";

const checkPhishing = async (message) => {
  const response = await axios.post(`${ML_SERVICE_URL}/phishing/check`, { message });
  return response.data;
};

const checkScamCall = async (phone_number, transcript) => {
  const response = await axios.post(`${ML_SERVICE_URL}/scam/check`, {
    phone_number,
    transcript,
  });
  return response.data;
};

const checkWellness = async (steps, heart_rate, sleep_hours, medication_taken) => {
  const response = await axios.post(`${ML_SERVICE_URL}/wellness/check`, {
    steps,
    heart_rate,
    sleep_hours,
    medication_taken,
  });
  return response.data;
};

module.exports = {
  checkPhishing,
  checkScamCall,
  checkWellness,
};