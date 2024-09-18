import { useState } from "react";

function UseState(){

    const [toggleText, setToggleText] = useState(false);

    const handleToggleText = () => {
        setToggleText(!toggleText);
    }

    return(
        <center>
            <div className="UseState">
            <h1>UseState Hool</h1>
            <div>
                {toggleText && <p>Hello world</p>}
                <button style={{background:"yellow",border:'none',padding:'5px',borderRadius:'3px'}} onClick={handleToggleText} >Toggle Text</button>
            </div>
        </div>
        </center>
    );

}

export default UseState;