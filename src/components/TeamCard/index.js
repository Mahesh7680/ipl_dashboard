import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachItem} = props
  const {name, id, teamImageUrl} = eachItem

  console.log(id)

  return (
    <Link to={`/team-matches/${id}`}>
      <li className="team-card-container">
        <img alt={name} src={teamImageUrl} />
        <p>{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
