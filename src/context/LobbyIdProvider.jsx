import {createContext, useState} from "react";

const LobbyIdContext = createContext({});

export const LobbyIdProvider = ({ children }) => {
    const [lobbyId, setLobbyId] = useState({});

    return(
        <LobbyIdContext.Provider value={{lobbyId, setLobbyId}}>
            {children}
        </LobbyIdContext.Provider>
    )
}

export default LobbyIdContext;