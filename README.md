# Starwars-with-react-query

Welcome to Starwars-with-react-query application! This web application allows you to explore information about all the starwars characters and all starplanets details from starwars api. This application provides a user-friendly interface to browse through a list of Star Wars charactersand planets and view their details.

## Demo

[starwars-with-react-query](https://starwars-with-react-query-12dofntue-rinij7s-projects.vercel.app/) 

## Features

- **Character List:** Displays a list of Star Wars characters fetched from the Star Wars API (SWAPI).
- **Character Details:** Click on the "show info" button of a character to expand and view additional details, such as gender, birth year, and hair color.
- **Show/Hide Functionality:** Toggle to show or hide detailed information for each character, providing a clutter-free viewing experience.

## Technologies Used

Star Friends is built using the following technologies:

- **React.js:** A popular JavaScript library for building user interfaces.
- **React Query:** A powerful data fetching library for React applications, used for fetching and managing data from the Star Wars API.Bootstrap:** A front-end framework for designing responsive and mobile-first websites.
- **HTML**
- **CSS**

## Star Wars API

Starwars-with-react-query utilizes the Star Wars API (SWAPI) to fetch information about Star Wars characters. The SWAPI provides a comprehensive database of characters, films, planets, starships, and more from the Star Wars universe. You can learn more about the SWAPI and explore its documentation [here](https://swapi.dev/documentation).

## Getting Started

To run Star Friends locally on your machine, follow these steps:

1. **Clone the Repository:** Use `git clone https://github.com/RiniJ7/starwars-with-react-query` to clone the repository to your local machine.
2. **Install Dependencies:** Navigate to the project directory and run `npm install` to install all required dependencies.
3. **Start the Development Server:** Run `npm start` to start the development server.
4. **View the Application:** Open your web browser and navigate to `http://localhost:3000` to access Star Friends.

## Usage

Once the application is running, you can:

- Browse through the list of Star Wars characters or plantes
- Click on different pages to view more characters or planet details


## Screenshots

![Screen Shot 2024-04-16 at 12 06 43 AM](https://github.com/RiniJ7/starwars-with-react-query/assets/125235432/145f4c5f-d41d-44b1-a7a0-ea30b6b8c9f6)
![Screen Shot 2024-04-16 at 12 06 31 AM](https://github.com/RiniJ7/starwars-with-react-query/assets/125235432/4d791c74-de63-4aae-8657-73029a1a126b)



## My Learnings

1. **Fetch Data using Async/Await:**
   - Create a function that uses `async/await` to fetch data from the API endpoint.
   - Use the `fetch` function to make the API call.
   - Handle success and error cases within the function.
   - Return the JSON data as the result of the function.

2. **Use Async Function with useQuery Hook:**
   - Import the `useQuery` hook from 'react-query'.
   - In your component, call the `useQuery` hook with a unique query key and the async function created in step 1.
   - The hook will manage the state of the data, providing access to the data, loading status, and error status.
   - Based on the status, handle loading, error, or render your component with the fetched data.

This structure separates the concerns of fetching data and handling its state. 
It follows a clean approach by encapsulating the asynchronous logic in a function and utilizing React Query for managing the query state. 
The final component can then easily react to loading, error, or success states.

3. **Create a child component to pass information as props**
   -The child component receives the data prop and uses it to render a list. You can customize the rendering logic based on your actual data structure and UI requirements.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or create a pull request.

## License

This project is licensed under the MIT License.


