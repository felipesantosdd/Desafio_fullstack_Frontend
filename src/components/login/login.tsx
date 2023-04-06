import { FieldBox, LoginBox } from "./login.styled";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useContext, useState } from "react";
import Link from "next/link";
import { Context } from "@/provider/provider";

export function Login() {

    const { handleLogin } = useContext(Context)

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit() {
        const userData = {
            email: username,
            password: password
        }

        handleLogin(userData)

    }


    return (
        <LoginBox>
            <h1>Login</h1>
            <FieldBox>

                <TextField
                    id="outlined-required"
                    label="username"
                    maxRows={4}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    id="outlined-password-input"
                    label="password"
                    type="password"
                    maxRows={4}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button variant="contained" onClick={() => {
                    handleSubmit()
                }}>Login</Button>
                <Link href="/register">
                    Register
                </Link>

            </FieldBox>
        </LoginBox>
    )
}
