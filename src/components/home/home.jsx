import LobbyList from "./LobbyList";
import './css/home.css'
import { Outlet } from "react-router";
import useAuth from '../../hooks/useAuth'
import MemberList from "./MemberList";

const Home = () => {

    const {auth} = useAuth();
    const username = auth.username;
    const id = auth.userId;

    return (
        <>
            <header>
                <h1>Lokkeroom</h1>
                <div className="profile">
                    Logged as {username} - id : {id}
                </div>
            </header>
            <main>
                <LobbyList />
                <Outlet />
                <MemberList />
            </main>
            <footer>
            </footer>
        </>



    );
}
export default Home;