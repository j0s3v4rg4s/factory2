import * as React from 'react'
import { Store } from 'redux'

import Firebase from './fire'
import { completeValidate, loadFistInformation } from 'redux_store/user/user.actions'

export default (App) => {
    return class AppWithFirebase extends React.Component<{ store: Store }> {
        // ***************************************************************************
        // Attributes
        // ***************************************************************************
        private readonly fireInstance = Firebase.getInstance()

        // ***************************************************************************
        // Methods
        // ***************************************************************************

        static async getInitialProps(appContext) {
            let appProps = {}
            if (typeof App.getInitialProps === 'function') {
                appProps = await App.getInitialProps(appContext)
            }
            return { ...appProps }
        }

        componentDidMount(): void {
            this.fireInstance.auth.onAuthStateChanged((user) => {
                if (user) {
                    this.props.store.dispatch(loadFistInformation(user))
                } else {
                    this.props.store.dispatch(completeValidate())
                }
            })
        }

        render() {
            return <App {...this.props} fireInstance={this.fireInstance} />
        }
    }
}
