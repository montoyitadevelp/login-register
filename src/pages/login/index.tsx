import React from "react";
import { Box, Button, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import { useNotification } from "../../context/NotificationContext";
import { LoginValidate } from "../../helpers/validateForm";
import { useFormik } from "formik";


type LoginType = {
    uid: string,
    pass: string,
}

//El box brinda el que componente que va recibir las caracteristicas del formulario, y este se comporta como un form
// sx es el tamaño para darle a los pies de cada componente referente a las manejillas del reloj
const LoginPage: React.FC<{}> = () => {
    const { getSuccess } = useNotification();
    const formik = useFormik<LoginType>({
        initialValues: {
            uid: '',
            pass: '',
        },
        validationSchema: LoginValidate,
        onSubmit: (values: LoginType) => {
          getSuccess(JSON.stringify(values))
        },
      });
    


    return (
        <Container maxWidth="xs">
            <Grid container direction="column" alignItems="center" justifyContent="center" sx={{ minHeight: "100vh" }}>
                <Grid item >
                    <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
                        <Typography variant="h4" sx={{ mt: 1, mb: 1 }}>
                            Log In
                        </Typography>
                        <Box component="form" onSubmit={formik.handleSubmit}>
                                <TextField
                                type="email" name="uid"  value={formik.values.uid}
                                onChange={formik.handleChange}
                                error={formik.touched.uid && Boolean(formik.errors.uid)}
                                helperText={formik.touched.uid && formik.errors.uid}
                                margin="normal" fullWidth label="Email" sx={{ mt: 2, mb: 1.5 }}/>
                                <TextField
                                type="password" name="pass" value={formik.values.pass}
                                onChange={formik.handleChange}
                                error={formik.touched.pass && Boolean(formik.errors.pass)}
                                helperText={formik.touched.pass && formik.errors.pass}
                                margin="normal" fullWidth label="Password" sx={{ mt: 1.5, mb: 1.5 }}/>
                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 1.5, mb: 3 }}>Log In</Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default LoginPage