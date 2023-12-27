import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Planet from './Planet';


const fetchPlanets = async ({ queryKey }) => {
  const [key, greeting, page] = queryKey;
  console.log(greeting);
      const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
      return res.json();
    }


const Planets = () => {

  const [ page, setPage ] = useState(1);


   //useQuery will manage the fetching under the hood . 
  //it will pass the data and refetch the data whenever required to do so
  //status is the status of the query . it can be 'success' 'pending' or 'error'

  // const { data, status } = useQuery({
  //   queryKey: ['planets', 'hello ninjas', page],
  //   queryFn: fetchPlanets ('planets', 'hello ninjas', page),

    //can manually update the fetched data moves from 'fresh' to 'stale'
    // staleTime: 2000,
    //time in ms till data will be cached
    // cacheTime: 10,
    //on success status, a function can be triggered
    // onSuccess: () => console.log ('data fetched with no problem')
  // });

  const { data, status } = useQuery({
    queryKey: ['planets', 'hello ninjas', page],
    queryFn: fetchPlanets,
  });

  // const { data, status } = useQuery(['planets', 'hello, ninjas', page], fetchPlanets);


console.log(data);
  
return (
    <div>
      <h2>Planets</h2>
      <button onClick={() => setPage(1)}>page 1</button>
      <button onClick={() => setPage(2)}>page 2</button>
      <button onClick={() => setPage(3)}>page 3</button>


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
        { data.results.map((planet) =>(<Planet key={planet.name} planet = { planet }/>))}
        
        </div>

    )}
    </div>
  )
}

export default Planets;