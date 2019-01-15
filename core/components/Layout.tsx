import * as React from 'react'
import { ReactNode } from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import withStyles from '@material-ui/core/styles/withStyles'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider';
import Typography  from '@material-ui/core/Typography'

type Props = {
    classes?: any
    children?: ReactNode
}

const drawerWidth = 240

const Layout = (props: Props) => {
    const { classes } = props
    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Permanent drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={classes.drawer}
                classes={{ paper: classes.drawerPaper }}
                anchor="left">

                <div className={classes.toolbar}>
                    <Typography variant="h6" color="inherit">
                        Menú
                    </Typography>
                </div>
                <Divider/>


            </Drawer>
            <main className={classes.content}>
                {props.children}
            </main>
        </div>
    )
}

const styles = (theme) => {
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
            padding: `88px ${theme.spacing.unit * 3}px 24px`,
        }
    }
}

export default withStyles(styles)(Layout)
