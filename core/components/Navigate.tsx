import * as React              from 'react'
import { ReactNode }           from 'react'
import classNames              from 'classnames'
import { FontWeightProperty }  from 'csstype'
import withStyles              from '@material-ui/core/styles/withStyles'
import Drawer, { DrawerProps } from '@material-ui/core/Drawer'
import List                    from '@material-ui/core/List'
import ListItem                from '@material-ui/core/ListItem'
import ListItemText            from '@material-ui/core/ListItemText'
import ListItemIcon            from '@material-ui/core/ListItemIcon'
import People                  from '@material-ui/icons/People'

const drawerWidth = 230

const styles = (theme) => {
    console.log(theme)
    return {
        drawer: {
            width: drawerWidth,
            flexShrink: 0
        },
        drawerPaper: {
            width: drawerWidth
        },
        toolbar: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        item: {
            color: 'black',
            '&:hover': {
                backgroundColor: 'rgba(0, 152, 136, 0.09)'
            }
        },
        itemActiveItem: {
            color: theme.palette.primary['500'],
            '&:hover': {
                backgroundColor: 'transparent',
                color: theme.palette.primary['500']
            }
        },
        itemPrimary: {
            color: 'inherit',
            fontWeight: 'inherit' as FontWeightProperty
        }
    }
}

type Props = {
    classes?: any
    children?: ReactNode
    logo: string
} & DrawerProps

function Navigate(props: Props) {
    const { classes, logo } = props
    return (
        <Drawer variant="permanent" className={classes.drawer} classes={{ paper: classes.drawerPaper }}>
            <div>
                <img src={logo} style={{ width: '100%' }} alt="logo"/>
            </div>
            <List component="nav">
                <ListItem button className={classNames(classes.item, classes.itemActiveItem)}>
                    <ListItemIcon className={classes.itemPrimary}>
                        <People/>
                    </ListItemIcon>
                    <ListItemText classes={{ primary: classes.itemPrimary }} primary="Usuarios"/>
                </ListItem>
                <ListItem button className={classNames(classes.item)}>
                    <ListItemIcon className={classes.itemPrimary}>
                        <People/>
                    </ListItemIcon>
                    <ListItemText classes={{ primary: classes.itemPrimary }} primary="Nomina"/>
                </ListItem>
            </List>
        </Drawer>
    )
}

export default withStyles(styles)(Navigate)
