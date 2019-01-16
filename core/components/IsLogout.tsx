import { State } from 'redux_store/share'
import Router from 'next/router'
import * as React from 'react'
import Load from 'core/components/Load'
import { connect } from 'react-redux'
import { UserState } from 'redux_store/user/user.share'

function mapStateToProps({ userReducer }: State) {
    return { ...userReducer }
}

const IsLogout = (Wrapped) => connect(mapStateToProps)((props: UserState) => {
    if (props.completeValidate && props.user) {
        Router.push('/')
        return <Load />
    } else if (props.completeValidate) {
        return <Wrapped {...props} />
    } else {
        return <Load />
    }
})


export default IsLogout