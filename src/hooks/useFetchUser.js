import React, {useEffect, useState} from 'react';
import {UserService} from "../services/user-service";

const useFetchUser = (token) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchUser = async () => {
        try {
            const response = await UserService.getMe(token);
            setUser(response.data);
        } catch (error) {
            alert(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchUser().catch(console.error);
    },[]);


    return {user,isLoading}
};

export default useFetchUser;