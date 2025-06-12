### *Weather Application Project Report *:
### Overview
The project is a simple Weather Application that fetches and displays real-time weather data for a user-specified city. It utilizes the ### *OpenWeather API* to retrieve weather details and presents them in a user-friendly format with an interactive UI.
Project Components
1. ### Frontend (HTML & CSS)
The user interface is structured using index.html and styled with style.css.
Features in index.html:
A header displaying the application name.
An input field for entering the city name.
A button (Get Weather) to fetch weather data.
A section to display weather results dynamically.
A date display showing the current date.
A footer mentioning "Ace Engineering College".
The HTML references an external CSS file (style.css), which is responsible for the layout and design. The application also includes Google Fonts for a visually appealing interface.
2. ### Backend Logic (JavaScript)
The script.js file manages the application’s functionality.
### Key Functionalities:
Listens for a button click (Get Weather).
Fetches weather data from OpenWeather API using an API key (171e009cae7e126fcbcec49c3a5cee6a).
Displays an error message if the city is not found.
Extracts and displays essential weather details, including:
Temperature
Feels Like Temperature
Humidity
Pressure
Wind Speed & Direction
Uses Chart.js to visualize temperature and humidity in a bar chart.
Displays the current date dynamically.
Technologies Used
HTML, CSS for UI design.
JavaScript (ES6) for API interaction & UI updates.
OpenWeather API for real-time weather data.
Chart.js for graphical representation.
### Conclusion
This project is a beginner-friendly weather app that demonstrates how to fetch and display live weather data using JavaScript. It successfully integrates an external API and presents data in a clean, interactive manner