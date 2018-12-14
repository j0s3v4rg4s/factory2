import * as React from 'react'
import Typography from 'core/components/Typography'
import ValidatorField, { Required, Email, MinLength } from 'core/components/ValidatorField'
import Button from 'core/components/Button'

export default class extends React.Component<{ classes: any }> {
    render(): React.ReactNode {
        return (
            <React.Fragment>
                <div className="content">
                    <div className="item1">
                        <Typography variant="h1">Inicia sesión</Typography>
                        <ValidatorField
                            variant="outlined"
                            label="Correo"
                            placeholder="usuario@empresa.com"
                            fullWidth={true}
                            className="space"
                            type="email"
                            helperText="Ingresa tu usuario seguido de @<nombre de tu empresa>.com"
                            validators={[Required('Este campo es requerido'), Email('Correo invalido')]}
                        />
                        <ValidatorField
                            variant="outlined"
                            label="Contraseña"
                            placeholder="123456"
                            fullWidth={true}
                            className="space"
                            type="password"
                            helperText="Ingresa tu contraseña"
                            validators={[Required('Este campo es requerido'), MinLength(6, 'Tamaño mínimo 6 caracteres')]}
                        />
                        <Button color="primary" variant="contained" fullWidth={true}>
                            Entrar
                        </Button>
                    </div>
                    <div className="item2" />
                </div>

                <style jsx>{`
                    .content {
                        display: flex;
                        align-items: stretch;
                        height: 100vh;
                    }
                    .item1 {
                        width: 600px;
                        background-color: #f3f3f3;
                        padding: 200px 40px 0;
                    }
                    .item2 {
                        background-image: url('/static/img/login.jpg');
                        background-size: cover;
                        background-repeat: no-repeat;
                        flex-grow: 1;
                    }
                `}</style>
            </React.Fragment>
        )
    }
}
