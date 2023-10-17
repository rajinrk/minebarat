import React, { useEffect } from 'react'
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ListComponent from './components/List';
import ResultComponent from './components/ResultComponent';

function App() {

    const [details,setDetails]=useState(null)
    

    function newDetails(name){
        setDetails({...details,cityName : name.cityName,stateName : name.stateName})
    }

return(
    <div>
        <ListComponent newDetails={newDetails} />
        {details && <ResultComponent details={details}/>}
       
    </div>
) 

}

export default App;
 