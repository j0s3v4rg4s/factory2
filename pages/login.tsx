import * as React from 'react'
import ValidatorField, { Required, Email, MinLength } from 'core/components/ValidatorField'
import Button from 'core/components/Button'
import { isLogin, login } from 'redux_store/user/user.actions'
import { connect } from 'react-redux'
import { State } from 'redux_store/share'
import { UserState } from 'redux_store/user/user.share'
import Typography from '@material-ui/core/Typography'
import IsLogout from 'core/components/IsLogout'

interface Props {
    isLogin: typeof isLogin
    login: typeof login
    userReducer: UserState
    fireInstance: any
}

class Login extends React.Component<Props> {
    private readonly emailRef: React.RefObject<ValidatorField> = React.createRef()
    private readonly passRef: React.RefObject<ValidatorField> = React.createRef()

    validateForm = (event: any) => {
        event.preventDefault()
        const email = this.emailRef.current.validate()
        const pass = this.passRef.current.validate()
        if (email.isValid && pass.isValid) {
            this.props.login(email.value, pass.value, '/')
        }
    }

    render(): React.ReactNode {
        return (
            <React.Fragment>
                <div className="content">
                    <div className="item1">
                        <Typography variant="h3">Inicia sesión</Typography>
                        <form onSubmit={this.validateForm}>
                            <ValidatorField
                                ref={this.emailRef}
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
                                ref={this.passRef}
                                variant="outlined"
                                label="Contraseña"
                                placeholder="123456"
                                fullWidth={true}
                                className="space"
                                type="password"
                                helperText="Ingresa tu contraseña"
                                validators={[
                                    Required('Este campo es requerido'),
                                    MinLength(6, 'Tamaño mínimo 6 caracteres')
                                ]}
                            />
                            <Button
                                loader={this.props.userReducer.isLoading}
                                color="primary"
                                variant="contained"
                                fullWidth={true}
                                type="submit"
                                style={{ marginTop: 20 }}>
                                Entrar
                            </Button>
                        </form>
                    </div>
                    <div className="item2" />
                </div>

                {/*language=SCSS*/}
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

const mapDispatchToProps = { isLogin, login }
const mapStateToProps = ({ userReducer }: State) => {
    return { userReducer }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IsLogout(Login))
