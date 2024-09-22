# RA Event Notifier Chrome Extension

This Google Chrome extension helps RetroAchievements users track competitions and events.

## Current Features:

- Displays dynamic information about the "Achievement of the Week" (AotW), including the achievement, game, and console.
- Shows the time remaining to complete the achievement.
- When less than 24 hours remain, the timer will turn red as an alert, indicating the time is running out.

## How to Use:

1. Follow the usual process to load a local Chrome extension.
2. Clone the repository.
3. Install the required npm dependencies by running:
npm install
   
Create a .env file in the project directory with the following fields:
VITE_API_KEY={your_api_key}
VITE_USERNAME={your_username}
The API key can be obtained from the RetroAchievements platform.

Required npm Dependencies:
@retroachievements/api: ^2.1.0
react: ^18.3.1
react-dom: ^18.3.1
