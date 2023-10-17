import { useEffect, useState } from "react"
import axios from 'axios'
import CitiesList from "./citiesList"

export default function ListComponent({newDetails}) {

    const [states, setStates] = useState(null)
    const [stateID,setStateID] = useState('')
    const [stateName,setStateName]=useState('')
    const [cityName,setCityName]=useState('')

    function cityNameChange(name){
        setCityName(name)
    }

    useEffect(() => {
        axios.get('http://api.minebrat.com/api/v1/states')
        .then((result)=>  {setStates(result.data)
        
        })
        .catch(err => console.log(err))
    }, [stateName])
    return (
        <div>
            <h1>states</h1>
            <ul>
                {states && states.map((elem) => {
                    return  <li key={elem.stateId} onClick={()=>{
                            setStateID(elem.stateId)
                            setStateName(elem.stateName)
                            }}>
                        {elem.stateName}
                    </li>
                    
                })}
                </ul>

               

               <CitiesList stateID={stateID} cityNameChange={cityNameChange}/>
            <button type='button' onClick={()=>newDetails({...newDetails,
                cityName: cityName,
                stateName:stateName
            })} >submit</button>

        </div>
    )
}