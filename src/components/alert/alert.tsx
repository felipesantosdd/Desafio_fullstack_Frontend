import Swal from "sweetalert2"

export const SucessAlert = (message: string) => {
    Swal.fire(
        'Sucesso',
        message,
        'success'
    )
}
export const ErrorAlert = (message: string) => {
    Swal.fire(
        'Erro',
        message,
        'error'
    )
}
