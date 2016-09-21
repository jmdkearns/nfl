var React = require('react')

var GameSelect = React.createClass({

  render: function(){
    if(!this.props.games){
      return(
        <h4>No Games To Show</h4>
      )
    }else{
      return(
        <ul>
          {this.props.games.map((game, index) => (
            <li>
              <h3 className='away-team' key={index}><img src={"/images/"+game[Object.keys(game)[0]].away.abbr+".png"}/> {game[Object.keys(game)[0]].away.abbr} {game[Object.keys(game)[0]].away.score.T} @ {game[Object.keys(game)[0]].home.score.T} {game[Object.keys(game)[0]].home.abbr} <img src={"/images/"+game[Object.keys(game)[0]].home.abbr+".png"}/></h3>
            </li>
            ))
          }
        </ul>
      )
    }
  }
})

module.exports = GameSelect