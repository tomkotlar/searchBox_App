import React from "react"
import { Card } from "../card/Card"
import "./CardList.styles.css"

export const CardList = props => {
  return (
    <div className="card-list">
      {props.employees.map(employee => (
        <Card key={employee.id} employee={employee} />
      ))}
    </div>
  )
}
