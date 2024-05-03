import { NavLink } from "react-router-dom";
import useLobbyId from "../../hooks/useLobbyId";

const LobbyLink = ({lobby}) => {

    const {setLobbyId} = useLobbyId();

    return ( 

        <NavLink
        to={"/lobby/"+lobby.id}
        className={({isActive}) => isActive?"lobby active":"lobby"}
        onClick={ () => setLobbyId({id:lobby.id, name:lobby.name}) }>
            {lobby.id+": "+lobby.name}
        </NavLink>
        

    );
}

export default LobbyLink;