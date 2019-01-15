import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import { FontWeightProperty } from 'csstype'

const styles = {
    h1: {
        color: '#26464E',
        fontSize: '3rem',
        fontFamily: "'Roboto Condensed', sans-serif",
        fontWeight: 'bold' as FontWeightProperty
    },
    h6: {
        fontFamily: "'Roboto Condensed', sans-serif",
        fontWeight: 'bold' as FontWeightProperty
    }
}

export default withStyles(styles)(Typography)
