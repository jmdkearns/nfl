var React = require('react')
var DateSelect = require('./DateSelect')

var NflBox = React.createClass({

  getInitialState: function(){
    return { games: [], selectedDate: null }
  },

  setDate: function(date){
    var splitDate = date.split("-")
    var newDate = ""

    for (var subString of splitDate){
      newDate += subString
    }
    this.setState( {selectedDate: newDate} )
  },

  buildURL: function(gameNumber){
    var urlStart = "http://www.nfl.com/liveupdate/game-center/"
    var urlEnd = "_gtd.json"
    if(gameNumber < 10){
      var gameNumberWith0 = "0" + gameNumber
      var url = `${urlStart}${this.state.selectedDate}${gameNumberWith0}/${this.state.selectedDate}${gameNumberWith0}${urlEnd}`
    }
    else {
      var url = `${urlStart}${this.state.selectedDate}${gameNumber}/${this.state.selectedDate}${gameNumber}${urlEnd}`
    }
    return url
  },

  apiCall: function(url){
    return new Promise(function(resolve, reject) {
      var request = new XMLHttpRequest()
      request.open('GET', url)
      request.onload = function(){
        if (request.status === 200){
          resolve(request)
        }
        else {
          reject(Error("Invalid URL"))
        }
      }.bind(this)
      request.send(null);
    })
  },

  ajaxRunner: function(){
    var validGames = 0
    var gameNumber = 0

    while(validGames < 16){
      var url = this.buildURL(gameNumber)
      gameNumber++
      this.apiCall(url).then((result) => {
        var gameData = JSON.parse(result.responseText)
        console.log(gameData)
        var newGame = this.state.games.concat([gameData])
        this.setState({games: newGame})
      }, 
      function(error){
       console.log(error);
      })
      validGames++;
    }
  },
  
  render: function(){
    return(
      <div>
        <h4>NFL Games</h4>
      <form>
        <DateSelect setDate={this.setDate} ajaxRunner={this.ajaxRunner}/>
      </form>
      </div>
    )
  }
})

module.exports = NflBox