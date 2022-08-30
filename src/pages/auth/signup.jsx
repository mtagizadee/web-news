import React, {useState} from 'react';
import Logo from "../../components/Logo";
import {NavLink} from "react-router-dom";
import {AuthService} from "../../services/auth-service";
import {useNavigate} from "react-router";

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();

        if (password === confirmedPassword) {
            try {
                const response = await AuthService.signup({email,password,fullName});
                alert('Successfully signed up, navigating to login page...');
                navigate('/auth/login');
            } catch (error) {
                alert(error);
            }
        } else {
            alert('Password is not matching the confirmed password');
        }
    }

    return (
        <div className='full-screen center-content'>
            <form className='center-content' onSubmit={onSubmit}>
                <Logo clickable={false}/>
                <input
                    type="text"
                    required={true}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Full name"
                />
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
                <input
                    type="password"
                    required={true}
                    value={confirmedPassword}
                    onChange={(e) => setConfirmedPassword(e.target.value)}
                    placeholder="Confirm password"
                />
                <button className='auth-button'> Sign up </button>
                <p> Already have an account? <NavLink className='link' to='/auth/login'> Log in </NavLink> </p>
            </form>
        </div>
    );
};

export default Signup;