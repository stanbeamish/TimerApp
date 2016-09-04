var React = require('react');

var CountdownForm = React.createClass({
  onSubmit: function(event) {
    event.preventDefault();
    var strSeconds = this.refs.seconds.value;

    console.log('imput count', $('input').length);

    // check via regex if strSeconds contains only numbers
    if (strSeconds.match(/^[0-9]*$/)) {
      //TODO: time should be equal or less to 3600 seconds!
      var intSeconds = parseInt(strSeconds, 10);
      if (intSeconds <= 3600) {
        this.refs.seconds.value = '';
        this.props.onSetCountdown(intSeconds);
      }
    }
  },
  render: function() {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
          <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }
});

module.exports = CountdownForm;
