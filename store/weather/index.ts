const fetchCity = async () => {
  return new Promise<string>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=your_opencage_api_key`
      );
      const data = await response.json();
      const city = data.results[0].components.city;
      resolve(city);
    }, reject);
  });
};

const fetchWeather = async () => {
  //TODO GET API KEY
  const apiKey = "";
  const city = await fetchCity();
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  );
  const data = await response.json();
  return data;
};
