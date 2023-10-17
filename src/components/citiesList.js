import axios from "axios"
import { useEffect, useState } from "react"


export default function CitiesList({stateID , cityNameChange}){

    const [cities,setCities] = useState(null)
    const[city,setCity]=useState('')

    useEffect(()=>{
        axios.get(`http://api.minebrat.com/api/v1/states/cities/${stateID}`)
          .then((result)=>{setCities(result.data) })
          .catch((err)=>console.log(err))
    },[stateID])

    useEffect(()=>cityNameChange(city),[city])
    return(
        <div>
        {cities && <h1>cities</h1>}
        <select value={city} onChange={(e)=>{setCity(e.target.value)}} >
            {cities && cities.map((elem)=>{
                return <option key={elem.cityId} value={elem.cityName}  >
                    {elem.cityName}
                </option>
            })}
            </select>
        </div>
    )
}