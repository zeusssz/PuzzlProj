import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');

  const weather = {
    apiKey: 'aba6ff9d6de967d5eac6fd79114693cc',
    fetchWeather: async function (city) {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
        );
        if (!response.ok) {
          throw new Error('No weather found.');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
      }
    },
    search: function () {
      this.fetchWeather(city)
        .then((data) => this.displayWeather(data))
        .catch((error) => console.error('Error:', error));
    },
    displayWeather: function (data) {
      setWeatherData(data);
    },
  };

  const geocode = {
    reverseGeocode: function (latitude, longitude) {
      var apikey = '90a096f90b3e4715b6f2e536d934c5af';
      var api_url = 'https://api.opencagedata.com/geocode/v1/json';
      var request_url =
        api_url +
        '?' +
        'key=' +
        apikey +
        '&q=' +
        encodeURIComponent(latitude + ',' + longitude) +
        '&pretty=1' +
        '&no_annotations=1';

      fetch(request_url)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Unable to fetch location details.');
          }
          return response.json();
        })
        .then((data) => {
          const city = data.results[0].components.city;
          weather.fetchWeather(city);
        })
        .catch((error) => console.error('Error fetching location:', error));
    },
    getLocation: function () {
      // Get user's location using React Native's Geolocation API
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          this.reverseGeocode(latitude, longitude);
        },
        (error) => {
          console.error('Error getting location:', error);
          weather.fetchWeather('Delhi'); // Fallback to default city (e.g., Delhi) if unable to get location
        }
      );
    },
  };

  useEffect(() => {
    geocode.getLocation();
    setInterval(() => {
      geocode.getLocation(); // Fetch weather data every 2 minutes
    }, 120000);
  }, []);

  const handleSearch = () => {
    weather.search();
  };

  return (
    <View>
      <View>
        <TextInput
          placeholder="Enter city"
          onChangeText={(text) => setCity(text)}
        />
        <TouchableOpacity onPress={handleSearch}>
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
      {weatherData ? (
        <View>
          <Text>City: {weatherData.name}</Text>
          <Text>Temperature: {weatherData.main.temp}°C</Text>
          {/* Display other weather information */}
        </View>
      ) : (
        <Text>Loading weather data...</Text>
      )}
    </View>
  );
};

export default Weather;
