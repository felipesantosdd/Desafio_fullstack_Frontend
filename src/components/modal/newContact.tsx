import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Context } from '@/provider/provider';
import { ErrorAlert } from '../alert/alert';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


function isValidNumber(phoneNumber: string) {

    if (phoneNumber.length !== 10 && phoneNumber.length !== 11) {
        ErrorAlert('O número de telefone deve ter 10 ou 11 dígitos.')
        return false;
    }

    const validPhoneNumberRegex = /^(\d{2})?(\d{4,5})\d{4}$/;
    if (!validPhoneNumberRegex.test(phoneNumber)) {
        ErrorAlert('O número de telefone deve estar no formato DDXXXXXXXX ou DDXXXXXXXXX, onde D é um dígito.')
        return false;
    }

    return true;
}


export default function CustomModal() {

    const { handleNewContact } = React.useContext(Context)

    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [email, setEmail] = React.useState('')

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    function handleSubmit() {
        const userData = {
            name: name,
            phone: phone.replace(/\D/g, ''),
            email: email
        }

        const isValid = isValidNumber(userData.phone)
        if (!isValid) {
            ErrorAlert('Numero Invalido')
            return
        }

        handleNewContact(userData)

    }



    return (
        <div>
            <Button onClick={handleOpen}>Novo Contato</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Novo Contato
                    </Typography>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '40ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" label="Nome" variant="outlined" onChange={(e) => setName(e.target.value)} />
                        <TextField id="outlined-basic" label="Telefone" variant="outlined" onChange={(e) => setPhone(e.target.value)} />
                        <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
                        <Button variant="contained" onClick={() => {
                            handleSubmit(),
                                handleClose()
                        }}>Adicionar</Button>

                    </Box>

                </Box>
            </Modal>
        </div>
    );
}
