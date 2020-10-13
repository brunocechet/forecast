# The Forecast App

See the current weather for some City you want!

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn coverage`

Generates the code coverage to the `coverage` folder.

### `yarn deploy`

Build and push the build to the `gh-pages` branch from this current repository.<br />
It's helpful when configured Github Pages for this project.<br />
Uses [gh-pages](https://www.npmjs.com/package/gh-pages) npm package to do it.

## Third Party API's

## Open Weather

This project uses Open Weather Data to get information about the Weather.<br />
Consumes the `current` [endpoint](https://openweathermap.org/current) <br />
You could get your API Token creating an account [here](https://home.openweathermap.org/users/sign_up)

## Mapbox

This project uses MapBox to show the map from the current searched City.<br />
Uses the `[lat,lon]` info from Open Weather API.<br />
You could get more information and creating an account [here](https://www.mapbox.com/maps/)

## Flickr

This project uses Flickr API to get an image from the searched city.<br />
Is an old API and I intend to move to Unsplash in the future.<br />
You could get more information [here](https://www.flickr.com/services/api/explore/flickr.photos.search)


