# Weather Card App

A simple weather card that shows temperature when you search for a city.

## How to Use:

1. **Get a FREE API Key:**
   - Go to: https://openweathermap.org/api
   - Click "Sign Up" and create a free account
   - After signing in, go to "API keys" section
   - Copy your API key

2. **Add API Key to the Code:**
   - Open `script.js` file
   - Find the line: `const apiKey = 'YOUR_API_KEY_HERE';`
   - Replace `YOUR_API_KEY_HERE` with your actual API key
   - Example: `const apiKey = 'abc123xyz456';`

3. **Open the Website:**
   - Double-click on `index.html` file
   - It will open in your browser

4. **Search for Weather:**
   - Type any city name (like "Delhi", "Mumbai", "London")
   - Click "Search" button or press Enter
   - You'll see the temperature and weather description!

## Files Explanation:

- **index.html** - The structure of the webpage
- **style.css** - The styling/colors of the webpage
- **script.js** - The JavaScript code that fetches weather data

## How it Works:

1. User types a city name
2. JavaScript sends a request to OpenWeatherMap API
3. API returns weather data
4. JavaScript displays the temperature and description on the page

Simple and easy! 😊
