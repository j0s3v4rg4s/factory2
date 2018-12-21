import TextField from 'core/components/TextField'
import { TextFieldProps } from '@material-ui/core/TextField'
import React, { ChangeEvent } from 'react'

type iProps = {
    validators?: ((value: string | number) => string)[]
    changeData?: (data: Data) => void
} & TextFieldProps

type Writeable<T> = { -readonly [P in keyof T]-?: T[P] }

interface Data {
    value: string
    valid: boolean
}

export default class extends React.Component<iProps> {
    state = {
        data: '',
        text: '',
        valid: true
    }

    componentWillMount() {
        this.setState({ data: this.props.value, text: this.props.helperText })
    }

    change = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>) => {
        this.setState({ data: e.target.value.toLowerCase() })
        const errors = []
        if (this.props.validators) {
            this.props.validators.forEach((fn) => {
                const err = fn(e.target.value.toLowerCase())
                if (err) {
                    errors.push(err)
                }
            })
        }
        const isValid = errors.length === 0
        this.updateChange(e.target.value, isValid)
        if (isValid) {
            this.setState({ text: this.props.helperText, valid: isValid })
        } else {
            this.setState({ text: errors[0], valid: isValid })
        }
    }

    updateChange = (value: string, valid: boolean) => {
        if (this.props.changeData) {
            this.props.changeData({value, valid})
        }
    }

    render() {
        const props = Object.assign({}, this.props) as Writeable<iProps>
        delete props['validators']
        delete props['changeData']
        return (
            <TextField
                {...props}
                value={this.state.data || ''}
                onChange={this.change}
                helperText={this.state.text}
                error={!this.state.valid}
            />
        )
    }
}

export function Required(msg = 'This field is required'): (value: string | number) => string {
    return function(value: string | number) {
        const _value = value + ''
        if (!!_value) {
            return null
        } else {
            return msg
        }
    }
}

export function Email(msg = 'Email invalid'): (value: string | number) => string {
    return function(value: string | number) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (re.test(value + '')) {
            return null
        } else {
            return msg
        }
    }
}

export function MinLength(length: number, msg = 'Invalid minimum size') {
    return function(value: string | number) {
        const _value = value + ''
        if (_value.length >= length) {
            return null
        } else {
            return msg
        }
    }
}
