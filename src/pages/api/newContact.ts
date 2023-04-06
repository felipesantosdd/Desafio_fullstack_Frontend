import api from "./api";

export async function newContacts(data: any) {

    const token = localStorage.getItem('token');

    const response = await api
        .post('/contact', data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then((response: any) => {
            return response
        })
    return response

}
