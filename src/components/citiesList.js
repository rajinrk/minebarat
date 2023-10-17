import axios from "axios"
import { useEffect, useState } from "react"


export default function CitiesList({stateID , cityNameChange}){

    const [cities,setCities] = useState(null)

    useEffect(()=>{
        axios.get(`http://api.minebrat.com/api/v1/states/cities/${stateID}`)
          .then((result)=>{setCities(result.data)
    })
          .catch((err)=>console.log(err))
    },[stateID])
    return(
        <div>
        {cities && <h1>cities</h1>}
            <ul>
            {cities && cities.map((elem)=>{
                return <li onClick={()=>{
                    cityNameChange(elem.cityName)
                } }>
                    {elem.cityName}
                </li>
            })}
            </ul>
            
        </div>
    )
}