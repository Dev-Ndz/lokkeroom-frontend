import { formatDate } from "../../utils/formatDate";
import { useState, useEffect } from "react";
import useAuth from '../../hooks/useAuth'
import './css/message.css'

const Message = ({message}) => {

    const [isAuthor, setIsAuthor] = useState();
    const {auth} = useAuth();

    useEffect( () => {
        if (auth.userId == message.user_id ) {
            setIsAuthor(true)
        }else{
            setIsAuthor(false)
        }
    },[auth,message])

    return ( 
        <div className={isAuthor? "message sent": "message recieved"}>
            <div className="author">{message.nickname}:</div>
            <div className="container">
                <div className = "content">{message.content}</div>
                <div className="date">{formatDate(message.timestamp)}</div>
            </div>
        </div>
     );
}
 
export default Message;