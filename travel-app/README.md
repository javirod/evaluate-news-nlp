# Travel App Project

## Table of Contents

* [Instructions](#instructions)
* [Goals](#goals)
* [Challenges](#challenges)
* [Future Work](#future-work)
* [Resources](#resources)

## Instructions

To view the page open terminal and point to project root folder ` cd ./travel-app` then run `npm run build-prod`. To start express server run `node run start`. In your browser open [http://localhost:8081/](http://localhost:8081/) and start testing out the app's functionality.

To build development run `nmp run build-dev`.

## Goals

The travel-app made use of asynchronous functions to take user city input and make requests to the Geonames, Weatherbit, and Pixabay APIs. The UI is dynamically updated based on the responses from the external APIs and user input data.

I was able to implement the allow user to add flight data of Extend your Project Further.

## Challenges

I had some challenges with maneuvering through all the API GET requests since they all have their own different ways to call them. They're pretty similar for the most part, but finding the differences between them was tricky.

I also had some issues with deciding how to dynamically update the UI. I decided to POST all of the data to the local server at the end in one POST request. This meant that I had to keep passing necessary variable through my Promise.then() methods. I decided to do this so that I could store all of the data neatly in one endpoint on the server so that I could scale the app in the future without much tweaking to the server.

## Future Work

Some additional work I would like to update the travel-app project when i get more time: 

- [ ] Look into implementing most if not all of the suggestions in the Extend Yor Poject Further section
- [ ] Clean up the UI so it looks sleeker
- [ ] Build better tests

## Resources

* [https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date)
* [https://www.geeksforgeeks.org/how-to-calculate-the-number-of-days-between-two-dates-in-javascript/](https://www.geeksforgeeks.org/how-to-calculate-the-number-of-days-between-two-dates-in-javascript/)
* [https://stackoverflow.com/questions/19597361/parse-date-month-and-year-from-javascript-date-form](https://stackoverflow.com/questions/19597361/parse-date-month-and-year-from-javascript-date-form)
* [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil)