import './index.css'

const MatchCard = props => {
  const {eachItem} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    id,
    manOfTheMatch,
    matchStatus,
    result,
    secondInnings,
    umpires,
    venue,
  } = eachItem

  console.log(result, matchStatus)

  return (
    <li className="match-card-item">
      <img alt={`competing team ${competingTeam}`} src={competingTeamLogo} />
      <h5>{competingTeam}</h5>
      <p>{result}</p>
      <p>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
