import Document, { Head, Main, NextScript } from 'next/document'
import * as React from 'react'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        let pageContext
        const transform = Component => {
            return props => {
                pageContext = props.pageContext
                return <Component {...props} />
            }
        }
        const page = ctx.renderPage(transform)
        const styles = flush()
        const initialProps = await Document.getInitialProps(ctx)
        return {
            ...initialProps,
            ...page,
            styles: (
                <React.Fragment>
                    <style
                        id="jss-server-side"
                        dangerouslySetInnerHTML={{ __html: pageContext.sheetsRegistry.toString() }}
                    />
                    {styles || null}
                </React.Fragment>
            )
        }
    }

    render() {
        return (
            <html>
                <Head>
                    <style>{`body { margin: 0 } /* custom! */`}</style>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                </Head>
                <body className="custom_class">
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}
