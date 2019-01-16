import TextField, { TextFieldProps } from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import * as React from 'react'

const Text = (props: TextFieldProps) => {
    const { classes } = props
    return (
        <TextField
            {...props}
            classes={{ root: classes.root }}
            InputLabelProps={{ classes: { root: classes['label'] } }}
            InputProps={{
                classes: {
                    input: classes['input'],
                }
            }}
        />
    )
}
export default withStyles({
    root: {
        margin: '10px 0'
    },
    input: {
        padding: '13px 14px'
    },
    label: {
        transform: 'translate(14px, 14px) scale(1)'
    }
})(Text)
