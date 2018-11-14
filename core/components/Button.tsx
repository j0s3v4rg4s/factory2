import Button, { ButtonProps } from '@material-ui/core/Button'

type IProps = {
    loader: boolean
} & ButtonProps

export default (props: IProps) => {
    const { loader } = props
    const buttonProps = Object.assign({}, props)
    delete buttonProps['loader']
    return <Button {...buttonProps}>{loader ? 'load' : props.children}</Button>
}
