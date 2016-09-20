var React = require('react')
var DateSelect = React.createClass({

  getInitialState: function(){
    return { selectedDate: null }
  },

  handleChange: function(event){
    var newDate = event.target.value
    this.setState( {selectedDate: newDate} )
    this.props.setDate(newDate)
  },

  handleSubmit: function(event){
    event.preventDefault()
    this.props.ajaxRunner()
  },

  render: function(){
    return(
      <div>
          <input type="date" onChange = {this.handleChange}/>
          <button onClick = {this.handleSubmit}>Submit</button>
      </div>
    )
  }
})

module.exports = DateSelect