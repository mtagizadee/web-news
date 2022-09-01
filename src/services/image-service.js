import axios from "axios";
import {baseURL} from "../feature/api/api";

export class ImageService {
    static async findOne(newsId) {
        const url = baseURL + `images/${newsId}`;
        return await axios.get(url);
    }
}