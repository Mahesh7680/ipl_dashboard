import {Component} from 'react'
import LatestMatch from '../LatestMatch/index'
import MatchCard from '../MatchCard/index'

import './index.css'

class TeamMatches extends Component {
  state = {teamBannerUrl: '', latestMatchDetails: {}, recentMatches: []}

  componentDidMount() {
    this.getApiData()
  }

  //   competingTeam,competingTeamLogo,date,firstInnings,id,manOfTheMatch,matchStatus,result,secondInnings,umpires,venue
  getApiData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl/KKR')
    const data = await response.json()
    const updateLatestMatchDetails = {
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      date: data.latest_match_details.date,
      firstInnings: data.latest_match_details.first_innings,
      id: data.latest_match_details.id,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      matchStatus: data.latest_match_details.match_status,
      result: data.latest_match_details.result,
      secondInnings: data.latest_match_details.second_innings,
      umpires: data.latest_match_details.umpires,
      venue: data.latest_match_details.venue,
    }
    const updateRecentMatches = data.recent_matches.map(each => ({
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      date: each.date,
      firstInnings: each.first_innings,
      id: each.id,
      manOfTheMatch: each.manOfTheMatch,
      matchStatus: each.matchStatus,
      result: each.result,
      secondInnings: each.secondInnings,
      umpires: each.umpires,
      venue: each.venue,
    }))

    this.setState({
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: updateLatestMatchDetails,
      recentMatches: updateRecentMatches,
    })
  }

  render() {
    const {teamBannerUrl, latestMatchDetails, recentMatches} = this.state

    return (
      <div className="latest-matches-bg-container">
        <img className="latest-matches-top-image" src={teamBannerUrl} />
        <LatestMatch latestMatchDetails={latestMatchDetails} />
        <div className="recent-matches-container">
          {recentMatches.map(each => (
            <MatchCard eachItem={each} />
          ))}
        </div>
      </div>
    )
  }
}

export default TeamMatches
