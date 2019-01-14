import * as React from 'react'
import Head from 'next/head'
import NProgress from 'nprogress'

export default function() {
    if (typeof document !== 'undefined') {
        NProgress.start()
    }

    return (
        <div className="pace">
            <Head>
                <link rel="stylesheet" type="text/css" href="https://unpkg.com/nprogress@0.2.0/nprogress.css"/>
            </Head>
        </div>
    )
}
