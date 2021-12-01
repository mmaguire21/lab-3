import * as React from "react"
import Layout from '../components/layout'

var uadmin = "Matthieu";
var padmin = "Stogsdill";

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
    if (uadmin.localeCompare(this.state.Username)==0 && padmin.localeCompare(this.state.Password)==0) {
    alert(`Welcome ${this.state.Username} ${this.state.Password}!`)
    }
    else 
    alert('Incorrect Login')
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Layout>
          <p>Username:
          <input
            type="text"
            name="Username"
            value={this.state.Username}
            onChange={this.handleInputChange}
          />
          </p>
          <p>Password:
          <input
            type="text"
            name="Password"
            value={this.state.Password}
            onChange={this.handleInputChange}
          />
          </p>
        </Layout>
        <button type="submit">Submit</button>
      </form>
    )
  }
}