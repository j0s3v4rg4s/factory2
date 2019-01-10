import React from 'react'
import App, { Container } from 'next/app'
import getPageContext from 'config/theme'
import JssProvider from 'react-jss/lib/JssProvider'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { install } from '@material-ui/styles'
import { Provider } from 'react-redux'
import Firebase from 'config/firebase/fire'
import withFirebase from '../config/firebase/withFirebase'
import initStore from 'redux_store/store'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'

install()

class MyApp extends App<{ fireInstance: Firebase; store: any }> {
    private readonly pageContext

    static async getInitialProps({ Component, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

    constructor(props) {
        super(props)
        this.pageContext = getPageContext()
    }

    componentDidMount() {
        const jssStyles = document.querySelector('#jss-server-side')
        if (jssStyles && jssStyles.parentNode) {
            jssStyles.parentNode.removeChild(jssStyles)
        }
    }

    render() {
        const { Component, pageProps, fireInstance, store } = this.props
        const { sheetsRegistry, generateClassName, theme, sheetsManager } = this.pageContext

        return (
            <Container>
                <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
                    <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
                        <CssBaseline />
                        <Provider store={store}>
                            <Component pageContext={this.pageContext} {...pageProps} fireInstance={fireInstance} />
                        </Provider>
                    </MuiThemeProvider>
                </JssProvider>
            </Container>
        )
    }
}

export default withFirebase(withRedux(initStore)(withReduxSaga({ async: true })(MyApp)))
