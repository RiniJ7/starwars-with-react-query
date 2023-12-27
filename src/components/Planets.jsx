import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Planet from './Planet';

const fetchPlanets = async () => {
  const res = await fetch("https://swapi.dev/api/planets/");
  return res.json();
};

const Planets = () => {
  //useQuery will manage the fetching under the hood . 
  //it will pass the data and refetch the data whenever required to do so
  //status is the status of the query . it can be 'success' 'pending' or 'error'
  
  const { data, status } = useQuery({
    queryKey: ['planets'],
    queryFn: fetchPlanets,
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