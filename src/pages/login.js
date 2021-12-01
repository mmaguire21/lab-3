import * as React from "react"
import Layout from '../components/layout'

const theme = {
  blue: {
      default: "#3f51b5",
      hover: "#283593"
  },
  pink: {
      default: "#c91751",
      hover: "#ad1457"
  }
};

export default class IndexPage extends React.Component {
  state = {
    Username: "",
    Password: "",
  }
  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    alert(`Welcome ${this.state.Username} ${this.state.Password}!`)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Layout>
          Username:
          <input
            type="text"
            name="Username"
            value={this.state.Username}
            onChange={this.handleInputChange}
          />
          Password:
          <input
            type="text"
            name="Password"
            value={this.state.Password}
            onChange={this.handleInputChange}
          />
        </Layout>
        <button type="submit">Submit</button>
      </form>
    )
  }
}