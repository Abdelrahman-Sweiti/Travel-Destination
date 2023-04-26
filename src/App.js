import React from 'react';
import Home from './Components/Home/Home';
import Data from './Data/db.json';
import {Routes,Route} from 'react-router-dom';
import TourDetails from './Components/TourDetails/TourDetails';


function App() {
  return (
    <div>
      <Home data={Data}/>

<Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="/city/:id" element={<TourDetails/>}></Route>


</Routes>



    </div>
  );
}

export default App;
