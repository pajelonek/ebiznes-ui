import {createContext, useState} from "react";

const UserContext = createContext("true");

function UserProvider(props){

    const [User, setUser] = useState("true");

    return(
        <UserContext.Provider value={[User,setUser]}>
            {props.children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider };