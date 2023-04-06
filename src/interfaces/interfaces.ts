import { GridColDef } from '@mui/x-data-grid';
import { ReactNode } from 'react';

export type ContextProps = {
    num: number;
    setNum: React.Dispatch<React.SetStateAction<number>>;
    columns: GridColDef<any, any, any>[];
    handleRegister(data: any): Promise<unknown>;
    handleLogin(data: any): Promise<unknown>,
    handleGet(): Promise<any>;
    handleNewContact(data: any): Promise<any>;
    rows: ({
        id: number;
        lastName: string;
        firstName: string;
        age: number;
    } | {
        id: number;
        lastName: string;
        firstName: string;
        age: null;
    } | {
        id: number;
        lastName: string;
        firstName: null;
        age: number;
    })[]
}

export type ProviderType = {
    children: ReactNode;
}
