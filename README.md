# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# Final





This project aims to display the present weather conditions at a specific location. It includes features such as providing the current
temperature at the location, describing the outdoor weather (whether it's rainy or not), indicating the times of sunset and sunrise, and
informing the user about the last update time. Additionally, the website features a button that enables the user to rephrase the page.
I adhered to the format provided by the professor in class but introduced some additional features of my own:
- I implemented a feature that informs the user about the last update time of the webpage, ensuring they have visibility into the accuracy of the information provided.
- At the bottom of the page, I incorporated an automatic update for the copyright information, ensuring it reflects the current year.
- I revamped the overall design of the program by introducing a heading and rearranging the placement of features for a more polished and presentable appearance.

Embarking on a full-stack web development project with no prior experience in backend coding proved to be an enlightening journey. 
The program deepened my understanding of the intricate relationship between frontend and backend development, shedding light on the significance of APIs
in facilitating seamless communication between these components. Despite initial challenges, particularly in my attempt to create a custom backend, I opted
for a public API, allowing me to grasp the fundamental concepts and intricacies of the connection between backend and frontend coding. This experience not only
provided me with practical insights into API usage but also instilled a newfound confidence in navigating the complexities of full-stack development.
From conceptualizing the project structure to implementing design changes, I honed my skills and gained a holistic understanding of web development, laying a
solid foundation for future endeavors in the dynamic realm of software engineering.This project has been a significant journey for me, offering a chance to reflect
on the skills I've acquired throughout the semester and put them into practice. It served as a hands-on application of everything I learned on the course, allowing me
to see firsthand how much progress I've made since the beginning of the semester. While it wasn't always easy and presented its challenges, working on this project has
been a source of immense gratitude. The experience not only showcased my abilities but also provided a platform to confront and overcome obstacles, contributing to a deeper
understanding of the subject matter. Overall, this project has been a rewarding and transformative part of my learning journey.

My project is created from three main coding files: Footer which allow me to get the copyrights in the bottom of the website, weather.js which defines a functional
component called WeatherCard, responsible for rendering weather information on a web page. The component takes a prop called weatherData, which is expected to be an object
containing relevant weather details. The UI displays the location name, a refresh button triggering a page reload, the current day and date, weather description, temperature,
humidity, sunrise and sunset times, and the last update timestamp. The styling is handled by CSS, and the moment library is used for date and time formatting. The component 
also uses the Semantic UI React library for a styled refresh button. Additionally, there is a refresh function that reloads the entire page when the refresh button is clicked. 
And lastly, app.js defines the main application component that utilizes the user's geolocation to fetch and display current weather information. It uses both "useState" and "useEfect"
to retrieve the user's geographical coordinates and fetch weather data from the OpenWeatherMap API.If the data is undefined, a "Loading" message is shown.

