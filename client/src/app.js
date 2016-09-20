var React = require('react');
var ReactDOM = require('react-dom');
var NflBox = require('./components/NflBox')

window.onload = function(){
  ReactDOM.render(
    <NflBox />,
    document.getElementById('app')
  );
}
