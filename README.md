**Google Clone Attempt**

**Brief Description**

This is my team's attempt at creating a Google clone page. It only works for three search terms: 'football', 'clothes' and 'food'. 

If the user enters one of those 3 search terms and clicks on the 'Search' button (or alternatively presses 'Enter' whilst in the searchbar), a list of 8 links with some brief descriptions will appear. 

It is also our intention, that should the user enter one of these three search terms, and then proceed to click on the button which says "I'm feeling lucky", it will immediately link to one of the 8 websites that we have created for each search term.



**Installation**

--First go to the server folder and type 'npm install' in order to install relevant node packages.
-- Then type npm start to run nodemon.

**Usage**
Navigate to the index.html file and open with live server (preferably) or just open it normally in the browser. 


**ChangeLog**
[x] Successfully built the appropriate html structure for our Google homepage.
[x] Successfully added CSS styling so that the Google homepage resembled the actual Google homepage.
[x] Successfully built a backend which can return json data according to category when using the url: 'localhost:3000/search/:category'. 
[x] Successfully linked this backend functionality to the front end by correctly drafting a fetch method.
[x] When the user clicks search or presses 'Enter' after having typed either 'football', 'clothes' or 'food' the appropriate links and descriptions are successfully rendered in the browswer. 
[x] When the user clicks the button "I'm feeling lucky", the button successfully redirects the user to one of the websites. 
[x] Added a little navbar to the search results to make our clone look more like the real Google.
**Wins** 
All the aforementioned points in the changelog section

**Challenges**
Correctly adding the functionality for the "I'm feeling lucky" button.


