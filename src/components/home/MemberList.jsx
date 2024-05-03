import { useEffect, useState } from "react";
import axios from "../../utils/axios";
import useLobbyId from "../../hooks/useLobbyId";
const MemberList = () => {

    const [members, setMembers] = useState([]);
    const {lobbyId} = useLobbyId();
    const url = `lobby/${lobbyId.id}/get-userlist`

    const getUserList = async() => {
        console.log(url)
        try{
            const response = await axios.get(`lobby/${lobbyId.id}/get-userlist`,
            {headers: { Authorization: `Bearer ${localStorage.getItem('jwtToken')}`}}
            );
            setMembers(response.data);
        }catch(err){
            console.log(err)
        }
    }
    useEffect (() => {

        console.log(lobbyId.id)

        if (lobbyId.id!==undefined) {
            console.log("getting member list...")
            getUserList();
        }else{
            console.log("no lobby id, not getting member list")
        }
    },[lobbyId.id])

    return ( 
        <section id="member-list">
            <h2>MEMBERS</h2>
            <div className="list">
                {members.length>0? members?.map((member) => (
                <div key={member.id}>{member.nickname}</div>
                )):''}
            </div>
            

        </section>
     );
}
 
export default MemberList;