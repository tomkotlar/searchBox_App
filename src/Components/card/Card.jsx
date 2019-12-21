import React from "react"
import "./Card.styles.css"

export const Card = ({ employee }) => {
  return (
    <div className="card-container">
      <img alt="employee" src={`https://i.pravatar.cc/300/?${employee.id}`} />
      <h1> {employee.name} </h1>
      <h3> {employee.username} </h3>
      <p>{employee.email}</p>
      <p>{employee.website}</p>
      <p>{employee.phone}</p>
    </div>
  )
}
