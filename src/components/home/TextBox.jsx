import axios from "../../api/axios";
import { useState } from "react";
import io from "socket.io-client"

const socket = io.connect("https://lokkeroom-7168807cbabe.herokuapp.com")

const Textbox = () => {
    const[inputValue, setInputValue] = useState("")
    const[errMsg, setErrMsg] = useState("")

    const sendMessage = async(content) => {
        try{
            await axios.post(
                "/lobby/14",
                { content:content },
                {headers: { 'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`}}
            )
        }catch(err){
            setErrMsg(err.message)
            console.log(err)
        }
    }

    const HandleClick = async(e) => {
        e.preventDefault();
        sendMessage(inputValue);
    }


    return (
        <div className="new-message">
            <input 
                type="text" 
                value={inputValue}
                onChange={ (e) => setInputValue(e.target.value)}
            />
            <button onClick={HandleClick}>Send</button>
        </div>
     );

}
 
export default Textbox;