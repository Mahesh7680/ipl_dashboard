import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
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
  } = latestMatchDetails

  return (
    <div className="latest-matches-container">
      <div className="match-details">
        <div>
          <p>{competingTeam}</p>
          <p>{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <img src={competingTeamLogo} alt={competingTeam} />
      </div>
      <hr />
      <p>First Innings</p>
      <p>{firstInnings}</p>
      <p>Second Innings</p>
      <p>{secondInnings}</p>
      <p>Man Of The Match</p>
      <p>{manOfTheMatch}</p>
      <p>Umpires</p>
      <p>{umpires}</p>
    </div>
  )
}

export default LatestMatch
