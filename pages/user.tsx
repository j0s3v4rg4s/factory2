import React, {Component} from 'react'
import IsLogin from 'core/components/IsLogin'
import Layout from 'core/components/Layout'
import Typography from '@material-ui/core/Typography';

class User extends Component{
    render(): React.ReactNode {
        return (
            <Layout title="Usuarios">
                <Typography variant="h3">
                    Crear usuario
                </Typography>
            </Layout>
        )
    }
}

export default IsLogin(User)

