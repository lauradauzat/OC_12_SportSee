# OC_12_SportSee

API 
to start running server : yarn dev

Routes exemples
http://localhost:3000/user/${userId} - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
http://localhost:3000/user/${userId}/activity - retrieves a user's activity day by day with kilograms and calories.
http://localhost:3000/user/${userId}/average-sessions - retrieves the average sessions of a user per day. The week starts on Monday.
http://localhost:3000/user/${userId}/performance - retrieves a user's performance (energy, endurance, etc.).

Front 
To start react app : npm start 
Test when connected to API : http://localhost:3000/?id=12