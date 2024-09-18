import { useState } from "react";

function UseState2(){
    const initialState = {
        name: "",
        city: ""
    }
    const [formData, setFormData] = useState(initialState);
console.log(formData);
    const handleNameChange = (event) => {
        setFormData({...formData,
            name : event.target.value});
        console.log(event.target.value)
    }

    const handleCityChange = (event) => {
        setFormData({...formData,
            city:event.target.value});
        console.log(event.target.value)
    }
    console.log(formData);
    return(
        <center>
            <div className="UseState">
            <h1>UseState HooK</h1>
            <div>
                <input type="text" placeholder="Enter the Name of the city" name="name" onChange={handleNameChange} />
                <select name="city"  onChange={handleCityChange}>
                    <option value={"none"} id="none">None</option>
                    <option value={"bangaluru"} id="bangaluru">Bangaluru</option>
                    <option value={"mumbai"} id="mumbai">Mumbai</option>
                    <option value={"hyderadad"} id="hyderadad">Hyderadad</option>
                </select>
                <div>
                    <p></p>
                    <h2> Name is {formData.name}</h2>
                    <h3>City Name is {formData.city}</h3>
                </div>
            </div>
        </div>
        </center>
    );

}

export default UseState2;