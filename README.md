# helsinki-citybikes-app

This is the pre-assignment for Solita Dev Academy Finland fall 2022. The project was to create a UI and a backend service for displaying data from journeys made with city bikes in the Helsinki Capital area (check details: https://github.com/solita/dev-academy-2022-fall-exercise).

## Data import

The following datasets were provided in the assignment:
 - 3 datasets of journey data (May, June and July 2021) by City Bike Finland
 - 1 dataset that has information about Helsinki Region Transport’s (HSL) city bicycle stations

In my project I only used the dataset of city bike journeys done during May 2021 and then the dataset with information about the stations. With more time I would have included also the datasets of June and July. 

## Used technologies

- Backend was built with Node.js and  MongoDB
- Frontend was built with React and Styled components

## Journey list view

I displayed the journeys on the "Journeys" page. I limited the amount of shown journeys for 1000 this time, to avoid browser choke. I also used pagination shown only 200 journeys per page. The journey table shows departure and return stations, covered distance in kilometers and duration in minutes. 

## Station list and single station view

I displayed the stations on the "Station" page. Every station name and id is a link to the single station view, where user can see the name, address and started and ended journeys of that specific station (during May 2021). The single station view information was got from 2 different datasets. I used the id number to fetch the right data from both datasets. 

## Improvements with more time

- I would include also the data of June and July 2021 to the database

- I noticed at the very end that there was a lot of duplication on the journeys datasets and I forgot to validate the data for not showing the duplications, so I would make sure that I exlude the duplicate journeys from the datasets. 

- I build endpoint to store a new journey (see on the backend file). I would build frontend, were user can add a new journey and save it to the database. With same principle I could also build a possibility to add a new station. 

- Build filtering and searching possibilities for journeys and stations

- Improve the UI with animations and more styling

## How to run the project locally

1. Clone the project to your local environment:

    git clone https://github.com/kolkri/helsinki-citybikes-app.git

2. Move to the frontend folder:
    
    cd frontend
 
3. Install all the dependencies:

    npm install

4. Run the project on your local server:

    npm start

## View it live

- Backend API: https://helsinki-citybikes-endpoints.herokuapp.com/
- Frontend: https://helsinki-citybikes.netlify.app/
