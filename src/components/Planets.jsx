import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Planet from './Planet';



const Planets = () => {
  //useQuery will manage the fetching under the hood . 
  //it will pass the data and refetch the data whenever required to do so
  //status is the status of the query . it can be 'success' 'pending' or 'error'
  const fetchPlanets = async () => {
    const res = await fetch("https://swapi.dev/api/planets/");
    return res.json();
  };

  
  const { data, status } = useQuery({
    queryKey: ['planets'],
    queryFn: fetchPlanets,
    //can manually update the fetched data moves from 'fresh' to 'stale'
    // staleTime: 2000,
    //time in ms till data will be cached
    // cacheTime: 10,
    //on success status, a function can be triggered
    // onSuccess: () => console.log ('data fetched with no problem')
  });
console.log(data);
  
return (
    <div>
      <h2>Planets</h2>
      {status === 'loading' && (
      <div>loading data...</div>
    )}
      {status === 'error' && (
      <div>Error fetching data!!!</div>
    )}

    {/* <p>{ status }</p> */}

    {status === 'success' && (
      <div>
        {/* {data.results.map(planet =><div>{planet.name}</div>)} */}
        { data.results.map(planet => <Planet key={planet.name} planet = { planet }/>)}
        
        </div>

    )}
    </div>
  )
}

export default Planets;