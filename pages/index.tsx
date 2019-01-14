import React from 'react'
import Button from 'core/components/Button'
import IsLogin from 'core/components/IsLogin'
import Firebase from 'config/firebase/fire'

class Index extends React.Component {
    state = {
        load: true
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ load: false })
        }, 2000)
    }

    logout = ()=> {
        Firebase.getInstance().auth.signOut()
    }

    render() {
        return (
            <Button variant="contained" color="primary" loader={this.state.load} onClick={this.logout}>
                Entrar
            </Button>
        )
    }
}

export default IsLogin(Index)
