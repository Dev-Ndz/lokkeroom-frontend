import axios from "../../utils/axios";
import { useState, useEffect } from "react";
// import useSocket from '../../hooks/useSocket'
import useLobbyId from "../../hooks/useLobbyId";

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