import { NavLink } from "react-router-dom";
import './css/member.css'
import { useState } from "react";

const Member = ({member}) => {

    // const [lobbyId, setLobbyId] = useState

    return ( 
        <NavLink
            to={"#"}
            className="member"
        >
            {member.nickname}
        </NavLink>
     )
}

{/* <NavLink
to={"/lobby/"+lobby.id}
className={({isActive}) => isActive?"lobby active":"lobby"}
onClick={ () => setLobbyId({id:lobby.id, name:lobby.name}) }>
    {lobby.id+": "+lobby.name}
</NavLink> */}



 
export default Member;