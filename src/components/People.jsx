// Fetch Data using Async/Await:
// Create a function that uses async/await to fetch data from the API endpoint.
// Use the fetch function to make the API call.
// Handle success and error cases within the function.
// Return the JSON data as the result of the function.
// Use Async Function with useQuery Hook:

// Import the useQuery hook from 'react-query'.
// In your component, call the useQuery hook with a unique query key and the async function created in step 1.
// The hook will manage the state of the data, providing access to the data, loading status, and error status.
// Based on the status, handle loading, error, or render your component with the fetched data.
// This structure separates the concerns of fetching data and handling its state. 
// It follows a clean approach by encapsulating the asynchronous logic in a function and utilizing React Query for managing the query state. 
// The final component can then easily react to loading, error, or success states.

//Use functions as props to pass information down to the child component 'Person'

import React, { StrictMode } from 'react'


const People = () => {
  return (
    <div>People</div>
  )
}

export default People;