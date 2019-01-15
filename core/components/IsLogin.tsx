import Router from 'next/router'
import * as React from 'react'
import Firebase from 'config/firebase/fire'
import firebase from 'firebase/app'
import Load from 'core/components/Load'

export default function(Wrapped) {
    return class IsLogin extends React.Component {
        state = {
            complete: false
        }
        private uns: firebase.Unsubscribe

        componentWillMount(): void {
            this.uns = Firebase.getInstance().auth.onAuthStateChanged((usr) => {
                if (!usr && typeof window != 'undefined') {
                    Router.push('/login').then(() => this.setState({ complete: true }))
                } else {
                    this.setState({ complete: true })
                }
            })
        }

        componentWillUnmount(): void {
            this.uns()
        }

        render(): React.ReactNode {
            const { complete } = this.state
            return complete ? <Wrapped {...this.props} /> : <Load />
        }
    }
}
