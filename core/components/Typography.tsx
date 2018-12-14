import Typography, { TypographyProps } from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles';


const Type = (props: TypographyProps) => <Typography {...props}>{props.children}</Typography>

export default withStyles({
    h1: {
        color: '#26464E',
        fontSize: '3rem',
        fontFamily: '\'Roboto Condensed\', sans-serif',
        fontWeight: 'bold'
    }
})(Type) 
