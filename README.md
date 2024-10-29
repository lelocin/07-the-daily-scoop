# The Daily Scoop
I often feel overwhelmed by the volume of information available when scrolling through various news sources, which I believe is an invetible scenario in this digital age. In the past, I used an App that summarizes 2-3 news headlines everyday and I can respond to the chat by requesting more articles or information of a specific article. Unfortunately, this App is no longer in the market. Therefore, to address the issue, my project uses News API to fetch and display 10 news headlines in the US. This approach makes it easier for me to stay updated on trends while saving time by eliminating the need to click through multiple websites.

Additionally, while the News API offers a wealth of information, it lacks a user-friendly interface. Therefore, this project visualizes News API's data, enhancing accessibility and usability.

## Chosen API 
The chosen API for this project is News API. News API searches articles from over 150,000 news sources worldwide. NewsAPI mainly supports the search function, but it allows you to search with specific categories, countries, keywords or timeframes. The project sends requests to fetch US news headlines with the provided cateogry and returns with article title, article publisher, article description and URL link to access the article. 

## Setup 
1. Clone the repository
   ```
   git clone https://github.com/lelocin/07-the-daily-scoop
   ```
2. Navigate to The Daily Scoop repository
   ```
   cd 07-the-daily-scoop
   ```
3. Visit newsapi.org to register for an account and apply for your unique API key
4. Create an .env.local file to store your API key. 
   ```
   REACT_APP_NEWS_KEY = YOUR_API_KEY
   ```
5. Download neccessary requirements
   ```
   npm install
   ```
7. Run the program
   ```
   nmp start
   ```
## Usage
Enter a desired category from the list of seven: business, entertainment, general, health, science, sports and technology. If interested, click the read more button to direct to the news article. 

## AI-Generated Code 
ChatGPT supported the basic structure of the JavaScript file. Additionally, I prompted ChatGPT to generate a more creative and dynamic design for the web page after creating a basic CSS file laying out necessary elements, which includes techniques like fade-in. 
