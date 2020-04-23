# Evaluate News Natural Language Processing App Project

## Table of Contents

* [Instructions](#instructions)
* [Goals](#goals)
* [Challenges](#challenges)
* [Future Work](#future-work)
* [Resources](#resources)

## Instructions

To view the page open terminal and point to project root folder ` cd /evaluate-news-nlp` then run `npm run start`. In your browser open [http://localhost:8081/](http://localhost:8081/) and start testing out the app's functionality.

## Goals

The news evaluator made use of the webpack module bundler tool (along with loaders and plugins) to take a url input and make a POST request to the Aylien API. The UI is dynamically updated based on the response from the external API. The app also makes use of service workers to display a cached version of the page when offline.

## Challenges

I had some issues with CORS and not being able POST to the exress router, adding `mode: 'cors'` solved the issue. I also had trouble getting my tests to work, it's something I need to brush up on and only was able to get very simple tests to work.

## Future Work

Some additional work I would like to update the weather-journal-app project when i get more time: 

- [ ] Improve test functionality.
- [ ] Update UI so that it is more aesthetically pleasing.

## Resources

* [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
* [https://developers.google.com/web/tools/workbox/guides/codelabs/webpack](https://developers.google.com/web/tools/workbox/guides/codelabs/webpack)
* [https://jestjs.io/docs/en/expect](https://jestjs.io/docs/en/expect)
* [https://devhints.io/jest](https://devhints.io/jest)
* [https://docs.aylien.com/textapi/sdks/#node-js-sdk](https://docs.aylien.com/textapi/sdks/#node-js-sdk)