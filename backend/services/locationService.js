const generateGoogleMapsLink = (latitude, longitude) => {
  // Correct Google Maps URL format: https://www.google.com/maps?q=lat,lng
  return `https://www.google.com/maps?q=${latitude},${longitude}`;
};

const formatLocation = (latitude, longitude) => {
  return {
    latitude,
    longitude,
    mapUrl: generateGoogleMapsLink(latitude, longitude),
  };
};

module.exports = {
  generateGoogleMapsLink,
  formatLocation,
};