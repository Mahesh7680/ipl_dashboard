import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import LatestMatch from './components/LatestMatch'
import MatchCard from './components/MatchCard'
import TeamCard from './components/TeamCard'
import TeamMatches from './components/TeamMatches'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/team-matches/:id" component={TeamMatches} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
