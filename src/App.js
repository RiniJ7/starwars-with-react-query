import React, {useState} from "react";
import Navbar from "./components/Navbar";
import People from "./components/People";
import Planets from "./components/Planets";



function App() {

  // the default display will be planets
  const [page, setPage] = useState('planets');

  return (
    <>
    <div className="App">
        <h1>Star Wars Info</h1>
        {/* we are using a prop called setPage that is set to a setPage function */}
        <div>
        <Navbar setPage={setPage} />
    <div className="content">
{/* conditional rendering using ternary operator */}
{ page === 'planets' ? <Planets /> : <People />}
</div>
    </div>
    </div>
   
    </>
  );
}

export default App;
