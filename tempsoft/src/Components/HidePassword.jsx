import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

function HidePassword() {

    const [hide, setHide] = useState(false);
    const handleClick = () => {
        setHide(!hide);
    }

    return (
        <div className="pass-container" style={{ textAlign: 'center' , gap: '10px'}}>
            <h1>Hide Password</h1>
            <div className="input-container" style={{ display: 'flex' }}>
                <input type={hide?  "text":"password" } placeholder="Enter the Password Here" />
                <div className="eye-container">
                <FontAwesomeIcon className='eye' icon={hide? faEyeSlash : faEye }  onClick={handleClick} />
                </div>
            </div>
        </div>
    );
}

export default HidePassword;
