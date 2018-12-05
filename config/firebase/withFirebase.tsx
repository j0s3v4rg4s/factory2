import * as React from 'react'
import Firebase from './fire'

export default (App) => {
    return class AppWithFirebase extends React.Component<{ fireInstance: Firebase }> {
        static async getInitialProps(appContext) {
            const fireInstance = Firebase.getInstance()

            let appProps = {}
            if (typeof App.getInitialProps === 'function') {
                appProps = await App.getInitialProps(appContext)
            }
            return { ...appProps, fireInstance }
        }
        constructor(props) {
            super(props)
        }

        render() {
            const { fireInstance } = this.props
            return <App {...this.props} fireInstance={fireInstance} />
        }
    }
}
