import api from "./api";

export async function login(data: any) {

    const response = await api
        .post('/login', data)
        .then((response) => {
            return response
        })
    return response

}
