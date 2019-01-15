import * as React from 'react'
import { ReactNode } from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import withStyles from '@material-ui/core/styles/withStyles'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { connect } from 'react-redux'

import Typography from 'core/components/Typography'
import { State } from 'redux_store/share'
import { FactoryInfo } from 'redux_store/factory/factory.share'


type Props = {
    classes?: any
    children?: ReactNode
    factory?: FactoryInfo
}

const drawerWidth = 240

const List_Item = withStyles({
    selected: {
        backgroundColor: 'transparent !important'
    }
})(ListItem)

const Layout = (props: Props) => {
    const { classes, factory } = props
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
                    <img src={factory.img} alt="" style={{height: 50}}/>
                </div>
                <Divider/>

                <List component="nav">
                    <List_Item button selected={true}>
                        <ListItemText primary="Usuarios" classes={{primary: classes.textSelect}} />
                    </List_Item>
                    <List_Item button>
                        <ListItemText primary="otro"/>
                    </List_Item>
                </List>




            </Drawer>
            <main className={classes.content}>
                {props.children}
            </main>
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
            padding: `88px ${theme.spacing.unit * 3}px 24px`,
        },
        textSelect: {
          color: theme.palette.primary
        }
    }
}

function mapStateToProps({factoryReducer}: State) {
    return {...factoryReducer}
}

export default connect(mapStateToProps)(withStyles(styles)(Layout))
