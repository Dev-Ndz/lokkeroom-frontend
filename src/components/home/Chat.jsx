import axios from "../../api/axios";
import { useEffect, useState } from "react";
import Message from "./Message";
import Textbox from "./TextBox";

const MSGLIST_URL = "/lobby/14"

const Chat = () => {

    const [messagesList, setMessagesList] = useState([]);
    const[errMsg, setErrMsg] = useState("");

    const token = localStorage.getItem('jwtToken');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(MSGLIST_URL,
                    {headers: { Authorization: `Bearer ${token}`}}
                );
                setMessagesList(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return ( 
        <section id = "Chat">
            <div className="message-list">
            {messagesList?.map((message) => (
                <Message message={message} key={message.id} />
            ))}
            </div>
            <div className="text-box">
                <Textbox />
            </div>

        </section>
     );
}
 
export default Chat;