import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import color from '@material-ui/core/colors/teal';


class Login extends React.Component<{ classes: any }> {
    render(): React.ReactNode {
        const { classes } = this.props
        return (
            <React.Fragment>
                <div className="content">
                    <div className="item1">
                        <Typography variant="h3" color="primary">Inicia sesión</Typography>
                        <TextField
                            variant="outlined"
                            label="Correo"
                            placeholder="correo@empresa.com"
                            fullWidth={true}
                            className="space"
                            type="email"
                            classes={{
                                root: classes.root
                            }}
                            InputLabelProps={{
                                classes: {
                                    root: classes.label
                                }
                            }}
                            InputProps={{
                                classes: {
                                    input: classes.input,
                                    notchedOutline: classes.input
                                },
                            }}
                        />
                        <TextField
                            variant="outlined"
                            label="Contraseña"
                            fullWidth={true}
                            type="password"
                            classes={{
                                root: classes.root
                            }}
                            InputLabelProps={{
                                classes: {
                                    root: classes.label
                                }
                            }}
                            InputProps={{
                                classes: {
                                    input: classes.input
                                }
                            }}
                        />
                        <Button color="secondary" variant="contained" fullWidth={true}>Entrar</Button>
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
                        background-color: #e0e0e0;
                        padding: 70px 40px;
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

export default withStyles({
    root: {
        margin: '10px 0'
    },
    input: {
        padding: '15px 14px',
    },
    label: {
        transform: 'translate(14px, 16px) scale(1)',
    },
})(Login)
