// Deafault App component that all other compents are rendered through
function App(props){
  return (
    <div>
      <h1>Hail-Mary Blitz </h1>
    </div>
  )
}
class Team extends React.Component {
  constructor(props) {
    super(props)
      
    this.state = {
      PassesAttempted: 0,
      touchdownScore: 0
      }
  this.touchdownAudio = new Audio('cheers.wav')
  this.passesAttemptedAudio = new Audio('boo3.wav')
  
  passHandler = () => {
    let score = this.state.touchdownScore;
    this.passesAttemptedAudio.play();
     if (Math.random() > .5) {
       score += 1
       
       timeToSound(()=>{
        this.touchdownAudio.play();
       },50)
      }
      this.setState((state) => ({
        passesAttempted: state.passesAttempted + 1,
        touchdownScore
      }))
  }
  passRender = () => {
let percentageDisplay
if (this.state.passesAttempted) {
  const passesAttemptedPercentage = Math.round((this.state.touchdownScore / this.state.passesAttempted)*100)
  percentageDisplay = (
    <div>
      Completion %: {percentageDisplay}
    </div>
  
  )
}
return (
  <div className = "Team">
    <p>{this.props.name}</p>
  
  <div className = "ID">
    <img src = {this.props.logo} alt = {this.props.name}/>
  </div>
  <div>
    Hail-Mary Attempts:{this.state.passesAttempted}
  </div>
  <div>
    Touchdowns:{this.state.touchdownScore}
  </div>
  {percentageDisplay}
  <button onClick = {this.passHandler}>LOB!</button>
  </div>
    )
  }
}
 function Game (props){
  return (
    <div className = "game">
      <h1>Live from {props.stadium}</h1>
      <div className = "stats">
        <Team
      name = {props.awayTeam.name}
      logos = {props.awayTeam.logo}/>
    
    <div className = "vs">
      <p>V.S.</p>
      </div>
      <Team
      name = {props.homeTeam.name}
      logos = {props.hometeam.logo}/> 
    </div>
    </div>
  )
}
function App(props){
  const teamPort = {
  name: "Portland Otters",
  logo: "otter.jpeg"
  }
  const teamVan = {
    name: "Vancouver WA's",
    logo: "WA.jpeg"
  }
  const teamOc = {
    name: "Orange County Citrus",
    logo: "citrus.jpg"
  }
  const teamScra = {
    name: "Scranton Electricity",
    logo: "electricFB.jpeg"
  }
  const teamNia = {
    name: "Niagara Falls Current",
    logo: "niagara.jpg"
  }
  const teamSav = {
    name: "Savannah Peaches",
    logo:"peach.jpg"
  }
  return (
    <div className = "App">
      <Game
      stadium = "OREO-DOME"
      homeTeam = {teamPort}
      awayTeam = {teamSav}/>
      <Game 
      stadium = "Teddy Graham Stadium"
      homeTeam = {teamVan}
      awayTeam = {teamNia}/>
      <Game 
      stadium = "Nutter-Butter Field"
      homeTeam = {teamOc}
      awayTeam = {teamScra}/>
    </div>
  )
}
  //Render the application
ReactDOM.render(
  <App />,
    document.getElementById('root')
);