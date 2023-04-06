import api from "./api";

export async function deleteContact(id: string) {

    const token = localStorage.getItem('token');

    const response = await api
        .delete(`/contact/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then((response: any) => {
            return response
        })
    return response

}
