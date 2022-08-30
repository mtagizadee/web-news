import React, {useState} from 'react';
import Logo from "../../components/Logo";
import {NavLink} from "react-router-dom";
import {AuthService} from "../../services/auth-service";
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {setIsAuth, setToken} from "../../feature/auth/authSlice";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await AuthService.login({email,password});
            dispatch(setIsAuth(true));
            dispatch(setToken(response.data.access_token));
            alert('Successfully logged in, navigating to home page...');
            navigate('/');
        } catch (error) {
            alert(error);
        }
    }

    return (
        <div className='full-screen center-content'>
            <form className='center-content' onSubmit={onSubmit}>
                <Logo clickable={false}/>
                <input
                    type="email"
                    required={true}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <input
                    type="password"
                    required={true}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button className='auth-button'> Log in </button>
                <p> Don't have an account? <NavLink className='link' to='/auth/signup'> Sign up </NavLink> </p>
            </form>
        </div>
    );
};

export default Login;