import {baseURL} from "../feature/api/api";
import helpers from "../helpers";
import axios from "axios";

export class UserService {

    static async getMe(token) {
        const url = baseURL + 'auth/me';
        const authHeaders = helpers.generateAuthHeaders(token);
        const config = { headers: {...authHeaders} }

        return await axios.get(url,config);
    }
}