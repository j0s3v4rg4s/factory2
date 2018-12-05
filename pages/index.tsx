import React from 'react'
import Button from 'core/components/Button'
import Firebase from 'config/firebase/fire'

export default class extends React.Component<{fireInstance: Firebase}> {
    state = {
        load: true
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ load: false })
        }, 2000)
    }

    render() {
        return (
            <Button variant="contained" color="primary" loader={this.state.load}>
                Entrar
            </Button>
        )
    }
}
