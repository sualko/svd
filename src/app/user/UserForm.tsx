import { Button, Stack, TextField } from "@mui/material";
import React from 'react';

type Props = {
    user?: { user_id: number, name: string }
}

const UserForm: React.FC<Props> = ({ user }) => {
    return (
        <form method="POST">
            <Stack direction="column" spacing={1}>
                {!!user && <input type="hidden" name="user_id" value={user.user_id.toString()} />}

                <TextField name="name" defaultValue={user?.name ?? ''} label="Name" required />

                <Button type="submit" color="primary">{!!user ? 'Aktualisieren' : 'Erstellen'}</Button>
            </Stack>
        </form>
    )
}

export default UserForm;