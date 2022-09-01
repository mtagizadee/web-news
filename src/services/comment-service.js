import {baseURL} from "../feature/api/api";
import helpers from "../helpers";
import axios from "axios";

export class CommentService {
    static async create(dto,token) {
        const url = baseURL + 'comments';
        const authHeaders = helpers.generateAuthHeaders(token);
        const config = { headers: {...authHeaders} }
        return await axios.post(url,dto,config);
    }
}