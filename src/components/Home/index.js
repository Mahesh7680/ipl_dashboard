import {Component} from 'react'
import TeamCard from '../TeamCard/index'

import './index.css'

// const fakeData = [
//   {
//     name: 'ss',
//     id: 1,
//     teamImageUrl: 'hh',
//   },
//   {
//     name: 'ss',
//     id: 2,
//     teamImageUrl: 'hh',
//   },
// ]

class Home extends Component {
  state = {teamData: []}

  componentDidMount() {
    this.getApiData()
  }

  getApiData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    // console.log(data.teams)

    const updatedData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamData: updatedData})
  }

  render() {
    const {teamData} = this.state
    return (
      <div className="main-container">
        <h1>IPL Dashboard</h1>
        <br />
        <div className="cards-container">
          {teamData.map(each => (
            <TeamCard key={each.id} eachItem={each} />
          ))}
        </div>
      </div>
    )
  }
}

export default Home
