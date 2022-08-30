import axios from "axios";
import {baseURL} from "../feature/api/api";

export class AuthService {
    static async signup(dto) {
        return await axios.post(baseURL + 'auth/signup',dto);
    }

    static async login(dto) {
        return await axios.post(baseURL + 'auth/login',dto);
    }
}