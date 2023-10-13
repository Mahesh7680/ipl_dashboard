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

  return (
    <div className="match-card-item">
      <img src={competingTeamLogo} />
      <h5>{competingTeam}</h5>
      <p>{result}</p>
      <p>Lost</p>
    </div>
  )
}

export default MatchCard
