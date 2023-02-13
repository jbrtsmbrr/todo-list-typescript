import React from 'react'
import { IState as IProps } from "../App";

const List: React.FC<IProps> = ({ people }) => {
  const renderPeople = (): JSX.Element[] => {
    return people.map((people) => {
      return <li className="List">
        <div className="List-header">
          <img className="List-img" alt={`${people.name}`} src={`${people.url}`} />
          <h2>{people.name}</h2>
        </div>
        <p>{people.age} years old</p>
        <p className="List-note">{people.note}</p>
      </li>
    })
  }
  return (
    <ul>
      {renderPeople()}
    </ul>
  )
}

export default List