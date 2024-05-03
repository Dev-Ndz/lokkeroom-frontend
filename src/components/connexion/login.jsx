import { useState, useRef, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate, useLocation} from "react-router-dom"

import axios from "../../utils/axios";
const LOGIN_URL = '/login'

const Login = () => {
    const {setAuth, setUserId, setUsername} = useAuth();

    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const emailRef = useRef();
    const errRef = useRef();

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        emailRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    },[password, email])


    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            localStorage.removeItem('jwtToken');
            const response = await axios.post(LOGIN_URL,
                {
                    "email": email,
                    "password": password,
                },
            );
            console.log(response.data);
            const token = response.data.token
            localStorage.setItem('jwtToken', token);
            setAuth({
                email, 
                password, 
                token,
                userId: response.data.id,
                username: response.data.nickname
            })
            setEmail('')
            setPassword('')
            navigate(from, {replace: true })

        }catch(err){
            console.log(err)
            if(!err?.response){
                setErrMsg('No Server Response');
            }else if (err.response?.status===400){
                setErrMsg('Missing email or password');
            }else if (err.response?.status===403){
                setErrMsg('wrong password or email');
            }else if (err.response?.status===404){
                setErrMsg('no user for this email adress');
            }else{
                setErrMsg('Login Failed');
            }
        }
    }

    return (
        <section>
            <p ref ={errRef} className={errMsg ? "":"hidden"}>{errMsg}</p>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                    type="text"
                    ref={emailRef}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </section>
    );

}
 
export default Login;