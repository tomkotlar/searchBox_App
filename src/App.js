import React, { Component } from "react"
import { CardList } from "./Components/card-list/CardList"
import { SearchBox } from "./Components/search-box/SearchBox"
import "./App.css"

class App extends Component {
  state = {
    error: null,
    employees: [],
    searchField: ""
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(
        users => this.setState({ employees: users }),
        error => this.setState({ error })
      )
  }

  handleChange = event => {
    this.setState({ searchField: event.target.value })
  }

  render() {
    const { employees, searchField } = this.state
    const filtredEmployees = employees.filter(employee =>
      employee.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1 className="header">New Employees</h1>
        <SearchBox
          placeholder="serch employees"
          handleChange={this.handleChange}
        />
        <CardList employees={filtredEmployees} />
      </div>
    )
  }
}

export default App
