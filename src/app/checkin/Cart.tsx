import { Box, Card, CardContent, CardHeader, IconButton, TextField, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear"
import AddIcon from "@mui/icons-material/AddCircle"
import RemoveIcon from "@mui/icons-material/RemoveCircle"
import { Stack } from "@mui/system";
import React from 'react';

type Props = {
    lineItems: { base_product_id: number, name: string, quantity: number, price: number }[]
}

const Cart: React.FC<Props> = ({ lineItems }) => {
    return (
        <Stack direction="column" spacing={3}>
            {lineItems.length === 0 && <Box p={3}>
                <Typography variant="body2" color="text.secondary" align="center">
                    Warenkorb ist leer.
                </Typography>
            </Box>}
            {lineItems.map(lineItem =>
                <Card key={lineItem.base_product_id}>
                    <CardHeader action={
                        <IconButton>
                            <ClearIcon />
                        </IconButton>
                    } title={lineItem.name} subheader={`${(lineItem.price / 100).toFixed(2)} €`} />
                    <CardContent>
                        <Stack direction="row" spacing={1} alignItems="center">
                            <IconButton>
                                <AddIcon />
                            </IconButton>
                            <TextField size="small" type="number" sx={{ width: '5em' }} value={lineItem.quantity} />
                            <IconButton>
                                <RemoveIcon />
                            </IconButton>
                        </Stack>
                    </CardContent>
                </Card>
            )}
        </Stack>
    )
}

export default Cart;