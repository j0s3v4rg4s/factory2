import React from 'react'
import App, { Container } from 'next/app'
import getPageContext from 'config/theme'
import JssProvider from 'react-jss/lib/JssProvider'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { install } from '@material-ui/styles'
import withFirebase  from 'config/firebase/withFirebase'
import Firebase from 'config/firebase/fire'


install()

class MyApp extends App<{fireInstance: Firebase}> {
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
        const { Component, pageProps, fireInstance } = this.props
        const { sheetsRegistry, generateClassName, theme, sheetsManager } = this.pageContext

        return (
            <Container>
                <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
                    <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
                        <CssBaseline />
                        <Component pageContext={this.pageContext} {...pageProps} fireInstance={fireInstance} />
                    </MuiThemeProvider>
                </JssProvider>
            </Container>
        )
    }
}

export default withFirebase(MyApp)
