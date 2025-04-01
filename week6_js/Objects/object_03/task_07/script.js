/* Task 7
Create an object `weatherApp` with a method `fetchWeather(city)`.
Use `fetch` to get weather data from an API and display it in an HTML element.
(API: OpenWeather or any free weather API)
*/

// Your code here

const weatherApp = {
  apiKey: "07bd82292fa94da8a77235655252503 ",

  fetchWeather() {
    const city = document.getElementById("city").value.trim();
    if (!city) {
      alert("Please enter a city name.");
      return;
    }

    const url = `http://weatherapi.com/my/json?key=${this.apiKey}&q=${city}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("City not found or API error");
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.location && data.current) {
          document.getElementById(
            "weatherInfo"
          ).textContent = `Weather in ${data.location.name}: ${data.current.condition.text}, ${data.current.temp_c}°C`;
        } else {
          document.getElementById("weatherInfo").textContent =
            "Data not available.";
        }
      })
      .catch((error) => {
        console.error("Error fetching weather:", error);
        document.getElementById("weatherInfo").textContent = "City not found!";
      });
  },
};
