import { useEffect, useState } from "react"
import axios from 'axios'
import CitiesList from "./citiesList"

export default function ListComponent({ newDetails }) {

    const [states, setStates] = useState(null)
    const [stateName, setStateName] = useState('')
    const [stateID, setStateID] = useState('')
    const [cityName, setCityName] = useState('bangalore')

    function cityNameChange(name) {
        setCityName(name)
    }

    useEffect(() => {
        axios.get('http://api.minebrat.com/api/v1/states')
            .then((result) => {
                setStates(result.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h1>states</h1>
            <select value={stateID}  onChange={(e) => {
                const element = e.target.options[e.target.selectedIndex]
                const customAttrVal = element.getAttribute('data-stateName')
                setStateID(e.target.value)
                setStateName(customAttrVal)
            }}>
                {states && states.map((elem) => {
                    return <option key={elem.stateId} data-stateName={elem.stateName} value={elem.stateId}  >
                        {elem.stateName}
                    </option>
                })}
            </select>

            <CitiesList stateID={stateID} cityNameChange={cityNameChange} />

            <button type='button' onClick={() => newDetails({
                ...newDetails,
                cityName: cityName,
                stateName: stateName
            })} >submit</button>
        </div>
    )
}