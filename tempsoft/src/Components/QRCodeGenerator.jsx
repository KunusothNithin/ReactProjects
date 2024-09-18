import { useState } from "react";
import {QRCode} from "react-qr-code";
function QRCodeGenerator() {
   
   const [inputValue,setInputValue] = useState("");
   const [qrCode, setQrCode] =  useState("");

    const handleQRGenerator = () => {
        setQrCode(inputValue);
        setInputValue('');
    }
    return(
    <center>
        <div className="qr-container">
        <h1>Qr-Code-Generator</h1>
        <div className="input-div">
            <input type="text" className="form-control" name="qr-code"  placeholder="Enter your value Here" onChange={(e) => {setInputValue(e.target.value)}}/>
            <button className="btn btn-success my-button" onClick={handleQRGenerator}>Generate-Qr</button>
        </div>
        <div>
           <QRCode id="qr-code-value" value={qrCode} size={300} bgColor="#fff" />
        </div>
    </div>
    </center>
    );
}

export default QRCodeGenerator;