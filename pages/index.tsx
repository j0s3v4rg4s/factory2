import React from 'react'
import Button from 'core/components/Button'

export default class extends React.Component {
  state = {
    load: true
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ load: false })
    }, 2000)
  }

  render() {
    return (
      <Button variant="contained" color="primary" loader={this.state.load}>
        Entrar
      </Button>
    )
  }
}
