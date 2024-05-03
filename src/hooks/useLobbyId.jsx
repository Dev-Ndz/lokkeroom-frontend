import { useContext } from "react";
import LobbyIdContext from "../context/LobbyIdProvider"

const useLobbyId = () => {
    return useContext(LobbyIdContext)
}

export default useLobbyId;