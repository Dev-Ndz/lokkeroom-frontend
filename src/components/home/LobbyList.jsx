import LobbyLink from "./LobbyLink";
import NewLobby from "./NewLobby";
import { useEffect, useState } from "react";
// import useSocket from "../../hooks/useSocket";

import axios from '../../utils/axios'
const LOBBYLIST_URL = "/user/lobbies"



const LobbyList = () => {
    // const {socket} = useSocket();
    const [lobbyList, setLobbyList] = useState([])

    const fetchData = async () => {            
        try {
            const response = await axios.get(LOBBYLIST_URL,
                {headers: { Authorization: `Bearer ${localStorage.getItem('jwtToken')}`}}
            );
            setLobbyList(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // useEffect(() => {
    //     socket.on("new_lobby_created", (data) => {
    //         fetchData();
    //     })
    // },[socket])

    return ( 
        <section id="lobby-list-section">
            <h2>LOBBY LIST</h2>
            <div className="list">
            {lobbyList?.map((lobby) => 
            (<LobbyLink lobby={lobby} key={lobby.id}/>)
        )}
            </div>

        <NewLobby />
        </section>
     );
}
 
export default LobbyList;