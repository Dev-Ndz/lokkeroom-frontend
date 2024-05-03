import axios from "../../utils/axios";
import { useState, useEffect } from "react";
// import useSocket from '../../hooks/useSocket'
import useLobbyId from "../../hooks/useLobbyId";
import './css/textbox.css'

const Textbox = ({setlocalMessage}) => {

    // const {socket} = useSocket();
    const {lobbyId} = useLobbyId();
    const url = "/lobby/"+lobbyId.id

    const[inputValue, setInputValue] = useState("")
    const[errMsg, setErrMsg] = useState("")

    const sendMessage = async(content) => {
        try{
            console.log("send message to ", lobbyId.id)
            // socket.emit("send_message",{lobbyId:lobbyId.id})
            await axios.post(
                url,
                { content:content },
                {headers: { 'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`}}
            )
            setlocalMessage(true);
            setInputValue("")
        }catch(err){
            setErrMsg(err.message)
            console.log(err)
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        sendMessage(inputValue);
    }


    return (
        <form className="new-message" onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={inputValue}
                onChange={ (e) => setInputValue(e.target.value)}
            />
            <button type="submit" id="send-message">Send</button>
        </form>
     );

}
 
export default Textbox;