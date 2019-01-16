import * as React from 'react'
import { ReactNode } from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import withStyles from '@material-ui/core/styles/withStyles'

import { connect } from 'react-redux'

import { State } from 'redux_store/share'
import { FactoryInfo } from 'redux_store/factory/factory.share'
import Navigate from './Navigate'
import Typography from '@material-ui/core/Typography'

type Props = {
    classes?: any
    children?: ReactNode
    factory?: FactoryInfo
    title: string
}

const drawerWidth = 230

const Layout = (props: Props) => {
    const { classes, factory, title } = props
    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Navigate
                logo={factory.img}
                PaperProps={{ style: { width: drawerWidth } }}
                className={classes.drawer}
                variant="permanent"
            />
            <main className={classes.content}>{props.children}</main>
        </div>
    )
}

const styles = (theme) => {
    console.log(theme)
    return {
        root: {
            display: 'flex'
        },
        appBar: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0
        },
        drawerPaper: {
            width: drawerWidth
        },
        toolbar: {
            ...theme.mixins.toolbar,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        content: {
            flexGrow: 1,
            padding: `88px ${theme.spacing.unit * 3}px 24px`
        },
        textSelect: {
            color: theme.palette.primary
        }
    }
}

function mapStateToProps({ factoryReducer }: State) {
    return { ...factoryReducer }
}

export default connect(mapStateToProps)(withStyles(styles)(Layout))
