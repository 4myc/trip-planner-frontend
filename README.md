# TRIP PLANNER

Trip Planner is a solution to make planning trips easier. The dynamic single-page app with full CRUD allows a user to create trips and add a packing list and itinerary to each trip. The user can also view a list of trips, edit trip information and packing list items, and delete trips.  

USER STORIES:   
User can create, edit, and delete a trip  
User can create, edit, and delete packing list items associated with a trip  
User can create, edit, and delete itinerary stops associated with a trip  
User can view a list of trips  
User can view packing list items and itinerary stops associated with a trip

## Technologies  

FRONT END: React.js, Semantic UI  
BACK END: Rails, PostgreSQL  

## Installation 
1. Fork and clone the front end (client) repository, located here.  
2. In the terminal, save the cloned repository to a local folder by running:   
```
git clone <repo_url>
```
3. Fork and clone the back end (server) repository, located at https://github.com/4myc/trip-planner-server  
4. In the terminal, save the cloned repository to a local folder by running:   
```
git clone <repo_url>
```


## Usage
1. Open the front end and back end folders in separate terminal windows.
2. Inside the back end folder in the terminal, run the following:   
```
bundle install 
rails db:create
rails db:migrate
rails db:seed
rails s
```

3. Inside the front end folder in the terminal, run the following:  
```
npm install  
npm start 
```

4. The message “Something is running on port 3000. Would you like to run the app on another port instead?” will appear.  
Enter “Y” and the index.html file will automatically open in the browser.  

5. **LOGIN REQUIRED:**  
In the username field, enter **"Drew”** to login and experience the app.


## Team Members 
**<a href="https://github.com/AndrewMatheny">Andrew Matheny</a>**    
**<a href="https://github.com/NicoleLC16">Nicole Cabral</a>**  
**<a href="https://github.com/4myc">Amy Chen</a>**
