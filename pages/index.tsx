import React from 'react'

import IsLogin from 'core/components/IsLogin'
import Layout from 'core/components/Layout'

class Index extends React.Component {


    render() {
        return (
            <Layout>
                <h1>holla</h1>
            </Layout>
        )
    }
}

export default IsLogin(Index)
