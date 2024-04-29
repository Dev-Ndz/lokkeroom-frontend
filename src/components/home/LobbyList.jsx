import Lobby from "./Lobby";
import NewLobby from "./NewLobby";
import { useEffect, useState } from "react";

import axios from '../../api/axios'
const LOBBYLIST_URL = "/user/lobbies"



const LobbyList = () => {

    const [lobbyList, setLobbyList] = useState([])

    useEffect(() => {
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
        fetchData();
    }, []);


    return ( 
        <section id="lobby-list">
        {lobbyList?.map((lobby) => 
            (<Lobby name={lobby.name} key={lobby.id}/>)
        )}
        <NewLobby />
        </section>
     );
}
 
export default LobbyList;