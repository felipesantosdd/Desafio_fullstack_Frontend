import { ErrorAlert, SucessAlert } from "@/components/alert/alert";
import { ContextProps, ProviderType } from "@/interfaces/interfaces";
import { login } from "@/pages/api/login";
import { register } from "@/pages/api/register";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { createContext, ReactNode, useState } from "react";
import { useRouter } from 'next/router'
import { getContacts } from "@/pages/api/getContacts";
import { newContacts } from "@/pages/api/newContact";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete'
import { deleteContact } from "@/pages/api/deleteContact";

export const Context = createContext<ContextProps>({} as ContextProps)

export function Provider({ children }: ProviderType) {

    const router = useRouter()

    const [num, setNum] = useState(25)

    const formatPhoneNumber = (number: string) => {
        var cleaned = ('' + number).replace(/\D/g, '');
        var match = cleaned.match(/^(\d{2})(\d{4,5})(\d{4})$/);
        if (match) {
            return '(' + match[1] + ') ' + match[2] + '-' + match[3];
        }
        return null;
    }

    const columns: GridColDef[] = [
        {
            field: 'name',
            headerName: 'Nome',
            description: 'Esta coluna refere-se ao nome do contato.',
            sortable: false,
            width: 300,
            valueGetter: (params: GridValueGetterParams) =>
                `${params.row.name || ''}`,
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 300,
            editable: false,
        },
        {
            field: 'phone',
            headerName: 'Telefone',
            width: 300,
            editable: false,
            valueGetter: (params) => formatPhoneNumber(params.row.phone),
        },
        {
            field: 'id',
            headerName: 'Actions',
            width: 120,
            renderCell: (params) => (
                <Button variant="outlined" onClick={() => handleDelete(params.value)}>
                    <DeleteIcon />
                </Button>
            ),
        },

    ];

    const [rows, setRows] = useState([])

    async function handleRegister(data: any) {
        try {
            const res = await register(data)
            console.log(res)
            router.push("/")
            return res
        } catch (error: any) {
            ErrorAlert(error.response.data.message)
            console.log(error)
            return error
        }
    }

    async function handleLogin(data: any) {
        try {
            const res = await login(data)
            localStorage.setItem("token", res.data)
            router.push("/dashboard")
            return res
        } catch (error: any) {
            ErrorAlert(error.response.data.error.message)
            return error
        }
    }

    async function handleGet() {
        try {
            const res = await getContacts()
            setRows(res.data)
            return res
        } catch (error: any) {
            ErrorAlert(error.response.data.error.message)
            return error
        }
    }

    async function handleNewContact(data: any) {
        try {
            const res = await newContacts(data)
            setRows(res.data)
            handleGet()
            SucessAlert('Contato Adicionado')
            return res
        } catch (error: any) {
            ErrorAlert(error.response.data.message)
            return error
        }
    }

    async function handleDelete(id: string) {
        try {
            const res = await deleteContact(id)
            handleGet()
            SucessAlert('Contato Deletado')
        } catch (error: any) {
            ErrorAlert(error.response.data.message)
            return error
        }
    }

    return (
        <Context.Provider value={{
            num,
            setNum,
            columns,
            rows,
            handleLogin,
            handleRegister,
            handleGet,
            handleNewContact
        }}>{children}</Context.Provider>
    )
}
