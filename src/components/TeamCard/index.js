import {Link} from 'react-dom'
import './index.css'

const TeamCard = props => {
  const {eachItem} = props
  const {name, id, teamImageUrl} = eachItem

  console.log(id)

  return (
    <Link to={`/team-matches/${id}`}>
      <div className="team-card-container">
        <img alt={name} src={teamImageUrl} />
        <p>{name}</p>
      </div>
    </Link>
  )
}

export default TeamCard
