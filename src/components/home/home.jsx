import LobbyList from "./LobbyList";
import './css/home.css'
import { Outlet } from "react-router";
import { useNavigate } from "react-router";
import useAuth from '../../hooks/useAuth'
import useUserList from '../../hooks/useUserList'
import MemberList from "./MemberList";

const Home = () => {

    const {auth} = useAuth();
    const username = auth.username;
    const id = auth.userId;

    let navigate = useNavigate(); 

    const handleLogOut = () => {
        localStorage.removeItem('jwtToken');
        navigate("/auth");
    }

    const {displayUserList, setDisplayUserList} = useUserList();

    return (
        <>
            <header>
                <h1>Lokkeroom</h1>
                <div className="profile">
                    Logged as {username} - id : {id} 
                    <button onClick={handleLogOut} id="logout">log out</button>
                </div>
            </header>
            <main>
                <LobbyList />
                <Outlet />
                {displayUserList ?<UserList />:<MemberList />}
                
                
            </main>
            <footer>
            </footer>
        </>



    );
}
export default Home;