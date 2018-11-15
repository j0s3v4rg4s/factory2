import Button, { ButtonProps } from '@material-ui/core/Button'
import Spinner from './Spinner'

type IProps = {
    loader: boolean
} & ButtonProps

export default (props: IProps) => {
    const { loader } = props
    const buttonProps = Object.assign({}, props)
    delete buttonProps['loader']
    return (
        <Button {...buttonProps} style={{ minWidth: 200, ...props.style }}>
            {loader ? <Spinner size={21} width={2} /> : props.children}
        </Button>
    )
}
