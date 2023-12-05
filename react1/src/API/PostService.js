import axios from "axios";

export default class PostService {
    static async getAll(limit = 10, page = 1) {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _limit: limit,
                    _page: page
                }
            })
            return response
    }

//функція для витгування поста з бекенду по id
    static async getById(id) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        return response
}
}
