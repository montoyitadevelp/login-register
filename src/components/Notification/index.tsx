import { Alert, AlertColor, Snackbar, Typography } from "@mui/material";
import React from "react";

type NotificationProps = {
    open: boolean,
    msg: string,
    severity: AlertColor | undefined,
    handleClose: () => void
}

//autoHideDuration es en milesimas de segundos, esta estatico y despues desaparece y aperece en el top center y es dinamico
export const Notification : React.FC<NotificationProps> = ({ open, msg, severity, handleClose }) =>{
    return (
        <Snackbar anchorOrigin={{ vertical:"top", horizontal:"center"}} autoHideDuration={4000} open={open} onClose={handleClose}>
            <Alert onClose={handleClose} severity={severity}>
                <Typography>{msg}</Typography>
            </Alert>
        </Snackbar>
    );
}