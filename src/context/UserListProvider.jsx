import {createContext, useState} from "react";

const UserListContext = createContext({});

export const UserListProvider = ({ children }) => {
    const [displayUserList, setDisplayUserList] = useState(false);
    return(
        <UserListContext.Provider value={{displayUserList, setDisplayUserList}}>
            {children}
        </UserListContext.Provider>
    )
}

export default UserListContext;