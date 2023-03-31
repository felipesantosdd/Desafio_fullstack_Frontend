import { useState } from "react";
import { FieldBox, RegisterBox } from "./register.styled";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from "next/link";

export function RegisterComponent() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit() {
        const registerData = {
            name: name,
            email: email,
            phone: phone,
            password: password
        }
        console.log(registerData)
        setName('');
        setEmail('');
        setPhone('');
        setPassword('');
    }

    return (
        <RegisterBox>

            <h1>Register</h1>
            <FieldBox>
                <TextField
                    id="outlined-required"
                    label="Full Name"
                    maxRows={4}
                    type='text'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <TextField
                    id="outlined-required"
                    label="Email"
                    type="email"
                    maxRows={4}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <TextField
                    id="outlined-required"
                    label="Phone"
                    maxRows={4}
                    type="tel"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                />
                <TextField
                    id="outlined-password-input"
                    label="password"
                    type="password"
                    maxRows={4}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <Button variant="contained" onClick={() => {
                    handleSubmit()
                }}>Register</Button>
                <Link href="/">
                    Login
                </Link>

            </FieldBox>
        </RegisterBox>
    )
}
