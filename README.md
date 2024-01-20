# GoogleClone - Full Clone of Google Search Engine

Users can navigate the web using a simple interface utilizing MaterialUI and React JS that mirror's Google search engine. Search page responses are pulled from the Google Search API to display real time websites with associated links and descriptions. A React application with a Firebase backend for deployment using modular component structure to enhance organization and maintainability.

## Features

- `Custom React Hook`: Streamlines interaction with Google Search API
- `Context API` : Enables global sharing of states and values among components
- `Firebase backend` : Data handling and website deployment using Firebase hosting
- `Responsive Design` : Instant refresh and navigation between pages using react-router-dom


## Tech Stack

- `HTML, CSS, Material UI`: Frontend development, styling, and special icons
- `React JS`: Frontend library for user interface, routing, and responsiveness
- `Firebase`: Backend for database management and hosting


## How to Use

- The application is live on the web but you may clone your own instance

1. Clone the repository:
   ```bash
   git clone git@github.com:SaminSarker05/GoogleClone.git
   ```
2. Change into Project Directory:
   ```bash
   cd GoogleClone/google-clone
   ```
3. Install Project Dependencies:
   ```bash
   npm install package.json
   npm install react-scripts
   ```
4. Start the React Application:
   ```bash
   npm start
   ```

## React Components

<table>

<tr>
<td width="33%"">
<samp>StateProvider.js</samp>
</td>
<td width="66%">
<samp>Uses React Component API to create global state the enwraps application</samp>
</td>
</tr>
   
<tr>
<td width="20%"">
<samp>SearchBar Component</samp>
</td>
<td width="80%">
<samp>Functional component using useState hook to manage search input and dispatch actions to reducer.js</samp>
</td>
</tr>

<tr>
<td width="33%"">
<samp>Reducer.js</samp>
</td>
<td width="66%">
<samp>Pure function that updates the current state with action type</samp>
</td>
</tr>

<tr>
<td width="33%"">
<samp>useGoogleSearch.js</samp>
</td>
<td width="66%">
<samp>Custom hook that sends asynchronous request to Google API to fetch results</samp>
</td>
</tr>
  
</table>

## Website Images

- Home Page where users can query items
<img src="https://github.com/SaminSarker05/GoogleClone/blob/main/images/home.png" width=80%>

- Search Page queries results from Google with Links
<img src="https://github.com/SaminSarker05/GoogleClone/blob/main/images/search.png" width=80%>


## Future Enhancements

- Add search filters and sorting options
- Enable account creation and history search and preview
- Search recommendations depending on previous queries









mirring Google. The 



Context API
React JS
Material UI frontendy
Google Search API
custom react hook
firebase backend and deployment/hosting

custom-search-api

programmable search engine from google


deployment:
sudo npm install -g firebase-tools
firebase login
firebase init
choose hosting > existing project > build > y > N
npm run build
firebase deploy

https://console.firebase.google.com/project/clone-d60bd/overview
https://clone-d60bd.web.app

firebase hosting:disable
