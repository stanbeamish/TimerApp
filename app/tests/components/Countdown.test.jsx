var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {

  it('should exist', () => {
    expect(Countdown).toExist();
  });

  // 'done' argument set to support asynchronous test
  describe('handleSetCountdown', () => {
    it('should set state to started and countdown', (done) => {
      // render the component
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(10);

      // countdown should be updated
      expect(countdown.state.count).toBe(10);
      // coundown should update the state to started.
      expect(countdown.state.countdownStatus).toBe('started');
      // countdown state count should count minus 1 second.
      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
        done();
      }, 1001);
    });

    // check that the count state never goes below 0.
    it('should set count state never less than 0', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(1);
      // could be used to wait for a maximum time to receive data
      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        done();
      }, 3001);
    });

  });

});
