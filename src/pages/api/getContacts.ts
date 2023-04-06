import api from "./api";

export async function getContacts() {

    const token = localStorage.getItem('token');

    const response = await api
        .get('/contact', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then((response: any) => {
            return response
        })
    return response

}
