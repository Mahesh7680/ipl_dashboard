import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard/index'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

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
  state = {teamData: [], isLoading: true}

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
    this.setState({teamData: updatedData, isLoading: false})
  }

  render() {
    const {teamData, isLoading} = this.state
    return (
      <div className="main-container">
        <img
          alt="ipl logo"
          src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
        />
        <h1>IPL Dashboard</h1>
        <br />
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" width={50} height={50} />
          </div>
        ) : (
          <ul className="cards-container">
            {teamData.map(each => (
              <TeamCard key={each.id} eachItem={each} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
