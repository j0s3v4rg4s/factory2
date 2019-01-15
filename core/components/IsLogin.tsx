import Router from 'next/router'
import * as React from 'react'
import Load from 'core/components/Load'
import { connect } from 'react-redux'
import { State } from 'redux_store/share'
import { UserState } from 'redux_store/user/user.share'

function mapStateToProps({ userReducer }: State) {
    return { ...userReducer }
}

export default function(Wrapped) {
    return connect(mapStateToProps)((props: UserState ) => {
        if (props.completeValidate && props.user) {
            return <Wrapped {...props} />
        } else if (props.completeValidate) {
            Router.push('/login')
            return <Load />
        } else {
            return <Load />
        }
    })
}
