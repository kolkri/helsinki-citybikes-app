# helsinki-citybikes-app

- Project description

## Data import

- Import data from the CSV files to a database or in-memory storage
- Validate data before importing
- Don't import journeys that lasted for less than ten seconds
- Don't import journeys that covered distances shorter than 10 meters

## Journey list view

- List journeys
    - If you don't implement pagination, use some hard-coded limit for the list length because showing several million rows would make any browser choke
- For each journey show departure and return stations, covered distance in kilometers and duration in minutes

## Station list

- List all the stations

## Single station view

- Station name
- Station address 
- Total number of journeys starting from the station
- Total number of journeys ending at tha station