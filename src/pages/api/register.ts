import api from "./api";

export async function register(data: any) {

    const response = await api
        .post('/users', data)
        .then((response) => {
            return response
        })
    return response

}
