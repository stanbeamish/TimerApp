var React = require('react');

var CountdownForm = React.createClass({
  onSubmit: function(event) {
    event.preventDefault();
    var strSeconds = this.refs.seconds.value;

    // check via regex if strSeconds contains only numbers
    if (strSeconds.match(/^[0-9]*$/)) {
      //TODO: time should be equal or less to 3600 seconds!
      
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(strSeconds, 10));
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
