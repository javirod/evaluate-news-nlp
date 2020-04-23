# Travel App Project

## Table of Contents

* [Instructions](#instructions)
* [Goals](#goals)
* [Challenges](#challenges)
* [Future Work](#future-work)
* [Resources](#resources)

## Instructions

To view the page open terminal and point to project root folder ` cd /travel-app` then run `node server.js`. In your browser open [http://localhost:8081/](http://localhost:8081/) and start testing out the app's functionality.

## Goals

The travel-app made use of asynchronous functions to take user city input and make requests to the Geonames, Weatherbit, and Pixabay APIs. The UI is dynamically updated based on the responses from the external APIs and user input data.

## Challenges

I had some issues chaining `.then()` together. I also couldn't figure out why i couldn't reach the weather API and found that i was missing `http://` at the beginning of URL.

## Future Work

Some additional work I would like to update the weather-journal-app project when i get more time: 

- [ ] Use `tests.js` as a template for writing and running some basic tests for your code.
- [ ] Update UI so that it is more aesthetically pleasing.

## Resources

* [https://expressjs.com/en/starter/hello-world.html](https://expressjs.com/en/starter/hello-world.html)
* [https://openweathermap.org/weather-data](https://openweathermap.org/weather-data)