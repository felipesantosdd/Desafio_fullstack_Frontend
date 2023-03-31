import { ContextProps, ProviderType } from "@/interfaces/interfaces";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { createContext, ReactNode, useState } from "react";

export const Context = createContext<ContextProps>({} as ContextProps)

export function Provider({ children }: ProviderType) {
    const [num, setNum] = useState(25)

    const columns: GridColDef[] = [
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 200,
            valueGetter: (params: GridValueGetterParams) =>
                `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
        {
            field: 'firstName',
            headerName: 'First name',
            width: 150,
            editable: false,
        },
        {
            field: 'lastName',
            headerName: 'Last name',
            width: 150,
            editable: false,
        },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 110,
            editable: false,
        },

    ];

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];

    return (
        <Context.Provider value={{
            num,
            setNum,
            columns,
            rows
        }}>{children}</Context.Provider>
    )
}
