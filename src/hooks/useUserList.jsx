import { useContext } from "react";
import UserListContext from "../context/UserListProvider"

const useAuth = () => {
    return useContext(UserListContext)
}

export default useAuth;