import axios from "../../utils/axios";
import { useEffect, useState} from "react";
import Message from "./Message";
import Textbox from "./TextBox";
// import useSocket from "../../hooks/useSocket";
import { useParams } from "react-router";
import useLobbyId from "../../hooks/useLobbyId";

const Lobby = () => {

    const {lobbyId} = useLobbyId();

    const [isAdmin, setIsAdmin] = useState(false);
    // const {socket} = useSocket();
    const [messagesList, setMessagesList] = useState([]);
    // const[errMsg, setErrMsg] = useState("");
    const [localMessage, setlocalMessage] = useState(false);

    const getMessages = async (id) => {
        const url = "/lobby/"+id
        try {
            const response = await axios.get(url,
                {headers: { Authorization: `Bearer ${localStorage.getItem('jwtToken')}`}}
            );
            setMessagesList(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getMessages(lobbyId.id);
        setlocalMessage(false)
    },[lobbyId,localMessage]);

    // useEffect ( () => {
    //     socket.on("receive_message", (data) => {
    //         if(data.lobbyId == lobbyId.id){
    //             getMessages(lobbyId.id);
    //         }
    //     });
    // },[socket])

    const SetAdminRight = async () =>{
        const url = "/user/admin/"+lobbyId.id;
        try{
            const response = await axios.get(url,
                {headers: { Authorization: `Bearer ${localStorage.getItem('jwtToken')}`}}
            );
            setIsAdmin(response.data)
        }catch(err){
            console.log(err)
        }
    }
    useEffect( () => {
        SetAdminRight();
    },[lobbyId])

    return ( 
        <section id = "chat">
            <div className="section-header">
            <h2>{lobbyId.name}</h2>
            {isAdmin?(
                <button>Add member</button>
            ):(<></>)}
            </div>
            
            <div className="list">

            {messagesList?.map((message) => (
                <Message message={message} key={message.id} />
            ))}
            </div>
            <div className="text-box">
                <Textbox setlocalMessage={setlocalMessage}/>
            </div>

        </section>
     );
}

export default Lobby;