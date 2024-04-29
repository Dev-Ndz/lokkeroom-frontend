import axios from "axios";
import { useState } from "react";
const NewLobby = () => {

    const[inputValue, setInputValue] = useState("")
    const[errMsg, setErrMsg] = useState("")

    const token = localStorage.getItem('jwtToken');

    const HandleClick = async(e) => {
        e.preventDefault();
        try{
            await axios.post(
                "https://lokkeroom-7168807cbabe.herokuapp.com/api/lobby/",
                { name:inputValue },
                {headers: { 'Authorization': `Bearer ${token}`}}
            )

        }catch(err){
            setErrMsg(err.message)
            console.log(err)
        }
    }

    return (
        <div className="new-lobby">
            <input 
                type="text" 
                value={inputValue}
                onChange={ (e) => setInputValue(e.target.value)}
            />
            <button onClick={HandleClick}>New Lobby</button>
        </div>
     );
}
export default NewLobby;