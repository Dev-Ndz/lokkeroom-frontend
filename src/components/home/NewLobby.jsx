import axios from "../../utils/axios";
import { useState } from "react";
// import useSocket from "../../hooks/useSocket";
const NewLobby = () => {

    const[inputValue, setInputValue] = useState("")
    const[errMsg, setErrMsg] = useState("")
    const[displayTextbox, setDisplayTextbox] = useState(false)
    // const{socket} = useSocket();

    const CreateLobby = async(name) => {
        try{
            await axios.post(
                "lobby/",
                { name: name },
            )
            // socket.emit("create_lobby", { name: name })

        }catch(err){
            setErrMsg(err.message)
            console.log(err)
        }
    }

    const HandleClick = async(e) => {
        e.preventDefault();
        CreateLobby(inputValue);
    }

    return (
        <div className="new-lobby">
            <div className={displayTextbox?"hidden":"create-lobby"}>
                <button className="lobby" onClick={() => {setDisplayTextbox(true)}}>New Lobby</button>
            </div>
            <div className={displayTextbox?"form-container":"hidden"}>
                <input className="lobby"
                    type="text" 
                    value={inputValue}
                    onChange={ (e) => setInputValue(e.target.value)}
                />
                <div className="button-container">
                    <button className="lobby" onClick={HandleClick}>submit</button>
                    <button className="lobby" onClick={ () => {setDisplayTextbox(false)}}>Cancel</button>
                </div>

            </div>

        </div>
     );
}
export default NewLobby;